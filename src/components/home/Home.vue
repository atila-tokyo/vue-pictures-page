<template>
  <div>
    <h1 class="text">{{ title }}</h1>

    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Type your image">{{filter}}

    <ul class="photo-list">

      <li class="item-photo-list" v-for="photo in filteredPhotos" v-bind:key="photo">

        <my-pannel :titulo="photo.titulo">  

            <responsive-img :url="photo.url" :titulo="photo.titulo"/>
            <my-button kind="button" label="REMOVE" @activateButton="remove(photo)"/>

        </my-pannel>    
      </li>
    </ul>
  </div>
</template>

<script>
import Pannel from '../shared/pannel/Pannel';
import ResponsiveImg from '../shared/responsive-image/ResponsiveImg';
import Button from '../shared/button/Button';

export default {

  components: {
    'my-pannel': Pannel,
    'responsive-img': ResponsiveImg,
    'my-button': Button
  },

  data() {
      return {
        title: 'Vue Pictures Page',
        photos: [],
        filter: ''
    }
  },

  computed: {
    filteredPhotos() {
      if (this.filter) {
        let regularExp = new RegExp(this.filter, 'i');
        return this.photos.filter(photo => regularExp.test(photo.titulo));
      } else  {
        return this.photos;
      }
    }
  },

  methods: {
    remove(photo) {
       alert('Remove picture!' + photo.titulo);
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

.filter {
  display: block;
  width: 10%;
}
</style>
