/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Angelina-rnlA.otf */ "./src/Angelina-rnlA.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./AnandaBlackPersonalUseRegular-rg9Rx.ttf */ "./src/AnandaBlackPersonalUseRegular-rg9Rx.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: angelina-font;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
	font-family: amanda-black;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
	--max-width-per-container: 1300px;
}

body {
	margin: 0;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	background-color: #f7ebd4;
}

ul {
	padding: 0;
	margin: 0;
	display: flex;
}

li {
	list-style-type: none;
}

button {
	border: none;
	cursor: pointer;
}

.nav-wrapper {
	background-color: hsl(39, 77%, 83%);
	display: flex;
	justify-content: center;
}

nav {
	display: flex;
	align-items: center;
	max-width: var(--max-width-per-container);
	flex-grow: 1;

	.logo {
		font-size: 48px;
		font-family: amanda-black;
		margin-right: auto;
	}

	button {
		color: #444444;
		background-color: inherit;
		font-size: 20px;
		padding: 8px 16px;
		border-radius: 8px;
	}

	button:hover, button.toggled {
		color: black;
		background-color: hsl(39, 84%, 74%);
		box-shadow: 0px 2px 4px hsl(39, 95%, 67%);
	}

	button:active {
		box-shadow: 0px 2px 4px hsl(46, 95%, 45%);
	}

	ul {
		gap: 16px;
	}
}

.content-wrapper {
	background-color: #f7ebd4;
	display: flex;
	justify-content: space-around;
}

.images {
	display: flex;
	align-items: center;
}

#content {
	max-width: var(--max-width-per-container);
	flex-grow: 1;
	display: flex;
	padding: 16px;

	.description {
		display: flex;
		flex-direction: column;
		padding: 16px;
		gap: 16px;
	}
}

.desc-header {
	font-family: amanda-black;
	margin-bottom: 16px;
	font-size: 24px;
	text-align: center;
	text-decoration: underline;
	text-underline-offset: 8px;
}

.desc-card {
	box-sizing: border-box;
	padding: 24px;
	border-radius: 12px;
	line-height: 1.8;
	background-color: hsl(34, 85%, 87%);
	border: 1px solid hsl(39, 84%, 74%);
	box-shadow: 1px 1px 8px hsl(39, 90%, 65%);

	/* this is divContent in util.js */
	div {
		display: flex;
		justify-content: center;
		.side-by-side-container ul, ul {
			flex-direction: column;
		}

		.menu-container {
			flex-grow: 1;

			display: flex;
			justify-content: space-between;
		}

		.list-container {
			display: flex;
			flex-direction: column;
			flex-basis: 50%;
			flex-shrink: 1;
			.name-and-price {
				display: flex;
				justify-content: space-between;
				width: 100%;
				font-size: 18px;
				> div:nth-child(1) {
					font-style: italic;
					color: hsl(24, 95%, 30%);
				}
			}

			.food-description {
				color:  hsl(24, 70%, 60%);
			}

			ul {
				gap: 16px;
			}

			li {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				width: 500px;
			}
		}

		.menu-images {
			flex-basis: 50%;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-content: flex-start;
			gap: 12px;
			
			.image-number-pair {
				display: flex;
				flex-direction: column;

				img {
					border-radius: 8px;
					width: 200px;
					height: auto;
				}
			}
		}
	}
}

.menu {
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-grow: 1;
	gap: 16px;
}

