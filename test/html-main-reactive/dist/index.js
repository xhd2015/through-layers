/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/html-main-reactive/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CacheInput.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CacheInput.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // note:do not use 'key', they are reserved,\n  // cacheKey --> $parent cache root\n  // setRef --> add a ref to the parent's $refs, with keyPath identified\n  props: [\"keyPath\", \"cacheKey\", \"setRef\"],\n  data: function data() {\n    return {\n      cacheKeyPath: (this.cacheKey || this.$parent.cacheKey || \"cache\") + \".\" + this.keyPath\n    };\n  },\n  computed: {\n    cacheKeyPathArray: function cacheKeyPathArray() {\n      return this.cacheKeyPath.split(\".\");\n    }\n  },\n  methods: {\n    unset: function unset() {\n      this.set(null);\n    },\n    set: function set(val) {\n      this.$parent.set(this.keyPath, val);\n    }\n  },\n  created: function created() {\n    // default will set ref on it \n    if (this.setRef == null || this.setRef) {\n      this.$parent.$refs[this.keyPath] = this;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$on(\"input\", function (val) {\n      _this.set(val);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./test/html-main-reactive/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./test/html-main-reactive/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _require = __webpack_require__(/*! ../../src/lib/template-config */ \"./src/lib/template-config.js\"),\n    parseDataComputed = _require.parseDataComputed;\n\nvar _require2 = __webpack_require__(/*! ../../src/lib/data-utils */ \"./src/lib/data-utils.js\"),\n    getLast = _require2.getLast,\n    capitalize = _require2.capitalize,\n    decapitalize = _require2.decapitalize;\n\nvar CacheInput = __webpack_require__(/*! ../../src/components/CacheInput */ \"./src/components/CacheInput.vue\")[\"default\"]; // the config, a plain object\n\n\nvar config = {\n  _meta: {\n    // the cache root is \"cache\"\n    cacheRoot: \"cache\",\n    dataAsFunction: true\n  },\n  method: {\n    \"return\": {\n      type: \"${cache.method.return.type}\"\n    },\n    name: \"${cache.method.name}\",\n    parameter: {\n      type: \"${cache.method.parameter.type}\"\n    },\n    caculated: {\n      \"param.var.decl\": function paramVarDecl() {\n        var paramType = this.get('method.parameter.type');\n\n        if (paramType) {\n          var name = decapitalize(getLast(paramType.split(\".\")));\n\n          if (name) {\n            return paramType + \" \" + name;\n          }\n        }\n\n        return \"\";\n      }\n    }\n  }\n};\nvar computedConfig = parseDataComputed(config); // add components\n\ncomputedConfig.components = {\n  CacheInput: CacheInput\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (computedConfig);\n\n//# sourceURL=webpack:///./test/html-main-reactive/App.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"input\", {\n    domProps: { value: _vm.$parent[_vm.keyPath] },\n    on: {\n      input: function($event) {\n        return _vm.$emit(\"input\", $event.target.value)\n      }\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./test/html-main-reactive/App.vue?vue&type=template&id=05225e48&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./test/html-main-reactive/App.vue?vue&type=template&id=05225e48& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"label\", [_vm._v(\"Return Type:\")]),\n      _vm._v(\" \"),\n      _c(\"cache-input\", { attrs: { \"key-path\": \"method.return.type\" } }),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"label\", [_vm._v(\"Method Name:\")]),\n      _vm._v(\" \"),\n      _c(\"cache-input\", { attrs: { \"key-path\": \"method.name\" } }),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"label\", [_vm._v(\"Parameter Type:\")]),\n      _vm._v(\" \"),\n      _c(\"cache-input\", { attrs: { \"key-path\": \"method.parameter.type\" } }),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              return _vm.$refs[\"method.parameter.type\"].unset()\n            }\n          }\n        },\n        [_vm._v(\"Unset\")]\n      ),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"hr\"),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _vm._m(0),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"span\", [\n          _vm._v(\n            \"public \" +\n              _vm._s(this[\"method.return.type\"]) +\n              \" \" +\n              _vm._s(this[\"method.name\"]) +\n              \"(\" +\n              _vm._s(this[\"method.caculated.param.var.decl\"]) +\n              \"){\\n              return null;\\n          }\\n          \"\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _vm._m(1),\n        _vm._v(\" \"),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\"span\", [\n          _vm._v(\n            '\\n              <select id=\"' +\n              _vm._s(this[\"method.name\"]) +\n              '\">\\n                  SELECT * FROM t_mapper\\n              /<select>\\n          '\n          )\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", [_c(\"h3\", [_vm._v(\"Controller Method\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", [_c(\"h3\", [_vm._v(\"Sql Implementation\")])])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./test/html-main-reactive/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/components/CacheInput.vue":
/*!***************************************!*\
  !*** ./src/components/CacheInput.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheInput.vue?vue&type=template&id=225b3f98&scoped=true& */ \"./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true&\");\n/* harmony import */ var _CacheInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheInput.vue?vue&type=script&lang=js& */ \"./src/components/CacheInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CacheInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"225b3f98\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/CacheInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?");

