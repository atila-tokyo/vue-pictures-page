<template>
    <button @click="shootAction()" class="button" :class="buttonStyle" :type="type">{{ label }}</button>
</template>

<script>
export default {
    
    props: {
        
        kind: {
            required: true,
            type: String
        },
        
        label: {
            required: true,
            type: String
        },
        
        confirmation: Boolean,
        style: String
    },

    methods: {

        shootAction() {

            if (this.confirmation) {
                if(confirm('Confirm operation?')) {        
                    this.$emit('activateButton');
                }
                return;
            }
            this.$emit('activateButton');
        }
    },

    computed: {
        buttonStyle() {
            if(this.style == 'standard' || !this.style) return 'button button-standard';
            if(this.style == 'danger') return 'button button-danger';
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