function setup() {
  createCanvas(600, 300, WEBGL);
}

function draw() {
  background(250);


  translate(240, 0, -150);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.4);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 40);
  pop();
  
}