/***/ }),

/***/ "./src/components/CacheInput.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/CacheInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CacheInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./CacheInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CacheInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CacheInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?");

/***/ }),

/***/ "./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./CacheInput.vue?vue&type=template&id=225b3f98&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CacheInput.vue?vue&type=template&id=225b3f98&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CacheInput_vue_vue_type_template_id_225b3f98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?");

/***/ }),

/***/ "./src/lib/data-utils.js":
/*!*******************************!*\
  !*** ./src/lib/data-utils.js ***!
  \*******************************/
/*! exports provided: getLast, capitalize, decapitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLast\", function() { return getLast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return capitalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decapitalize\", function() { return decapitalize; });\nfunction getLast(arr) {\n  return arr ? arr[arr.length - 1] : null;\n}\n\nfunction capitalize(str) {\n  if (str === \"\") {\n    return \"\";\n  }\n\n  return str != null ? str[0].toUpperCase() + str.slice(1) : null;\n}\n\nfunction decapitalize(str) {\n  if (str === \"\") {\n    return \"\";\n  }\n\n  return str != null ? str[0].toLowerCase() + str.slice(1) : null;\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/data-utils.js?");

/***/ }),

/***/ "./src/lib/template-config.js":
/*!************************************!*\
  !*** ./src/lib/template-config.js ***!
  \************************************/