.contact {
	flex-grow: 1;
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.footer {
	text-align: center;
	padding: 16px;
	background-color: #f7ebd4;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;CACC,0BAA0B;CAC1B,4CAA+B;AAChC;;AAEA;CACC,yBAAyB;CACzB,4CAAqD;AACtD;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,SAAS;CACT,sHAAsH;CACtH,yBAAyB;AAC1B;;AAEA;CACC,UAAU;CACV,SAAS;CACT,aAAa;AACd;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,mCAAmC;CACnC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,yCAAyC;CACzC,YAAY;;CAEZ;EACC,eAAe;EACf,yBAAyB;EACzB,kBAAkB;CACnB;;CAEA;EACC,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;;CAEA;EACC,YAAY;EACZ,mCAAmC;EACnC,yCAAyC;CAC1C;;CAEA;EACC,yCAAyC;CAC1C;;CAEA;EACC,SAAS;CACV;AACD;;AAEA;CACC,yBAAyB;CACzB,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,yCAAyC;CACzC,YAAY;CACZ,aAAa;CACb,aAAa;;CAEb;EACC,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;CACV;AACD;;AAEA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,eAAe;CACf,kBAAkB;CAClB,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC,sBAAsB;CACtB,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,mCAAmC;CACnC,mCAAmC;CACnC,yCAAyC;;CAEzC,kCAAkC;CAClC;EACC,aAAa;EACb,uBAAuB;EACvB;GACC,sBAAsB;EACvB;;EAEA;GACC,YAAY;;GAEZ,aAAa;GACb,8BAA8B;EAC/B;;EAEA;GACC,aAAa;GACb,sBAAsB;GACtB,eAAe;GACf,cAAc;GACd;IACC,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,eAAe;IACf;KACC,kBAAkB;KAClB,wBAAwB;IACzB;GACD;;GAEA;IACC,yBAAyB;GAC1B;;GAEA;IACC,SAAS;GACV;;GAEA;IACC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;GACb;EACD;;EAEA;GACC,eAAe;GACf,eAAe;GACf,2BAA2B;GAC3B,yBAAyB;GACzB,SAAS;;GAET;IACC,aAAa;IACb,sBAAsB;;IAEtB;KACC,kBAAkB;KAClB,YAAY;KACZ,YAAY;IACb;GACD;EACD;CACD;AACD;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,sBAAsB;CACtB,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,SAAS;CACT,2DAA2D;AAC5D;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,yBAAyB;AAC1B","sourcesContent":["@font-face {\r\n\tfont-family: angelina-font;\r\n\tsrc: url(\"./Angelina-rnlA.otf\");\r\n}\r\n\r\n@font-face {\r\n\tfont-family: amanda-black;\r\n\tsrc: url(\"./AnandaBlackPersonalUseRegular-rg9Rx.ttf\");\r\n}\r\n\r\n:root {\r\n\t--max-width-per-container: 1300px;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\tbackground-color: #f7ebd4;\r\n}\r\n\r\nul {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tdisplay: flex;\r\n}\r\n\r\nli {\r\n\tlist-style-type: none;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.nav-wrapper {\r\n\tbackground-color: hsl(39, 77%, 83%);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmax-width: var(--max-width-per-container);\r\n\tflex-grow: 1;\r\n\r\n\t.logo {\r\n\t\tfont-size: 48px;\r\n\t\tfont-family: amanda-black;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\r\n\tbutton {\r\n\t\tcolor: #444444;\r\n\t\tbackground-color: inherit;\r\n\t\tfont-size: 20px;\r\n\t\tpadding: 8px 16px;\r\n\t\tborder-radius: 8px;\r\n\t}\r\n\r\n\tbutton:hover, button.toggled {\r\n\t\tcolor: black;\r\n\t\tbackground-color: hsl(39, 84%, 74%);\r\n\t\tbox-shadow: 0px 2px 4px hsl(39, 95%, 67%);\r\n\t}\r\n\r\n\tbutton:active {\r\n\t\tbox-shadow: 0px 2px 4px hsl(46, 95%, 45%);\r\n\t}\r\n\r\n\tul {\r\n\t\tgap: 16px;\r\n\t}\r\n}\r\n\r\n.content-wrapper {\r\n\tbackground-color: #f7ebd4;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.images {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#content {\r\n\tmax-width: var(--max-width-per-container);\r\n\tflex-grow: 1;\r\n\tdisplay: flex;\r\n\tpadding: 16px;\r\n\r\n\t.description {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tpadding: 16px;\r\n\t\tgap: 16px;\r\n\t}\r\n}\r\n\r\n.desc-header {\r\n\tfont-family: amanda-black;\r\n\tmargin-bottom: 16px;\r\n\tfont-size: 24px;\r\n\ttext-align: center;\r\n\ttext-decoration: underline;\r\n\ttext-underline-offset: 8px;\r\n}\r\n\r\n.desc-card {\r\n\tbox-sizing: border-box;\r\n\tpadding: 24px;\r\n\tborder-radius: 12px;\r\n\tline-height: 1.8;\r\n\tbackground-color: hsl(34, 85%, 87%);\r\n\tborder: 1px solid hsl(39, 84%, 74%);\r\n\tbox-shadow: 1px 1px 8px hsl(39, 90%, 65%);\r\n\r\n\t/* this is divContent in util.js */\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\t.side-by-side-container ul, ul {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\r\n\t\t.menu-container {\r\n\t\t\tflex-grow: 1;\r\n\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\r\n\t\t.list-container {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tflex-basis: 50%;\r\n\t\t\tflex-shrink: 1;\r\n\t\t\t.name-and-price {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\t> div:nth-child(1) {\r\n\t\t\t\t\tfont-style: italic;\r\n\t\t\t\t\tcolor: hsl(24, 95%, 30%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.food-description {\r\n\t\t\t\tcolor:  hsl(24, 70%, 60%);\r\n\t\t\t}\r\n\r\n\t\t\tul {\r\n\t\t\t\tgap: 16px;\r\n\t\t\t}\r\n\r\n\t\t\tli {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t\twidth: 500px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.menu-images {\r\n\t\t\tflex-basis: 50%;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\talign-content: flex-start;\r\n\t\t\tgap: 12px;\r\n\t\t\t\r\n\t\t\t.image-number-pair {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\r\n\t\t\t\timg {\r\n\t\t\t\t\tborder-radius: 8px;\r\n\t\t\t\t\twidth: 200px;\r\n\t\t\t\t\theight: auto;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.menu {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tflex-grow: 1;\r\n\tgap: 16px;\r\n}\r\n\r\n.contact {\r\n\tflex-grow: 1;\r\n\tdisplay: grid;\r\n\tgap: 16px;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n}\r\n\r\n.footer {\r\n\ttext-align: center;\r\n\tpadding: 16px;\r\n\tbackground-color: #f7ebd4;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


function createContact(number, email) {
    const ulPerson = document.createElement("ul");
    const liPersonNumber = document.createElement("li");
    const liPersonEmail = document.createElement("li");
    liPersonNumber.textContent = number;
    liPersonEmail.textContent = email;

    ulPerson.append(liPersonNumber, liPersonEmail);
    return ulPerson;
}

function renderContact() {
    const divContact = document.createElement("div");
    divContact.classList.add("contact");

    divContact.append(
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Manager", createContact("123-456-789", "TheOdinProjectIsCool@epicness.com")),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Chef", createContact("987-654-321", "looCsItcejorPnidOehT@ssencipe.moc")),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Owner", createContact("824-218-510", "WhatIsAGoodEmail@questionmark.com")),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Son Of Owner", createContact("219-120-321", "UnrealisticEmployee@what.com")),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Granddaughter of Owner", createContact("123-021-912", "eeyolpmEcitsilaernU@tahw.moc")),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)("Waitress", createContact("123-999-000", "Bruh@whatisthis.com")),
    )
    return [divContact];
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _DuckCollage_space_rounded_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DuckCollage_space_rounded.png */ "./src/DuckCollage_space_rounded.png");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");



function renderHome() {
    const introString = 
        `In Quack Bistro, we take great pleasure in showcasing the culinary talent
        that honors duck in all of its flavorful splendor. Our menu highlights a
        wide variety of duck cuisine, with dishes ranging from soft confit, stews, to crispy skin.
        Each bite is a symphony of flavors, textures, and scents, enhanced by the use of our locally-grown
        seasonal ingredients. Whether you are a food vlogger, food connoisseur of fine
        dining, or simply desiring a delectable meal with friends a familty, Quack Bistro
        serves you with an unforgettable dining experience with every dish leaving you
        wanting for more.`;

    let nodes = [];
    const divDescription = document.createElement("div");
    divDescription.classList.add("description");

    const divIntroString = document.createElement("div");
    divIntroString.textContent = introString;

    divDescription.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescCard)("Welcome to Quack Bistro.", divIntroString));
    
    const ulSchedule = document.createElement("ul");
    const liWeekday = document.createElement("li");
    const liSaturday = document.createElement("li");
    const liSunday = document.createElement("li");

    liWeekday.textContent = "Weekdays: 8am - 6pm";
    liSaturday.textContent = "Saturday: 8am - 4pm";
    liSunday.textContent = "Sunday: 8am - 2pm";

    ulSchedule.append(liWeekday, liSaturday, liSunday);

    divDescription.appendChild((0,_util__WEBPACK_IMPORTED_MODULE_1__.createDescCard)("Schedule Hours", ulSchedule));

    const divImage = document.createElement("div");
    divImage.classList.add("images");

    const duckLivesMatter = document.createElement("img");
    duckLivesMatter.src = _DuckCollage_space_rounded_png__WEBPACK_IMPORTED_MODULE_0__;
    duckLivesMatter.width = "600";
    //duckStew.height = "647";
    duckLivesMatter.height = "660";

    divImage.appendChild(duckLivesMatter);

    return [divDescription, divImage];
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _DuckConfitCrostiniWithParsnipPureeAndFig_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DuckConfitCrostiniWithParsnipPureeAndFig.png */ "./src/DuckConfitCrostiniWithParsnipPureeAndFig.png");
/* harmony import */ var _RoastedGarlicSoupwithParmesanCheese_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoastedGarlicSoupwithParmesanCheese.jpg */ "./src/RoastedGarlicSoupwithParmesanCheese.jpg");
/* harmony import */ var _HosinDuckBao_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HosinDuckBao.png */ "./src/HosinDuckBao.png");
/* harmony import */ var _HoisinDuckAndCucumberBites_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HoisinDuckAndCucumberBites.jpg */ "./src/HoisinDuckAndCucumberBites.jpg");
/* harmony import */ var _DuckStew_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DuckStew.jpg */ "./src/DuckStew.jpg");
/* harmony import */ var _DuckRoasted_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DuckRoasted.jpg */ "./src/DuckRoasted.jpg");
/* harmony import */ var _SlowRoastDuckLegs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SlowRoastDuckLegs.png */ "./src/SlowRoastDuckLegs.png");
/* harmony import */ var _PeachBellini_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PeachBellini.jpg */ "./src/PeachBellini.jpg");
/* harmony import */ var _ChocolateMilkshake_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChocolateMilkshake.jpg */ "./src/ChocolateMilkshake.jpg");
/* harmony import */ var _StrawberrySoda_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StrawberrySoda.jpg */ "./src/StrawberrySoda.jpg");


