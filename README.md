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


## FAQ 

See more FAQ in [FAQ.md](./FAQ.md)。

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

## Backup db
```
$ docker exec -it 06d mysqldump -uroot -proot test > /var/backup/test.sql
```

## Manual

- 1) How to create a function module
  - 1.1 Create dataset

    Use `tool` to create table and mock data.
    Execute the sql.

  - 1.2 Create the unit test script.

    test the dataset is working on.

  - 1.3 Copy view files

    Copy a view/page file from the template.
    Copy a angular controller js file.

  - 1.4 Edit the menus.yml

    Add the new module menu config.

  - 1.5 Code the angular controller with `fpmc`


