const _ = require('lodash');
const YAML = require('yamljs');
const path = require('path');

exports.CreateMenus = (fpm) => {
  const router = fpm.createRouter();

  const menusYML = path.join(fpm.get('CWD'), 'menus.yml');
  const nativeObject = YAML.load(menusYML);

  fpm.app.use( async(ctx, next) => {
    _.extend(ctx.state, { menus: nativeObject.menus});
    await next();
  } )

  _.map(nativeObject.menus, menu => {
    const { type, title, icon, url, path, page } = menu;
    if( type == '-'){
      // it's not a url menu
    }else if(url){
      // it's outlink
    }else{
      router.get(path, async ctx => {
        try{
          await ctx.render(page);
        }catch(e){
          // console.error(e.toString());
          const showError = fpm.get('debug') === true ? {error: e.toString()} : {};
          await ctx.render('pages/404.html', showError);
        }
      });
    }
  })

  return router;
}