// https://www.parsnipsandpastries.com/duck-confit-crostini/


// https://gooddinnermom.com/roasted-garlic-soup/


// https://whiteplateblankslate.com/hoisin-duck-bao/


// https://easyfood.ie/recipe/hoisin-duck-and-cucumber-bites/


// https://dishingupthedirt.com/recipes/harvest-duck-stew/


//https://rivercottagefarm.net/roasted-duck-101/


//https://www.krumpli.co.uk/roast-duck-legs/


// https://www.thepioneerwoman.com/food-cooking/recipes/a39540224/peach-bellini-recipe/


// https://valentinascorner.com/chocolate-milkshake-recipe/


// https://divascancook.com/strawberry-soda-recipe-juneteenth/


function createFoodListItem(foodName, costInDollarsStr, description) {
    const liResult = document.createElement("li");
    const divNameAndPrice = document.createElement("div");
    divNameAndPrice.setAttribute("class", "name-and-price");

    const divName = document.createElement("div");
    divName.textContent = foodName;

    const divPrice = document.createElement("div");
    divPrice.textContent = costInDollarsStr;

    divNameAndPrice.append(divName, divPrice);

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "food-description");
    divDescription.textContent = description;

    liResult.append(divNameAndPrice, divDescription);

    return(liResult);
}

function createFoodCategory(categoryName, foodDatabase) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "menu-container");
    
    const divListContainer = document.createElement("div");
    divListContainer.setAttribute("class", "list-container");
    
    const divImageContainer = document.createElement("div");
    divImageContainer.setAttribute("class", "menu-images");

    const ulFoods = document.createElement("ul");

    foodDatabase.forEach((food, idx) => {
        ulFoods.appendChild(createFoodListItem(`(${idx + 1}) ` + food.name, "$" + food.price, food.description));
        
        const img = document.createElement("img");
        img.src = food.imageSrc;

        const imgNumber = document.createElement("div");
        imgNumber.textContent = `(${idx + 1})`;

        const divImageNumberPair = document.createElement("div");
        divImageNumberPair.setAttribute("class", "image-number-pair");
        divImageNumberPair.append(img, imgNumber);

        divImageContainer.append(divImageNumberPair);
    });

    divListContainer.appendChild(ulFoods);
    
    divContainer.append(divListContainer, divImageContainer);

    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.createDescCard)(categoryName, divContainer);
}

function renderMenu() {
    // the hardest part is researching foods
    const appetizerList = [
        {
            name: "Duck Confit Crostini With Parsnip Puree and Fig",
            price: "7",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _DuckConfitCrostiniWithParsnipPureeAndFig_png__WEBPACK_IMPORTED_MODULE_1__,
        },
        {
            name: "Roasted Garlic Soup with Parmesan Cheese",
            price: "4",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _RoastedGarlicSoupwithParmesanCheese_jpg__WEBPACK_IMPORTED_MODULE_2__,
        },
        {
            name: "Hoisin Duck Bao",
            price: "8",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _HosinDuckBao_png__WEBPACK_IMPORTED_MODULE_3__,
        },
        {
            name: "Hoisin Duck And Cucumber Bites",
            price: "7",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _HoisinDuckAndCucumberBites_jpg__WEBPACK_IMPORTED_MODULE_4__
        }
    ];

    const entreeList = [
        {
            name: "Harvest Duck Stew",
            price: "11",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _DuckStew_jpg__WEBPACK_IMPORTED_MODULE_5__
        },
        {
            name: "Roasted Duck",
            price: "12",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _DuckRoasted_jpg__WEBPACK_IMPORTED_MODULE_6__
        },
        {
            name: "Slow Roast Duck Legs",
            price: "14",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _SlowRoastDuckLegs_png__WEBPACK_IMPORTED_MODULE_7__
        }
    ];

    const beverageList = [
        {
            name: "Peach Bellini",
            price: "4",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _PeachBellini_jpg__WEBPACK_IMPORTED_MODULE_8__
        },
        {
            name: "Chocolate Milkshake",
            price: "3",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _ChocolateMilkshake_jpg__WEBPACK_IMPORTED_MODULE_9__
        },
        {
            name: "Strawberry Soda",
            price: "3",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: _StrawberrySoda_jpg__WEBPACK_IMPORTED_MODULE_10__
        }
    ];

    const divMenu = document.createElement("div");
    divMenu.setAttribute("class", "menu");
    divMenu.append(
        createFoodCategory("Appetizer", appetizerList),
        createFoodCategory("Entrée", entreeList),
        createFoodCategory("Beverage", beverageList)
    );
    return [divMenu];
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDescCard: () => (/* binding */ createDescCard)
/* harmony export */ });
function createDescCard(headerText, content) {
    const divCard = document.createElement("div");
    divCard.classList.add("desc-card");

    const divHeader = document.createElement("div");
    divHeader.classList.add("desc-header");
    divHeader.textContent = headerText;

    const divContent = document.createElement("div");
    divContent.appendChild(content);

    divCard.append(divHeader, divContent);

    return divCard;
}



