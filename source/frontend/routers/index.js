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
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f6e5055d9ad1d603fd364c11823d026&auto=format&fit=crop&w=1952&q=80',
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