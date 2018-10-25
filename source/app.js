const { Fpm } = require('yf-fpm-server');
const path = require('path');
const { frontendBuilder } = require('./frontend');
const { backendBuilder } = require('./backend');

const fpm = new Fpm();

backendBuilder(fpm);

frontendBuilder(fpm);

fpm.run().then( () => {
    console.log('Ready to go...')
    fpm.M.init(path.join(fpm.get('CWD'), 'sql'))
        .then(() => {
            fpm.logger.info('Sql Script Execute OK')
        })
        .catch((err) => {
            fpm.logger.error(err)
        })
});