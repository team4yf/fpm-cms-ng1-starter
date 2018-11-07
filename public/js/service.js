"use strict";
angular.module('io.y+.logger', [])
  .service('ylogger', [function () {
    var STYLES = {
      TAG: 'color:blue',
      DEBUG: 'color:green',
      ERROR: 'color:red',
      LOG: 'color:gray'
    };
    var _getString = function (object) {
      //TODO: check type
      switch (typeof object) {
        case 'object':
          return JSON.stringify(object, null, 2);
        default:
          return object;
      }
    };
    var isShowDebug = true;
    var excludeFilter; // ['!api.js', 'deapi.js']
    var _isExcluded = function (tag) {
      if (!excludeFilter) {
        return false;
      }

      return excludeFilter == tag;
    }
    return {
      getString: _getString,
      debug: function (message, tag) {
        if (!isShowDebug) return;
        if (_isExcluded(tag)) return;
        console.log('%c TAG:' + (tag || 'UN_DEFINED') + ' ; DEBUG: %c' + _getString(message), STYLES.TAG, STYLES.DEBUG);
      },
      setLevel: function (level) {
        switch (level) {
          case 'debug':
            isShowDebug = true;
            break;
          case 'error':
            isShowDebug = false;
            break;
          default:
            isShowDebug = true;
            break;
        }
      },
      addExcludeFilter: function (filter) {
        excludeFilter = filter;
      },
      log: function (message) {
        console.log(message);
      },
      error: function (message, tag) {
        if (_isExcluded(tag)) return;
        console.log('%c TAG:' + (tag || 'UN_DEFINED') + ' ; ERROR: %c' + _getString(message), STYLES.TAG, STYLES.ERROR);
      },

    };
  }]);
  angular.module('io.y+.user', [])
    .service('yuser', [function () {
      //local var define
      var ls = window.localStorage,
        UESR_HASH = '__USER_HASH__',
        _s = { _u: {} };
      var DEFAULTS = function(){
        return {
          id: 1,
          username: '',
          nickname: '',
          email: '',
          phone: '',
          token: '123',
          invalidTime: 0,
        }
      };
      //inject functions
      _s.get = function (k) {
        if (k)
          return _s._u[k];
        return _s._u;
      }
      _s.getId = function () {
        return _s._u.id;
      }
      _s.getToken = function () {
        return _s._u.token;
      }
      _s.isInvalid = function () {
        return _s._u.invalidTime < new Date().getTime();
      }
      _s.getName = function () {
        return _s._u.username;
      }
      _s.set = function (k, v) {
        _s._u[k] = v;
        return _s;
      }
      _s.logout = function () {
        _s._u = undefined;
        ls.removeItem(UESR_HASH);
      }
      _s.isLogin = function () {
        _s.load();
        return (undefined !== _s._u.id);
      }
      _s.load = function () {
        var _val = ls.getItem(UESR_HASH);
        if (null !== _val) {
          _s._u = JSON.parse(_val);
        }else{
          _s._u = {};
        }
        return _s;
      }
      _s.save = function () {
        ls.setItem(UESR_HASH, JSON.stringify(_s._u));
        return _s;
      }
      _s.update = function (u) {
        _s._u = DEFAULTS();
        for(var k in u){
          _s._u[k] = u[k];
        }
        return _s.save();
      }
      return _s;
    }]);

angular.module('fpm.service', ['ngFpmc', 'io.y+.logger', 'io.y+.user'])
  .service('$ngFpmcService', ['$ngFpmc',
  function($ngFpmc){
    $ngFpmc.init({ endpoint: '/api', mode:'DEV',appkey:'123123',masterKey:'123123'});
    const Obj = $ngFpmc.Object, Func = $ngFpmc.Function, Query = $ngFpmc.Query;
    return { Obj, Func, Query };
  }])
  .service('kit', ['$q', 'ylogger', 'yuser', '$http',
  function($q, ylogger, yuser, $http){
    const _service = {
      swal: Swal,
      alert: function(message, title = '提示', type = 'info'){
        Swal(
          message,
          undefined,
          type
        )
      },
      toast: function(message, length = 2000, type = 'success'){
          return Swal({
            position: 'top-end',
            type: type,
            title: message,
            showConfirmButton: false,
            timer: length
          })
      },
      confirm: function(message){
        return Swal({
          title: message,
          type: 'question',
          showCancelButton: true,
          confirmButtonText: '是',
          cancelButtonText: '否',
        })
      },
      logger: ylogger,
      // upload
      upload: function(dom){
        var fd = new FormData(); //初始化一个FormData实例
        fd.append('upload', dom);

        return $http({
          method:'POST',
          url: '/upload',
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity,
          data: fd,
      });
    }

    }

    _service.chooseFile = function(){
      return _service.swal({
        title: '选择图片',
        html: `<img class="img-preview" id="img-preview" />
        <input type="file" accept="image/*" aria-label="" id="image-file-input" style="display: flex;">`,
      }).then(function(){
        return _service.upload(document.querySelector('#image-file-input').files[0])
      })
    }

    _service.showPrev = function(file){
      const reader = new FileReader()
      reader.onload = (e) => {
        document.querySelector('#img-preview').src = e.target.result;
      }
      reader.readAsDataURL(document.querySelector('#image-file-input').files[0])
    }

    return _service;
  }]);