

<template>
   <div>
     <editor v-bind:content="data.content" class="mainEditor"></editor>
   </div>
</template>


<script>
  
 const Editor = require('../components/CustomEditor').default
  
  // divide content into blocks
  export default {
      components:{Editor},
      data(){
          return {
            data:{
              content:[
                {editable:true, content:"whatis"},
                {editable:true, content:"The Next Line"},
                // {editable:false, content:"-- THE END --"}
              ]
            }
          }
      }
  }
</script>


<style scoped>
  .mainEditor{
    width: 80%;
    height: 800px;
    border: solid 1px gold;
    overflow: scroll;
  }
</style>