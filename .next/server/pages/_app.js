/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl),\n/* harmony export */   imgUrl: () => (/* binding */ imgUrl)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cloud = true;\nconst imgCloud = true;\nconst url = cloud ? \"https://hub.bdcallingacademy.com/api/\" : \"http://192.168.10.13:8000/api/\";\nconst imageUrl = imgCloud ? \"https://hub.bdcallingacademy.com\" : \"http://192.168.10.13:8000\";\nconst baseUrl = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: url,\n    timeout: 10000,\n    headers: {\n        \"X-Custom-Header\": \"foobar\"\n    }\n});\nconst imgUrl = imageUrl;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxRQUFRO0FBQ2QsTUFBTUMsV0FBVztBQUVqQixNQUFNQyxNQUFNRixRQUNSLDBDQUNBO0FBRUosTUFBTUcsV0FBV0YsV0FDYixxQ0FDQTtBQUVHLE1BQU1HLFVBQVVMLG9EQUFZLENBQUM7SUFDbENPLFNBQVNKO0lBQ1RLLFNBQVM7SUFDVEMsU0FBUztRQUFFLG1CQUFtQjtJQUFTO0FBQ3pDLEdBQUc7QUFFSSxNQUFNQyxTQUFTTixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9zcmMvY29uZmlnLmpzPzI0YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY2xvdWQgPSB0cnVlO1xyXG5jb25zdCBpbWdDbG91ZCA9IHRydWU7XHJcblxyXG5jb25zdCB1cmwgPSBjbG91ZFxyXG4gID8gXCJodHRwczovL2h1Yi5iZGNhbGxpbmdhY2FkZW15LmNvbS9hcGkvXCJcclxuICA6IFwiaHR0cDovLzE5Mi4xNjguMTAuMTM6ODAwMC9hcGkvXCI7XHJcblxyXG5jb25zdCBpbWFnZVVybCA9IGltZ0Nsb3VkXHJcbiAgPyBcImh0dHBzOi8vaHViLmJkY2FsbGluZ2FjYWRlbXkuY29tXCJcclxuICA6IFwiaHR0cDovLzE5Mi4xNjguMTAuMTM6ODAwMFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHVybCxcclxuICB0aW1lb3V0OiAxMDAwMCxcclxuICBoZWFkZXJzOiB7IFwiWC1DdXN0b20tSGVhZGVyXCI6IFwiZm9vYmFyXCIgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW1nVXJsID0gaW1hZ2VVcmw7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNsb3VkIiwiaW1nQ2xvdWQiLCJ1cmwiLCJpbWFnZVVybCIsImJhc2VVcmwiLCJjcmVhdGUiLCJiYXNlVVJMIiwidGltZW91dCIsImhlYWRlcnMiLCJpbWdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./src/contexts/AuthContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ AuthContext,default auto */ \nconst { baseUrl } = __webpack_require__(/*! @/config */ \"./src/config.js\");\nconst { createContext, useState, useEffect } = __webpack_require__(/*! react */ \"react\");\nconst AuthContext = createContext();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = useState({});\n    let token;\n    if (false) {}\n    const value = {\n        user,\n        setUser\n    };\n    useEffect(()=>{\n        if (token) {\n            baseUrl.get(\"/profile\", {\n                headers: {\n                    \"Content-type\": \"application/json\",\n                    authorization: `Bearer ${token}`\n                }\n            }).then((res)=>{\n                if (res.data) {\n                    setUser(res.data?.user);\n                }\n            }).catch((error)=>{\n                console.error(\"Error fetching user data:\", error);\n            });\n        }\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQUFNLEVBQUVBLE9BQU8sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxpQ0FBVTtBQUN0QyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR0gsbUJBQU9BLENBQUMsb0JBQU87QUFFdkQsTUFBTUksY0FBY0gsZ0JBQWdCO0FBRTNDLE1BQU1JLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLFNBQVMsQ0FBQztJQUVsQyxJQUFJTztJQUVKLElBQUksS0FBNkIsRUFBRSxFQUdsQztJQUVELE1BQU1FLFFBQVE7UUFDWko7UUFDQUM7SUFDRjtJQUVBTCxVQUFVO1FBQ1IsSUFBSU0sT0FBTztZQUNUVixRQUNHYSxHQUFHLENBQUMsWUFBWTtnQkFDZkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCQyxlQUFlLENBQUMsT0FBTyxFQUFFTCxNQUFNLENBQUM7Z0JBQ2xDO1lBQ0YsR0FDQ00sSUFBSSxDQUFDLENBQUNDO2dCQUNMLElBQUlBLElBQUlDLElBQUksRUFBRTtvQkFDWlQsUUFBUVEsSUFBSUMsSUFBSSxFQUFFVjtnQkFDcEI7WUFDRixHQUNDVyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ05DLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1lBQzdDO1FBQ0o7SUFDRixHQUFHO1FBQUNWO0tBQU07SUFFVixxQkFBTyw4REFBQ0wsWUFBWWlCLFFBQVE7UUFBQ1YsT0FBT0E7a0JBQVFMOzs7Ozs7QUFDOUM7QUFFQSxpRUFBZUQsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzPzc4NzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmNvbnN0IHsgYmFzZVVybCB9ID0gcmVxdWlyZShcIkAvY29uZmlnXCIpO1xyXG5jb25zdCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGxldCB0b2tlbjtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgb24gdGhlIGNsaWVudCBzaWRlXHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS50b2tlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgdXNlcixcclxuICAgIHNldFVzZXIsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBiYXNlVXJsXHJcbiAgICAgICAgLmdldChcIi9wcm9maWxlXCIsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRVc2VyKHJlcy5kYXRhPy51c2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5dKTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJ2YWx1ZSIsImdldCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Poppins_arguments_subsets_latin_weight_400_variableName_poppins___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\_app.js\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Poppins_arguments_subsets_latin_weight_400_variableName_poppins___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Poppins_arguments_subsets_latin_weight_400_variableName_poppins___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const getLayout = Component.getLayout || ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_5__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        y: 15\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    exit: {\n                        opacity: 0,\n                        y: 15\n                    },\n                    transition: {\n                        delay: 0.2\n                    },\n                    className: (next_font_google_target_css_path_src_pages_app_js_import_Poppins_arguments_subsets_latin_weight_400_variableName_poppins___WEBPACK_IMPORTED_MODULE_7___default().className),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            color: \"#1796FD\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 25,\n                            columnNumber: 24\n                        }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Bungee\\\\bdCalling\\\\bdcalling-academy\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU1BO0FBUjRDO0FBQ3BCO0FBQ1Q7QUFDbUM7QUFDTjtBQUVIO0FBR2hDLFNBQVNNLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQsTUFBTUMsWUFBWUYsVUFBVUUsU0FBUyxJQUFLLEVBQUNDLE9BQVNBLElBQUc7SUFFdkQscUJBQ0UsOERBQUNOLDREQUFlQTtRQUFDTyxTQUFTSCxVQUFVRyxPQUFPO2tCQUN6Qyw0RUFBQ1YsNkRBQVlBO3NCQUNYLDRFQUFDQywwREFBZUE7MEJBQ2QsNEVBQUNDLGlEQUFNQSxDQUFDUyxHQUFHO29CQUNUQyxTQUFTO3dCQUFFQyxTQUFTO3dCQUFHQyxHQUFHO29CQUFHO29CQUM3QkMsU0FBUzt3QkFBRUYsU0FBUzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDNUJFLE1BQU07d0JBQUVILFNBQVM7d0JBQUdDLEdBQUc7b0JBQUc7b0JBQzFCRyxZQUFZO3dCQUFFQyxPQUFPO29CQUFJO29CQUN6QkMsV0FBV3BCLDRLQUFpQjs7c0NBRTVCLDhEQUFDSywyREFBYUE7NEJBQUNnQixPQUFNOzs7Ozs7d0JBQ3BCWix3QkFBVSw4REFBQ0Y7NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiYW5pbWF0ZS5jc3NcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IFBvcHBpbnMgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgTmV4dE5Qcm9ncmVzcyBmcm9tIFwibmV4dGpzLXByb2dyZXNzYmFyXCI7XHJcblxyXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7IHN1YnNldHM6IFtcImxhdGluXCJdLCB3ZWlnaHQ6IFtcIjQwMFwiXSB9KTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAoKHBhZ2UpID0+IHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTUgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogMTUgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cG9wcGlucy5jbGFzc05hbWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxOZXh0TlByb2dyZXNzIGNvbG9yPVwiIzE3OTZGRFwiIC8+XHJcbiAgICAgICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsicG9wcGlucyIsIkF1dGhQcm92aWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIlNlc3Npb25Qcm92aWRlciIsIk5leHROUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJzZXNzaW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJjbGFzc05hbWUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/animate.css"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();