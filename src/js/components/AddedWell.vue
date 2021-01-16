<template>
    <div>
        <h3 style="margin-bottom:10px;">{{ well.name }}</h3>
        <div class="flex flex-4">
            <article>
                Name of Well<input :value="well.name" type="text" required disabled/>
            </article>
            <article>
                FE(A/S)<input :value="well.feas" type="text" required disabled/>
            </article>
            <article>
                R-Factor<input :value="well.rfac" type="text" required disabled/>
            </article>
            <article>
                PI(A/S)<input :value="well.pias" type="text" required disabled/>
            </article>
            <article>
                SR(Simulation Ratio)<input :value="well.sr" type="text" required disabled/>
            </article>
            <article>
                a(Gravel pack linear)<input :value="well.gpl" type="text" required disabled/>
            </article>
            <article>
                g(Gravel pack index)<input :value="well.gpi" type="text" required disabled/>
            </article>
            <article>
                p(Packer index)<input :value="well.pi" type="text" required disabled/>
            </article>
            <article>
                d(Workover depth index)<input :value="well.wdi" type="text" required disabled/>
            </article>
            <article>
                m(Mandrel index)<input :value="well.mi" type="text" required disabled/>
            </article>
            <article>
                r(Age of last re-entry)<input :value="well.alr" type="text" required disabled/>
            </article>
            <article>
                v(Angle of deviation)<input :value="well.aod" type="text" required disabled/>
            </article>
            <article>
                t(Lost wireline index)<input :value="well.lwi" type="text" required disabled/>
            </article>
            <article>
                c(Casing patch index)<input :value="well.cpi" type="text" required disabled/>
            </article>
            <article>
                w(Well head repair index)<input :value="well.whr" type="text" required disabled/>
            </article>
        </div>
        <hr style="margin-bottom: 3px;"/>
        <h4 style="">Economic Details..</h4>
        <div class="flex flex-4">
            <article>
                Special Cost<input :value="well.sc" type="text" required disabled/>
            </article>
            <article>
                Labour Cost<input :value="well.lc" type="text" required disabled/>
            </article>
            <article>
                CAC Cost<input :value="well.cac" type="text" required disabled/>
            </article>
            <article>
                Oil Price($)<input :value="well.op" type="text" required disabled/>
            </article>
        </div>

        <br>
        <well-months :months="well.months"></well-months>
        <br>
        <hr/>
    </div>
</template>

<script>
    import WellMonths from './WellMonths.vue';


    export default {
        props: ['well'],

        components: {
          'well-months' : WellMonths
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