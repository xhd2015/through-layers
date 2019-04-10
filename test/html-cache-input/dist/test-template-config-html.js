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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/html-cache-input/test-template-config-html.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\nvar _require = __webpack_require__(/*! ../lib/vue-utils */ \"./src/lib/vue-utils.js\"),\n    setDeepExistingReactiveProperty = _require.setDeepExistingReactiveProperty,\n    getDeepExistingProperty = _require.getDeepExistingProperty;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // note:do not use 'key', they are reserved,\n  // cacheKey --> $parent cache root\n  // setRef --> add a ref to the parent's $refs, with keyPath identified\n  props: [\"keyPath\", \"cacheKey\", \"setRef\"],\n  data: function data() {\n    return {\n      cacheKeyPath: (this.cacheKey || this.$parent.cacheKey || \"cache\") + \".\" + this.keyPath\n    };\n  },\n  computed: {\n    cacheKeyPathArray: function cacheKeyPathArray() {\n      return this.cacheKeyPath.split(\".\");\n    }\n  },\n  methods: {\n    unset: function unset() {\n      this.set(null);\n    },\n    set: function set(val) {\n      setDeepExistingReactiveProperty(this.$parent, this.cacheKeyPathArray, val);\n    }\n  },\n  created: function created() {\n    console.debug(\"CacheInput created\");\n    console.debug(\"this.setRef = \", this.setRef); // default will set ref on it \n\n    if (this.setRef == null) {\n      this.setRef = true;\n    }\n\n    if (this.setRef) {\n      console.debug(\"this.setRef = \", this.setRef);\n      this.$parent.$refs[this.keyPath] = this;\n    }\n\n    console.debug(\"parent ref keys:\", Object.keys(this.$parent.$refs));\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$on(\"input\", function (val) {\n      _this.set(val);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/CacheInput.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./src/lib/template-config.js":
/*!************************************!*\
  !*** ./src/lib/template-config.js ***!
  \************************************/
/*! exports provided: parseDataComputed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDataComputed\", function() { return parseDataComputed; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar _require = __webpack_require__(/*! ./util */ \"./src/lib/util.js\"),\n    isObject = _require.isObject,\n    isArray = _require.isArray,\n    isPlainObject = _require.isPlainObject,\n    isString = _require.isString,\n    setForceDeepProperty = _require.setForceDeepProperty;\n\nvar _require2 = __webpack_require__(/*! ./vue-utils */ \"./src/lib/vue-utils.js\"),\n    setDeepExistingReactiveProperty = _require2.setDeepExistingReactiveProperty,\n    getDeepExistingProperty = _require2.getDeepExistingProperty;\n\nconsole.debug(\"require vue-utils = \", __webpack_require__(/*! ./vue-utils */ \"./src/lib/vue-utils.js\")); // const Vue = require('vue')\n\n/**\r\n * \r\n * @param {*} template \r\n * @return {type:\"plain\"|\"placeholder\", content:<string or key>}\r\n */\n\nfunction parseTemplate(template) {\n  var res = [];\n  var s = template;\n  var i = 0;\n  var placeStart = \"${\";\n  var placeEnd = \"}\";\n\n  while (i < s.length) {\n    var startIdx = s.indexOf(placeStart, i);\n\n    if (startIdx === -1) {\n      res.push({\n        type: \"plain\",\n        content: s.substring(i)\n      });\n      break;\n    }\n\n    var endIdx = s.indexOf(placeEnd, startIdx + placeStart.length);\n\n    if (endIdx === -1) {\n      throw \"${ is found, but no ending }\";\n    }\n\n    var name = s.substring(startIdx + placeStart.length, endIdx);\n\n    if (!name) {\n      throw \"${} is empty\";\n    }\n\n    if (i < startIdx) {\n      res.push({\n        type: \"plain\",\n        content: s.substring(i, startIdx)\n      });\n    }\n\n    res.push({\n      type: \"placeholder\",\n      content: name\n    });\n    i = endIdx + placeEnd.length;\n  }\n\n  return res;\n}\n/**\r\n // because the computed property has a limitation, and naturally it cannot be resolved\r\n// we distinct computed property and data property by distinguishing the key prefix:\r\n//    if the key starts with \"cache.\", then it is resovled to data, using deep traversing\r\n//    else it is resolved to computed, using that full key\r\n//  this is not perfect, but can absolutely solve the problem.\r\n// the original limitation comes from that an object is either a data property or a computed property\r\n// consider if part keys of an object is in data, and part of them can be specified in computed,\r\n// this seems possible to make, but in fact it cannot be resolved simply.Because you must add the part of computed\r\n//  into data, and data is just static data, no function call.\r\n\r\n   better to be used wit CacheInput.vue\r\n * computed getter and setter pair\r\n * @param {*} templateConfigArray \r\n * @param path used to set, not useful for get\r\n */\n\n\nfunction toGetterSetterPair(path, templateConfigArray, cacheKey) {\n  var pair = {};\n  var segments = path.split(\".\");\n  var cacheKeyPrefix = cacheKey + \".\";\n\n  pair.set = function setterToCache(val) {\n    // set will always fall into data[cacheKey]\n    setDeepExistingReactiveProperty(this, [cacheKey].concat(_toConsumableArray(segments)), val); // this[cacheKey+\".\" + path]=val\n  }; // all placeholders, they must be present at runtime\n\n\n  var allPlaceHolders = [];\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = templateConfigArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var templateConfig = _step.value;\n      var placeHolders = [];\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = templateConfig[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var cfg = _step4.value;\n\n          if (cfg.type === \"placeholder\") {\n            placeHolders.push(cfg.content);\n          }\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n            _iterator4[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      allPlaceHolders.push(placeHolders);\n    } // the key point is, for template#1 and template#2, where template#1 has a higher priority, and value is taken from template#2\n    //                   we ensure that the final value depends on both template#1 and template#2\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  pair.get = function getterFromTemplate() {\n    var vm = this;\n\n    for (var i in allPlaceHolders) {\n      var placeHolder = allPlaceHolders[i]; // in the first pass, we resolve value and check\n      // template string will be concatenated in the second pass\n\n      var allResolved = true;\n      var cachedPlaceHolderValue = {};\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = placeHolder[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var propKey = _step2.value;\n\n          if (propKey in cachedPlaceHolderValue) {\n            continue;\n          }\n\n          var resolved = null;\n\n          if (propKey.startsWith(cacheKeyPrefix)) {\n            // data\n            // console.debug(\"getDeepExistingProperty = \", getDeepExistingProperty)\n            resolved = getDeepExistingProperty(vm, propKey.split(\".\"));\n          } else {\n            // computed\n            if (!(propKey in vm)) {\n              throw \"propKey is expected to be a computed property, but it is not in vm instance at runtime, check constructor config please.Key:\" + propKey;\n            }\n\n            resolved = vm[propKey];\n          }\n\n          if (resolved === null) {\n            allResolved = false;\n            break;\n          } // cache the value\n\n\n          cachedPlaceHolderValue[propKey] = resolved;\n        } // render template now\n\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n            _iterator2[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      if (allResolved) {\n        var result = \"\";\n        var _iteratorNormalCompletion3 = true;\n        var _didIteratorError3 = false;\n        var _iteratorError3 = undefined;\n\n        try {\n          for (var _iterator3 = templateConfigArray[i][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var template = _step3.value;\n\n            if (template.type === 'plain') {\n              result += template.content;\n            } else if (template.type == 'placeholder') {\n              result += cachedPlaceHolderValue[template.content];\n            }\n          }\n        } catch (err) {\n          _didIteratorError3 = true;\n          _iteratorError3 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n              _iterator3[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError3) {\n              throw _iteratorError3;\n            }\n          }\n        }\n\n        return result;\n      }\n    } // not resolved\n\n\n    return null;\n  };\n\n  return pair;\n}\n\nfunction isConfigKey(key) {\n  if (key === \"_meta\") {\n    return false;\n  }\n\n  if (key === \"\") {\n    console.warn(\"key is ignored because it is empty\");\n    return false;\n  }\n\n  return true;\n}\n\nfunction getStringArray(v) {\n  if (isString(v)) {\n    return [v];\n  } else if (isArray(v)) {\n    // check that every item in the array must be string also\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n      for (var _iterator5 = v[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n        var i = _step5.value;\n\n        if (!isString(i)) {\n          throw \"value in the array is not a string\";\n        }\n      }\n    } catch (err) {\n      _didIteratorError5 = true;\n      _iteratorError5 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion5 && _iterator5[\"return\"] != null) {\n          _iterator5[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError5) {\n          throw _iteratorError5;\n        }\n      }\n    }\n\n    return v;\n  }\n\n  throw \"value is not string nor array\";\n}\n\nfunction toFlatten(value, prefix, res) {\n  // f(obj,key,prefix) returns {}\n  if (!isPlainObject(value)) {\n    res[prefix] = getStringArray(value);\n  } else {\n    for (var k in value) {\n      toFlatten(value[k], prefix + \".\" + k, res);\n    }\n  }\n}\n/**\r\n * normalize config, so that all keys are flatten, all values are string array\r\n * meta keys  and empty key \"\" is not kept\r\n * @param {*} config \r\n */\n\n\nfunction normalizeConfig(config) {\n  var newConfig = {};\n\n  for (var key in config) {\n    var value = config[key];\n\n    if (!isConfigKey(key)) {\n      continue;\n    }\n\n    toFlatten(value, key, newConfig);\n  }\n\n  return newConfig;\n}\n/**\r\n * parse config to computed, config has the form:{\r\n *     _meta:{\r\n *         cacheRoot:\"cache\"\r\n *     },\r\n *     app:{\r\n *         name:\"${cache.app.name}\"\r\n *     }\r\n * }\r\n * \r\n * and will be transformed to:\r\n * {\r\n *    data:{\r\n *       cache:{\r\n *          app:{\r\n *             name:null\r\n *          }\r\n *       }\r\n *    },\r\n *    computed:{\r\n *        app:{\r\n *           name:{\r\n *             get(){return this.cache.app.name}\r\n *             set(val){this.cache.app.name=val}\r\n *           }\r\n *        }\r\n *    }\r\n * }\r\n * @param {*} config \r\n */\n\n\nfunction parseDataComputed(config) {\n  var meta = config[\"_meta\"] || {\n    cacheRoot: \"cache\"\n  };\n  var cacheRoot = meta[\"cacheRoot\"] || \"cache\";\n  var computed = {};\n  var normalizedConfig = normalizeConfig(config);\n  var cachePrefix = cacheRoot + \".\";\n  var data = {}; // add cache.* to data\n\n  for (var k in normalizedConfig) {\n    if (k === cacheRoot || k.startsWith(cachePrefix)) {\n      continue;\n    }\n\n    setForceDeepProperty(data, [cacheRoot].concat(_toConsumableArray(k.split(\".\"))), null);\n  }\n\n  for (var key in normalizedConfig) {\n    var value = normalizedConfig[key];\n    var templateConfigArray = [];\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n      for (var _iterator6 = value[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n        var v = _step6.value;\n        templateConfigArray.push(parseTemplate(v));\n      }\n    } catch (err) {\n      _didIteratorError6 = true;\n      _iteratorError6 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion6 && _iterator6[\"return\"] != null) {\n          _iterator6[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError6) {\n          throw _iteratorError6;\n        }\n      }\n    }\n\n    computed[key] = toGetterSetterPair(key, templateConfigArray, cacheRoot);\n  }\n\n  return {\n    computed: computed,\n    data: data\n  };\n} // module.exports = {\n//     parseDataComputed\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/lib/template-config.js?");

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! exports provided: isObject, isArray, isPlainObject, isString, setForceDeepProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return isPlainObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setForceDeepProperty\", function() { return setForceDeepProperty; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Quick object check - this is primarily used to tell\r\n * Objects from primitive values when we know the value\r\n * is a JSON-compliant type.\r\n */\nfunction isObject(obj) {\n  return obj !== null && _typeof(obj) === 'object';\n}\n\nfunction isPlainObject(obj) {\n  return obj !== null && obj.constructor === Object;\n}\n\nfunction isArray(obj) {\n  return Array.isArray(obj);\n}\n\nfunction isString(obj) {\n  return obj !== null && obj.constructor === String;\n}\n\nfunction setForceDeepProperty(obj, pathArray, value) {\n  var currentTarget = obj;\n\n  for (var i = 0; i < pathArray.length; ++i) {\n    var key = pathArray[i];\n\n    if (i === pathArray.length - 1) {\n      currentTarget[key] = value;\n      return;\n    } // check existence\n\n\n    if (!(key in currentTarget)) {\n      currentTarget[key] = {};\n    }\n\n    currentTarget = currentTarget[key];\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/util.js?");

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

/***/ "./test/html-cache-input/test-template-config-html.js":
/*!************************************************************!*\
  !*** ./test/html-cache-input/test-template-config-html.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ../../src/lib/template-config */ \"./src/lib/template-config.js\"),\n    parseDataComputed = _require.parseDataComputed;\n\nvar CacheInput = __webpack_require__(/*! ../../src/components/CacheInput */ \"./src/components/CacheInput.vue\")[\"default\"];\n\nvar config = {\n  \"app.name\": \"${cache.app.name}\",\n  app: {\n    version: \"${cache.app.version}\"\n  },\n  window: {\n    title: [\"${cache.window.title}\", \"${app.name} - ${app.version}\", \"not set\"]\n  }\n};\nvar computedConfig = parseDataComputed(config);\ncomputedConfig.components = {\n  CacheInput: CacheInput\n};\nvar vm = new Vue(computedConfig);\nvm.$mount(\"#app\");\n\n//# sourceURL=webpack:///./test/html-cache-input/test-template-config-html.js?");

/***/ })

/******/ });