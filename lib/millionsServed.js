/** This module calculates number of served pages.
  Denna funktion kommer kallas på varje gång en förfrågan kommer in till servern. Eftersom vi laddar scripts och images med sidan, så kommer functionen invokas flera gånger per sidladdning. Varje gång en request kommer in så ökar vi får counter med 1 och skriver det till konsolfönstret.
  
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