const { Fpm } = require('yf-fpm-server');
const path = require('path');
const { frontendBuilder } = require('./frontend');
const { backendBuilder } = require('./backend');

const fpm = new Fpm();

backendBuilder(fpm);

frontendBuilder(fpm);

fpm.run().then( async () => {
  console.log('Ready to go...');
  // comment this line before publish.
  fpm.set('debug', true);
  try {
    await fpm.M.install(path.join(fpm.get('CWD'), 'sql'))  
    await fpm.M.install(path.join(fpm.get('CWD'), 'mock'))  
  } catch (error) {
    fpm.logger.error(err)
  }
  
});