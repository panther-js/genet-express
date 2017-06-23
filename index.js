`use strict`

const Genet = require('genet');

function genetExpress(options, next) {
    const profile = new Genet(options);
    profile.start();
    
}

module.exports = genetExpress;

