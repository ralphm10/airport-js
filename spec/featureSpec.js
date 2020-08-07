describe('Feature tests:', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport;
  });

  it('planes can land at the airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  })
})
