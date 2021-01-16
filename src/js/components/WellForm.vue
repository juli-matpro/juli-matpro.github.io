<template>
    <!--    Well Form HTML Template-->
    <form id="well-form" @submit.prevent="submitMonth">
        <h3>Fill Well Details</h3>
        <div class="flex flex-4">
            <article>
                Name of Well<input v-model="well.name" placeholder="Name of Well" type="text" required/>
            </article>
            <article>
                FE(A/S)<input v-model="well.feas" placeholder="FE(A/S)" type="text" required/>
            </article>
            <article>
                R-Factor<input v-model="well.rfac" id="rfac" placeholder="R-Factor" type="text" required/>
            </article>
            <article>
                PI(A/S)<input v-model="well.pias" placeholder="PI(A/S)" type="text" required/>
            </article>
            <article>
                SR(Simulation Ratio)<input v-model="well.sr" placeholder="SR(Simulation Ratio)" type="text" required/>
            </article>
            <article>
                a(Gravel pack linear)<input v-model="well.gpl" placeholder="a(Gravel pack linear" type="text" required/>
            </article>
            <article>
                g(Gravel pack index)<input v-model="well.gpi" placeholder="g(Gravel pack index)" type="text" required/>
            </article>
            <article>
                p(Packer index)<input v-model="well.pi" placeholder="p(Packer index)" type="text" required/>
            </article>
            <article>
                d(Workover depth index)<input v-model="well.wdi" placeholder="d(Workover depth index)" type="text"
                                              required/>
            </article>
            <article>
                m(Mandrel index)<input v-model="well.mi" placeholder="m(Mandrel index)" type="text" required/>
            </article>
            <article>
                r(Age of last re-entry)<input v-model="well.alr" placeholder="r(Age of last re-entry)" type="text"
                                              required/>
            </article>
            <article>
                v(Angle of deviation)<input v-model="well.aod" placeholder="v(Angle of deviation)" type="text"
                                            required/>
            </article>
            <article>
                t(Lost wireline index)<input v-model="well.lwi" placeholder="t(Lost wireline index)" type="text"
                                             required/>
            </article>
            <article>
                c(Casing patch index)<input v-model="well.cpi" placeholder="c(Casing patch index)" type="text"
                                            required/>
            </article>
            <article>
                w(Well head repair index)<input v-model="well.whr" placeholder="w(Well head repair index)" type="text"
                                                required/>
            </article>

        </div>
        <hr/>
        <h3>Economic Details..</h3>
        <div class="flex flex-4">
            <article>
                Special Cost<input v-model="well.sc" placeholder="SC(Special Cost)" type="text" required/>
            </article>
            <article>
                Labour Cost<input v-model="well.lc" placeholder="LC(Labour Cost)" type="text" required/>
            </article>
            <article>
                CAC Cost<input v-model="well.cac" placeholder="CAC Cost" type="text" required/>
            </article>
            <article>
                Oil Price($)<input v-model="well.op" placeholder="Oil Price" type="text" required/>
            </article>
        </div>

        <br>
        <div id="month-cover">
            <div class="flex flex-4" v-for="(month, i) in months">
                <article>
                    Production for Month {{ ++i }}<br>
                    <ul class="actions" style="margin-bottom: -2px;">
                        <li>
                            <input
                                type="text"
                                :placeholder="'Production for Month ' + i"
                                v-model="month.value"
                                required/>

                        </li>
                        <li v-if="i === months.length && months.length > 1"
                            style="margin-left: -20px;">
                            <button type="button" v-on:click="months.pop()" class="button special icon fa-close">Close
                            </button>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
        <button type="button" class="special" style="margin-top: 7px;margin-bottom: 5px; background: #5a5a5a;"
                v-on:click="addMonth">+ Add
            More Month
        </button>
        <br>
        <button name="submit" type="submit" class="special" id="submitwell" data-wellid="1">Add Well</button>
    </form>
</template>

<script>
    import Well from "../models/Well";
    import store from "../stores/store";

    export default {

        data() {

            return {
                well: new Well(),
                months: [{'value': ''},], // Initializes the Months Array with one Value
            }
        },

        methods: {
            hideModal() {
                this.isVisible = false;
            },

            submitMonth() {
                this.well.months = this.months;
                store.commit('addToWell', this.well);
                this.well = {};
                this.months = [{'value': ''},];
            },

            addMonth() {
                this.months = this.months.concat({'value': ''});
            },
        },

        created() {
        }
    }
</script>
