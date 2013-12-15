/** This module calculates number of served pages.
  Denna funktion kommer kallas p� varje g�ng en f�rfr�gan kommer in till servern. Eftersom vi laddar scripts och images med sidan, s� kommer functionen invokas flera g�nger per sidladdning. Varje g�ng en request kommer in s� �kar vi f�r counter med 1 och skriver det till konsolf�nstret.
  
  inspiration : https://github.com/lensam69/Kraken_Example_Custom_Middleware/
*/
module.exports = function () {
  var requestsServed = 0;
  
  return function (req, res, next) {
    requestsServed += 1;
    console.log(requestsServed / 1000000 + 'million Pages Served!');
    next();
    
  };
  
};