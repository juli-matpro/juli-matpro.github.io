<template>
    <div>
        <h4>Decline..</h4>

        <div class="flex flex-4">
            <article>
                <span class="label">Choose Type of Decline:</span>
                <select name="declineType" id="declineType" v-model="well.declineType" :disabled="disabled" >
                    <option value="Exponential" selected>Exponential Decline</option>
                    <option value="Hyperbolic">Hyperbolic Decline</option>
                    <option value="Harmonic">Harmonic Decline</option>
                </select>
            </article>
        </div>
        <div class="flex flex-4">
            <article>
                <span class="label">Qa (Abandonment Rate(bbl/d))</span><input v-model="well.qa" placeholder="Qa (Abandonment Rate)" type="text" :disabled="disabled" required/>
            </article>

            <article>
                <span class="label">Di (Decline Rate(per day))</span><input v-model="well.di" placeholder="Di (Decline Rate)" type="text" :disabled="disabled" required/>
            </article>

            <article v-if="well.declineType == 'Hyperbolic'">
                <span class="label">b (Constant)</span><input v-model="well.b" placeholder="b (Constant)" type="text" :disabled="disabled" required/>
            </article>

            <article>
                <span class="label">Np (Cumulative Production (bbls))</span><input :value="well.relProd" placeholder="Np (Relative Production)" type="text"
                                               required disabled/>
            </article>
            <article>
                <span class="label">Time of Abandonement (Years)</span><input :value="well.timeAbandon" placeholder="Np (Relative Production)"
                                                   type="text" required disabled/>
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
        name: 'decline-value',
        props: {
            well: {},
            disabled: {}
        }
    }
</script>