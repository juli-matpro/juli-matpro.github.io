<template>
    <div>
        <h3>{{ well.name }}</h3>

        <well-information :well="well" :disabled="true"/>

        <technical-parameters :well="well" :disabled="true"/>

        <workover-complexity :well="well" :disabled="true"/>

        <decline-value :well="well" :disabled="true"/>

        <economic-details :well="well" :disabled="true"/>

        <production-profile v-if="Array.isArray(well.prodProfile)" :well="well" :disabled="true"/>

        <production-chart :well="well" :disabled="true"/>
    </div>
</template>

<script>

    import EconomicDetails from "./EconomicDetails";
    import DeclineValue from "./DeclineValue";
    import WorkoverComplexity from "./WorkoverComplexity";
    import WellInformation from "./WellInformation";
    import TechnicalParameters from "./TechnicalParameters";
    import ProductionProfile from "./ProductionProfile";
    import ProductionChart from "./ProductionChart";

    export default {
        props: ['well'],

        data () {
            return {
                workOverComplexity: 1,
            }
        },

        components: {
            EconomicDetails,
            DeclineValue,
            WorkoverComplexity,
            WellInformation,
            TechnicalParameters,
            ProductionProfile,
            ProductionChart,
        },

        methods: {
            plusOne(num) {
              return ++num;
            },
        },

        created() {
        }
    }
</script>