<template>
    <div>
        <h4>Well Information..</h4>
        <div class="flex flex-4">
            <article>
                <span class="label">Name of Well</span><input v-model="well.name" placeholder="Name of Well" type="text" :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">Re (Reservoir Radius (ft))</span><input v-model="well.rr" placeholder="Re (Reservoir Radius)" type="text" :disabled="disabled"  required/>
            </article>
            <article>
                <span class="label">Rw (Well Bore radius (ft))</span><input v-model="well.wbr" placeholder="Rw (Well Bore radius)" type="text"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">Bo (Formation volume factor (rb/stb))</span><input v-model="well.fvf" placeholder="Bo (Formation volume factor)" type="text"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">μ (Viscocity(cp))</span><input v-model="well.vis" placeholder="μ (Viscocity)" type="text"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">H(Reservoir Thickness (ft))</span><input v-model="well.rt" placeholder="H(Reservoir Thickness)" type="text"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">Pr-Pwf (Pressure Drop (psi))</span><input v-model="well.pd" placeholder="Pr-Pwf (Pressure Drop)" type="text"  :disabled="disabled" required />
            </article>
            <article>
                <span class="label">K(b/s) (Permeability(md))</span><input v-model="well.permbs" placeholder="K(b/s) (Permeability)" type="text" @input="checkPermeability"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">K(a/s) (Permeability(md))</span><input v-model="well.permas" placeholder="K(a/s) (Permeability)" type="text" @input="checkPermeability"  :disabled="disabled" required/>
            </article>

            <article>
                <span class="label">Percentage of K(a/s)</span><input v-model="well.perk" placeholder="Percentage of K(a/s)" type="text"  :disabled="disabled" @input="checkPercentage" required/>
            </article>
            <article>
                <span class="label">Skin (b/s)</span><input v-model="well.skinbs" placeholder="Skin (b/s)" type="text" @input="checkSkin"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">Skin (a/s)</span><input v-model="well.skinas" placeholder="Skin (a/s)" type="text" @input="checkSkin"  :disabled="disabled" required/>
            </article>
            <article>
                <span class="label">Percentage of Skin a/s</span><input v-model="well.perskinas" placeholder="Percentage of Skin a/s" type="text"  :disabled="disabled" @input="checkSkinPercentage" required/>
            </article>
            <article>
                <span class="label">Q(b/s) (Production rate (bbl/d))</span><input v-model="well.prbs" placeholder="Q(b/s) (Production rate b/s)"  :disabled="disabled" type="text" required/>
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
        name: 'well-information',
        props: ['well', 'disabled'],

        methods : {
            checkPercentage() {
                let permas = (1 + (this.well.perk/100)) * this.well.permbs;
                if (!isNaN(permas)) {
                    this.well.permas = permas.toFixed(2);
                }
            },

            checkPermeability() {
                let perk = (((this.well.permas/this.well.permbs) - 1) * 100).toFixed(4);
                this.well.perk = (!isNaN(perk)) ?  perk : '';
            },

            checkSkin() {
                let perc = (((this.well.skinas/this.well.skinbs) - 1) * 100).toFixed(4);
                this.well.perskinas = (!isNaN(perc)) ?  perc : '';
            },

            checkSkinPercentage() {
                let peras = ((1 + (this.well.perskinas/100)) * this.well.skinbs).toFixed(4);
                this.well.skinas = (!isNaN(peras)) ?  peras : '';
            },

        },
    }
</script>