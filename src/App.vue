<template>
  <div class="body">
    <h1 class="text">{{ title }}</h1>

    <ul class="photo-list">
      <li class="item-photo-list" v-for="photo of photos" v-bind:key="photo">
        <div class="pannel">
          <h2 class="pannel-title">{{ photo.titulo }}</h2>
          <div class="pannel-content">
            <img class="responsive" :src="photo.url" :alt="photo.title">
          </div>
        </div>     
      </li>
    </ul>
  </div>
</template>

<script>
import Pannel from './components/shared/pannel/Pannel';

export default {

  components: {
    'my-pannel': Pannel
  },

  data() {
      return {
        title: 'Vue Pictures Page',
        photos: []
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos);
    }
}
</script>

<style>
.body {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.text {
  text-align: center;
}

.photo-list {
  list-style: none;
}

.photo-list .item-photo-list {
  display:inline-block;
}

.responsive {
  width: 100%;
}

</style>
