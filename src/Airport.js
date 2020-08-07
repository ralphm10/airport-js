class Airport {
  constructor() {
    this.landedPlanes = []
  }

  planes() {
    return this.landedPlanes;
  };
  land(plane) {
    this.landedPlanes.push(plane);
  };
};
