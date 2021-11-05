"use strict";
(self["webpackChunkhomework_7"] = self["webpackChunkhomework_7"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/app/const.js":
/*!**************************!*\
  !*** ./src/app/const.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_WIDTH": () => (/* binding */ BOARD_WIDTH),
/* harmony export */   "BOARD_HEIGHT": () => (/* binding */ BOARD_HEIGHT),
/* harmony export */   "SQUARE_SIZE": () => (/* binding */ SQUARE_SIZE),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "LETTER_SIZE": () => (/* binding */ LETTER_SIZE),
/* harmony export */   "LETTER_SPACE": () => (/* binding */ LETTER_SPACE),
/* harmony export */   "defaultText": () => (/* binding */ defaultText)
/* harmony export */ });
const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 400;
const SQUARE_SIZE = 20;
const COLORS = ['#FFFF00', '#FFD700', '#FF8C00', '#FF4500', '#FF6347', '#FF7F50', '#FFA07A'];
const LETTER_SIZE = 5;
const LETTER_SPACE = 1;
const defaultText = {
  "sh": [[1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 1]],
  "r": [[0, 1, 1, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0]],
  "i": [[1, 0, 0, 1, 0], [1, 0, 0, 1, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 0], [1, 0, 0, 1, 0]],
  "heart": [[1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]]
};

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/app/const.js");
/* harmony import */ var _js_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/send */ "./src/app/js/send.js");
/* harmony import */ var _js_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/detect */ "./src/app/js/detect.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/app/styles.css");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./src/const.js");





let counter = new _js_send__WEBPACK_IMPORTED_MODULE_1__["default"]();
counter.init(_const__WEBPACK_IMPORTED_MODULE_4__.counterId, String(Math.random()).substr(2, 12), 'game');
counter.setAdditionalParams({
  platform: navigator.platform,
  browser: (0,_js_detect__WEBPACK_IMPORTED_MODULE_2__.detectBrowser)()
});

const getRandomColor = () => {
  const index = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.COLORS.length);
  return _const__WEBPACK_IMPORTED_MODULE_0__.COLORS[index];
};

const setColor = el => {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = el => {
  el.style.backgroundColor = '#1D1D1D';
  el.style.boxShadow = '0 0 2px #1D1D1D';
};

const drawLetter = (letter, offsetX, offsetY = 0) => {
  // offsetX, offsetY - отступы от начала координат (верхний левый угол)
  // xSize - длина буквы; ySize - высота буквы;
  let xSize = letter[0].length;
  let ySize = letter.length;

  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      let index = BOARD_LENGTH * (y + offsetY) + (x + offsetX);
      letter[y][x] && setColor(board.children[index]);
    }
  }
};

const paintLetters = text => {
  const letters = Object.values(text);
  letters.forEach((letter, index) => {
    drawLetter(letter, _const__WEBPACK_IMPORTED_MODULE_0__.LETTER_SIZE * index + _const__WEBPACK_IMPORTED_MODULE_0__.LETTER_SIZE, _const__WEBPACK_IMPORTED_MODULE_0__.LETTER_SPACE + _const__WEBPACK_IMPORTED_MODULE_0__.LETTER_SIZE);
  });
};

const initBoard = () => {
  let drawStart = Date.now();

  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.setAttribute('data-id', String(i));
    square.classList.add('square');
    square.addEventListener('mouseover', e => setColor(e.target));
    square.addEventListener('mouseleave', e => removeColor(e.target));
    board.appendChild(square);
  }

  requestAnimationFrame(function () {
    counter.send('ttfmp', Date.now() - drawStart);
  });
};

if (window.performance) {
  let performance = window.performance;
  let navigation = performance.getEntriesByType("navigation")[0];
  counter.send('ttfb', navigation.responseEnd - navigation.requestStart);
  counter.send('connect', navigation.connectEnd - navigation.connectStart);
}

window.addEventListener("load", () => {
  let paintMetrics = performance.getEntriesByType("paint");

  if (paintMetrics !== undefined && paintMetrics.length > 0) {
    paintMetrics.forEach(paintMetric => {
      if (paintMetric.name === 'first-contentful-paint') {
        counter.send('ttfcp', paintMetric.startTime);
      }
    });
  }
});
const board = document.querySelector('#board');
const button = document.querySelector('#surprise-button');
board.style.width = _const__WEBPACK_IMPORTED_MODULE_0__.BOARD_WIDTH + 'px';
const SQUARES_NUMBER = _const__WEBPACK_IMPORTED_MODULE_0__.BOARD_WIDTH * _const__WEBPACK_IMPORTED_MODULE_0__.BOARD_HEIGHT / (_const__WEBPACK_IMPORTED_MODULE_0__.SQUARE_SIZE * _const__WEBPACK_IMPORTED_MODULE_0__.SQUARE_SIZE);
const BOARD_LENGTH = _const__WEBPACK_IMPORTED_MODULE_0__.BOARD_WIDTH / _const__WEBPACK_IMPORTED_MODULE_0__.SQUARE_SIZE;
initBoard();
button.addEventListener('click', () => paintLetters(_const__WEBPACK_IMPORTED_MODULE_0__.defaultText));

