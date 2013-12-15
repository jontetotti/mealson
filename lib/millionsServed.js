/** This module calculates number of served pages.
  This function is being called everytime a request is made by a client. Because images, scripts and stylesheets is loaded with the page the function is being invoked multiple time for every pagerequest. Then function adds 1 to every request.
  
  Copied from : https://github.com/lensam69/Kraken_Example_Custom_Middleware/
*/
module.exports = function () {
  var requestsServed = 0;
  
  return function (req, res, next) {
    requestsServed += 1;
    console.log(requestsServed / 1000000 + 'million Pages Served!');
    next();
    
  };
  
};