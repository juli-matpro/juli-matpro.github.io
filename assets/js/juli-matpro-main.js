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
{
    wellArray.push(Well.createWell());
    resetWell();
    return false;
}

const resetWell = () =>
{
    Well.wellInputs.forEach(function (item, index) {
        _id(item).value="";
      });
      _id('submit').setAttribute('data-wellid', (parseInt(_id('submit').getAttribute('data-wellid')) + 1) );

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

    // [44, 55, 56, 66]
    // foreach(){

    // }
    // wellArray.forEach

    let wellRank = new Array();
    let wellWithDefects = new Array();
    let matrixWells = new Array();
    let rr = false;
    // wellArray.splice(0,2);
    // console.log(Well.indexOfMaxWell(wellArray));
    // console.log(wellArray);
    // return;
    // Loop through non Default/
    // while(rr ==  false) {
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
    // wellRank.forEach(element => console.log(element));


    console.log("Defects................................");

    matrixWells.forEach(element => console.log(element));
    _id('result').style.display = "block";
    let ddd = new Array();
    let tableString = "";
    let i = 1;
    wellRank.forEach(function(item) {
        ddd.push({y : item.pias, label: `Well ${item.id}`});
        tableString +=
         `
            <tr>    
            <td>Rank ${i}</td>
            <td>Well ${item.id}</td>
            </tr>
        `
        ++i;
    });
    _id('table-body').innerHTML += tableString;
    // console.log(wellRank);

    chart.options.data[0].dataPoints = ddd;
    chart.render();
    return false;
}

// this.id = id;
// this.feas = feas;
// this.rfac = rfac;
// this.pias = pias;
window.onload  = () =>{
    chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Well Production Gain"
        },
        axisY: {
            title: "Production Gain(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: []
        }]
    });
    chart.render();

}
