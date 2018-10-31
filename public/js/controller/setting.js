"use strict";
angular.module('fpm.c.setting', ['fpm.service', 'fpm.filter'])
  .controller('SettingCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        // console.log('aaa', $ngFpmcService);
        $scope.user = {
          nikename : '',
          login_id : '',
          login_pass : '',
          mobile : ''
        };
        console.log($scope.nikename);
        $scope.save = function () {
          // const { Func, Obj } = $ngFpmcService;
          // var obj = new Obj('cms_setting');
          //   obj.set($scope.user)
          //       .create()
          //       .then(function(data){
          //         console.info(data);
          //       }).catch(function(err){
          //         console.error(err);
          //       });
          console.log($scope.user);
        }
        
    }])