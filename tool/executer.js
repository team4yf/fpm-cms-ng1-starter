const _ = require('lodash');
const DBM = require('yf-fpm-dbm');
const Promise = require('bluebird');
const C = require('../config.json');

const dbm = DBM(C.mysql);
exports.transation = Promise.promisify(dbm.transation);
exports.commandAsync = Promise.promisify(dbm.command);

