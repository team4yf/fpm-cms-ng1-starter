"use strict";
angular.module('fpm.c.device', ['fpm.service', 'fpm.filter'])
  .controller('DeviceCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        // console.log('aaa', $ngFpmcService);
        const { Func, Query } = $ngFpmcService;
        new Query('usr_userinfo').page(1,10).findAndCount()
          .then(console.log)
          .catch(console.error)
    }])