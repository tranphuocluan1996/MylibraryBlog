<template>
  <div class="popular-news__list--card">
      <ArticleItem 
      v-bind:isShowDesc="true"
      v-bind:isShowAuthor="true"
      v-bind:isShowView="true"
      v-bind:isShowCategory="true"
      v-bind:isStyleCard="isStyleCard"
      v-bind:isStyleRow="isStyleRow"/>
  </div>
</template>

<script>
export default {
    props: {
        isStyleCard: {
            type: Boolean,
            default: false
        },
        isStyleRow:{
            type:Boolean,
            default:false
        }
    },
    


}
</script>

<style>

</style>