/***/ }),

/***/ "./src/AnandaBlackPersonalUseRegular-rg9Rx.ttf":
/*!*****************************************************!*\
  !*** ./src/AnandaBlackPersonalUseRegular-rg9Rx.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb04dce4c2b321e2ef0a.ttf";

/***/ }),

/***/ "./src/Angelina-rnlA.otf":
/*!*******************************!*\
  !*** ./src/Angelina-rnlA.otf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4997ff33d072c402b6c.otf";

/***/ }),

/***/ "./src/ChocolateMilkshake.jpg":
/*!************************************!*\
  !*** ./src/ChocolateMilkshake.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cb4be10f09b2cdc4700.jpg";

/***/ }),

/***/ "./src/DuckCollage_space_rounded.png":
/*!*******************************************!*\
  !*** ./src/DuckCollage_space_rounded.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f671e583128aa4c7809b.png";

/***/ }),

/***/ "./src/DuckConfitCrostiniWithParsnipPureeAndFig.png":
/*!**********************************************************!*\
  !*** ./src/DuckConfitCrostiniWithParsnipPureeAndFig.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3a1985dbdc61fdac4dd.png";

/***/ }),

/***/ "./src/DuckRoasted.jpg":
/*!*****************************!*\
  !*** ./src/DuckRoasted.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b658a8b75fbaac1234ba.jpg";

/***/ }),

/***/ "./src/DuckStew.jpg":
/*!**************************!*\
  !*** ./src/DuckStew.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fddaa3dc14683f222a37.jpg";

/***/ }),

/***/ "./src/HoisinDuckAndCucumberBites.jpg":
/*!********************************************!*\
  !*** ./src/HoisinDuckAndCucumberBites.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9731be05394e82e6a21.jpg";

/***/ }),

/***/ "./src/HosinDuckBao.png":
/*!******************************!*\
  !*** ./src/HosinDuckBao.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4182ab8f4f8c35862817.png";

/***/ }),

/***/ "./src/PeachBellini.jpg":
/*!******************************!*\
  !*** ./src/PeachBellini.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5e0845641e0cd827a62.jpg";

/***/ }),

/***/ "./src/RoastedGarlicSoupwithParmesanCheese.jpg":
/*!*****************************************************!*\
  !*** ./src/RoastedGarlicSoupwithParmesanCheese.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de77ba7f329a3852bd4f.jpg";

/***/ }),

/***/ "./src/SlowRoastDuckLegs.png":
/*!***********************************!*\
  !*** ./src/SlowRoastDuckLegs.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4150637eac413c4431a.png";

/***/ }),

