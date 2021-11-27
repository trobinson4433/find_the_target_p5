var rock;
var targ;
var gen;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(100);
  translate(width/2,height-30);
  angleMode(DEGREES);
  rectMode(CENTER);
  //rock = new rocket(0,0);
  gen = new generation(100,800);
  gen.populate();
  targ = new target(0, -300)
  obs = new obstacle(0,-150,300,30);
}

function draw() {
  translate(width/2,height-30);
  background(220);
  //c = createVector(random(-1,1),random(-1,1));
  //console.log(c);
  //rotate(c.heading());
  targ.drawtarg()
  obs.show()
  gen.update();
  
}