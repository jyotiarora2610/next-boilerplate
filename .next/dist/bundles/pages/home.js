module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_locale_provider__ = __webpack_require__("antd-mobile/lib/locale-provider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_locale_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_locale_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_locale_provider_en_US__ = __webpack_require__("antd-mobile/lib/locale-provider/en_US");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_locale_provider_en_US__);

var _jsxFileName = '/Users/jyotiarora/Documents/projects/crm/lifcare-antd-mobile/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          language = _props.language,
          children = _props.children;

      var locale = language.substr(0, 2) === 'en' ? __WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_locale_provider_en_US___default.a : undefined;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_locale_provider___default.a,
        { locale: locale, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        children
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/MenuBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_tab_bar__ = __webpack_require__("antd-mobile/lib/tab-bar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_tab_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_tab_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_icon__ = __webpack_require__("antd-mobile/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);


var _jsxFileName = '/Users/jyotiarora/Documents/projects/crm/lifcare-antd-mobile/components/MenuBar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MenuBar = function (_Component) {
  _inherits(MenuBar, _Component);

  function MenuBar() {
    _classCallCheck(this, MenuBar);

    return _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).apply(this, arguments));
  }

  _createClass(MenuBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pathname = _props.pathname,
          children = _props.children;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_tab_bar___default.a,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        tabBarData.map(function (_ref) {
          var title = _ref.title,
              icon = _ref.icon,
              selectedIcon = _ref.selectedIcon,
              link = _ref.link,
              dot = _ref.dot,
              Component = _ref.component;
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_tab_bar___default.a.Item,
            {
              key: link,
              title: title,
              icon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_icon___default.a, { type: icon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              }),
              selectedIcon: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_icon___default.a, { type: selectedIcon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              }),
              selected: pathname === link,
              onPress: function onPress() {
                return __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(link);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            children
          );
        })
      );
    }
  }]);

  return MenuBar;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MenuBar);


var tabBarData = [{
  title: 'Home',
  icon: 'koubei-o',
  selectedIcon: 'koubei',
  link: '/home'
}, {
  title: 'Icon',
  icon: 'check-circle-o',
  selectedIcon: 'check-circle',
  link: '/icon'
}, {
  title: 'Trick',
  icon: 'cross-circle-o',
  selectedIcon: 'cross-circle',
  link: '/trick'
}];

/***/ }),

/***/ "./pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_wing_blank__ = __webpack_require__("antd-mobile/lib/wing-blank");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_wing_blank___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_wing_blank__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps__ = __webpack_require__("antd-mobile/lib/steps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_pagination__ = __webpack_require__("antd-mobile/lib/pagination");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_mobile_lib_white_space__ = __webpack_require__("antd-mobile/lib/white-space");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_mobile_lib_white_space___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_mobile_lib_white_space__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_mobile_lib_nav_bar__ = __webpack_require__("antd-mobile/lib/nav-bar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_mobile_lib_nav_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_mobile_lib_nav_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_mobile_lib_icon__ = __webpack_require__("antd-mobile/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_mobile_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_mobile_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_MenuBar__ = __webpack_require__("./components/MenuBar.js");






var _jsxFileName = '/Users/jyotiarora/Documents/projects/crm/lifcare-antd-mobile/pages/home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          language = _props.language,
          pathname = _props.url.pathname;


      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__components_Layout__["a" /* default */],
        { language: language, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__components_MenuBar__["a" /* default */],
          {
            pathname: pathname,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_antd_mobile_lib_nav_bar___default.a,
            {
              leftContent: 'back',
              mode: 'light',
              onLeftClick: function onLeftClick() {
                return console.log('onLeftClick');
              },
              rightContent: [__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_mobile_lib_icon___default.a, { key: '0', type: 'search', style: { marginRight: '0.32rem' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_mobile_lib_icon___default.a, { key: '1', type: 'ellipsis', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              })],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            'NavBar'
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_mobile_lib_white_space___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_mobile_lib_pagination___default.a, { total: 5, current: 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_mobile_lib_white_space___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_antd_mobile_lib_wing_blank___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps___default.a,
              { current: 1, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps___default.a.Step, { title: 'Finished', description: 'Most components has supported', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps___default.a.Step, { title: 'In Progress', description: 'Switch Modal and Menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_mobile_lib_steps___default.a.Step, { title: 'Waiting', description: '1.2.0', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              })
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var language = req ? req.headers['accept-language'] : navigator.language;

      return {
        language: language
      };
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/home.js");


/***/ }),

/***/ "antd-mobile/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),

/***/ "antd-mobile/lib/locale-provider":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/locale-provider");

/***/ }),

/***/ "antd-mobile/lib/locale-provider/en_US":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/locale-provider/en_US");

/***/ }),

/***/ "antd-mobile/lib/nav-bar":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar");

/***/ }),

/***/ "antd-mobile/lib/pagination":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/pagination");

/***/ }),

/***/ "antd-mobile/lib/steps":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/steps");

/***/ }),

/***/ "antd-mobile/lib/tab-bar":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tab-bar");

/***/ }),

/***/ "antd-mobile/lib/white-space":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/white-space");

/***/ }),

/***/ "antd-mobile/lib/wing-blank":
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/wing-blank");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map