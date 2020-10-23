<template>
    <div class="pannel">
        <h2 class="pannel-title">{{ photo.titulo }}</h2>
        <div class="pannel-content">
        </div>  
    </div>
</template>

<script>
export default {
    props: ['titulo']
}
</script>

<style>

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
</style>