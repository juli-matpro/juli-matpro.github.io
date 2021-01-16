<template>
        <div class="flex flex-4">
        <article>
<!--                Production for Month 1 <input id="month_1" placeholder="Production for Month 1" type="text" required {{ 1 ? 'disabled="1"' : 'text-danger'}}/>-->
        </article>
        </div>
        <!--            <month-production :value="month" :i="++i" :disabled="1"></month-production>-->

</template>

<script>

    export default {
        props:  ['value', 'i', 'disabled'],

        data() {
            return {
                isVisible: true
            }
        },

        methods: {
            hideModal() {
                this.isVisible = false;
            }
        },

        mounted() {
            console.log('disabled-component mounted');
        }
    }
</script>
