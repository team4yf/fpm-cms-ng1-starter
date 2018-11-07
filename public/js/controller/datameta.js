"use strict";
app.controller('DatametaCtrl', ['$scope', '$ngFpmcService',
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
        var obj = new Query('cms_datameta');
        console.log($scope.searchValue);
        obj.condition(`data like '%${ $scope.searchValue }%' or manage like '%${ $scope.searchValue }%'`)
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




      
      // 加载数据
      $scope.loading = function(){
        var obj = new Query('cms_datameta');
          console.log($scope.page)
          obj.condition()
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



      // // 上一页
      // $scope.prePage = function () {
      //   if ($scope.page > 1) {
      //     $scope.page -= 1;
      //     console.log('当前页数', $scope.page);
      //     $scope.loading();
          
      //   }
      // };

      // // 下一页
      // $scope.nextPage = function () {
      //   if ($scope.page < $scope.pages) {
      //     $scope.page += 1;
      //     console.log('当前页数', $scope.page);

      //     $scope.loading();
      //   }
      // };


      // $scope.user = {
      //   nickname : '',
      //   password : '',
      //   mobile : ''
      // };

      $scope.modal = {
        id : '',
        data : '',
        manage : '',
      };


      // 编辑
      $scope.edit = function (obj) {
        console.log(obj);
        $scope.modal.id = obj.id;
        $scope.modal.data = obj.data;
        $scope.modal.manage = obj.manage;
        console.log($scope.modal);
      };

      
      //编辑保存
      $scope.save = function (){
        console.log($scope.modal);
        if($scope.editForm.$invalid){
          return false;
        }else{
          let id = $scope.modal.id
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_datameta',{ id });
            obj.save($scope.modal)
              .then(function(data){
                alert('保存成功');
                // location.reload();
                console.log(data);
                $scope.loading();
              }).catch(function(err){
                console.error(err);
              });
              console.log($scope.modal);
        }
      }

      //删除按钮
      $scope.delete = function(obj){
        console.log(obj);
        $scope.modal.id = obj.id;
      }

      // 确定删除
      $scope.del = function(){
          var id = $scope.modal.id
          console.log(id);
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_datameta', {id});
          obj.remove()
            .then(function(data){
              console.log(data);
              alert('删除成功');
              $scope.loading();
            }).catch(function(err){
              console.error(err);
            });
      }
    }
  ])