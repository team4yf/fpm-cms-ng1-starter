# fpm-cms-ng1-starter

A web cms use yf-fpm-server.

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


```

## Install

```
$ npm i && npm run build
```

## Dev

```
$ npm run docker && npm run dev
```