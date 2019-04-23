const fpmc = require("fpmc-jssdk");
const assert = require('assert');
const debug = require('debug')('TEST');
const { Func, init } = fpmc;
init({ appkey:'123123', masterKey:'123123', endpoint: 'http://localhost:9007/api' });

describe('FOO', function(){

  it('Find A', async () =>{
    try {
      const rsp = await new Func('foo.bar')
        .invoke()
      debug(rsp);
      assert(!!rsp.data, 'data should not empty!');

    } catch (error) {
      throw error;
    }
  })
})
