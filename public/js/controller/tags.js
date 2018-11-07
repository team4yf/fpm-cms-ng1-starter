"use strict";
angular.module('fpm.c.tags', ['fpm.service', 'fpm.filter'])
  .controller('TagsCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {

      $scope.removeShow = true;


      const {Func,Query} = $ngFpmcService;
      $scope.loading = function(){
        var obj = new Query('cms_tags');
          obj.find()
            .then(function (data) {
              // console.log(data);
              $scope.data = data;
              for(var i = 0;i<data.length;i++){
                data[i].spanShow = true;
                data[i].inputShow = false;
                data[i].tagShow = true;
              }
              console.log($scope.data);
            }).catch(function (err) {
              console.error(err);
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
        console.log(item);
        item.spanShow = false;
        item.inputShow = true;
        
      }

      //编辑保存
      $scope.blur = function(item){
        $scope.removeShow = true;


        item.spanShow = true;
        item.inputShow = false;
        

        console.log(item);
        console.log(item._d.tagName);
        if(item._d.tagName == ''){
          item._d.tagName = '标签名';
        }

        let id = item._d.id
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_tags',{ id });
            obj.save(item._d)
              .then(function(data){
                // alert('保存成功');
                console.log('保存成功');
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }


      // 删除事件
      $scope.remove = function(item){
        console.log(item._d.id);
        var id = item._d.id;
        var ifRemove = confirm("确认删除吗?");
        if(!ifRemove){
          return false;
        }else{
          const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_tags', {id});
          obj.remove()
            .then(function(data){
              console.log(data);
              item.tagShow = false;
              alert('删除成功');
            }).catch(function(err){
              console.error(err);
              alert('删除失败，请联系管理员');
            });
        }
        
      }

      // 添加按钮
      $scope.add = function(){
        const { Func, Obj } = $ngFpmcService;
          var obj = new Obj('cms_tags');
            obj.set()
                .create()
                .then(function(data){
                  console.log('添加成功');
                  $scope.loading();
                  console.log(data);
                }).catch(function(err){
                  console.error(err);
                });
      }

    }
  ])