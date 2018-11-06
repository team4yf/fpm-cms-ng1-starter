exports.backendBuilder = fpm => {
  fpm.subscribe('#upload/success', (topic, data) => {
    console.log(data);
  })

  fpm.subscribe('#socketio/message', (topic, data) => {
    console.info(data.id, data.data);
    fpm.execute('socketio.send', { id: data.id, content: 'ok'});
  })

  const biz = fpm.createBiz('0.0.1');
  biz.addSubModules('foo', {
    bar: args => {
      return 'Hi there,' + args.name;
    }
  });
  fpm.addBizModules(biz);
}