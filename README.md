# fpm-cms-ng1-starter

A web cms system.

Stacks:

- Running Container: `Docker`.
- Database: `Mysql 5.6`.
- Web Language: `Nodejs 8.11`.
- BE Framework: `yf-fpm-server`.
- Template engine: `nunjucks` [See Detail](https://nunjucks.bootcss.com/templating.html).
- UI Lib: `AdminLte`.
- FE Framework: `Angularjs1.x` & `jQuery` & `fpmc-ng1`.

Prototype: [modao.cc](https://free.modao.cc/app/QVQaMYO4sdMe67xc9rJHRJDhZYLDEE5#screen=s9DF93ED1561530608388924)

## FAQ

1) How to use angularjs1.x ?

  See the Manual [http://www.angularjs.net.cn/](http://www.angularjs.net.cn/).

2) How to use nodejs ?

  See the homepage of the [nodejs](https://nodejs.org/en/docs/)

3) How to use mysql ?

  Emmmmm ~~.

4) See more FAQ in [FAQ.md](./FAQ.md)。

## Source Directory

```
+ Project
| + fake
| |- bot.js           // fake bot
| + source            // node code files
| | + backend           // backend scripts
| | + frontend
| | | + routers
| | | | - dashboard.js
| | | | - login.js
| | | - index.js
| | | - session.js
| | - app.js
| + views             // html files
| | + pages
| | | - dashboard.html
| | | - login.html
| | + tempates
| | | - base.html
| | | - void-main.html
| + public
| | + css              // style files
| | + js               // script files
| + sql               // sql scripts
| + tool                // tool kits


```

## Install

```
$ npm i && npm run build
```

## Config file

```
$ cp config.default.json config.json
```

## Dev

```
$ npm run docker && npm run dev
```
