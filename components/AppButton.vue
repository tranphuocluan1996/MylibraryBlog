<template>
  <button v-bind:class="className">
      <slot />
  </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
    },
       computed: {
           className(){
               return {
                   'btn':true,
                   'btn-default': this.type === 'default'
               }
           }
       },
}
</script>

<style>
@import url('@/assets/css/button.css');
</style>