/*! exports provided: parseDataComputed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDataComputed\", function() { return parseDataComputed; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar _require = __webpack_require__(/*! ./util */ \"./src/lib/util.js\"),\n    isObject = _require.isObject,\n    isArray = _require.isArray,\n    isPlainObject = _require.isPlainObject,\n    isString = _require.isString,\n    setForceDeepProperty = _require.setForceDeepProperty,\n    isFunction = _require.isFunction;\n\nvar _require2 = __webpack_require__(/*! ./vue-utils */ \"./src/lib/vue-utils.js\"),\n    setDeepExistingReactiveProperty = _require2.setDeepExistingReactiveProperty,\n    getDeepExistingProperty = _require2.getDeepExistingProperty;\n\nvar _require3 = __webpack_require__(/*! ./template-utils */ \"./src/lib/template-utils.js\"),\n    parseStringTemplateToArray = _require3.parseStringTemplateToArray,\n    renderTemplateArray = _require3.renderTemplateArray,\n    templateToRender = _require3.templateToRender;\n/**\r\n // because the computed property has a limitation, and naturally it cannot be resolved\r\n// we distinct computed property and data property by distinguishing the key prefix:\r\n//    if the key starts with \"cache.\", then it is resovled to data, using deep traversing\r\n//    else it is resolved to computed, using that full key\r\n//  this is not perfect, but can absolutely solve the problem.\r\n// the original limitation comes from that an object is either a data property or a computed property\r\n// consider if part keys of an object is in data, and part of them can be specified in computed,\r\n// this seems possible to make, but in fact it cannot be resolved simply.Because you must add the part of computed\r\n//  into data, and data is just static data, no function call.\r\n\r\n   better to be used with CacheInput.vue\r\n * computed getter and setter pair\r\n * @param {*} templateRenders \r\n * @param path used to set, not useful for get\r\n */\n\n\nfunction toGetterSetterPair(path, templateRenders, cacheKey) {\n  var pair = {};\n  var segments = path.split(\".\"); // let cacheKeyPrefix = cacheKey + \".\"\n\n  pair.set = function setterToCache(val) {\n    // set will always fall into data[cacheKey]\n    setDeepExistingReactiveProperty(this, [cacheKey].concat(_toConsumableArray(segments)), val); // this[cacheKey+\".\" + path]=val\n  }; // the key point is, for template#1 and template#2, where template#1 has a higher priority, and value is taken from template#2\n  //                   we ensure that the final value depends on both template#1 and template#2\n\n\n  pair.get = function getterFromTemplate() {\n    var vm = this;\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = templateRenders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var renderer = _step.value;\n        var val = renderer.call(vm);\n\n        if (val != null) {\n          // resolved\n          return val;\n        }\n      } // not resolved\n\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    return null;\n  };\n\n  return pair;\n}\n\nfunction isConfigKey(key) {\n  if (key === \"_meta\") {\n    return false;\n  }\n\n  if (key === \"\") {\n    console.warn(\"key is ignored because it is empty\");\n    return false;\n  }\n\n  return true;\n}\n\nfunction getStringOrFunctionArray(v) {\n  if (isString(v)) {\n    return [v];\n  } else if (isArray(v)) {\n    // check that every item in the array must be string or function also\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var i = _step2.value;\n\n        if (!isString(i) && !isFunction(i)) {\n          throw \"value in the array is not a string nor a function\";\n        }\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    return v;\n  } else if (isFunction(v)) {\n    return [v];\n  }\n\n  throw \"value is not a string, an array or a function\";\n}\n/**\r\n * to flatten keys, such that { a0:{ b0:\"b0\", b1:\"b1\" }} ===> {\"a0.b0\":\"b0\", \"a0.b1\":\"b1\"}\r\n * @param {} value \r\n * @param {*} prefix \r\n * @param {*} res \r\n */\n\n\nfunction toFlatten(value, prefix, res) {\n  if (!isPlainObject(value)) {\n    res[prefix] = getStringOrFunctionArray(value);\n  } else {\n    for (var k in value) {\n      toFlatten(value[k], prefix + \".\" + k, res);\n    }\n  }\n}\n/**\r\n * normalize config, so that all keys are flatten, all values are string array\r\n * meta keys  and empty key \"\" is not kept\r\n * @param {*} config \r\n */\n\n\nfunction normalizeConfig(config) {\n  var newConfig = {};\n\n  for (var key in config) {\n    var value = config[key];\n\n    if (!isConfigKey(key)) {\n      continue;\n    }\n\n    toFlatten(value, key, newConfig);\n  }\n\n  return newConfig;\n}\n\nfunction cachedGetByKeyPath(keyPath) {\n  var vm = this;\n\n  if (keyPath.startsWith(vm._cachePrefix())) {\n    // data\n    // console.debug(\"getDeepExistingProperty = \", getDeepExistingProperty)\n    return getDeepExistingProperty(vm, keyPath.split(\".\"));\n  } else {\n    // computed\n    if (!(keyPath in vm)) {\n      throw \"keyPath is expected to be a computed property, but it is not in vm instance at runtime, check constructor config please.Key:\" + keyPath;\n    }\n\n    return vm[keyPath];\n  }\n}\n\nfunction cachedSetByKeyPath(keyPath, val) {\n  var vm = this;\n\n  if (keyPath.startsWith(vm._cachePrefix())) {\n    setDeepExistingReactiveProperty(vm, _toConsumableArray(keyPath.split(\".\")), val);\n  } else {\n    vm[keyPath] = val;\n  }\n}\n\nfunction getPresetData() {\n  return {};\n}\n\nfunction getPresetMethods(cacheRoot, cachPrefix) {\n  return {\n    get: cachedGetByKeyPath,\n    set: cachedSetByKeyPath,\n    cachedGetByKeyPath: cachedGetByKeyPath,\n    cachedSetByKeyPath: cachedSetByKeyPath,\n    _cachePrefix: function _cachePrefix() {\n      return cachPrefix;\n    },\n    _cacheRoot: function _cacheRoot() {\n      return cacheRoot;\n    }\n  };\n}\n\nfunction makeAllPropertyData(cacheRoot, cachePrefix, normalizedConfig) {\n  var localData = getPresetData(); // add cache.* to data\n\n  for (var k in normalizedConfig) {\n    if (k === cacheRoot || k.startsWith(cachePrefix)) {\n      continue;\n    }\n\n    setForceDeepProperty(localData, [cacheRoot].concat(_toConsumableArray(k.split(\".\"))), null);\n  }\n\n  return localData;\n}\n/**\r\n * parse config to computed, config has the form:{\r\n *     _meta:{\r\n *         cacheRoot:\"cache\",\r\n *         dataAsFunction:true, // should data be a function,usually for component\r\n *     },\r\n *     app:{\r\n *         name:\"${cache.app.name}\"\r\n *     }\r\n * }\r\n * \r\n * and will be transformed to:\r\n * {\r\n *    data:{\r\n *       cache:{\r\n *          app:{\r\n *             name:null\r\n *          }\r\n *       }\r\n *    },\r\n *    computed:{\r\n *        app:{\r\n *           name:{\r\n *             get(){return this.cache.app.name}\r\n *             set(val){this.cache.app.name=val}\r\n *           }\r\n *        }\r\n *    }\r\n * }\r\n * @param {*} config \r\n */\n\n\nfunction parseDataComputed(config) {\n  var meta = config[\"_meta\"] || {\n    cacheRoot: \"cache\"\n  };\n  var cacheRoot = meta[\"cacheRoot\"] || \"cache\";\n  var dataAsFunction = \"dataAsFunction\" in meta ? !!meta.dataAsFunction : true;\n  var computed = {};\n  var normalizedConfig = normalizeConfig(config);\n  var cachePrefix = cacheRoot + \".\";\n\n  var data = function data() {\n    return makeAllPropertyData(cacheRoot, cachePrefix, normalizedConfig);\n  };\n\n  if (!dataAsFunction) {\n    data = data();\n  }\n\n  for (var key in normalizedConfig) {\n    var value = normalizedConfig[key];\n    var templateRenders = [];\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var v = _step3.value;\n        var renderFunction = void 0;\n\n        if (isString(v)) {\n          renderFunction = templateToRender(v, cachedGetByKeyPath);\n        } else if (isFunction(v)) {\n          renderFunction = v;\n        }\n\n        templateRenders.push(renderFunction);\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n          _iterator3[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n\n    computed[key] = toGetterSetterPair(key, templateRenders, cacheRoot);\n  }\n\n  return {\n    computed: computed,\n    data: data,\n    methods: getPresetMethods(cacheRoot, cachePrefix)\n  };\n} // module.exports = {\n//     parseDataComputed\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/lib/template-config.js?");

