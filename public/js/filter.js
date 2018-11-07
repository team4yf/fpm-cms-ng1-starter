"use strict";
angular.module('fpm.filter', [])
.filter('switchStatus', function () {
    return function (src) {
      return (src === 0) ? '关' : '开';
    };
  })
  .filter('arrayToString', function () {
    return function (src) {
      return src.join('\n');
    };
  })