/***/ "./src/StrawberrySoda.jpg":
/*!********************************!*\
  !*** ./src/StrawberrySoda.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57857b155cebc8d0ddfd.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const homeButton = document.querySelector("nav li:nth-child(1) button");
const menuButton = document.querySelector("nav li:nth-child(2) button");
const contactButton = document.querySelector("nav li:nth-child(3) button");
const divContent = document.getElementById("content");

function resetContent(newContentArray) {
    homeButton.setAttribute("class", "");
    menuButton.setAttribute("class", "");
    contactButton.setAttribute("class", "");
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
    
    divContent.append(...newContentArray);
}

window.addEventListener("DOMContentLoaded", () => {
    resetContent((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    homeButton.classList.add("toggled");
})

homeButton.addEventListener("click", (e) => {
    resetContent((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
    homeButton.classList.add("toggled");
});

menuButton.addEventListener("click", (e) => {
    resetContent((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    menuButton.classList.add("toggled");
})

contactButton.addEventListener("click", (e) => {
    resetContent((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
    contactButton.classList.add("toggled");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsK0pBQTREO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxNQUFNLFVBQVUsWUFBWSxNQUFNLFlBQVks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OztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1U7QUFDQTtBQUNNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBVTtBQUMzQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFVO0FBQzNCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQkFBaUIsaURBQVU7QUFDM0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlCQUFpQixvREFBYTtBQUM5QjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQW5nZWxpbmEtcm5sQS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0FuYW5kYUJsYWNrUGVyc29uYWxVc2VSZWd1bGFyLXJnOVJ4LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBhbmdlbGluYS1mb250O1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogYW1hbmRhLWJsYWNrO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG46cm9vdCB7XHJcblx0LS1tYXgtd2lkdGgtcGVyLWNvbnRhaW5lcjogMTMwMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlYmQ0O1xyXG59XHJcblxyXG51bCB7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubGkge1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2LXdyYXBwZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgzOSwgNzclLCA4MyUpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm5hdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoLXBlci1jb250YWluZXIpO1xyXG5cdGZsZXgtZ3JvdzogMTtcclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6IGFtYW5kYS1ibGFjaztcclxuXHRcdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdGJ1dHRvbiB7XHJcblx0XHRjb2xvcjogIzQ0NDQ0NDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRwYWRkaW5nOiA4cHggMTZweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbjpob3ZlciwgYnV0dG9uLnRvZ2dsZWQge1xyXG5cdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDM5LCA4NCUsIDc0JSk7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMnB4IDRweCBoc2woMzksIDk1JSwgNjclKTtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbjphY3RpdmUge1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCA0cHggaHNsKDQ2LCA5NSUsIDQ1JSk7XHJcblx0fVxyXG5cclxuXHR1bCB7XHJcblx0XHRnYXA6IDE2cHg7XHJcblx0fVxyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlYmQ0O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5pbWFnZXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG5cdG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoLXBlci1jb250YWluZXIpO1xyXG5cdGZsZXgtZ3JvdzogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDE2cHg7XHJcblxyXG5cdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDE2cHg7XHJcblx0XHRnYXA6IDE2cHg7XHJcblx0fVxyXG59XHJcblxyXG4uZGVzYy1oZWFkZXIge1xyXG5cdGZvbnQtZmFtaWx5OiBhbWFuZGEtYmxhY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdHRleHQtdW5kZXJsaW5lLW9mZnNldDogOHB4O1xyXG59XHJcblxyXG4uZGVzYy1jYXJkIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBhZGRpbmc6IDI0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMS44O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGhzbCgzNCwgODUlLCA4NyUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGhzbCgzOSwgODQlLCA3NCUpO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggOHB4IGhzbCgzOSwgOTAlLCA2NSUpO1xyXG5cclxuXHQvKiB0aGlzIGlzIGRpdkNvbnRlbnQgaW4gdXRpbC5qcyAqL1xyXG5cdGRpdiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQuc2lkZS1ieS1zaWRlLWNvbnRhaW5lciB1bCwgdWwge1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5tZW51LWNvbnRhaW5lciB7XHJcblx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdH1cclxuXHJcblx0XHQubGlzdC1jb250YWluZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRmbGV4LWJhc2lzOiA1MCU7XHJcblx0XHRcdGZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0XHQubmFtZS1hbmQtcHJpY2Uge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHQ+IGRpdjpudGgtY2hpbGQoMSkge1xyXG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0XHRcdFx0Y29sb3I6IGhzbCgyNCwgOTUlLCAzMCUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmZvb2QtZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdGNvbG9yOiAgaHNsKDI0LCA3MCUsIDYwJSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVsIHtcclxuXHRcdFx0XHRnYXA6IDE2cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxpIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0d2lkdGg6IDUwMHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Lm1lbnUtaW1hZ2VzIHtcclxuXHRcdFx0ZmxleC1iYXNpczogNTAlO1xyXG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0Z2FwOiAxMnB4O1xyXG5cdFx0XHRcclxuXHRcdFx0LmltYWdlLW51bWJlci1wYWlyIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubWVudSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZ3JvdzogMTtcclxuXHRnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuXHRmbGV4LWdyb3c6IDE7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRnYXA6IDE2cHg7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2ViZDQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsMEJBQTBCO0NBQzFCLDRDQUErQjtBQUNoQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qiw0Q0FBcUQ7QUFDdEQ7O0FBRUE7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Qsc0hBQXNIO0NBQ3RILHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIseUNBQXlDO0NBQ3pDLFlBQVk7O0NBRVo7RUFDQyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLHlDQUF5QztDQUMxQzs7Q0FFQTtFQUNDLHlDQUF5QztDQUMxQzs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjtBQUNEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTs7Q0FFYjtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFNBQVM7Q0FDVjtBQUNEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLDBCQUEwQjtDQUMxQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsbUNBQW1DO0NBQ25DLG1DQUFtQztDQUNuQyx5Q0FBeUM7O0NBRXpDLGtDQUFrQztDQUNsQztFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkI7R0FDQyxzQkFBc0I7RUFDdkI7O0VBRUE7R0FDQyxZQUFZOztHQUVaLGFBQWE7R0FDYiw4QkFBOEI7RUFDL0I7O0VBRUE7R0FDQyxhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLGVBQWU7R0FDZixjQUFjO0dBQ2Q7SUFDQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxlQUFlO0lBQ2Y7S0FDQyxrQkFBa0I7S0FDbEIsd0JBQXdCO0lBQ3pCO0dBQ0Q7O0dBRUE7SUFDQyx5QkFBeUI7R0FDMUI7O0dBRUE7SUFDQyxTQUFTO0dBQ1Y7O0dBRUE7SUFDQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0dBQ2I7RUFDRDs7RUFFQTtHQUNDLGVBQWU7R0FDZixlQUFlO0dBQ2YsMkJBQTJCO0dBQzNCLHlCQUF5QjtHQUN6QixTQUFTOztHQUVUO0lBQ0MsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEI7S0FDQyxrQkFBa0I7S0FDbEIsWUFBWTtLQUNaLFlBQVk7SUFDYjtHQUNEO0VBQ0Q7Q0FDRDtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsU0FBUztDQUNULDJEQUEyRDtBQUM1RDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IseUJBQXlCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBhbmdlbGluYS1mb250O1xcclxcblxcdHNyYzogdXJsKFxcXCIuL0FuZ2VsaW5hLXJubEEub3RmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiBhbWFuZGEtYmxhY2s7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4vQW5hbmRhQmxhY2tQZXJzb25hbFVzZVJlZ3VsYXItcmc5UngudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLW1heC13aWR0aC1wZXItY29udGFpbmVyOiAxMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmN2ViZDQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtd3JhcHBlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDM5LCA3NyUsIDgzJSk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgtcGVyLWNvbnRhaW5lcik7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcclxcblxcdC5sb2dvIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDQ4cHg7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IGFtYW5kYS1ibGFjaztcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGJ1dHRvbiB7XFxyXFxuXFx0XFx0Y29sb3I6ICM0NDQ0NDQ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzogOHB4IDE2cHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRidXR0b246aG92ZXIsIGJ1dHRvbi50b2dnbGVkIHtcXHJcXG5cXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogaHNsKDM5LCA4NCUsIDc0JSk7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDJweCA0cHggaHNsKDM5LCA5NSUsIDY3JSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGJ1dHRvbjphY3RpdmUge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAycHggNHB4IGhzbCg0NiwgOTUlLCA0NSUpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR1bCB7XFxyXFxuXFx0XFx0Z2FwOiAxNnB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZWJkNDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG5cXHRtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aC1wZXItY29udGFpbmVyKTtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwYWRkaW5nOiAxNnB4O1xcclxcblxcclxcblxcdC5kZXNjcmlwdGlvbiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdHBhZGRpbmc6IDE2cHg7XFxyXFxuXFx0XFx0Z2FwOiAxNnB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtaGVhZGVyIHtcXHJcXG5cXHRmb250LWZhbWlseTogYW1hbmRhLWJsYWNrO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtY2FyZCB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRwYWRkaW5nOiAyNHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuODtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzQsIDg1JSwgODclKTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBoc2woMzksIDg0JSwgNzQlKTtcXHJcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDhweCBoc2woMzksIDkwJSwgNjUlKTtcXHJcXG5cXHJcXG5cXHQvKiB0aGlzIGlzIGRpdkNvbnRlbnQgaW4gdXRpbC5qcyAqL1xcclxcblxcdGRpdiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHQuc2lkZS1ieS1zaWRlLWNvbnRhaW5lciB1bCwgdWwge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5tZW51LWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZmxleC1ncm93OiAxO1xcclxcblxcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQubGlzdC1jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRmbGV4LWJhc2lzOiA1MCU7XFxyXFxuXFx0XFx0XFx0ZmxleC1zaHJpbms6IDE7XFxyXFxuXFx0XFx0XFx0Lm5hbWUtYW5kLXByaWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0XFx0XFx0XFx0PiBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IGhzbCgyNCwgOTUlLCAzMCUpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmZvb2QtZGVzY3JpcHRpb24ge1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAgaHNsKDI0LCA3MCUsIDYwJSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdHVsIHtcXHJcXG5cXHRcXHRcXHRcXHRnYXA6IDE2cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGxpIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDUwMHB4O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Lm1lbnUtaW1hZ2VzIHtcXHJcXG5cXHRcXHRcXHRmbGV4LWJhc2lzOiA1MCU7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdGdhcDogMTJweDtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQuaW1hZ2UtbnVtYmVyLXBhaXIge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMjAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxuXFx0Z2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAxNnB4O1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMTZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlYmQ0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRGVzY0NhcmQgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KG51bWJlciwgZW1haWwpIHtcclxuICAgIGNvbnN0IHVsUGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgbGlQZXJzb25OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBsaVBlcnNvbkVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGlQZXJzb25OdW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXI7XHJcbiAgICBsaVBlcnNvbkVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XHJcblxyXG4gICAgdWxQZXJzb24uYXBwZW5kKGxpUGVyc29uTnVtYmVyLCBsaVBlcnNvbkVtYWlsKTtcclxuICAgIHJldHVybiB1bFBlcnNvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBkaXZDb250YWN0LmFwcGVuZChcclxuICAgICAgICBjcmVhdGVEZXNjQ2FyZChcIk1hbmFnZXJcIiwgY3JlYXRlQ29udGFjdChcIjEyMy00NTYtNzg5XCIsIFwiVGhlT2RpblByb2plY3RJc0Nvb2xAZXBpY25lc3MuY29tXCIpKSxcclxuICAgICAgICBjcmVhdGVEZXNjQ2FyZChcIkNoZWZcIiwgY3JlYXRlQ29udGFjdChcIjk4Ny02NTQtMzIxXCIsIFwibG9vQ3NJdGNlam9yUG5pZE9laFRAc3NlbmNpcGUubW9jXCIpKSxcclxuICAgICAgICBjcmVhdGVEZXNjQ2FyZChcIk93bmVyXCIsIGNyZWF0ZUNvbnRhY3QoXCI4MjQtMjE4LTUxMFwiLCBcIldoYXRJc0FHb29kRW1haWxAcXVlc3Rpb25tYXJrLmNvbVwiKSksXHJcbiAgICAgICAgY3JlYXRlRGVzY0NhcmQoXCJTb24gT2YgT3duZXJcIiwgY3JlYXRlQ29udGFjdChcIjIxOS0xMjAtMzIxXCIsIFwiVW5yZWFsaXN0aWNFbXBsb3llZUB3aGF0LmNvbVwiKSksXHJcbiAgICAgICAgY3JlYXRlRGVzY0NhcmQoXCJHcmFuZGRhdWdodGVyIG9mIE93bmVyXCIsIGNyZWF0ZUNvbnRhY3QoXCIxMjMtMDIxLTkxMlwiLCBcImVleW9scG1FY2l0c2lsYWVyblVAdGFody5tb2NcIikpLFxyXG4gICAgICAgIGNyZWF0ZURlc2NDYXJkKFwiV2FpdHJlc3NcIiwgY3JlYXRlQ29udGFjdChcIjEyMy05OTktMDAwXCIsIFwiQnJ1aEB3aGF0aXN0aGlzLmNvbVwiKSksXHJcbiAgICApXHJcbiAgICByZXR1cm4gW2RpdkNvbnRhY3RdO1xyXG59IiwiaW1wb3J0IER1Y2tDb2xhbGdlIGZyb20gXCIuL0R1Y2tDb2xsYWdlX3NwYWNlX3JvdW5kZWQucG5nXCJcclxuaW1wb3J0IHsgY3JlYXRlRGVzY0NhcmQgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gICAgY29uc3QgaW50cm9TdHJpbmcgPSBcclxuICAgICAgICBgSW4gUXVhY2sgQmlzdHJvLCB3ZSB0YWtlIGdyZWF0IHBsZWFzdXJlIGluIHNob3djYXNpbmcgdGhlIGN1bGluYXJ5IHRhbGVudFxyXG4gICAgICAgIHRoYXQgaG9ub3JzIGR1Y2sgaW4gYWxsIG9mIGl0cyBmbGF2b3JmdWwgc3BsZW5kb3IuIE91ciBtZW51IGhpZ2hsaWdodHMgYVxyXG4gICAgICAgIHdpZGUgdmFyaWV0eSBvZiBkdWNrIGN1aXNpbmUsIHdpdGggZGlzaGVzIHJhbmdpbmcgZnJvbSBzb2Z0IGNvbmZpdCwgc3Rld3MsIHRvIGNyaXNweSBza2luLlxyXG4gICAgICAgIEVhY2ggYml0ZSBpcyBhIHN5bXBob255IG9mIGZsYXZvcnMsIHRleHR1cmVzLCBhbmQgc2NlbnRzLCBlbmhhbmNlZCBieSB0aGUgdXNlIG9mIG91ciBsb2NhbGx5LWdyb3duXHJcbiAgICAgICAgc2Vhc29uYWwgaW5ncmVkaWVudHMuIFdoZXRoZXIgeW91IGFyZSBhIGZvb2QgdmxvZ2dlciwgZm9vZCBjb25ub2lzc2V1ciBvZiBmaW5lXHJcbiAgICAgICAgZGluaW5nLCBvciBzaW1wbHkgZGVzaXJpbmcgYSBkZWxlY3RhYmxlIG1lYWwgd2l0aCBmcmllbmRzIGEgZmFtaWx0eSwgUXVhY2sgQmlzdHJvXHJcbiAgICAgICAgc2VydmVzIHlvdSB3aXRoIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCBldmVyeSBkaXNoIGxlYXZpbmcgeW91XHJcbiAgICAgICAgd2FudGluZyBmb3IgbW9yZS5gO1xyXG5cclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGRpdkludHJvU3RyaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdkludHJvU3RyaW5nLnRleHRDb250ZW50ID0gaW50cm9TdHJpbmc7XHJcblxyXG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlRGVzY0NhcmQoXCJXZWxjb21lIHRvIFF1YWNrIEJpc3Ryby5cIiwgZGl2SW50cm9TdHJpbmcpKTtcclxuICAgIFxyXG4gICAgY29uc3QgdWxTY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGxpV2Vla2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IGxpU2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBsaVN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICBsaVdlZWtkYXkudGV4dENvbnRlbnQgPSBcIldlZWtkYXlzOiA4YW0gLSA2cG1cIjtcclxuICAgIGxpU2F0dXJkYXkudGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5OiA4YW0gLSA0cG1cIjtcclxuICAgIGxpU3VuZGF5LnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDhhbSAtIDJwbVwiO1xyXG5cclxuICAgIHVsU2NoZWR1bGUuYXBwZW5kKGxpV2Vla2RheSwgbGlTYXR1cmRheSwgbGlTdW5kYXkpO1xyXG5cclxuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZURlc2NDYXJkKFwiU2NoZWR1bGUgSG91cnNcIiwgdWxTY2hlZHVsZSkpO1xyXG5cclxuICAgIGNvbnN0IGRpdkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdkltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZXNcIik7XHJcblxyXG4gICAgY29uc3QgZHVja0xpdmVzTWF0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGR1Y2tMaXZlc01hdHRlci5zcmMgPSBEdWNrQ29sYWxnZTtcclxuICAgIGR1Y2tMaXZlc01hdHRlci53aWR0aCA9IFwiNjAwXCI7XHJcbiAgICAvL2R1Y2tTdGV3LmhlaWdodCA9IFwiNjQ3XCI7XHJcbiAgICBkdWNrTGl2ZXNNYXR0ZXIuaGVpZ2h0ID0gXCI2NjBcIjtcclxuXHJcbiAgICBkaXZJbWFnZS5hcHBlbmRDaGlsZChkdWNrTGl2ZXNNYXR0ZXIpO1xyXG5cclxuICAgIHJldHVybiBbZGl2RGVzY3JpcHRpb24sIGRpdkltYWdlXTtcclxufSIsImltcG9ydCB7IGNyZWF0ZURlc2NDYXJkIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuLy8gaHR0cHM6Ly93d3cucGFyc25pcHNhbmRwYXN0cmllcy5jb20vZHVjay1jb25maXQtY3Jvc3RpbmkvXHJcbmltcG9ydCBEdWNrQ29uZml0Q3Jvc3RpbmlXaXRoUGFyc25pcFB1cmVlQW5kRmlnIGZyb20gXCIuL0R1Y2tDb25maXRDcm9zdGluaVdpdGhQYXJzbmlwUHVyZWVBbmRGaWcucG5nXCJcclxuXHJcbi8vIGh0dHBzOi8vZ29vZGRpbm5lcm1vbS5jb20vcm9hc3RlZC1nYXJsaWMtc291cC9cclxuaW1wb3J0IFJvYXN0ZWRHYXJsaWNTb3Vwd2l0aFBhcm1lc2FuQ2hlZXNlIGZyb20gXCIuL1JvYXN0ZWRHYXJsaWNTb3Vwd2l0aFBhcm1lc2FuQ2hlZXNlLmpwZ1wiXHJcblxyXG4vLyBodHRwczovL3doaXRlcGxhdGVibGFua3NsYXRlLmNvbS9ob2lzaW4tZHVjay1iYW8vXHJcbmltcG9ydCBIb3NpbkR1Y2tCYW8gZnJvbSBcIi4vSG9zaW5EdWNrQmFvLnBuZ1wiXHJcblxyXG4vLyBodHRwczovL2Vhc3lmb29kLmllL3JlY2lwZS9ob2lzaW4tZHVjay1hbmQtY3VjdW1iZXItYml0ZXMvXHJcbmltcG9ydCBIb2lzaW5EdWNrQW5kQ3VjdW1iZXJCaXRlcyBmcm9tIFwiLi9Ib2lzaW5EdWNrQW5kQ3VjdW1iZXJCaXRlcy5qcGdcIlxyXG5cclxuLy8gaHR0cHM6Ly9kaXNoaW5ndXB0aGVkaXJ0LmNvbS9yZWNpcGVzL2hhcnZlc3QtZHVjay1zdGV3L1xyXG5pbXBvcnQgSGFydmVzdER1Y2tTdGV3IGZyb20gXCIuL0R1Y2tTdGV3LmpwZ1wiO1xyXG5cclxuLy9odHRwczovL3JpdmVyY290dGFnZWZhcm0ubmV0L3JvYXN0ZWQtZHVjay0xMDEvXHJcbmltcG9ydCBSb2FzdGVkRHVjayBmcm9tIFwiLi9EdWNrUm9hc3RlZC5qcGdcIjtcclxuXHJcbi8vaHR0cHM6Ly93d3cua3J1bXBsaS5jby51ay9yb2FzdC1kdWNrLWxlZ3MvXHJcbmltcG9ydCBTbG93Um9hc3REdWNrTGVncyBmcm9tIFwiLi9TbG93Um9hc3REdWNrTGVncy5wbmdcIjtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LnRoZXBpb25lZXJ3b21hbi5jb20vZm9vZC1jb29raW5nL3JlY2lwZXMvYTM5NTQwMjI0L3BlYWNoLWJlbGxpbmktcmVjaXBlL1xyXG5pbXBvcnQgUGVhY2hCZWxsaW5pIGZyb20gXCIuL1BlYWNoQmVsbGluaS5qcGdcIlxyXG5cclxuLy8gaHR0cHM6Ly92YWxlbnRpbmFzY29ybmVyLmNvbS9jaG9jb2xhdGUtbWlsa3NoYWtlLXJlY2lwZS9cclxuaW1wb3J0IENob2NvbGF0ZU1pbGtzaGFrZSBmcm9tIFwiLi9DaG9jb2xhdGVNaWxrc2hha2UuanBnXCI7XHJcblxyXG4vLyBodHRwczovL2RpdmFzY2FuY29vay5jb20vc3RyYXdiZXJyeS1zb2RhLXJlY2lwZS1qdW5ldGVlbnRoL1xyXG5pbXBvcnQgU3RyYXdiZXJyeVNvZGEgZnJvbSBcIi4vU3RyYXdiZXJyeVNvZGEuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb29kTGlzdEl0ZW0oZm9vZE5hbWUsIGNvc3RJbkRvbGxhcnNTdHIsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBsaVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IGRpdk5hbWVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZOYW1lQW5kUHJpY2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lLWFuZC1wcmljZVwiKTtcclxuXHJcbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdk5hbWUudGV4dENvbnRlbnQgPSBmb29kTmFtZTtcclxuXHJcbiAgICBjb25zdCBkaXZQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZQcmljZS50ZXh0Q29udGVudCA9IGNvc3RJbkRvbGxhcnNTdHI7XHJcblxyXG4gICAgZGl2TmFtZUFuZFByaWNlLmFwcGVuZChkaXZOYW1lLCBkaXZQcmljZSk7XHJcblxyXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb29kLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGl2RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBsaVJlc3VsdC5hcHBlbmQoZGl2TmFtZUFuZFByaWNlLCBkaXZEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuKGxpUmVzdWx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vZENhdGVnb3J5KGNhdGVnb3J5TmFtZSwgZm9vZERhdGFiYXNlKSB7XHJcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1jb250YWluZXJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2TGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtY29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXZJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZJbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaW1hZ2VzXCIpO1xyXG5cclxuICAgIGNvbnN0IHVsRm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgZm9vZERhdGFiYXNlLmZvckVhY2goKGZvb2QsIGlkeCkgPT4ge1xyXG4gICAgICAgIHVsRm9vZHMuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZExpc3RJdGVtKGAoJHtpZHggKyAxfSkgYCArIGZvb2QubmFtZSwgXCIkXCIgKyBmb29kLnByaWNlLCBmb29kLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gZm9vZC5pbWFnZVNyYztcclxuXHJcbiAgICAgICAgY29uc3QgaW1nTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpbWdOdW1iZXIudGV4dENvbnRlbnQgPSBgKCR7aWR4ICsgMX0pYDtcclxuXHJcbiAgICAgICAgY29uc3QgZGl2SW1hZ2VOdW1iZXJQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXZJbWFnZU51bWJlclBhaXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZS1udW1iZXItcGFpclwiKTtcclxuICAgICAgICBkaXZJbWFnZU51bWJlclBhaXIuYXBwZW5kKGltZywgaW1nTnVtYmVyKTtcclxuXHJcbiAgICAgICAgZGl2SW1hZ2VDb250YWluZXIuYXBwZW5kKGRpdkltYWdlTnVtYmVyUGFpcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsRm9vZHMpO1xyXG4gICAgXHJcbiAgICBkaXZDb250YWluZXIuYXBwZW5kKGRpdkxpc3RDb250YWluZXIsIGRpdkltYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlRGVzY0NhcmQoY2F0ZWdvcnlOYW1lLCBkaXZDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gICAgLy8gdGhlIGhhcmRlc3QgcGFydCBpcyByZXNlYXJjaGluZyBmb29kc1xyXG4gICAgY29uc3QgYXBwZXRpemVyTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiRHVjayBDb25maXQgQ3Jvc3RpbmkgV2l0aCBQYXJzbmlwIFB1cmVlIGFuZCBGaWdcIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUuXCIsXHJcbiAgICAgICAgICAgIGltYWdlU3JjOiBEdWNrQ29uZml0Q3Jvc3RpbmlXaXRoUGFyc25pcFB1cmVlQW5kRmlnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJvYXN0ZWQgR2FybGljIFNvdXAgd2l0aCBQYXJtZXNhbiBDaGVlc2VcIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUuXCIsXHJcbiAgICAgICAgICAgIGltYWdlU3JjOiBSb2FzdGVkR2FybGljU291cHdpdGhQYXJtZXNhbkNoZWVzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJIb2lzaW4gRHVjayBCYW9cIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUuXCIsXHJcbiAgICAgICAgICAgIGltYWdlU3JjOiBIb3NpbkR1Y2tCYW8sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSG9pc2luIER1Y2sgQW5kIEN1Y3VtYmVyIEJpdGVzXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlLlwiLFxyXG4gICAgICAgICAgICBpbWFnZVNyYzogSG9pc2luRHVja0FuZEN1Y3VtYmVyQml0ZXNcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGVudHJlZUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkhhcnZlc3QgRHVjayBTdGV3XCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjExXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlIGlwc2EgcXVhZS5cIixcclxuICAgICAgICAgICAgaW1hZ2VTcmM6IEhhcnZlc3REdWNrU3Rld1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJvYXN0ZWQgRHVja1wiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIxMlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUuXCIsXHJcbiAgICAgICAgICAgIGltYWdlU3JjOiBSb2FzdGVkRHVja1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlNsb3cgUm9hc3QgRHVjayBMZWdzXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjE0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlIGlwc2EgcXVhZS5cIixcclxuICAgICAgICAgICAgaW1hZ2VTcmM6IFNsb3dSb2FzdER1Y2tMZWdzXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBiZXZlcmFnZUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBlYWNoIEJlbGxpbmlcIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUuXCIsXHJcbiAgICAgICAgICAgIGltYWdlU3JjOiBQZWFjaEJlbGxpbmlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDaG9jb2xhdGUgTWlsa3NoYWtlXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlLlwiLFxyXG4gICAgICAgICAgICBpbWFnZVNyYzogQ2hvY29sYXRlTWlsa3NoYWtlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3RyYXdiZXJyeSBTb2RhXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlLlwiLFxyXG4gICAgICAgICAgICBpbWFnZVNyYzogU3RyYXdiZXJyeVNvZGFcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGRpdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2TWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIik7XHJcbiAgICBkaXZNZW51LmFwcGVuZChcclxuICAgICAgICBjcmVhdGVGb29kQ2F0ZWdvcnkoXCJBcHBldGl6ZXJcIiwgYXBwZXRpemVyTGlzdCksXHJcbiAgICAgICAgY3JlYXRlRm9vZENhdGVnb3J5KFwiRW50csOpZVwiLCBlbnRyZWVMaXN0KSxcclxuICAgICAgICBjcmVhdGVGb29kQ2F0ZWdvcnkoXCJCZXZlcmFnZVwiLCBiZXZlcmFnZUxpc3QpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFtkaXZNZW51XTtcclxufSIsImZ1bmN0aW9uIGNyZWF0ZURlc2NDYXJkKGhlYWRlclRleHQsIGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGRpdkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZGVzYy1jYXJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlc2MtaGVhZGVyXCIpO1xyXG4gICAgZGl2SGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcclxuXHJcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gICAgZGl2Q2FyZC5hcHBlbmQoZGl2SGVhZGVyLCBkaXZDb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZGl2Q2FyZDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVzY0NhcmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBsaTpudGgtY2hpbGQoMSkgYnV0dG9uXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBsaTpudGgtY2hpbGQoMikgYnV0dG9uXCIpO1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBsaTpudGgtY2hpbGQoMykgYnV0dG9uXCIpO1xyXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gcmVzZXRDb250ZW50KG5ld0NvbnRlbnRBcnJheSkge1xyXG4gICAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIlwiKTtcclxuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJcIik7XHJcbiAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiXCIpO1xyXG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGRpdkNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2Q29udGVudC5hcHBlbmQoLi4ubmV3Q29udGVudEFycmF5KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIHJlc2V0Q29udGVudChyZW5kZXJIb21lKCkpO1xyXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKTtcclxufSlcclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICByZXNldENvbnRlbnQocmVuZGVySG9tZSgpKTtcclxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIik7XHJcbn0pO1xyXG5cclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHJlc2V0Q29udGVudChyZW5kZXJNZW51KCkpO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKTtcclxufSlcclxuXHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICByZXNldENvbnRlbnQocmVuZGVyQ29udGFjdCgpKTtcclxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIik7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==