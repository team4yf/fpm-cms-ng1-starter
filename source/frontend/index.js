const path = require('path');
const Views = require('koa-views');
const Session = require('koa-session');
const Static = require('koa-static');

const { session } = require('./session.js');

const { CreateMenus } = require('./routers');
const { Login } = require('./routers/login.js');

const LOCAL = path.join(__dirname, '../..');

exports.frontendBuilder = fpm => {
    const { app } = fpm;

    app.use(Views(path.join(LOCAL, 'views'), {
        extension: 'html',
        map: { html: 'nunjucks' },
    }))
    
    app.use(Static(path.join(LOCAL, 'public')));
    
    app.use(Session({ key: 'fpm-iot-admin' }, app));
    
    app.use(session);

    fpm.bindRouter(CreateMenus(fpm));
    fpm.bindRouter(Login(fpm));

}

