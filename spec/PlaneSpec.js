'use strict';
//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

describe('Plane', function(){
  var plane;
  var airport;//plane object to interact with our airport object.
  beforeEach(function(){
    plane = new Plane();
    airprt = jasmine.createSpyObj('airport',['clearForLanding']);//stubing
  });
  it("can land at the airport", function(){
    plane.land(airport);
    expect(airport.clearForLanding).not.toHaveBeenCalledWith(plane);
  });
});
//where spys are Jasmine's equivalent of doubles. 