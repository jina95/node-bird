module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n\n\nvar _jsxFileName = \"/Users/ijin-a/Desktop/2021_react_lab/react-nodebird/prepare/front/pages/_app.js\";\n// 페이지별 공통 처리\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return (\n    /*#__PURE__*/\n    // index.js 의 return 부분이 컴포넌트에 들어간다 -> index.js의 부모인것.\n    // 모든페이지에서 공통인경우는 -> _app.js\n    // 특정컴포넌트 끼리 공통인 경우는 -> AppLayout \n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"NodeBird\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true) // 예전 버전에서는 <Provider store={store}> 로 감싸줬어야 했지만, 현재는 알아서 감싸줌 \n    // 그래서 현재는 오히려 감싸주면 에러 발생 !\n\n  );\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQzlCO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0k7QUFBTSxpQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBLG9CQUpKLENBV0k7QUFDQTs7QUFaSjtBQWNILENBZkQ7O0FBaUJBRCxRQUFRLENBQUNFLFNBQVQsR0FBcUI7QUFDakJELFdBQVMsRUFBR0UsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEakIsQ0FBckI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtjpjsnbTsp4Drs4Qg6rO17Ya1IOyymOumrFxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIlxuXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIlxuXG5jb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgLy8gaW5kZXguanMg7J2YIHJldHVybiDrtoDrtoTsnbQg7Lu07Y+s64SM7Yq47JeQIOuTpOyWtOqwhOuLpCAtPiBpbmRleC5qc+ydmCDrtoDrqqjsnbjqsoMuXG4gICAgICAgIC8vIOuqqOuToO2OmOydtOyngOyXkOyEnCDqs7XthrXsnbjqsr3smrDripQgLT4gX2FwcC5qc1xuICAgICAgICAvLyDtirnsoJXsu7Ttj6zrhIztirgg64G866asIOqzte2GteyduCDqsr3smrDripQgLT4gQXBwTGF5b3V0IFxuICAgICAgICA8PiBcbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC8+XG4gICAgICAgIC8vIOyYiOyghCDrsoTsoITsl5DshJzripQgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+IOuhnCDqsJDsi7jspKzslrTslbwg7ZaI7KeA66eMLCDtmITsnqzripQg7JWM7JWE7IScIOqwkOyLuOykjCBcbiAgICAgICAgLy8g6re4656Y7IScIO2YhOyerOuKlCDsmKTtnojroKQg6rCQ7Iu47KO866m0IOyXkOufrCDrsJzsg50gIVxuICAgIClcbn1cblxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVudCA6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // user -> user의 reducer\n\n\n // reducer 들을 합쳐줌 \n// user, post 의 initialState 는 combineReducers 가 알아서 합쳐준다.\n\n // const initialState = {\n//     name: \"Mia\",\n//     age: 27,\n//     password: \"babo\"\n// }\n// action creator\n// const changeName = () => {\n//     return {\n//         type: \"CHANGE_NAME\",\n//     }\n// }\n// changeName(\"BBBil\")\n// (이전상태, 액션) => 다음상태\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  // HYDRATE 를 위해서 아래와 같은 형식을 이용.(SSR을 위해서)\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0NBR0E7QUFDQTs7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDaEM7QUFDQUMsT0FBSyxFQUFHLENBQUVDLEtBQUssR0FBRyxFQUFWLEVBQWNDLE1BQWQsS0FBMEI7QUFDOUIsWUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0EsV0FBS0MsMERBQUw7QUFDSUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosTUFBdkI7QUFDQSwrQ0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSyxPQUE3Qjs7QUFFSjtBQUNBLGVBQU9OLEtBQVA7QUFOQTtBQVFILEdBWCtCO0FBWWhDTyxxREFaZ0M7QUFhaENDLHFEQUFJQTtBQWI0QixDQUFELENBQW5DO0FBaUJlWCwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxuXG4vLyB1c2VyIC0+IHVzZXLsnZggcmVkdWNlclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCJcblxuLy8gcmVkdWNlciDrk6TsnYQg7ZWp7LOQ7KSMIFxuLy8gdXNlciwgcG9zdCDsnZggaW5pdGlhbFN0YXRlIOuKlCBjb21iaW5lUmVkdWNlcnMg6rCAIOyVjOyVhOyEnCDtlanss5DspIDri6QuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICAgIG5hbWU6IFwiTWlhXCIsXG4vLyAgICAgYWdlOiAyNyxcbi8vICAgICBwYXNzd29yZDogXCJiYWJvXCJcbi8vIH1cblxuLy8gYWN0aW9uIGNyZWF0b3Jcbi8vIGNvbnN0IGNoYW5nZU5hbWUgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgdHlwZTogXCJDSEFOR0VfTkFNRVwiLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gY2hhbmdlTmFtZShcIkJCQmlsXCIpXG5cblxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAvLyBIWURSQVRFIOulvCDsnITtlbTshJwg7JWE656Y7JmAIOqwmeydgCDtmJXsi53snYQg7J207JqpLihTU1LsnYQg7JyE7ZW07IScKVxuICAgIGluZGV4IDogKCBzdGF0ZSA9IHt9LCBhY3Rpb24gKSA9PiB7XG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEhZRFJBVEUgOiBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gICAgICAgIFxuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVzZXIsXG4gICAgcG9zdCxcbn0pXG4gICAgXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPost: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"Mia\"\n    },\n    content: \"첫 번째 게시글 #해시태그, #해시태그22\",\n    Images: [{\n      src: \"https://github.com/jina95/TIL/blob/master/images/actions%20%EB%A1%9C%20%EB%84%98%EA%B8%B4%20%EC%BD%94%EB%93%9C.png\"\n    }, {\n      src: \"https://github.com/jina95/TIL/blob/master/images/%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B4%80%EC%A0%901.png\"\n    }, {\n      src: \"https://github.com/jina95/TIL/blob/master/images/%EB%8F%84%EC%84%9C/3way%EB%B3%91%ED%95%A9.png\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"HH\"\n      },\n      content: \"HIII\"\n    }, {\n      User: {\n        nickname: \"JJ\"\n      },\n      content: \"@@@@!!!!!$$$$\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = \"ADD_POST\";\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: '제로초'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPost: [dummyPost, ...state.mainPost],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3QiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFVBQVEsRUFBRSxDQUFDO0FBQ1BDLE1BQUUsRUFBRSxDQURHO0FBRVBDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZDO0FBTVBDLFdBQU8sRUFBRSx5QkFORjtBQU9QQyxVQUFNLEVBQUUsQ0FBQztBQUNEQyxTQUFHLEVBQUU7QUFESixLQUFELEVBR0o7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FISSxFQU1KO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBTkksQ0FQRDtBQWlCUEMsWUFBUSxFQUFFLENBQUM7QUFDUEwsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURDO0FBSVBDLGFBQU8sRUFBRTtBQUpGLEtBQUQsRUFLUjtBQUNFRixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FMUTtBQWpCSCxHQUFELENBRGM7QUE4QnhCSSxZQUFVLEVBQUUsRUE5Qlk7QUErQnhCQyxXQUFTLEVBQUU7QUEvQmEsQ0FBckI7QUFrQ1AsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sTUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGO0FBRGEsQ0FBaEI7QUFJUCxNQUFNRyxTQUFTLEdBQUc7QUFDaEJaLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsV0FGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCRSxVQUFRLEVBQUU7QUFSTSxDQUFsQjs7QUFZQSxNQUFNTyxPQUFPLEdBQUcsQ0FBRUMsS0FBSyxHQUFHaEIsWUFBVixFQUF3QmlCLE1BQXhCLEtBQW1DO0FBQy9DLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJZixnQkFBUSxFQUFFLENBQUNhLFNBQUQsRUFBWSxHQUFHRSxLQUFLLENBQUNmLFFBQXJCLENBRmQ7QUFHSVMsaUJBQVMsRUFBRTtBQUhmOztBQUtKO0FBQ0EsYUFBT00sS0FBUDtBQVJKO0FBVUgsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdDogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiTWlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4LCAj7ZW07Iuc7YOc6re4MjJcIixcbiAgICAgICAgSW1hZ2VzOiBbe1xuICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL2dpdGh1Yi5jb20vamluYTk1L1RJTC9ibG9iL21hc3Rlci9pbWFnZXMvYWN0aW9ucyUyMCVFQiVBMSU5QyUyMCVFQiU4NCU5OCVFQSVCOCVCNCUyMCVFQyVCRCU5NCVFQiU5MyU5Qy5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppbmE5NS9USUwvYmxvYi9tYXN0ZXIvaW1hZ2VzLyVFQyU4MiVBQyVFQyU5QSVBOSVFQyU5RSU5MCVFQSVCNCU4MCVFQyVBMCU5MDEucG5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaW5hOTUvVElML2Jsb2IvbWFzdGVyL2ltYWdlcy8lRUIlOEYlODQlRUMlODQlOUMvM3dheSVFQiVCMyU5MSVFRCU5NSVBOS5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBDb21tZW50czogW3tcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJISFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiSElJSVwiLCAgXG4gICAgICAgIH0se1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIkpKXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogXCJAQEBAISEhISEkJCQkXCJcbiAgICAgICAgfV1cbiAgICB9XSxcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICBwb3N0QWRkZWQ6IGZhbHNlXG59XG5cbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiXG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICAgIHR5cGU6IEFERF9QT1NUXG59XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufTtcblxuXG5jb25zdCByZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBBRERfUE9TVDogXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0OiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdF0sXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst loginAction = data => {\n  return {\n    type: \"LOG_IN\",\n    data\n  };\n};\nconst logoutAction = data => {\n  return {\n    type: \"LOG_OUT\",\n    data\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case \"LOG_IN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case \"LOG_OUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxLQURZO0FBRXhCQyxJQUFFLEVBQUUsSUFGb0I7QUFHeEJDLFlBQVUsRUFBRSxFQUhZO0FBSXhCQyxXQUFTLEVBQUU7QUFKYSxDQUFyQjtBQVFBLE1BQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQ2pDLFNBQU87QUFDSEMsUUFBSSxFQUFFLFFBREg7QUFFSEQ7QUFGRyxHQUFQO0FBSUgsQ0FMTTtBQU1BLE1BQU1FLFlBQVksR0FBSUYsSUFBRCxJQUFVO0FBQ2xDLFNBQU87QUFDSEMsUUFBSSxFQUFFLFNBREg7QUFFSEQ7QUFGRyxHQUFQO0FBSUgsQ0FMTTs7QUFPUCxNQUFNRyxPQUFPLEdBQUcsQ0FBRUMsS0FBSyxHQUFHVixZQUFWLEVBQXdCVyxNQUF4QixLQUFtQztBQUMvQyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FDT0csS0FEUDtBQUVJVCxrQkFBVSxFQUFFLElBRmhCO0FBR0lDLFVBQUUsRUFBRVMsTUFBTSxDQUFDTDtBQUhmOztBQUtKLFNBQUssU0FBTDtBQUNJLDZDQUNPSSxLQURQO0FBRUlULGtCQUFVLEVBQUUsS0FGaEI7QUFHSUMsVUFBRSxFQUFFO0FBSFI7O0FBS0o7QUFDQSxhQUFPUSxLQUFQO0FBZEo7QUFnQkgsQ0FqQkQ7O0FBbUJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgIG1lOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge31cbiAgICBcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkxPR19JTlwiLFxuICAgICAgICBkYXRhXG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJMT0dfT1VUXCIsXG4gICAgICAgIGRhdGFcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiTE9HX0lOXCIgOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YVxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgY2FzZSBcIkxPR19PVVRcIiA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ \"./reducers/index.js\");\n\n\n\n // configureStore.js\n\nconst configureStore = () => {\n  // 배포용일때는 devtool 을 연결 안하고, 개발모드일때만 히스토리가 남는 devtool 연결\n  const middlewares = [];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper); // reducer -> retrun { ...state, ...etc} -> 새로운 객체 반환 ( 변경 내역이 추적 가능하다. -> 이전 기록과 현재 기록이 있기때문에 (현재기록을 변경시켜버리면 추적할 수 없다. ))\n// ...state-> 참조관계 유지 , 메모리를 아낀다 ( 안바뀌는 애들 )\n// { } -> 새로운 객체인것//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDekI7QUFDQSxRQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsUUFBd0NDLFNBQXhDLEdBQWtGQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBQXRIO0FBQ0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyx1REFBRCxFQUFVTixRQUFWLENBQXpCO0FBQ0EsU0FBT0ksS0FBUDtBQUNILENBTkQ7O0FBUUEsTUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFDVixjQUFELEVBQWlCO0FBQUVXLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVlRixzRUFBZixFLENBR0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIlxuXG4vLyBjb25maWd1cmVTdG9yZS5qc1xuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gICAgLy8g67Cw7Y+s7Jqp7J2865WM64qUIGRldnRvb2wg7J2EIOyXsOqysCDslYjtlZjqs6AsIOqwnOuwnOuqqOuTnOydvOuVjOunjCDtnojsiqTthqDrpqzqsIAg64Ko64qUIGRldnRvb2wg7Jew6rKwXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXVxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwifSlcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcblxuXG4vLyByZWR1Y2VyIC0+IHJldHJ1biB7IC4uLnN0YXRlLCAuLi5ldGN9IC0+IOyDiOuhnOyatCDqsJ3ssrQg67CY7ZmYICgg67OA6rK9IOuCtOyXreydtCDstpTsoIEg6rCA64ql7ZWY64ukLiAtPiDsnbTsoIQg6riw66Gd6rO8IO2YhOyerCDquLDroZ3snbQg7J6I6riw65WM66y47JeQICjtmITsnqzquLDroZ3snYQg67OA6rK97Iuc7Lyc67KE66as66m0IOy2lOygge2VoCDsiJgg7JeG64ukLiApKVxuLy8gLi4uc3RhdGUtPiDssLjsobDqtIDqs4Qg7Jyg7KeAICwg66mU66qo66as66W8IOyVhOuCgOuLpCAoIOyViOuwlOuAjOuKlCDslaDrk6QgKVxuLy8geyB9IC0+IOyDiOuhnOyatCDqsJ3ssrTsnbjqsoMgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });