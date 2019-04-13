<template>
    <div ref="editor" style="width:500px; height:400px;"></div>
</template>


<script>
const monaco = require("monaco-editor");
const THEME_VS_DARK = "vs-dark"
const THEME_VS = "vs"
const THEME_HC_BLACK = "hc"

export default {
  data() {
    return {
      editor: null,
      model: null
    };
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, { model: null });

    let model = monaco.editor.createModel("package com;", "java");

    this.editor.setModel(model);
  },
  methods: {
    changeThem: function changeTheme(theme) {
      var newTheme = theme === 1 ? "vs-dark" : theme === 0 ? "vs" : "hc-black";
      monaco.editor.setTheme(newTheme);
    },
    setUneditableForAll(){

    }
  }
};

// var oldModel = editor.getModel();
// var newModel = monaco.editor.createModel(data, mode.modeId);
// editor.setModel(newModel);
</script>



<style scoped>
</style>