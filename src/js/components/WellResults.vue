<template>
  <div>
    <h2>Results</h2>
    <!--        <div v-for="well in wells">-->
    <!--            {{ well.name }}-->
    <!--        </div>-->

    <div>
      <h4>Matrix Acidizing Wells</h4>
      <div class="flex flex-2" v-if="wellAnalyzer.manyDefectWells().length">
        <article>
          <table>
            <thead>
              <tr>
                <th>Well</th>
                <th>No. of Defects</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(well, i) in wellAnalyzer.manyDefectWells()" :key="i">
                <td>{{ well.name }}</td>
                <td>{{ well.defects }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">
                  The following wells are not qualified for Matrix Acidizing and
                  were taking away from the process.
                </td>
              </tr>
            </tfoot>
          </table>
        </article>
      </div>
      <p v-else>No Wells Present Here.</p>
    </div>

    <br /><br />
    <div class="flex flex-2">
      <article>
        <h4>Ranking of Well based on Technical Parameters</h4>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Well</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(well, i) in wellAnalyzer.wellRank()" :key="i">
              <td>Rank {{ plusOne(i) }}</td>
              <td>{{ well.name }}</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <br /><br />
      </article>

      <article id="chartContainer"></article>
    </div>
    <br /><br />
    <div class="flex flex-2">
      <article>
        <h4>Wells with Easy WorkOver Complexity</h4>
        <table v-if="wellAnalyzer.easyWorkOver().length">
          <thead>
            <tr>
              <th>Well</th>
              <th>COF</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(well, i) in wellAnalyzer.easyWorkOver()" :key="i">
              <td>{{ well.name }}</td>
              <td>{{ well.cof }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">
                These wells have Easy work over complexity Coiled Tubing.
              </td>
            </tr>
          </tfoot>
        </table>
        <p v-else>No Wells Present Here.</p>
        <br /><br />
      </article>

      <article>
        <h4>Wells with Difficult WorkOver Complexity</h4>
        <table v-if="wellAnalyzer.diffWorkOver().length">
          <thead>
            <tr>
              <th>Well</th>
              <th>COF</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(well, i) in wellAnalyzer.diffWorkOver()" :key="i">
              <td>{{ well.name }}</td>
              <td>{{ well.cof }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Choose BullHeading for this</td>
            </tr>
          </tfoot>
        </table>
        <p v-else>No Wells Present Here.</p>
        <br /><br />
      </article>
    </div>

    <h2>Economic Analysis</h2>
    <table>
      <thead>
        <tr>
          <th>Indicators</th>
          <th v-for="(well, i) in wellAnalyzer.wellRank()" :key="i">
            {{ well.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(param, i) in econsParams" :key="i">
          <td>{{ param.textName }}</td>
          <td v-for="(well, i) in wellAnalyzer.wells" :key="i">
            {{ well[param.varName] }}
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <div style="text-align: end">
      <a href="/" class="special button">Analyze Other Wells</a>
    </div>
  </div>
</template>

<script>
import WellAnalyzer from "../models/WellAnalyzer";
import store from "../stores/store";
import Well from "../models/Well";
export default {
  data() {
    return {
      econsParams: [
        { varName: "totalRev", textName: "Total Revenue($)" },
        { varName: "totalCost", textName: "Total Cost($)" },
        { varName: "payBackPeriod", textName: "Payback Period (Month)" },
        { varName: "profitIndex", textName: "Profitability Index" },
        { varName: "investReturn", textName: "Return on Investment (%)" },
        { varName: "npv", textName: "NPV (%)" },
      ],
    };
  },

  computed: {
    wellAnalyzer() {
      let wells = store.getters.wells;
      let cloneWell = [...wells]; //deep copy here
      return new WellAnalyzer(cloneWell);

      // return new WellAnalyzer(
      //     [
      //         new Well( 'well2',3.83, 0.65, 31.82, 10.90, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
      //         new Well( 'well4',1.69, 0.70, 10.04, 5.59, 0, 0, 0, 5, 0, 1, 1, 0, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
      //         new Well( 'well3',3.91, 0.59, 16.12, 9.49, 0, 0, 0, 5, 6, 0, 1, 1, 0, 0, 5,5,4,5,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
      //         new Well( 'well1',7.13, 0.62, 88.26, 19.00, 0, 0, 0, 4, 6, 0, 1, 0, 0, 0, 4,5,3,4,[{'value': 54},{'value': 6},{'value': 66},{'value': 52},{'value': 55}]),
      //     ]
      // );
    },
  },

  methods: {
    plusOne(num) {
      return ++num;
    },
  },

  created() {
    Event.$on("formsubmitted", () => {
      // alert('workinghereresultsff');
    });
  },
};
</script>