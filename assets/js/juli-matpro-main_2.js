
/*Helper Functions*/
const _id = (id="") => {
    if (id == "") {
        return false;
    }
    return document.getElementById(id);
}

/*.............................*/

const wellArray = new Array();


// const addWell = () =>
_id('well-form').onsubmit = () =>
{
    // creates well
    // create a disabled representation of the well
    wellArray.push(Well.createWell());
    resetWell();
    return false;
}

const resetWell = () =>
{
    // sets the wells value to blank
    Well.wellInputs.forEach(function (item) {
        _id(item).value="";
      });

    // increments the well Id
  _id('submitwell').setAttribute(
      'data-wellid',
       (parseInt(_id('submitwell').getAttribute('data-wellid')) + 1)
    );

}

const analyzeWells = () =>
{
   
    // wellArray.push(
    //     new Well(1, 7.13, 0.62, 88.26, 19.00, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0)
    // );
    //
    // wellArray.push(
    //     new Well(2, 3.83, 0.65, 31.82, 10.90, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0)
    // );
    //
    // wellArray.push(
    //     new Well(3, 3.91, 0.59, 16.12, 9.49, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0)
    // );
    //
    // wellArray.push(
    //     new Well(4, 1.69, 0.70, 10.04, 5.59, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0)
    // );

    let wellRank = [];
    let wellWithDefects = [];
    let matrixWells = [];


    for(
        let max = Well.indexOfMaxWell(wellArray);
        wellArray.length > 0;
        wellArray.splice(max, 1)
        )
    {
        // Check for wells that are not qualified and push to matrix wells
        if(!wellArray[max].isQualified()) {
            matrixWells.push(wellArray[max]);
            continue;
        }
        if(wellArray[max].hasDefects()) {
            wellWithDefects.push(wellArray[max]);
            continue;
        }
        wellRank.push(wellArray[max]);
    }

    // Add Well with defects to well rank
    if(wellWithDefects.length > 0) {
        // Loops through the wells with defects from highest pias(production) to lowest
        for(
            let max = Well.indexOfMaxWell(wellWithDefects);
            wellWithDefects.length > 0;
            wellWithDefects.splice(max,1)
            )
        {
            wellRank.push(wellWithDefects[max]);
        }
    }



    //
    // // Add Wells from matrix wells (that don't qalify) to well rank
    // if(matrixWells.length > 0) {
    //     // Loops through the wells with defects from highest pias(production) to lowest
    //     for(
    //         let max = Well.indexOfMaxWell(matrixWells);
    //         matrixWells.length > 0;
    //         matrixWells.splice(max,1)
    //     )
    //     {
    //         wellRank.push(matrixWells[max]);
    //     }
    // }


    let easyWorkOverWells = [];
    let diffWorkOverWells = [];

    let easyWorkOverTableString = "";
    let diffWorkOverTableString = "";


    // Check for cof of wells and add to appropriate arrays
    wellRank.forEach(function(item) {
        if(item.cof < 50) {
            easyWorkOverWells.push(item);
            easyWorkOverTableString +=
            `
            <tr>
            <td>Well ${item.id}</td>
            <td>${item.cof}</td>
            </tr>
            `;
            return;
        }
        diffWorkOverWells.push(item);
        diffWorkOverTableString +=
            `
                <tr>
                <td>Well ${item.id}</td>
                <td>${item.cof}</td>
                </tr>
            `;
        });


    matrixWells.forEach(element => console.log(element));
    let wellRankPoints = [];
    let techParamtableString = "";
    let i = 1;
    wellRank.forEach(function(item) {
        wellRankPoints.push([`Well ${item.id}` , item.pias]);
        techParamtableString +=
         `
            <tr>
            <td>Rank ${i}</td>
            <td>Well ${item.id}</td>
            </tr>
        `;
        ++i;
    });
    _id('result').style.display = "block";
    _id('submit').style.display = "none";
    _id('well-rank-table').innerHTML += techParamtableString;
    _id('easy-workover-rank-table').innerHTML += easyWorkOverTableString;
    _id('diff-workover-rank-table').innerHTML += diffWorkOverTableString;
    console.log(wellRankPoints);
    renderChart(wellRankPoints);

    return false;
}

const renderChart = (points) =>
{
    // chart = new CanvasJS.Chart("chartContainer", {
    //     animationEnabled: true,
    //     theme: "light2", // "light1", "light2", "dark1", "dark2"
    //     title:{
    //         text: "Well Production Gain"
    //     },
    //     axisY: {
    //         title: "Production Gain(MMbbl)"
    //     },
    //     data: [{        
    //         type: "column",  
    //         showInLegend: true, 
    //         legendMarkerColor: "grey",
    //         legendText: "MMbbl = one million barrels",
    //         dataPoints: points
    //     }]
    // });
    // chart.render();    


        // set the data
        var data = {
            header: ["Name", "Death toll"],
            rows: points
        };
 
        // create the chart
        var chart = anychart.column();
 
        // add the data
        chart.data(data);
 
        // set the chart title
        chart.title("Well Production Gain");
 
        // draw
        chart.container("chartContainer");
        chart.draw();
 
}