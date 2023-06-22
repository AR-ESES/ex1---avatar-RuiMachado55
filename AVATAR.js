let posX;
let posY;
let posZ;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  posX = mouseX;
  posY = mouseY;
  noFill();
  stroke(0);
  strokeWeight(3); // Fixed typo: "stronkeheight" to "strokeWeight"
  background(288, 120, 238);
  circle(posX, posY, height / 3);
  circle(posX - height / 3 / 4, posY - height / 3 / 4, height / 15);
  circle(posX + height / 3 / 4, posY - height / 3 / 4, height / 15);
  circle(posX - height / 12 / 20, posY - height / 12 / 20, height / 22);
  ellipse(posX, posY + 220, 170, 200); // Fixed typo: "eclipse" to "ellipse"
  ellipse(posX - 40, posY + 358, 50, 100);
  ellipse(posX + 40, posY + 358, 50, 100);
  ellipse(posX - 130, posY + 190, 100, 50);
  ellipse(posX + 130, posY + 190, 100, 50);
}