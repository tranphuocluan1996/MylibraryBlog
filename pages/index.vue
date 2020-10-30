<template>
 <main>
   
    <NewsLatest />
    <NewsPopular />
    <NewsArticleList />
    
 </main>
</template>

<script>
export default {
   async asyncData( {store}) {
      await store.dispatch('posts/actFetchLatestPost')
  }
}
</script>

<style>

</style>
