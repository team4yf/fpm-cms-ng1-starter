"use strict";
angular.module('fpm.c.post', ['fpm.service', 'fpm.filter'])
  .controller('PostCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        const { Func, Query } = $ngFpmcService;
        new Query('usr_userinfo')
          .page(1,10)
          .findAndCount()
          .then(console.log)
          .catch(console.error)
    }])
  .controller('PostCreateCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        const { Func, Query } = $ngFpmcService;
        $scope.post = {
          content: '',
          title: '',
        }

        $scope.save = function(){
          console.log($scope.post);
        }
    }])
  