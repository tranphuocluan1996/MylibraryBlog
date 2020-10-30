<template>
  <div class="latest-news__card" v-if="posts">
      <ArticleItem v-bind:posts="posts"/>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      default: null
    },
  },
}
</script>

<style>

</style>