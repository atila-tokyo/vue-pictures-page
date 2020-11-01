<template>
    <div class="pannel">
        <h2 class="pannel-title" @dblclick="visible = !visible">{{ titulo }}</h2>
        <transition name="pannel-fade">
        <div class="pannel-content" v-show="visible">
        <slot></slot>
        </div>  
        </transition>
    </div>
</template>

<script>
export default {
    props: ['titulo'],
    data() {
      return {
        visible: true
      }
    }
}
</script>

/* scoped with the tag locks style configs for this component only */
<style scoped>

/*Pannel style*/
.pannel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.pannel .pannel-title {
  text-align: center;
  border: solid 2px;
  background: lightcyan;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.pannel * {
  box-shadow: 5px 5px 10px black;
}

.pannel-fade-enter, .pannel-fade-leave-active {
  opacity: 0;
} 

.pannel-fade-enter-active, .pannel-fade-leave-active  {
  transition: opacity .4s;
}


.pannel-fade-enter, .pannel-fade-leave-active {
  opacity: 0;
} 

.pannel-fade-enter-active, .pannel-fade-leave-active  {
  transition: opacity .4s;
}

</style>