/***/ }),

/***/ "./src/app/js/detect.js":
/*!******************************!*\
  !*** ./src/app/js/detect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectBrowser": () => (/* binding */ detectBrowser)
/* harmony export */ });
const detectBrowser = () => {
  let result = 'Other';

  if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
    result = 'Yandex Browser';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    result = 'Mozilla Firefox';
  } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
    result = 'Internet Exploder';
  } else if (navigator.userAgent.indexOf('Edge') !== -1) {
    result = 'Microsoft Edge';
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    result = 'Safari';
  } else if (navigator.userAgent.indexOf('Opera') !== -1) {
    result = 'Opera';
  } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    result = 'Google Chrome';
  }

  return result;
};

/***/ }),

/***/ "./src/app/js/send.js":
/*!****************************!*\
  !*** ./src/app/js/send.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Лимит на число счетчиков в одном запросе
 *
 * @type {Number}
 */
const MAX_BATCH_COUNTERS = 42;
/**
 * Интервал в миллисекундах, в течение которого счётчики склеиваются
 *
 * @type {Number}
 */

const COUNTERS_BATCH_TIMEOUT = 15;

function Counter() {
  this.guid = '';
  this.reqid = '';
  this.page = '';
  this.additional = {};
  this._inited = false;
  this._indexes = {};
  this._countersBatchData = [];
  this._counterTimerId = null;
  this.counterUrl = 'https://shri.yandex/hw/stat/send';
}

Counter.prototype.init = function (guid, reqid, page) {
  if (guid && reqid && page) {
    this.guid = guid;
    this.reqid = reqid;
    this.page = page;
    this._inited = true;
  }
};

Counter.prototype.setAdditionalParams = function (additionalParams) {
  this.additional = Object.assign({}, additionalParams);
};
/**
 * Отправка счётчика. Основной транспорт - sendBeacon, запасной - XMLHttpRequest. Быстро поступающие одиночные события
 * накапливаются и отправляются пачками по MAX_BATCH_COUNTERS штук.
 *
 * @param {String} name
 * @param {Number} value
 */


Counter.prototype.send = function (name, value) {
  if (!this._inited) {
    console.warn('counter is not inited');
    return;
  }

  clearTimeout(this._counterTimerId);

  if (!this._indexes[name]) {
    this._indexes[name] = 0;
  }

  var counterData = {
    counterId: this.guid,
    requestId: this.reqid,
    page: this.page,
    name: name,
    value: value,
    index: this._indexes[name],
    additional: this.additional
  },
      self = this;

  this._countersBatchData.push(counterData);

  this._indexes[name]++;

  if (this._countersBatchData.length < MAX_BATCH_COUNTERS) {
    this._counterTimerId = setTimeout(function () {
      self.sendBatchRequest();
    }, COUNTERS_BATCH_TIMEOUT);
  } else {
    self.sendBatchRequest();
  }
};

Counter.prototype.sendBatchRequest = function () {
  var data = JSON.stringify(this._countersBatchData);
  this._countersBatchData = [];
  this._counterTimerId = null;
  var sendBeaconPostAvailable = navigator.sendBeacon,
      sendBeaconResult = sendBeaconPostAvailable && navigator.sendBeacon(this.counterUrl, new Blob([data], {
    type: 'application/json'
  }));

  if (!sendBeaconResult) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.counterUrl);
    xhr.send(data);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterId": () => (/* binding */ counterId)
/* harmony export */ });
const counterId = 'D9F99E50-3339-11EC-9EDF-7F93090795B7';

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #111;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.square {\n  width: 16px;\n  height: 16px;\n  background: #1D1D1D;\n  margin: 2px;\n  box-shadow: 0 0 2px #000000;\n  transition: 2s ease;\n}\n\n.square:hover {\n  transition-duration: 0s;\n}\n\n.surprise-button {\n  height: 30px;\n  margin-top: 10px;\n  color: #000000;\n  background: #edeacb;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.surprise-button:hover {\n  background: #dad7b8;\n}\n\n.timer {\n  color: #FFFFFF;\n}\n\n.statistics-link {\n  color: #edeacb;\n  text-decoration: none;\n  margin-bottom: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/app/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #111;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.square {\n  width: 16px;\n  height: 16px;\n  background: #1D1D1D;\n  margin: 2px;\n  box-shadow: 0 0 2px #000000;\n  transition: 2s ease;\n}\n\n.square:hover {\n  transition-duration: 0s;\n}\n\n.surprise-button {\n  height: 30px;\n  margin-top: 10px;\n  color: #000000;\n  background: #edeacb;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.surprise-button:hover {\n  background: #dad7b8;\n}\n\n.timer {\n  color: #FFFFFF;\n}\n\n.statistics-link {\n  color: #edeacb;\n  text-decoration: none;\n  margin-bottom: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app/styles.css":
/*!****************************!*\
  !*** ./src/app/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app/index.js"));
/******/ }
]);
//# sourceMappingURL=index.js.map