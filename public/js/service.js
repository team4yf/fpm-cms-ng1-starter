"use strict";
angular.module('fpm.service', ['ngFpmc'])
  .service('$ngFpmcService', ['$ngFpmc', function($ngFpmc){
    $ngFpmc.init({ endpoint: 'http://localhost:9007/api', mode:'DEV',appkey:'123123',masterKey:'123123'});
    const Obj = $ngFpmc.Object, Func = $ngFpmc.Function, Query = $ngFpmc.Query;
    return { Obj, Func, Query };
  }]);