/***/ }),

/***/ "./src/lib/template-utils.js":
/*!***********************************!*\
  !*** ./src/lib/template-utils.js ***!
  \***********************************/
/*! exports provided: parseStringTemplateToArray, renderTemplateArray, templateToRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseStringTemplateToArray\", function() { return parseStringTemplateToArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTemplateArray\", function() { return renderTemplateArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templateToRender\", function() { return templateToRender; });\n/**\n * \n * @param {*} template \n * @return {\n *       type:\"function\"|\"placeholder\",\n *       template: [{type:\"plain\"|\"placeholder\", content:<string or key>}] | function\n *    }\n */\nfunction parseStringTemplateToArray(template, placeholderStart, placeholderEnd) {\n  var res = [];\n  var s = template;\n  var i = 0;\n  var placeStart = placeholderStart || \"${\";\n  var placeEnd = placeholderEnd || \"}\";\n\n  while (i < s.length) {\n    var startIdx = s.indexOf(placeStart, i);\n\n    if (startIdx === -1) {\n      res.push({\n        type: \"plain\",\n        content: s.substring(i)\n      });\n      break;\n    }\n\n    var endIdx = s.indexOf(placeEnd, startIdx + placeStart.length);\n\n    if (endIdx === -1) {\n      throw \"${ is found, but no ending }\";\n    }\n\n    var name = s.substring(startIdx + placeStart.length, endIdx);\n\n    if (!name) {\n      throw \"${} is empty\";\n    }\n\n    if (i < startIdx) {\n      res.push({\n        type: \"plain\",\n        content: s.substring(i, startIdx)\n      });\n    }\n\n    res.push({\n      type: \"placeholder\",\n      content: name\n    });\n    i = endIdx + placeEnd.length;\n  }\n\n  return res;\n}\n\nfunction renderTemplateArray(templateArray, getter) {\n  var result = \"\"; // this is important, we ensure we use the same value for the same key in the same pass\n\n  var cache = {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = templateArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var template = _step.value;\n\n      if (template.type === 'plain') {\n        result += template.content;\n      } else if (template.type == 'placeholder') {\n        var val = cache[template.content];\n\n        if (val == null && !(template.content in cache)) {\n          cache[template.content] = val = getter.call(this, template.content); // can't be rendered\n\n          if (val == null) {\n            return null;\n          }\n        }\n\n        result += val;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return result;\n}\n\nfunction templateToRender(template, getter) {\n  var templateArray = parseStringTemplateToArray(template);\n  return function templateArrayRenderer() {\n    // bind this dynamically\n    return renderTemplateArray.call(this, templateArray, getter);\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/template-utils.js?");

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! exports provided: isObject, isArray, isPlainObject, isString, setForceDeepProperty, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return isPlainObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setForceDeepProperty\", function() { return setForceDeepProperty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Quick object check - this is primarily used to tell\r\n * Objects from primitive values when we know the value\r\n * is a JSON-compliant type.\r\n */\nfunction isObject(obj) {\n  return obj !== null && _typeof(obj) === 'object';\n}\n\nfunction isPlainObject(obj) {\n  return obj !== null && obj.constructor === Object;\n}\n\nfunction isArray(obj) {\n  return Array.isArray(obj);\n}\n\nfunction isString(obj) {\n  return obj !== null && obj.constructor === String;\n}\n\nfunction isFunction(obj) {\n  return obj !== null && obj.constructor === Function;\n}\n\nfunction isType(obj, type) {\n  return obj !== null && obj.constructor === type;\n}\n\nfunction setForceDeepProperty(obj, pathArray, value) {\n  var currentTarget = obj;\n\n  for (var i = 0; i < pathArray.length; ++i) {\n    var key = pathArray[i];\n\n    if (i === pathArray.length - 1) {\n      currentTarget[key] = value;\n      return;\n    } // check existence\n\n\n    if (!(key in currentTarget)) {\n      currentTarget[key] = {};\n    }\n\n    currentTarget = currentTarget[key];\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/util.js?");

