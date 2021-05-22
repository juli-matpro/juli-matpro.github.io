<template>
    <div>
        <br>
        <h4>Production Chart..</h4>
        <div v-if="!disabled">
            <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
        </div>

        <div style="opacity: 0.6;" v-else>
            <vue-chartist :data="data" :options="options" type="Line"></vue-chartist>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <hr/>
            <br/>
            <br/>
            <br/>

        </div>
    </div>
</template>

<script>
    import VueChartist from 'v-chartist';

    export default {
        name: 'production-chart',

        props: ["well", "disabled", "wellAnalyzer", "analyze"],

        components: {
            'vue-chartist': VueChartist,
        },

        created() {
            // let npvs = [];
            // console.log(this.well.npvs.length);
            // for(let i = 0; i < this.well.npvs.length; i++) {
            //     npvs.push(`${this.well.npvs[i].value}%`);
            //     console.log(this.well.npvs[i].value);
            // }
            // console.log('labels');
            // console.log(npvs);
            // this.npvs = npvs;
        },

        data() {
            return {
                data: {
                    labels: this.labels(),
                    series: this.series(),
                },
                options: {
                    fullWidth: true,
                    chartPadding: {
                        right: 40,
                        left: 40
                    },
                    height: 500,
                },
            };
        },
        computed: {
        },
        methods: {
            series()  {
                let series = [];
                if(this.analyze == true) {
                    this.wellAnalyzer.wells.forEach((well) =>{
                        well.seriesPlot().forEach((singular) => {
                            series.push(singular);
                        });
                    });
                    return series;
                } else {
                    return this.well.seriesPlot();
                }
            },

            labels() {
                if(this.analyze == true) {
                    return this.wellAnalyzer.wells[1].labelsPlot()
                } else {
                    return this.well.labelsPlot();
                }
            }
        },
    };
</script>

<style>
    @keyframes dashoffset-seven {
        0% {
            stroke-dashoffset: 7px;
        }
        100% {
            stroke-dashoffset: 0px;
        }
    }

    .ct-series.ct-series-a .ct-line {
        stroke: #8B0000;
    }

    .ct-series.ct-series-a .ct-point {
        stroke: #8B0000;
    }


    .ct-series.ct-series-b .ct-line {
        stroke: #FF0000;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }

    .ct-series.ct-series-b .ct-point {
        stroke: #FF0000;
        stroke-width: 5px;
    }

    .ct-series.ct-series-b .ct-line {
        stroke: #FF0000;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-c .ct-line {
        stroke: #004225;
    }

    .ct-series.ct-series-c .ct-point {
        stroke: #004225;
    }


    .ct-series.ct-series-d .ct-line {
        stroke: #00a86b;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-d .ct-point {
        stroke: #00a86b;
        stroke-width: 5px;
    }

    .ct-series.ct-series-d .ct-line {
        stroke: #00a86b;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-e .ct-line {
        stroke: #0ff;
    }

    .ct-series.ct-series-e .ct-point {
        stroke: #0ff;
    }


    .ct-series.ct-series-f .ct-line {
        stroke: #40e0d0;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-f .ct-point {
        stroke: #40e0d0;
        stroke-width: 5px;
    }

    .ct-series.ct-series-f .ct-line {
        stroke: #40e0d0;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }


    .ct-series.ct-series-g .ct-line {
        stroke: #d0f0c0;
    }

    .ct-series.ct-series-g .ct-point {
        stroke: #d0f0c0;
    }


    .ct-series.ct-series-h .ct-line {
        stroke: #004953;
        stroke-width: 2px;
        stroke-dasharray: 5px 2px;
    }



    .ct-series.ct-series-h .ct-point {
        stroke: #004953;
        stroke-width: 5px;
    }

    .ct-series.ct-series-h .ct-line {
        stroke: #004953;
        stroke-dasharray: 5px 2px;
        animation: dashoffset-seven 200ms infinite linear;
    }

</style>