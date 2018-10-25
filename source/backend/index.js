exports.backendBuilder = fpm => {
    const biz = fpm.createBiz('0.0.1');
    biz.addSubModules('foo', {
      bar: args => {
        return 1;
      }
    });
    fpm.addBizModules(biz);
}