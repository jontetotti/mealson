'use strict';


var kraken = require('kraken-js'),
   
    db = require('./lib/database'),
    // Variabel form middleware
    millionsServed = require('./lib/millionsServed'),
    
    app = {};

//app.configure gets its data from ./configuration/app.json if dev and prod is wanted. Create another app-development.json and set the ENV variables accordingly
app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
    db.config(nconf.get('databaseConfig'));
    next(null);
};

// app.requestStart is run before middleware is run.
app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request
    
    // runs the middleware millionsServed.js
    server.use(millionsServed());
    
};

// runs before routing and after middleware
app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Fired before routing occurs
};

//last thing - final call
app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
    if (err) {
        console.error(err);
    }
});
