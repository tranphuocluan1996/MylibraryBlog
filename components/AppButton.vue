<template>
  <div>
      <button v-bind:class="className">
      <slot /> 
  </button>
  <IsLoading v-if="isLoading"/>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        isSizeLarge:{
            type:Boolean,
            default:false
        },
        isLoading:{
            type:Boolean,
            default:false
        }
    },
       computed: {
           className(){
               return {
                   'btn':true,
                   'btn-default': this.type === 'default',
                   'btn-primary' : this.type === 'primary',
                   'btn-size-large' : this.isSizeLarge
               }
           }
       },
}
</script>

<style>
@import url('@/assets/css/button.css');
</style>