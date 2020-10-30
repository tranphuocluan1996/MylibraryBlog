<template>
  <h2 class="article-item__title">
        <nuxt-link v-bind:to="customSlug">{{title}}</nuxt-link>
    </h2>
</template>

<script>
export default {
  props: {
   title: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    
  },


  computed: {
      customSlug(){
        return '/posts/' + this.slug
      }
    },

}
</script>

<style>

</style>