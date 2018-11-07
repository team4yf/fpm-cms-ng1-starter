"use strict";
app.controller('DebugCtrl', ['$scope', '$ngFpmcService', 'kit',
    function ($scope, $ngFpmcService, kit) {
        // console.log('aaa', $ngFpmcService);
        const { Func, Query } = $ngFpmcService;
        const { logger } = kit;

        $scope.output = [];

        $scope.message = {
          topic: '$s2d/a133333333/get',
          payload: `{"command":"123"}`,
        }
        var server = io( '/' );
        server.on( 'connected', function( event ) {
          logger.debug(server.id, 'mqtt');
        })
        server.on( 'message', function( event ) {
          $scope.$apply(function(){
            $scope.output.unshift(`[Console] ${ new Date().toLocaleString() } : ${event.content}`);
          });
          logger.debug($scope.output, 'mqtt');
        });

        $scope.publish = function(){
          // logger.debug($scope.message, 'mqtt')
          server.emit('message', $scope.message);
        }

    }])