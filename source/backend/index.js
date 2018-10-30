exports.backendBuilder = fpm => {
    const biz = fpm.createBiz('0.0.1');
    biz.addSubModules('foo', {
      bar: args => {
        return 'Hi there,' + args.name;
      }
    });
    fpm.addBizModules(biz);
}