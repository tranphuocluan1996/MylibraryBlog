<template>
  <div class="articles-list section">
      <div class="tcl-container">

        <!-- Main Title -->
        <MainTitle title="Danh sách bài viết"/>
        <!-- End Main Title -->

        <!-- End Row News List -->
        <div class="tcl-row">
          <div class="tcl-col-12 tcl-col-md-6">
            <ArticleItem 
            v-bind:isShowAdmin="false"
            v-bind:isShowAvatar='false'
            v-bind:isStyleCard='true'/>
          </div>
          
          
        </div>
        <!-- End Row News List -->

        <!-- Btn Loadmore -->
        <div class="text-center">
          <AppButton 
          type='primary'
          v-bind:isLoading="true"
          isSizeLarge
          >Xem thêm</AppButton>
        </div>

      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>