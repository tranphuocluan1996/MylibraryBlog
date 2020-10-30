<template>
<div class="latest-news section">
      <div class="tcl-container">
          <MainTitle title="Bài viết mới nhất"/>
          <div class="latest-news__list spacing">

            <NewsLatestCart 
            v-for="item in latestList" 
            v-bind:key='item.id'
            v-bind:posts="item"
            />
            

      </div>
</div>
   
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            latestList: function(state){
                return state.posts.latestList
            }
        })
    },
}
</script>

<style>
    @import url("@/assets/css/latest-news-list.css");
</style>