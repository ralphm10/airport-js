describe('Plane', function() {
  var plane;
  beforeEach(function() {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport',['land']); // like a double! An object with a key of land (function name)
  });
  it('can land at an airport', function() {
    plane.land(airport)
    expect(airport.land).toHaveBeenCalledWith(plane);
  });
});
