webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ijin-a/Desktop/github-react-nodebird/prepare/front/components/ImagesZoom/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"\\uC0C1\\uC138\\uC774\\uBBF8\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: onClose,\n        children: \"X\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          initialSlide: 0,\n          afterChange: function afterChange(slide) {\n            return setCurrentSlide(slide);\n          },\n          infinite: true,\n          arrows: false,\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          children: images.map(function (v) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: v.src,\n                alt: v.src\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 33\n              }, _this)\n            }, v.src, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 29\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ImagesZoom, \"ui7WTwuiYiKChJrNQb5LOqP6eDA=\");\n\n_c = ImagesZoom;\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzPzYxODciXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxDQUFELENBRFg7QUFBQSxNQUMvQkMsWUFEK0I7QUFBQSxNQUNqQkMsZUFEaUI7O0FBRXZDLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxlQUFPLEVBQUVILE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFBLDZCQUNJO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFDSSxzQkFBWSxFQUFFLENBRGxCO0FBRUkscUJBQVcsRUFBRSxxQkFBQ0ksS0FBRDtBQUFBLG1CQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxXQUZqQjtBQUdJLGtCQUFRLE1BSFo7QUFJSSxnQkFBTSxFQUFFLEtBSlo7QUFLSSxzQkFBWSxFQUFFLENBTGxCO0FBTUksd0JBQWMsRUFBRSxDQU5wQjtBQUFBLG9CQVFLTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsZ0NBQ1I7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixtQkFBRyxFQUFFRCxDQUFDLENBQUNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFVRCxDQUFDLENBQUNDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVg7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQTVCRDs7R0FBTVQsVTs7S0FBQUEsVTtBQThCTkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ25CVCxRQUFNLEVBQUVVLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUR6QjtBQUVuQlosU0FBTyxFQUFDUyxpREFBUyxDQUFDSSxJQUFWLENBQWVEO0FBRkosQ0FBdkI7QUFLZWQseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlc1pvb20vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNsaWNrIGZyb20gXCJyZWFjdC1zbGlja1wiXG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2V9KSA9PiB7XG4gICAgY29uc3QgWyBjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZSBdID0gdXNlU3RhdGUoMClcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLjsnbTrr7jsp4A8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTbGljayBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2LnNyY30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1NsaWNrPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xvc2U6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.js\n");

/***/ })

})