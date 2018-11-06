"use strict";
angular.module('fpm.c.post', ['fpm.service', 'fpm.filter'])
  .controller('PostCtrl', ['$scope', '$ngFpmcService',
    function ($scope, $ngFpmcService) {
        const { Func, Query } = $ngFpmcService;
        new Query('usr_userinfo')
          .page(1,10)
          .findAndCount()
          .then(console.log)
          .catch(console.error)
    }])
  .controller('PostCreateCtrl', ['$scope', '$ngFpmcService', 'kit', '$http',
    function ($scope, $ngFpmcService, kit, $http) {
        const { Func, Query } = $ngFpmcService;
        $scope.post = {
          content: '<p>AAABC</p>',
          category: { id: 1},
          title: '',
        };
        // load the tags /cates
        new Query('cms_tags')
          .find()
          .then(list => {
            $scope.tags = _.map(list, row => {
              return row._d;
            })
          })
          .catch(console.error);

        new Query('cms_category')
          .find()
          .then(list => {
            $scope.categorys = _.map(list, row => {
              return row._d;
            })
          })
          .catch(console.error);

        ClassicEditor
            .create( document.querySelector( '#editor' ), {
              ckfinder: {
                uploadUrl: '/upload',
              }
            } )
            .then( editor => {
              $scope.editor = editor;
            })
            .catch( error => {
                console.error( error );
            } );

        $scope.imageUpload = function(){
          kit.swal({
            title: '选择图片',
            html: `<input type="file" accept="image/*" aria-label="" id="image-file-input" style="display: flex;">`,
          }).then(function(file){
            var fd = new FormData(); //初始化一个FormData实例
            fd.append('upload', document.querySelector('#image-file-input').files[0]);

            $http({
              method:'POST',
              // url: '/upload',
              headers: {
                'Content-Type': undefined
              },
              transformRequest: angular.identity,
              data: fd,
            })
            .then((rsp) => {
              console.log(rsp.data);
            })
          })
        }
        $scope.save = function(){
          kit.toast('hi')
            .then(function(){
              kit.confirm('Yes or no?')
                .then(function(result){
                  kit.logger.debug(result.value, 'POST.js');
                })
                .catch(kit.logger.error);
            });
          // var fd = new FormData(); //初始化一个FormData实例
          // fd.append('upload', document.querySelector('#upload').files[0]);

          // $http({
          //   method:'POST',
          //   url: '/upload',
          //   headers: {
          //     'Content-Type': undefined
          //   },
          //   transformRequest: angular.identity,
          //   data: fd,
          // })
          // .then((rsp) => {
          //   console.log(rsp.data);
          // })
          // .catch((err) => {
          //   Swal({
          //     position: 'center',
          //     type: 'error',
          //     title: '上传失败',
          //     showConfirmButton: false,
          //     timer: 1500
          //   })
          // });
          // Swal({
          //   position: 'center',
          //   type: 'success',
          //   title: '保存成功',
          //   showConfirmButton: false,
          //   timer: 1500
          // }).then(() => {
          //   // alert(1)
          // });
          // $scope.post.content = $contentDom.val();
          $scope.post.content = $scope.editor.getData();
          console.log($scope.post);
        }
    }])