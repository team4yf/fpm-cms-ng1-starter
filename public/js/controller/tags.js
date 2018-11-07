"use strict";
  app.controller('TagsCtrl', ['$scope', '$ngFpmcService','kit',
    function ($scope, $ngFpmcService, kit) {

      $scope.removeShow = true;


      const {Func,Query} = $ngFpmcService;
      $scope.loading = function(){
        var obj = new Query('cms_tags');
          obj.find()
            .then(function (data) {
              // kit.logger.debug(data);
              $scope.data = data;
              for(var i = 0;i<data.length;i++){
                data[i].spanShow = true;
                data[i].inputShow = false;
                data[i].tagShow = true;
              }
              kit.logger.debug($scope.data);
            }).catch(function (err) {
              kit.logger.debug(err);
            });
      }

      $scope.loading();

    //  $(document).on('click', '.tag', function(){
    //     var span = $(this).find('span');
    //     var input = $(this).find('input');
    //     span.hide();
    //     input.show().focus();
    //     input.blur(function(){
    //       $(this).hide();
    //       span.show();
    //     });
    //  });
      
    // 点击标签
      $scope.click = function(item){
        $scope.removeShow = false;
        kit.logger.debug(item);
        item.spanShow = false;
        item.inputShow = true;
        
      }

      //编辑保存
      $scope.blur = function(item){
        $scope.removeShow = true;


        item.spanShow = true;
        item.inputShow = false;
        

        kit.logger.debug(item);
        kit.logger.debug(item._d.tagName);
        if(item._d.tagName == ''){
          item._d.tagName = '标签名';
        }

        let id = item._d.id
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_tags',{ id });
            obj.save(item._d)
              .then(function(data){
                // kit.alert('保存成功');
                kit.logger.debug('保存成功');
                kit.logger.debug(data);
              }).catch(function(err){
                kit.logger.debug(err);
              });
      }


      // 删除事件
      $scope.remove = function(item){
        kit.logger.debug(item._d.id);
        var id = item._d.id;
        kit.confirm("确认删除吗?")
        .then(function(result){
          kit.logger.debug(result.value);
          if(result.value == true){
            const { Func, Obj } = $ngFpmcService;
            var obj = new Obj('cms_tags', {id});
            obj.remove()
              .then(function(data){
                kit.logger.debug(data);
                item.tagShow = false;
                kit.alert('删除成功');
              }).catch(function(err){
                kit.logger.debug(err);
                kit.alert('删除失败，请联系管理员');
              });
          }
        })
        
        
      }

      // 添加按钮
      $scope.add = function(){
        const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_tags');
            obj.set()
                .create()
                .then(function(data){
                  kit.logger.debug('添加成功');
                  $scope.loading();
                  kit.logger.debug(data);
                }).catch(function(err){
                  kit.logger.debug(err);
                });
      }

    }
  ])