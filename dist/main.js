/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkTestingWorks)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _outputHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outputHandler */ \"./src/outputHandler.js\");\n/* harmony import */ var _outputHandler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_outputHandler__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction checkTestingWorks(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/index.js?");

/***/ }),

/***/ "./src/outputHandler.js":
/*!******************************!*\
  !*** ./src/outputHandler.js ***!
  \******************************/
/***/ (() => {

eval("function createDOMCache() {\n  const $container = document.querySelector(\"[data-container]\");\n  const $box = document.querySelector(\"[data-box]\");\n  const $root = document.querySelector(\":root\");\n  const $educationFace = document.querySelector(\"[data-education-face]\");\n  const $educationGroup = document.querySelector(\"[data-education-group]\");\n  const $projectsFace = document.querySelector(\"[data-projects-face]\");\n  const $projectsGroup = document.querySelector(\"[data-projects-group]\");\n  const $aboutFace = document.querySelector(\"[data-about-face]\");\n  const $contactFace = document.querySelector(\"[data-contact-face]\");\n  const $navMessage = document.querySelector(\"[data-nav-message]\");\n  return {\n    $container,\n    $box,\n    $root,\n    $educationFace,\n    $educationGroup,\n    $projectsFace,\n    $projectsGroup,\n    $aboutFace,\n    $contactFace,\n    $navMessage\n  };\n}\nconst cachedDOM = createDOMCache();\nfunction createRotateController(root, container, cube, cssRotXVarName, cssRotYVarName) {\n  let dragging = false;\n  let initialPosition = {};\n  let initialRotation = {};\n  function getInitialBoxRotation() {\n    const rootElement = root;\n    const rootStyles = getComputedStyle(rootElement);\n    const xString = rootStyles.getPropertyValue(cssRotXVarName);\n    const yString = rootStyles.getPropertyValue(cssRotYVarName);\n    const rotX = Number(xString.slice(0, -3));\n    const rotY = Number(yString.slice(0, -3));\n    return {\n      rotX,\n      rotY\n    };\n  }\n  function initDragRotate(e) {\n    dragging = true;\n    initialPosition = {\n      x: e.pageX,\n      y: e.pageY\n    };\n    initialRotation = getInitialBoxRotation();\n  }\n  function dragRotate(e) {\n    if (!dragging) {\n      return;\n    }\n    const currentPosition = {\n      x: e.pageX,\n      y: e.pageY\n    };\n    const delta = {\n      x: (currentPosition.x - initialPosition.x) / window.innerWidth * 360,\n      y: (initialPosition.y - currentPosition.y) / window.innerHeight * 360\n    };\n    const rootElement = root;\n    rootElement.style.setProperty(cssRotXVarName, `${delta.y + initialRotation.rotX}deg`);\n    rootElement.style.setProperty(cssRotYVarName, `${delta.x + initialRotation.rotY}deg`);\n    let rotateParam = \"\";\n    rotateParam += ` rotateX(${delta.y + initialRotation.rotX}deg)`;\n    rotateParam += ` rotateY(${delta.x + initialRotation.rotY}deg)`;\n    const cubeElement = cube;\n    cubeElement.style.transform = rotateParam;\n  }\n  function endDragRotate() {\n    if (!dragging) {\n      return;\n    }\n    dragging = false;\n  }\n  container.addEventListener(\"mousedown\", initDragRotate);\n  container.addEventListener(\"mousemove\", dragRotate);\n  container.addEventListener(\"mouseup\", endDragRotate);\n  return {\n    initDragRotate,\n    dragRotate,\n    endDragRotate\n  };\n}\n\n// eslint-disable-next-line no-unused-vars\nconst mainBoxRotateController = createRotateController(cachedDOM.$root, cachedDOM.$container, cachedDOM.$box, \"--initialRotateX\", \"--initialRotateY\");\nfunction showNavMessage() {\n  const {\n    $navMessage\n  } = cachedDOM;\n  $navMessage.classList.remove(\"hide\");\n  $navMessage.classList.add(\"active\");\n}\nfunction hideNavMessage() {\n  const {\n    $navMessage\n  } = cachedDOM;\n  $navMessage.classList.remove(\"active\");\n  $navMessage.classList.add(\"hide\");\n}\nfunction removeClassesFromElement(classNameArray, element) {\n  classNameArray.forEach(className => {\n    element.classList.remove(className);\n  });\n}\nfunction createNavListeners() {\n  const additionalClassesArray = [\"projectsActive\", \"educationActive\", \"aboutActive\", \"contactActive\"];\n  cachedDOM.$projectsFace.addEventListener(\"dblclick\", () => {\n    removeClassesFromElement(additionalClassesArray, cachedDOM.$box);\n    cachedDOM.$box.classList.add(\"projectsActive\");\n    cachedDOM.$projectsGroup.classList.add(\"open\");\n    hideNavMessage();\n  });\n  cachedDOM.$projectsFace.addEventListener(\"dblclick\", () => {\n    console.log(\"Projects\");\n  });\n  cachedDOM.$aboutFace.addEventListener(\"dblclick\", () => {\n    console.log(\"About\");\n  });\n  cachedDOM.$contactFace.addEventListener(\"dblclick\", () => {\n    console.log(\"Contact\");\n  });\n  cachedDOM.$box.addEventListener(\"animationend\", () => {\n    showNavMessage();\n\n    /* The following style element sets the box's default coordinates. If the user does\n    not drag the box before double clicking a page, these will be the starting coordinates\n    for rotating the box. */\n    cachedDOM.$box.style.transform = \"rotateX(var(--initialRotateX)) rotateY(var(--initialRotateY))\";\n  }, {\n    once: true\n  });\n}\ncreateNavListeners();\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/outputHandler.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Defaults */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\nbutton,\nfieldset,\ninput,\nlegend,\nselect,\ntextarea {\n  appearance: none;\n}\n\n/* End of Defaults */\n\n:root {\n  --initialRotateX: -15deg;\n  --initialRotateY: -37deg;\n  --defaultBoxTranslations: translateZ(100px) translateY(-100px)\n    translateX(-100px);\n  --rotateDuration: 1s;\n  --openingDuration: 1s;\n  --zoomDuration: 1s;\n  --textColor: white;\n  --themeColor: black;\n  --foregroundColor: rgba(0, 0, 0, 0);\n  --introSubtitleLength: 355px;\n  --introMessageTypingHoldTime: 2s;\n  --introMessageTypingTime: 1.5s;\n  --introMessageHideStart: 1s;\n  --introMessageFadeHoldTime: calc(\n    var(--introMessageTypingHoldTime) + var(--introMessageTypingTime) + 1s\n  );\n  --introMessageFadeTime: 1s;\n  --introBoxHoldTime: calc(\n    var(--introMessageFadeHoldTime) + var(--introMessageFadeTime) + 0.5s\n  );\n  --introNavHoldTime: calc(var(--introBoxHoldTime) + 2s);\n  --titleFont: Arial, Helvetica, sans-serif;\n}\n\n/* Start of intro message styling */\n\n.intro-message {\n  position: absolute;\n  justify-content: center;\n  text-align: center;\n  width: var(--introSubtitleLength);\n  background-color: var(--themeColor);\n  color: var(--textColor);\n  font-family: var(--titleFont);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  animation: hideIntro var(--introMessageFadeTime) ease-in\n    var(--introMessageFadeHoldTime) 1 normal forwards;\n}\n\n@keyframes hideIntro {\n  0% {\n    opacity: 100%;\n  }\n\n  99% {\n    opacity: 0%;\n    transform: translate(-50%, -50%);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -1000px);\n  }\n}\n\n.typing-wrapper {\n  display: grid;\n  place-items: center;\n}\n\n.intro-subtitle {\n  width: 0;\n  animation: typing var(--introMessageTypingTime) steps(24)\n      var(--introMessageTypingHoldTime) forwards,\n    blink 0.5s step-end 3 alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  outline: 0;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 1rem;\n}\n\n@keyframes typing {\n  to {\n    width: var(--introSubtitleLength);\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-right-color: transparent;\n  }\n}\n\n/* End of intro message styling */\n\n/* Start of nav message styling */\n\n.nav-message {\n  position: absolute;\n  top: 10%;\n  justify-content: center;\n  text-align: center;\n  background-color: var(--themeColor);\n  color: var(--textColor);\n  font-family: var(--titleFont);\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  pointer-events: none;\n}\n\n.nav-message.active {\n  opacity: 1;\n  pointer-events: all;\n  animation: hideText 1s ease-in 0s 1 reverse backwards;\n}\n\n.nav-message.hide {\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 1s;\n}\n\n@keyframes hideText {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n/* End of nav message styling */\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--themeColor);\n  margin: auto;\n  perspective: 600px;\n  overflow: hidden;\n}\n\n.box {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: rotateX(var(--initialRotateX)) rotateY(var(--initialRotateY))\n    translateY(-1000px) rotateZ(349deg);\n\n  animation: boxIntro 2s cubic-bezier(0.43, 1.72, 1, 1.02)\n    var(--introBoxHoldTime) 1 normal forwards;\n}\n\n@keyframes boxIntro {\n  100% {\n    transform: rotateX(var(--initialRotateX)) rotateY(var(--initialRotateY));\n  }\n}\n\n@keyframes rotateToFace {\n  0% {\n  }\n\n  34% {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n\n  67% {\n    transform: rotate(0deg) translateZ(0px);\n  }\n\n  100% {\n    transform: rotateZ(180deg) translateZ(500px);\n  }\n}\n\n.box.projectsActive {\n  animation: rotateToFace\n    calc(var(--rotateDuration) + var(--rotateDuration) + var(--zoomDuration))\n    ease-in-out 0s 1 normal forwards;\n}\n\n.box-face {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--foregroundColor);\n  color: var(--textColor);\n  user-select: none;\n  font-family: var(--titleFont);\n}\n\n.box .frontFace {\n  transform: rotateY(0deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .frontRear {\n  transform: translateZ(-1px);\n}\n\n@keyframes slideOpen {\n  0% {\n    transform: var(--defaultBoxTranslations);\n  }\n\n  50% {\n    transform: var(--defaultBoxTranslations) translateY(50px);\n  }\n\n  100% {\n    transform: var(--defaultBoxTranslations) translateY(100vh);\n  }\n}\n.frontFace.open {\n  animation: slideOpen 1s ease-in-out var(--rotateDuration) 1 normal forwards;\n}\n\n.box .rightFace {\n  transform: rotateY(90deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .rightRear {\n  transform: translateZ(-1px);\n}\n\n.box .backFace {\n  transform: rotateY(180deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .backRear {\n  transform: translateZ(-1px);\n}\n\n.box .leftFace {\n  transform: rotateY(-90deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .leftRear {\n  transform: translateZ(-1px);\n}\n\n.box .topFace {\n  transform: rotateX(90deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .topRear {\n  transform: translateZ(-1px);\n}\n\n.box .bottomFace {\n  transform: rotateX(-90deg) var(--defaultBoxTranslations);\n  transform-style: preserve-3d;\n}\n.box .bottomRear {\n  transform: translateZ(-1px);\n}\n\n.box-face.rear {\n  border: 1px solid silver;\n  background-color: #181818;\n}\n\n/* Start of Projects page styling */\n\n.page {\n  height: 100vh;\n  background-color: black;\n  color: white;\n  padding: 10px;\n  overflow-y: auto;\n}\n\n.header {\n  font-family: var(--titleFont);\n  text-align: center;\n  padding: 50px;\n}\n\n.main {\n  font-family: var(--titleFont);\n}\n\n.projects-page {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.project-section {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 3fr;\n  gap: 50px;\n}\n\n.project-section > img {\n  grid-area: 1 / 1 / 3 / 2;\n  width: 100%;\n  border-radius: 5px;\n}\n/* End of Projects page styling */\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_eslint_prettier_template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;