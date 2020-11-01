<template>
    <button @click="shootAction()" class="button button-danger" :type="type">{{ label }}</button>
</template>

<script>
export default {
    
    props: ['kind', 'label'],

    methods: {

        shootAction() {
            if(confirm('Confirm operation?')) {        
            this.$emit('activateButton');
            }
        }

    }

}

</script>

<style>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-standard {
        background: darkcyan;
        color: white;
    }
</style>