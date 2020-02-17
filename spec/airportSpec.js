'use strict';

describe ("Airport",function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new airport();
    plane = jasmine.createSpy('plane',['land']);
    });
    
  it('Has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});