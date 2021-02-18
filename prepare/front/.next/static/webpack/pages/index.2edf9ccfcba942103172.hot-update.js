webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserProfile */ \"./components/UserProfile.js\");\n\n\n\nvar _jsxFileName = \"/Users/ijin-a/Desktop/github-react-nodebird/prepare/front/components/AppLayout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    .ant-row {\\n        margin-right: 0 !important;\\n        margin-left: 0 !important;\\n    }\\n    .ant-col:first-child {\\n        padding-left: 0 !important;\\n    }\\n    .ant-col:last-child {\\n        padding-right: 0 !important;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    vertical-align = middle;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n // 인라인 스타일링 하면 리랜더링 할때 최적화가 안되기 때문에 아래와 같은 방법 사용\n// {} === {} -> false 이기 때문에 인라인스타일을 보고 리랜더링 하게 된다.\n// 만약 이렇게 따로 빼는게 싫다 -> useMemo : 값을 캐싱 / useCallback : 함수를 캐싱\n\nvar SearcInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Input\"].Search)(_templateObject());\n_c = SearcInput;\nvar Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"createGlobalStyle\"])(_templateObject2());\n_c2 = Global;\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  // const [ isLoggedIn, setIsLoggedIn ] = useState(false)\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.user.isLoggedIn;\n  }); // const style = useMemo(() => ({ verticalAlign:  \"middle\"}), [])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Global, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"], {\n      mode: \"horizontal\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uB178\\uB4DC\\uBC84\\uB4DC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 36\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD504\\uB85C\\uD544\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 43\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearcInput, {\n          enterButton: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/signup\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 42\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n      gutter: 8,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n        xs: 24,\n        md: 6,\n        children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UserProfile__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 34\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LoginForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 52\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n        xs: 24,\n        md: 12,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n        xs: 24,\n        md: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/jina95\",\n          target: \"_blank\",\n          rel: \"noreferrer noopener\",\n          children: \"Jina Github\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AppLayout, \"wwozkPYuXjHFfszlt2mcSB3o0is=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c3 = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SearcInput\");\n$RefreshReg$(_c2, \"Global\");\n$RefreshReg$(_c3, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/ZDczYiJdLCJuYW1lcyI6WyJTZWFyY0lucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLGlFQUFNLENBQUNDLDBDQUFLLENBQUNDLE1BQVAsQ0FBVCxtQkFBaEI7S0FBTUgsVTtBQUlOLElBQU1JLE1BQU0sR0FBR0MsMkVBQUgsb0JBQVo7TUFBTUQsTTs7QUFhTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQXRCO0FBQUEsR0FBRCxDQUE5QixDQUY4QixDQUk5Qjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMseUNBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUFBLDhCQUVJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFLSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFRSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFFSSxxRUFBQyxVQUFEO0FBQVkscUJBQVc7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVlJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQW1CSSxxRUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQUEsOEJBQ0kscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFBLGtCQUNLQSxVQUFVLGdCQUFFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUYsZ0JBQW9CLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxFQUFqQjtBQUFBLGtCQUFzQkQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0kscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFBLCtCQUNJO0FBQUcsY0FBSSxFQUFDLDJCQUFSO0FBQW9DLGdCQUFNLEVBQUMsUUFBM0M7QUFBb0QsYUFBRyxFQUFDLHFCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQkgsQ0FyQ0Q7O0dBQU1ELFM7VUFFaUJHLHVEOzs7TUFGakJILFM7QUF5Q1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IFJvdywgQ29sLCBJbnB1dCwgTWVudSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4vVXNlclByb2ZpbGVcIlxuXG4vLyDsnbjrnbzsnbgg7Iqk7YOA7J2866eBIO2VmOuptCDrpqzrnpzrjZTrp4Eg7ZWg65WMIOy1nOygge2ZlOqwgCDslYjrkJjquLAg65WM66y47JeQIOyVhOuemOyZgCDqsJnsnYAg67Cp67KVIOyCrOyaqVxuLy8ge30gPT09IHt9IC0+IGZhbHNlIOydtOq4sCDrlYzrrLjsl5Ag7J2465287J247Iqk7YOA7J287J2EIOuztOqzoCDrpqzrnpzrjZTrp4Eg7ZWY6rKMIOuQnOuLpC5cbi8vIOunjOyVvSDsnbTroIfqsowg65Sw66GcIOu5vOuKlOqyjCDsi6vri6QgLT4gdXNlTWVtbyA6IOqwkuydhCDsupDsi7EgLyB1c2VDYWxsYmFjayA6IO2VqOyImOulvCDsupDsi7FcbmNvbnN0IFNlYXJjSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcbiAgICB2ZXJ0aWNhbC1hbGlnbiA9IG1pZGRsZTtcbmBcblxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgLmFudC1yb3cge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFudC1jb2w6Zmlyc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFudC1jb2w6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5gXG5cbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgLy8gY29uc3QgWyBpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluIF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pXG5cbiAgICAvLyBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgdmVydGljYWxBbGlnbjogIFwibWlkZGxlXCJ9KSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEdsb2JhbCAvPlxuICAgICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICB7LyogYSAtPiBocmVmIOqwgCDslYTri4wgbGluayAtPiBocmVmICovfVxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT7tlITroZztlYQ8L2E+PC9MaW5rPiAgXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dC5TZWFyY2ggc3R5bGU9e3N0eWxlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjSW5wdXQgZW50ZXJCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICB7LyogZ3V0dGVyIC0+IOy7rOufvOqwhOydmCDqsITqsqkgKi99XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4/IDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+e2NoaWxkcmVufTwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamluYTk1XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPkppbmEgR2l0aHViPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ })

})