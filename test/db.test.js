var should = require("chai").should();
var fpmc = require("yf-fpm-client-js").default;
fpmc.init({ appkey:'123123', masterKey:'123123', domain: 'http://localhost:9008' });


describe('DB', function(){

  it('Find A', function(done){
    var query = new fpmc.Query('usr_userinfo');
    query.page(1,10);
    query.findAndCount()
      .then(function(data){
        console.log(data)
        done();
      }).catch(function(err){
        done(err);
      })
  })
})
