"use strict";
angular.module('fpm.c.datameta', ['fpm.service', 'fpm.filter'])
  .controller('DatametaCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
      // $scope.user = {
      //   id : '',
      //   nickname : '',
      //   mobile : '',
      //   password : ''
      // };
      $scope.rows; //所有数据
      $scope.pages; //总页数
      $scope.page = 1; //当前页数
      $scope.searchValue = ''; //搜索值
      // $scope.isdisabled = true;
      const {
        Func,
        Query
      } = $ngFpmcService;

      //搜索
      $scope.search = function () {
        var obj = new Query('cms_setting');
        console.log($scope.page)
        obj.condition(`mobile like '%${ $scope.searchValue }%' or nickname like '%${ $scope.searchValue }%'`)
          .page(1, 10)
          .findAndCount()
          .then(function (data) {
            console.log(data);
            $scope.rows = data.rows;
            $scope.pages = Math.ceil(data.count / 10)
            console.log('总页数：', $scope.pages)
          }).catch(function (err) {
            console.error(err);
          });
      }

      $scope.search();

      // 上一页
      $scope.prePage = function () {
        if ($scope.page > 1) {
          $scope.page -= 1;
          console.log('当前页数', $scope.page);

          var obj = new Query('cms_setting');
          console.log($scope.page)
          obj.condition(`mobile like '%${ $scope.searchValue }%' or nickname like '%${ $scope.searchValue }%'`)
            .page($scope.page, 10)
            .findAndCount()
            .then(function (data) {
              console.log(data);
              $scope.rows = data.rows;
              $scope.pages = Math.ceil(data.count / 10)
              console.log('总页数：', $scope.pages)
            }).catch(function (err) {
              console.error(err);
            });
        }
      };

      // 下一页
      $scope.nextPage = function () {
        if ($scope.page < $scope.pages) {
          $scope.page += 1;
          console.log('当前页数', $scope.page);

            var obj = new Query('cms_setting');
            obj.condition(`mobile like '%${ $scope.searchValue }%' or nickname like '%${ $scope.searchValue }%'`)
            .page($scope.page, 10)
            .findAndCount()
            .then(function (data) {
              console.log(data);
              $scope.rows = data.rows;
              $scope.pages = Math.ceil(data.count / 10)
              console.log('总页数：', $scope.pages)
            }).catch(function (err) {
              console.error(err);
            });
        }
      };


      $scope.user = {
        nickname : '',
        password : '',
        mobile : ''
      };

      $scope.modal = {
        id : '',
        nickname : '',
        password : '',
        mobile : ''
      };

      $scope.edit = function (obj) {
        console.log(obj);
        $scope.modal.id = obj.id;
        $scope.modal.nickname = obj.nickname;
        $scope.modal.password = obj.password;
        $scope.modal.mobile = obj.mobile;
        console.log($scope.modal);
      };

      

      $scope.save = function (){
        console.log($scope.modal);
        if($scope.editForm.$invalid){
          return false;
        }else{
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_setting',{$scope:modal.id});
            obj.save($scope.user)
              .then(function(data){
                alert('保存成功');
                location.reload();
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
              console.log($scope.modal);
        }
      }

    }
  ])