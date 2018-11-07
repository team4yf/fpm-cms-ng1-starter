"use strict";
app.controller('DatametaCtrl', ['$scope', '$ngFpmcService', 'kit',
    function ($scope, $ngFpmcService, kit) {
      // $scope.user = {
      //   id : '',
      //   nickname : '',
      //   mobile : '',
      //   password : ''
      // };
      // $scope.rows; //所有数据
      // $scope.pages; //总页数
      $scope.page = 1; //当前页数
      $scope.searchValue = ''; //搜索值
      // $scope.isdisabled = true;
      const {
        Func,
        Query
      } = $ngFpmcService;

      //搜索
      $scope.search = function () {
        var obj = new Query('cms_datameta_edit');
        kit.logger.debug($scope.searchValue);
        obj.condition(`title like '%${ $scope.searchValue }%' or columnName like '%${ $scope.searchValue }%'`)
          .page(1, 10)
          .findAndCount()
          .then(function (data) {
            kit.logger.debug(data);
            $scope.rows = data.rows;
            $scope.pages = Math.ceil(data.count / 10)
            kit.logger.debug('总页数：', $scope.pages)
          }).catch(function (err) {
            kit.logger.debug(err);
          });
      }


      // 获取参数
      
      var url_data = APP.query
      kit.logger.debug('参数id：', url_data.id);

      
      // 加载数据
      $scope.loading = function(){
        var obj = new Query('cms_datameta_edit');
          // kit.logger.debug('当前页数',$scope.page)
          obj.condition(`datameta_id = '${url_data.id}'`)
            .page($scope.page, 10)
            .findAndCount()
            .then(function (data) {
              kit.logger.debug(data);
              $scope.rows = data.rows;
              // $scope.pages = Math.ceil(data.count / 10)
              // kit.logger.debug('总页数：', $scope.pages)
            }).catch(function (err) {
              kit.logger.debug(err);
            });
      }

      $scope.loading();

      

      // // 上一页
      // $scope.prePage = function () {
      //   if ($scope.page > 1) {
      //     $scope.page -= 1;
      //     kit.logger.debug('当前页数', $scope.page);
      //     $scope.loading();
          
      //   }
      // };

      // // 下一页
      // $scope.nextPage = function () {
      //   if ($scope.page < $scope.pages) {
      //     $scope.page += 1;
      //     kit.logger.debug('当前页数', $scope.page);

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
        title : '',
        columnName : '',
        formType:'',
        type:'',
        datameta_id:''
      };


      // 编辑
      $scope.edit = function (obj) {
        kit.logger.debug(obj);
        $scope.modal.id = obj.id;
        $scope.modal.title = obj.title;
        $scope.modal.columnName = obj.columnName;
        $scope.modal.formType = obj.formType;
        $scope.modal.type = obj.type;
        $scope.modal.datameta_id = obj.datameta_id;
        kit.logger.debug($scope.modal);
      };

      
      //编辑保存
      $scope.save = function (){
        kit.logger.debug($scope.modal);
        if($scope.editForm.$invalid){
          return false;
        }else{
          let id = $scope.modal.id
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_datameta_edit',{ id });
            obj.save($scope.modal)
              .then(function(data){
                kit.alert('保存成功');
                // location.reload();
                kit.logger.debug(data);
                $scope.loading();
              }).catch(function(err){
                kit.logger.debug(err);
              });
              kit.logger.debug($scope.modal);
        }
      }

      //删除按钮
      $scope.delete = function(obj){
        kit.logger.debug(obj);
        var id = obj.id;

        kit.logger.debug(id);

        kit.confirm('确定删除吗?')
        .then(function(result){
          kit.logger.debug(result.value); 
          if(result.value == true){
            const { Func, Obj } = $ngFpmcService;
            var obj = new Obj('cms_datameta_edit', {id});
            obj.remove()
              .then(function(data){
                kit.logger.debug(data);
                kit.alert('删除成功');
                $scope.loading();
              }).catch(function(err){
                kit.logger.debug(err);
              });
          }
        })
          
      }
      
    }
  ])