import Vue from 'vue';
import Vuex from 'vuex';

import WellForm from './components/WellForm.vue';
import DisabledWell from './components/DisabledWell.vue';
import AddedWellsList from './components/AddedWellsList.vue';
import WellResults from "./components/WellResults";
import WellMonths from './components/WellMonths.vue';
import store from "./stores/store";

Vue.use(Vuex);
window.Event = new Vue;

// Vue.component('well-form', require('./components/WellForm.vue').default);
// Vue.component('disabled-well', require('./components/DisabledWell.vue').default);
// Vue.component('added-well', require('./components/AddedWell.vue').default);
// Vue.component('month-production', require('./components/MonthProduction.vue').default);

// app.component('well-form', require('./components/WellForm.vue').default);
// app.component('disabled-well', require('./components/DisabledWell.vue').default);
// app.component('added-well', require('./components/AddedWell.vue').default);
// app.component('month-production', require('./components/MonthProduction.vue').default);



const app = new Vue({
    el: '#root',
    store,
    components: {
        'well-form': WellForm,
        'disabled-well': DisabledWell,
        'added-wells-list': AddedWellsList,
        'well-results': WellResults,
        'well-months': WellMonths,
    },

    data() {
        return {
            formCompletedStatus: false,
        }
    },

    computed: {
        wellss() {
            return store.getters.wellAnalyzer.unOrderedWells;
        },

    },

    methods: {
        analyzeWells() {
            Event.$emit('formsubmitted');
            this.formCompletedStatus = true;
        }
    },

    mounted() {}
});


// window.onload = function () {
//
//     var chart = new CanvasJS.Chart("chartContainer", {
//         theme: "light1", // "light2", "dark1", "dark2"
//         animationEnabled: true, // change to true
//         title:{
//             text: "Well Production Gain"
//         },
//         data: [
//             {
//                 // Change type to "bar", "area", "spline", "pie",etc.
//                 type: "column",
//                 dataPoints: [
//                     { label: "apple",  y: 10  },
//                     { label: "orange", y: 15  },
//                     { label: "banana", y: 25  },
//                     { label: "mango",  y: 30  },
//                     { label: "grape",  y: 28  }
//                 ]
//             }
//         ]
//     });
//     chart.render();
//
// }