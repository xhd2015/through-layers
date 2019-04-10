<template>
  <input v-bind:value="$parent[keyPath]" v-on:input="$emit('input',$event.target.value)">
</template>


<script>
const {
    setDeepExistingReactiveProperty,
    getDeepExistingProperty
} = require("../lib/vue-utils")

export default {
  // note:do not use 'key', they are reserved,
  // cacheKey --> $parent cache root
  // setRef --> add a ref to the parent's $refs, with keyPath identified
  props: ["keyPath", "cacheKey","setRef"],
  data() {
    return {
      cacheKeyPath:
        (this.cacheKey || this.$parent.cacheKey || "cache") + "." + this.keyPath
    };
  },
  computed: {
    cacheKeyPathArray() {
      return this.cacheKeyPath.split(".");
    }
  },
  methods: {
    unset() {
      this.set(null);
    },
    set(val) {
      setDeepExistingReactiveProperty(
        this.$parent,
        this.cacheKeyPathArray,
        val
      );
    }
  },
  created(){
      console.debug("CacheInput created")
     console.debug("this.setRef = " , this.setRef)
      // default will set ref on it 
      if(this.setRef==null){
          this.setRef = true
      }
     if(this.setRef){
         console.debug("this.setRef = " , this.setRef)
         this.$parent.$refs[this.keyPath] = this
     }
      console.debug("parent ref keys:",Object.keys(this.$parent.$refs));
  },
  mounted() {
    let _this = this;
    this.$on("input", function(val) {
      _this.set(val);
    });
  }
};
</script>

<style scoped>
</style>
