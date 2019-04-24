<template>
    <!--main content-->
    <div class="unit" :contenteditable="data.editable" @input="changeContent"  @dblclick="dbclick" @focusout="focusout">{{content}}</div>
</template>

<script>
export default {
    props:["enableEdit","editable","content"],
    data(){
        let enableEdit = (this.enableEdit==null?true: !!this.enableEdit)
        return {
            data:{
                enableEdit: enableEdit,
                editable: enableEdit && !!this.editable,
                content: this.content
            }
        }
    },
    methods:{
        setContent(content){
            this.data.content = content
        },
        changeContent(event){
            this.setContent(event.target.innerText)
            this.$emit('input', this.data.content)
        },
        isEditable(){
            return this.data.editable
        },
        setEditable(editable){
            if(this.data.enableEdit && editable!=this.data.editable){
                this.data.editable = editable
                this.$emit("editableChanged",this.data.editable)
            }
        },
        invertEditable(){
            if(this.data.enableEdit){
                this.setEditable(!this.data.editable)
                this.$emit("editableChanged",this.data.editable)
            }
        },
        dbclick(event){
            this.$emit('dbclick',this)
        },
        focusout(event){
            this.$emit('focusout',this)
        }
    },
    created(){
    }
}
</script>

<style scoped>
  /* .unit{

  }
  .unit[contenteditable=true]{
      border: solid 1px gray;
  } */
</style>