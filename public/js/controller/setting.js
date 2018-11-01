"use strict";
angular.module('fpm.c.setting', ['fpm.service', 'fpm.filter'])
  .controller('SettingCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        // console.log('aaa', $ngFpmcService);
        $scope.user = {
          nickname : '',
          password : '',
          mobile : ''
        };
        $scope.save = function () {
          if($scope.settingForm.$invalid){
            return false;
          }else{
            const { Func, Obj } = $ngFpmcService;
            var obj = new Obj('cms_setting');
              obj.set($scope.user)
                  .create()
                  .then(function(data){
                    alert('注册成功');
                    location.reload();
                    console.log(data);
                  }).catch(function(err){
                    console.error(err);
                  });
            console.log($scope.user);
          }
        }
        
    }])