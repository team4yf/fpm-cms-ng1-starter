const path = require('path');
const process = require('process');
const _ = require('lodash');

let VIEW_ROOT_DIR = './'

exports.session = async (ctx, next) => {
  const { url } = ctx.request;
  // console.log(ctx)
  // if( ctx.fpm.get('menus') ){
  //   _.extend(ctx.state, {
  //     menus: ctx.fpm.get('menus')
  //   })
  // }
  if(_.startsWith(url, '/admin')){
    _.extend(ctx.state, { 
      env: ctx.fpm._env,
      currentlink: url,
      version: ctx.fpm.getVersion(),
      view_root_dir: VIEW_ROOT_DIR,
    } )
    if (url === '/admin' || url === '/admin/login') {
      await next()
      return
    }
    let admin = ctx.session.admin
    
    //TODO RBAC
    if (!admin) {
      ctx.redirect('/admin/login')
    } else {
      await next()
    }
  }else{
    await next()
  }
}