/***/ }),

/***/ "./src/lib/vue-utils.js":
/*!******************************!*\
  !*** ./src/lib/vue-utils.js ***!
  \******************************/
/*! exports provided: setDeepExistingReactiveProperty, getDeepExistingProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDeepExistingReactiveProperty\", function() { return setDeepExistingReactiveProperty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDeepExistingProperty\", function() { return getDeepExistingProperty; });\n/**\r\n * set an existing property, the property must exist\r\n * @param {} vm \r\n * @param {*} pathArray \r\n * @param {*} value \r\n */\nfunction setDeepExistingReactiveProperty(vm, pathArray, value) {\n  var currentTarget = vm;\n\n  for (var i = 0; i < pathArray.length; ++i) {\n    var key = pathArray[i];\n\n    if (i === pathArray.length - 1) {\n      vm.$set(currentTarget, key, value);\n      return;\n    } // check existence\n\n\n    if (!(key in currentTarget)) {\n      throw \"path segment :\" + pathArray.slice(0, i + 1).join(\".\") + \" does not exist\";\n    }\n\n    currentTarget = currentTarget[key];\n  }\n}\n\nfunction getDeepExistingProperty(vm, pathArray) {\n  var currentTarget = vm;\n\n  for (var i = 0; i < pathArray.length; ++i) {\n    var key = pathArray[i];\n\n    if (!(key in currentTarget)) {\n      throw \"path segment :\" + pathArray.slice(0, i + 1).join(\".\") + \" does not exist\";\n    }\n\n    currentTarget = currentTarget[key];\n  }\n\n  return currentTarget;\n} // module.exports = {\n//     setDeepExistingReactiveProperty,\n//     getDeepExistingProperty\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/lib/vue-utils.js?");

/***/ }),

/***/ "./test/html-main-reactive/App.vue":
/*!*****************************************!*\
  !*** ./test/html-main-reactive/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=05225e48& */ \"./test/html-main-reactive/App.vue?vue&type=template&id=05225e48&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./test/html-main-reactive/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"test/html-main-reactive/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./test/html-main-reactive/App.vue?");

/***/ }),

/***/ "./test/html-main-reactive/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./test/html-main-reactive/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./test/html-main-reactive/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./test/html-main-reactive/App.vue?");

/***/ }),

/***/ "./test/html-main-reactive/App.vue?vue&type=template&id=05225e48&":
/*!************************************************************************!*\
  !*** ./test/html-main-reactive/App.vue?vue&type=template&id=05225e48& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=05225e48& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./test/html-main-reactive/App.vue?vue&type=template&id=05225e48&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05225e48___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./test/html-main-reactive/App.vue?");

/***/ }),

/***/ "./test/html-main-reactive/index.js":
/*!******************************************!*\
  !*** ./test/html-main-reactive/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var App = __webpack_require__(/*! ./App */ \"./test/html-main-reactive/App.vue\")[\"default\"];\n\nconsole.debug('App = ', App);\nvar v = new Vue({\n  components: {\n    App: App\n  },\n  template: \"<app></app>\"\n});\nv.$mount(\"#app\");\nconsole.debug(\"new vue instance = \", v);\n\n//# sourceURL=webpack:///./test/html-main-reactive/index.js?");

/***/ })

/******/ });