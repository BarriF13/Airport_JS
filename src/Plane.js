'use strict';//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

function Plane(){

  Plane.prototype.land = function(airport){
    airport.clearForLanding(this);
  };
};