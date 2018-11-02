const _ = require('lodash');
const YAML = require('yamljs');
const path = require('path');

// load setting.

exports.CreateMenus = (fpm) => {
  const router = fpm.createRouter();

  const menusYML = path.join(fpm.get('CWD'), 'menus.yml');
  const nativeObject = YAML.load(menusYML);

  fpm.app.use( async(ctx, next) => {

    _.extend(ctx.state,
      {
        menus: nativeObject.menus,
        query: ctx.query,
        params: ctx.params,
        setting: {
          website: {
            title: 'FPM CMS APP',

          },
          login: {
            image: 'http://imgsrc.baidu.com/imgad/pic/item/0823dd54564e9258904febd29782d158ccbf4e96.jpg',
            welcome: 'FPM CMS World',
          },

        },
      });
    await next();
  } )

  _.map(nativeObject.menus, menu => {
    const { type, url, path, page } = menu;
    if( type == '-'){
      // it's not a url menu
    }else if(url){
      // it's outlink
    }else{
      router.get(path, async ctx => {
        try{
          await ctx.render(page);
        }catch(e){
          console.error(e.toString());
          const showError = fpm.get('debug') === true ? {error: e.toString()} : {};
          await ctx.render('pages/404.html', showError);
        }
      });
    }
  })

  return router;
}