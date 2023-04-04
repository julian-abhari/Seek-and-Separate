var vehicles = [];

function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 100; i += 1) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw() {
  background(255);

  for (var i = 0; i < vehicles.length; i += 1) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].display();
  }

  fill(0);
  text("Click the mouse to generate new vehicles", 10, height - 16);
}

function mousePressed() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
