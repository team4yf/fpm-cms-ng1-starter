"use strict";
app.controller('SettingCtrl', ['$scope', '$ngFpmcService','kit',
    function ($scope, $ngFpmcService, kit) {
        // kit.logger.debug('aaa', $ngFpmcService);
        $scope.user = {
          domain : '',
          language : '',
          sitecode : '',
          email : '',
          phone : ''
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
                    kit.alert('注册成功');
                    setTimeout(
                      ()=>{location.reload()},1000
                    )
                    kit.logger.debug(data);
                  }).catch(function(err){
                    kit.logger.debug(err);
                  });
            kit.logger.debug($scope.user);
          }
        }
        
    }])