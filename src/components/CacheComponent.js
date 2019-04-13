function createTemplate(tag) {
  return `<${tag} v-bind:value="$parent[keyPath]" v-on:input="$emit('input',$event.target.value)"></${tag}>`
}

function createCacheComponent(tag) {
  return {
    // note:do not use 'key', they are reserved,
    // cacheKey --> $parent cache root
    // setRef --> add a ref to the parent's $refs, with keyPath identified
    props: ["keyPath", "cacheKey", "setRef"],
    data() {
      return {
        cacheKeyPath: (this.cacheKey || this.$parent.cacheKey || "cache") + "." + this.keyPath
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
        this.$parent.set(this.keyPath, val)
      }
    },
    created() {
      // default will set ref on it 
      if (this.setRef == null || this.setRef) {
        this.$parent.$refs[this.keyPath] = this
      }
    },
    mounted() {
      let _this = this;
      this.$on("input", function (val) {
        _this.set(val);
      });
    },
    template: createTemplate(tag)
  }
}

export {
  createCacheComponent
}