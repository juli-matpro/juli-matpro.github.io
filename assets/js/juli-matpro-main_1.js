var chart;

/*Helper Functions*/
const _id = (id="") => {
    if (id == "") {
        return false;
    }
    return document.getElementById(id);
}

/*.............................*/

const wellArray = new Array();


_id('well-form').onsubmit = () =>
// const addWell = () =>
{
    wellArray.push(Well.createWell());
    resetWell();
    return false;
}

const resetWell = () =>
{
    Well.wellInputs.forEach(function (item) {
        _id(item).value="";
      });
      _id('submitwell').setAttribute(
          'data-wellid',
           (parseInt(_id('submitwell').getAttribute('data-wellid')) + 1)
        );

}

const analyzeWells = () =>
{
   
    // wellArray.push(
    //     new Well(1, 7.13, 0.62, 88.26)
    // );

    // wellArray.push(
    //     new Well(2, 3.83, 0.65, 31.82)
    // );

    // wellArray.push(
    //     new Well(3, 3.91, 0.59, 16.12)
    // );

    // wellArray.push(
    //     new Well(4, 1.69, 0.70, 10.04)
    // );

    let wellRank = new Array();
    let wellWithDefects = new Array();
    let matrixWells = new Array();

    for(
        let max = Well.indexOfMaxWell(wellArray);
        wellArray.length > 0;
        wellArray.splice(max, 1)
        )
    {
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


    if(wellWithDefects.length > 0) {
        for(
            let max = Well.indexOfMaxWell(wellWithDefects);
            wellWithDefects.length > 0;
            wellWithDefects.splice(max,1)
            )
        {
            wellRank.push(wellWithDefects[max]);
        }
    }

    matrixWells.forEach(element => console.log(element));
    // _id('result').style.display = "block";
    let ddd = new Array();
    let tableString = "";
    let i = 1;
    wellRank.forEach(function(item) {
        // ddd.push({y : item.pias, label: `Well ${item.id}`});
        ddd.push([`Well ${item.id}` , item.pias]);
        tableString +=
         `
            <tr>
            <td>Rank ${i}</td>
            <td>Well ${item.id}</td>
            </tr>
        `
        ++i;
    });
    _id('result').style.display = "block";
    _id('submit').style.display = "none";
    _id('table-body').innerHTML += tableString;
    console.log(ddd);
    renderChart(ddd);

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