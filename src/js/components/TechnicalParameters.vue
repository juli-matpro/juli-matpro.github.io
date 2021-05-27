<template>
<div>
    <h4>Technical Parameters..</h4>
    <div class="flex flex-4">
        <article>
            PI(B/S) (psi)<input :value="well.pibs" type="text" required disabled/>
        </article>
        <article>
            PI(A/S) (psi)<input :value="well.pias" type="text" required disabled/>
        </article>
        <article>
            PI Ideal (bbl/psi)<input :value="well.pideal" type="text" required disabled/>
        </article>
        <article>
            FE(B/S)<input :value="well.febs" type="text" required disabled/>
        </article>
        <article>
            FE(A/S)<input :value="well.feas" type="text" required disabled/>
        </article>
        <article>
            Q(a/s) (Production rate a/s)<input :value="well.pras" placeholder="Q(a/s) (Production rate a/s)" type="text"
                                               required disabled/>
        </article>
        <article>
            ΔP Skin (B/S)<input :value="well.pskinbs" type="text" required disabled/>
        </article>
        <article>
            ΔP Skin (A/S)<input :value="well.pskinas" type="text" required disabled/>
        </article>
        <article>
            R-Factor (B/S)<input :value="well.rfacbs" type="text" required disabled/>
        </article>
        <article>
            R-Factor (A/S)<input :value="well.rfacas" type="text" required disabled/>
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