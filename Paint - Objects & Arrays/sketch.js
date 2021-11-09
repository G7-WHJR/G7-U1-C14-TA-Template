var colors = ["white","black", "red", "green", "blue", "yellow", "orange", "violet", "grey"];


function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
  header();
}

function draw() {
  
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

