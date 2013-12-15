'use strict';


var kraken = require('kraken-js'),
    // L�gger till denna variabel f�r att min middleware ska laddas.
    millionsServed = require('./lib/millionsServed'),
    app = {};

//app.configure f�r data fr�n configuration files i ./config appen. och d� app.json
app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
    next(null);
};

// app.requestStart k�rs innan n�gon middleWare laddas.
app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request
    
    // laddar v�r middleware, ligger i ./lib millionsServed.js
    server.use(millionsServed());
    
};

//K�rs efter middle ware
app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Fired before routing occurs
};

//sista som h�nder - final call
app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
    if (err) {
        console.error(err);
    }
});
