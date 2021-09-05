<template>
    <div>
        <article>
            <input type="checkbox" :id="'ii' + well.name" v-model="well.workOverComplex">
            <label :for="'ii' + well.name">Calculate Workover Complexity</label>
        </article>

        <h4 v-if="well.workOverComplex">Workover Complexity..</h4>
        <div class="flex flex-4">
            <article v-if="well.workOverComplex">
                <span class="label">a(Gravel pack linear)</span><input v-model="well.gpl" placeholder="a(Gravel pack linear" type="text" :disabled="disabled"  required/>
            </article>

            <article v-if="well.workOverComplex">
                <span class="label">g(Gravel pack index)</span><input v-model="well.gpi" placeholder="g(Gravel pack index)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                <span class="label">p(Packer index)</span><input v-model="well.pi" placeholder="p(Packer index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                <span class="label">d(Workover depth index)</span><input v-model="well.wdi" placeholder="d(Workover depth index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                <span class="label">m(Mandrel index)</span><input v-model="well.mi" placeholder="m(Mandrel index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                <span class="label">r(Age of last re-entry)</span><input v-model="well.alr" placeholder="r(Age of last re-entry)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                <span class="label">v(Angle of deviation)</span><input v-model="well.aod" placeholder="v(Angle of deviation)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                <span class="label">t(Lost wireline index)</span><input v-model="well.lwi" placeholder="t(Lost wireline index)" type="text" :disabled="disabled" required/>
            </article>


            <article v-if="well.workOverComplex">
                <span class="label">c(Casing patch index)</span><input v-model="well.cpi" placeholder="c(Casing patch index)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.workOverComplex">
                <span class="label">w(Well head repair index)</span><input v-model="well.whr" placeholder="w(Well head repair index)" type="text" :disabled="disabled" required/>
            </article>
        </div>
        <br/>
        <br/>
        <hr/>
        <br/>
    </div>
</template>
<script>
    export default {
        name: 'workover-complexity',
        props: {
            well: {},
            disabled: {},
        }
    }
</script>