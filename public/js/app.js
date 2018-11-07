"use strict";
const app = angular.module('app', ['fpm.service', 'fpm.filter'])
  .controller('RootCtrl', ['$rootScope', '$scope', '$ngFpmcService', 'kit',
  function($rootScope, $scope, $ngFpmcService, kit){

    $(document).delegate('#image-file-input', 'change', function(){
      $scope.$emit('file-uploaded', this.files[0])
    })
    $scope.$on('file-uploaded', function(event, data){
      kit.showPrev(data);
    })
  }]);

  window.app = app;