<template>
  <div class="article-item__thumbnail" v-if="thumb_nail_url">
    <nuxt-link v-bind:to="customSlug">
        <img v-bind:src="customThumb" v-bind:alt="customThumb">
    </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    thumb_nail_url: {
      type: String,
      default: ''
    },
     slug: {
      type: String,
      default: ''
    },
  },
  computed: {
    customThumb(){
      if(this.thumb_nail_url){
        return this.thumb_nail_url
      }else {
        return '../../static/assets/images/blog-1.jpg'
      }
    },
    customSlug(){
        return '/posts/' + this.slug
      }
  },
}
</script>

<style>

</style>