'use strict';


var kraken = require('kraken-js'),
    // Lägger till denna variabel för att min middleware ska laddas.
    millionsServed = require('./lib/millionsServed'),
    app = {};

//app.configure får data från configuration files i ./config appen. och då app.json
app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
    next(null);
};

// app.requestStart körs innan någon middleWare laddas.
app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request
    
    // laddar vår middleware, ligger i ./lib millionsServed.js
    server.use(millionsServed());
    
};

//Körs efter middle ware
app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Fired before routing occurs
};

//sista som händer - final call
app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
    if (err) {
        console.error(err);
    }
});
