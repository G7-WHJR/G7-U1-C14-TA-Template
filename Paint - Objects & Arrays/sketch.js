// An array of all the colors used in this code.
var colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet", "grey"];


function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");
  
  header();
}


function draw() {
 
}

//display header
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}
    

