<template>
<div>
    <h4>Technical Parameters..</h4>
    <div class="flex flex-4">
        <article>
            <span class="label">PI(B/S) (bbl/d/psi)</span><input :value="well.pibs" type="text" required disabled/>
        </article>
        <article>
            <span class="label">PI(A/S) (bbl/d/psi)</span><input :value="well.pias" type="text" required disabled/>
        </article>
        <article>
            <span class="label">PI Ideal (bbl/d/psi)</span><input :value="well.pideal" type="text" required disabled/>
        </article>
        <article>
            <span class="label">FE(B/S)</span><input :value="well.febs" type="text" required disabled/>
        </article>
        <article>
            <span class="label">FE(A/S)</span><input :value="well.feas" type="text" required disabled/>
        </article>
        <article>
            <span class="label">Q(a/s) (Production rate a/s)</span><input :value="well.pras" placeholder="Q(a/s) (Production rate a/s)" type="text"
                                               required disabled/>
        </article>
        <article>
            <span class="label">ΔP Skin (B/S)(psi)</span><input :value="well.pskinbs" type="text" required disabled/>
        </article>
        <article>
            <span class="label">ΔP Skin (A/S)(psi)</span><input :value="well.pskinas" type="text" required disabled/>
        </article>
        <article>
            <span class="label">R-Factor (B/S)</span><input :value="well.rfacbs" type="text" required disabled/>
        </article>
        <article>
            <span class="label">R-Factor (A/S)</span><input :value="well.rfacas" type="text" required disabled/>
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
        name: 'technical-parameters',
        props: {
            well: {},
            disabled: {},
        }
    }
</script>