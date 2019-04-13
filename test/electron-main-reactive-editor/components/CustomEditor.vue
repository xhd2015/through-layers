<template>
  <div class="editor-container">
      <div v-for="(c,index) in content" :key="c.content" class="editor-line">
        <span class="editor-line-number">{{wrap(index)}}</span> &nbsp;
        <editor-unit class="editor-line-content" v-bind="c"  ref="units"></editor-unit>
      </div>
  </div>
</template>

<script>
  const EditorUnit = require('./EditorUnit').default

  export default {
      components:{EditorUnit},
      props:["content"],
      data(){
          return{
              data:{
                  content:this.content!=null?[...this.content]:[]
              }
          }
      },
      methods:{
          setAllUneditable(event){
              for(let unit of this.$refs.units){
                  if(unit.$el === event.target){
                      continue
                  }
                  unit.setEditable(false)
              }
          },
          wrap(s){
              s=s+''
              let n=3 - s.length
              if(n>0){
                  s = ' '.repeat(n) + s
              }
              return s
          }
      }

  }
</script>


<style scoped>

    .inline{
        display: inline
    }


    .editor-container{
        display:flex;
        flex-direction: column;
    }

    .editor-line{
        display:flex;
        flex-direction: row;
    }

    .editor-line-number{
        color: aquamarine;
        font-size: 1em;
        margin-right: 10px;
    }

    .editor-line-content{
        /* display: inline; */
        border-bottom: solid 1px;
        flex-grow: 1; /* span all left space*/
    }
</style>