<template>
  <div class="popular-news section bg-white-blue">
      <div class="tcl-container">
          <MainTitle title="Bài viết phổ biến" v-bind:isViewMore="true"/>
          <div class="popular-news__list spacing">
            <div class="popular-news__list--left">
                <div class="popular-news__list--row">
                    <NewsPopularCart v-bind:isStyleCard='true'/>
                    <NewsPopularCart v-bind:isStyleCard='true'/>
                </div>
               
            </div>
            <div class="popular-news__list--right">
                <div class="popular-news__list--row">
                <NewsPopularCart v-bind:isStyleCard='true' v-bind:isStyleRow='true' />
                </div>
                
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    @import url('@/assets/css/popular-news-list.css');
   
</style>