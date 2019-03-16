webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: fetchCourseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCourseData", function() { return fetchCourseData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var fetchCourseData = function fetchCourseData(courses) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://saral.navgurukul.org/api/courses').then(function (res) {
    courses = res.data.availableCourses;
    console.log(courses);
    return courses;
  }).catch(function (error) {
    return console.log("There is an error in API call", error);
  });
};

/***/ })

})
//# sourceMappingURL=index.js.e65b4f1093fc4ff075e6.hot-update.js.map