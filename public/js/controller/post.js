"use strict";
app.controller('PostCtrl', ['$scope', '$ngFpmcService',
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
          cover: 'http://placehold.it/150x100',
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

        if(ClassicEditor){
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
        }
        $scope.imageUpload = function(){

          kit.chooseFile().then(function(rsp){
            console.log(rsp.data);
            $scope.$apply(function(){
              $scope.post.cover = rsp.data.url;
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
          $scope.post.content = $scope.editor.getData();
        }
    }])