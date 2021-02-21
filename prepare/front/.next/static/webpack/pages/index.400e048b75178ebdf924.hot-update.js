webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  mainPost: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"Mia\"\n    },\n    content: \"첫 번째 게시글 #해시태그, #해시태그22\",\n    Images: [{\n      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: \"HH\"\n      },\n      content: \"HIII\"\n    }, {\n      User: {\n        nickname: \"JJ\"\n      },\n      content: \"@@@@!!!!!$$$$\"\n    }]\n  }],\n  imagePaths: [],\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\n\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '제로초'\n    },\n    Images: [],\n    Comments: []\n  };\n};\n\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '제로초'\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPost: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPost)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    case ADD_COMMENT_REQUEST:\n      console.log(\"addRequest\", action.data);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n\n    case ADD_COMMENT_SUCCESS:\n      {\n        console.log(\"ADD_COMMENT_SUCCESS\", action.data);\n        var postIndex = state.mainPosts.findIndex(function (v) {\n          return v.id === action.data.postId;\n        });\n\n        var post = _objectSpread({}, state.mainPosts[postIndex]);\n\n        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments));\n\n        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n\n        mainPosts[postIndex] = post;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          mainPosts: mainPosts,\n          addCommentLoading: false,\n          addCommentDone: true\n        });\n      }\n\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0IiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJkdW1teVBvc3QiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJhZGRDb21tZW50IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicG9zdEluZGV4IiwibWFpblBvc3RzIiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxVQUFRLEVBQUUsQ0FBQztBQUNQQyxNQUFFLEVBQUUsQ0FERztBQUVQQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGQztBQU1QQyxXQUFPLEVBQUUseUJBTkY7QUFPUEMsVUFBTSxFQUFFLENBQUM7QUFDVEMsU0FBRyxFQUFFO0FBREksS0FBRCxFQUVMO0FBQ0hBLFNBQUcsRUFBRTtBQURGLEtBRkssRUFJTDtBQUNIQSxTQUFHLEVBQUU7QUFERixLQUpLLENBUEQ7QUFjUEMsWUFB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SWxCLHlCQUFpQixFQUFFLElBRnZCO0FBR0lGLG1CQUFXLEVBQUUsS0FIakI7QUFJSUMsb0JBQVksRUFBRTtBQUpsQjs7QUFNSixTQUFLUSxtQkFBTDtBQUEwQjtBQUN0QmMsZUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNILE1BQU0sQ0FBQ1QsSUFBMUM7QUFDQSxZQUFNYSxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sU0FBTixDQUFnQkMsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNyQyxFQUFGLEtBQVM4QixNQUFNLENBQUNULElBQVAsQ0FBWWlCLE1BQTVCO0FBQUEsU0FBMUIsQ0FBbEI7O0FBQ0EsWUFBTUMsSUFBSSxxQkFBUVYsS0FBSyxDQUFDTSxTQUFOLENBQWdCRCxTQUFoQixDQUFSLENBQVY7O0FBQ0FLLFlBQUksQ0FBQ2pDLFFBQUwsSUFBaUJxQixZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZbEIsT0FBYixDQUE3QixzR0FBdURvQyxJQUFJLENBQUNqQyxRQUE1RDs7QUFDQSxZQUFNNkIsU0FBUyxHQUFHLDZGQUFJTixLQUFLLENBQUNNLFNBQWIsQ0FBZjs7QUFDQUEsaUJBQVMsQ0FBQ0QsU0FBRCxDQUFULEdBQXVCSyxJQUF2QjtBQUNBLCtDQUNLVixLQURMO0FBRUVNLG1CQUFTLEVBQVRBLFNBRkY7QUFHRXhCLDJCQUFpQixFQUFFLEtBSHJCO0FBSUVDLHdCQUFjLEVBQUU7QUFKbEI7QUFNSDs7QUFDRCxTQUFLTyxtQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUlyQixzQkFBYyxFQUFFLEtBRnBCO0FBR0lFLG9CQUFZLEVBQUVvQixNQUFNLENBQUNDO0FBSHpCOztBQUtKO0FBQ0EsYUFBT0YsS0FBUDtBQW5ESjtBQXFESCxDQXRERDs7QUF3RGVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCJcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYWluUG9zdDogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6IFwiTWlhXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4LCAj7ZW07Iuc7YOc6re4MjJcIixcbiAgICAgICAgSW1hZ2VzOiBbe1xuICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXG4gICAgICAgIH0sIHtcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcbiAgICAgICAgfSwge1xuICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxuICAgICAgICB9XSxcbiAgICAgICAgQ29tbWVudHM6IFt7XG4gICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6IFwiSEhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiBcIkhJSUlcIiwgIFxuICAgICAgICB9LHtcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCJKSlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQEBAQCEhISEhJCQkJFwiXG4gICAgICAgIH1dXG4gICAgfV0sXG4gICAgaW1hZ2VQYXRoczogW10sXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIlxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIlxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIlxuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiXG5cblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICAgIGRhdGFcbn0pO1xuXG5cblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gIGNvbnRlbnQ6IGRhdGEsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXG4gIH0sXG4gIEltYWdlczogW10sXG4gIENvbW1lbnRzOiBbXSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gICAgZGF0YVxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXG4gICAgfSxcbn0pXG5cblxuY29uc3QgcmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDogXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzogXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0OiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RdLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkUmVxdWVzdFwiLCBhY3Rpb24uZGF0YSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFERF9DT01NRU5UX1NVQ0NFU1NcIiwgYWN0aW9uLmRhdGEpXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xuICAgICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIG1haW5Qb3N0cyxcbiAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOiBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})