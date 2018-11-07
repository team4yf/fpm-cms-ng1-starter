"use strict";
angular.module('fpm.c.category', ['fpm.service', 'fpm.filter'])
  .controller('CategoryCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
      
      const { Func, Query, Obj } = $ngFpmcService;
      
      $scope.data = {
        // first
        // second
        // third
      };

      $scope.firstData = function(){
         //一级菜单数据
         var obj = new Query('cms_category_first');
         obj.find()
           .then(function (data) {
             for(var i = 0;i<data.length;i++){
               data[i].show = true;
               data[i].num = 0;
               data[i].spanShow = true;
               data[i].inputShow = false;
               data[i].del = false;
             }
             $scope.data.first = data;
             console.log($scope.data);
           }).catch(function (err) {
             console.error(err);
           });
      }

      $scope.secondData = function(){
        //二级菜单数据
        var obj = new Query('cms_category_second');
          obj.find()
            .then(function (data) {
              for(var i = 0;i<data.length;i++){
                data[i].show = true;
                data[i].num = 0;
                data[i].spanShow = true;
                data[i].inputShow = false;
                data[i].del = false;
              }
              $scope.data.second = data;
              console.log($scope.data);
            }).catch(function (err) {
              console.error(err);
            });
      }

      $scope.thirdData = function(){
        //三级菜单数据
        var obj = new Query('cms_category_third');
          obj.find()
            .then(function (data) {
              for(var i = 0;i<data.length;i++){
                data[i].show = true;
                data[i].spanShow = true;
                data[i].inputShow = false;
                data[i].del = false;
              }
              $scope.data.third = data;
              console.log($scope.data);
            }).catch(function (err) {
              console.error(err);
            });
      }

      $scope.firstData();
      $scope.secondData();
      $scope.thirdData();

      $scope.show_1 = function(item){
        
        item.num++;
        if(item.num % 2 !=0){
          item.show = false;
        }else{
          item.show = true;
        }
        console.log(item);
      }

      $scope.show_2 = function(item){
        
        item.num++;
        if(item.num % 2 !=0){
          item.show = false;
        }else{
          item.show = true;
        }
        console.log(item);
      }


      $scope.add_1 = function(){
        // alert(1);
        var obj = new Obj('cms_category_first');
          obj.set()
            .create()
            .then(function(data){
              console.log('添加成功');
              $scope.firstData();
              console.log(data);
            }).catch(function(err){
              console.error(err);
            });
      }

      // 点击编辑first
      $scope.edit_1 = function(item){
        console.log(item);
        item.spanShow = false;
        item.inputShow = true;
      }

      //失去焦点保存first
      $scope.blur_1 = function(item){
        console.log(item);
        item.spanShow = true;
        item.inputShow = false;
        if(item._d.name == ''){
          item._d.name = '默认名称';
        }

        let id = item._d.id
        console.log(id);
          var obj = new Obj('cms_category_first',{ id });
            obj.save(item._d)
              .then(function(data){
                console.log('保存成功');
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }

      // 添加二级菜单
      $scope.add_2 = function (item){
        console.log(item);
        var first_id = item._d.id
        var obj = new Obj('cms_category_second');
          obj.set({
              first_id:first_id
            })
              .create()
              .then(function(data){
                item.show = true;
                console.log('添加成功');
                $scope.secondData();
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }

      // 删除一级菜单
      $scope.remove_1 = function(item){
        console.log(item);
        var id = item._d.id;

        var count;
        //先判断二级菜单是否有数据，没有数据则执行删除
        var search = new Query('cms_category_second');
        search.condition(`first_id = '${id}'`)
          .findAndCount()
          .then(function (data) {
            console.log(data);
            count = data.count;
            console.log(count);

            if(count == 0){
              var ifRemove = confirm("确认删除吗?");
              if(!ifRemove){
                return false;
              }else{
                var obj = new Obj('cms_category_first', {id});
                obj.remove()
                  .then(function(data){
                    console.log(data);
                    // $scope.firstData();
                    item.del = true;
                    alert('删除成功');
                  }).catch(function(err){
                    console.error(err);
                    alert('删除失败，请联系管理员');
                  });
              }
            }else{
              alert('请先删除子菜单');
            }

          }).catch(function (err) {
            console.error(err);
          });

        
          

      }




      // 点击编辑second
      $scope.edit_2 = function(item){
        console.log(item);
        item.spanShow = false;
        item.inputShow = true;
      }

      //失去焦点保存second
      $scope.blur_2 = function(item){
        console.log(item);
        item.spanShow = true;
        item.inputShow = false;
        if(item._d.name == ''){
          item._d.name = '默认名称';
        }

        let id = item._d.id
        console.log(id);
          var obj = new Obj('cms_category_second',{ id });
            obj.save(item._d)
              .then(function(data){
                console.log('保存成功');
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }

      // 添加三级菜单
      $scope.add_3 = function (item){
        console.log(item);
        var second_id = item._d.id
        var obj = new Obj('cms_category_third');
          obj.set({
              second_id:second_id
            })
              .create()
              .then(function(data){
                item.show = true;
                console.log('添加成功');
                $scope.thirdData();
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }

      // 删除二级菜单
      $scope.remove_2 = function(item){
        console.log(item);
        var id = item._d.id;

        var count;
        //先判断三级菜单是否有数据，没有数据则执行删除
        var search = new Query('cms_category_third');
        search.condition(`second_id = '${id}'`)
          .findAndCount()
          .then(function (data) {
            console.log(data);
            count = data.count;
            console.log(count);

            if(count == 0){
              var ifRemove = confirm("确认删除吗?");
              if(!ifRemove){
                return false;
              }else{
                var obj = new Obj('cms_category_second', {id});
                obj.remove()
                  .then(function(data){
                    console.log(data);
                    // $scope.secondData();
                    item.del = true;
                    console.log(item);
                    alert('删除成功');
                  }).catch(function(err){
                    console.error(err);
                    alert('删除失败，请联系管理员');
                  });
              }
            }else{
              alert('请先删除子菜单');
            }

          }).catch(function (err) {
            console.error(err);
          });
      }


      //点击编辑三级菜单
      $scope.edit_3 = function(item){
        console.log(item);
        item.spanShow = false;
        item.inputShow = true;
      }


      //失去焦点保存三级菜单
      $scope.blur_3 = function(item){
        console.log(item);
        item.spanShow = true;
        item.inputShow = false;
        if(item._d.name == ''){
          item._d.name = '默认名称';
        }

        let id = item._d.id
        console.log(id);
          var obj = new Obj('cms_category_third',{ id });
            obj.save(item._d)
              .then(function(data){
                console.log('保存成功');
                console.log(data);
              }).catch(function(err){
                console.error(err);
              });
      }


      $scope.remove_3 = function(item){
        console.log(item);
        var id = item._d.id
        
        var ifRemove = confirm("确认删除吗?");
          if(!ifRemove){
            return false;
          }else{
            var obj = new Obj('cms_category_third', {id});
            obj.remove()
              .then(function(data){
                console.log(data);
                // $scope.thirdData();
                item.del = true;
                console.log(item);
                alert('删除成功');
              }).catch(function(err){
                console.error(err);
                alert('删除失败，请联系管理员');
              });
          }
      }

    }
  ])