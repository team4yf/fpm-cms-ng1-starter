const { Fpm } = require('yf-fpm-server');
const path = require('path');
const { frontendBuilder } = require('./frontend');
const { backendBuilder } = require('./backend');

const fpm = new Fpm();

backendBuilder(fpm);

frontendBuilder(fpm);

fpm.run().then( () => {
    console.log('Ready to go...');
    // comment this line before publish.
    fpm.set('debug', true);
    fpm.M.init(path.join(fpm.get('CWD'), 'sql'))
        .catch((err) => {
            fpm.logger.error(err)
        })
});