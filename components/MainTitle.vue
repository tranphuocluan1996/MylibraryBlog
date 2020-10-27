<template>
<!--  <div class="main-title spacing d-flex tcl-jc-between tcl-ais-center">

    Muốn thêm 3 class vào main-title thì làm thế nào  ?
    1. tạo thêm prop kiểu boolen isViewMore-> Để mình tính toán nếu true thì nó hiện button isViewMore ra 
    2. Tạo component button AppButton
    3. Ràng buộc class . Tạo 1 computed ClassName reutnr {
        'btn':true
        }

    
 -->
   <div class="main-title spacing" v-bind:class="addClass">
          <h2>{{title}}</h2>
          <AppButton v-if="isViewMore">
              ViewMore
          </AppButton>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default:''
        },
        isViewMore:{
            type:Boolean,
            default:false
        }
    },
    computed: {
        // d-flex tcl-jc-between tcl-ais-center"
        addClass(){
            return {
                'd-flex':this.isViewMore === true,
                'tcl-jc-between' : this.isViewMore === true,
                'tcl-ais-center' : this.isViewMore === true,
            } 
        }
    },
}
</script>

<style>
    @import url("@/assets/css/main-title.css");
</style>