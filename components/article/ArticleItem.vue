<template>
  <article class="article-item" v-bind:class='className' v-if="posts">
              <ArticleThumb />
              <div class="article-item__content">
                <ArticleListCategory v-if="isStyleCard && isShowCategory"/>
                <ArticleView v-if="isShowCategory"/>
                <ArticleTitle 
                v-bind:title="posts.title.rendered"
                v-bind:slug="posts.slug"
                />
                <ArticleDesc v-if="isShowDesc"/>
               <ArticleInfo 
               v-bind:day="posts.date"
               v-bind:isShowAvatar='isShowAvatar'
               v-bind:isShowAdmin='isShowAdmin'
               />
              </div>
            </article>
</template>

<script>
export default {
  /* 
  cách thêm class style-card vào articleItem :
  - tạo prop true false, 
  - tạo computed nếu isStyleCard === true
  - component NewsPopular : v-bind:isStyleCard='true' truyeenf vào isStyleCard vào NewPopularCart -> articleItem
  
  
  */
  props: {
    isStyleCard: {
      type: Boolean,
      default: false
    },
    isStyleRow:{
      type:Boolean,
      default:false
    },
    isShowDesc:{
      type:Boolean,
      default:false,
    },
    isShowCategory:{
      type:Boolean,
      default:false
    },
    isShowView:{
      type:Boolean,
      default:false
    },
    isShowAvatar:{
      type:Boolean,
      default:true
    },
    isShowAdmin:{
      type:Boolean,
      default:true
    },
    posts: {
      type: Object,
      default: null
    },
  },

  computed: {
    className(){
      return {
        'style-card':this.isStyleCard === true,
        'style-row' : this.isStyleRow === true
      }
    },

  },

  
 
}
</script>

<style>
    @import url("@/assets/css/article-item.css");
</style>