
function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight/2);

  ground = createSprite(windowWidth/2,windowHeight/2, windowWidth, 50);


}

function draw() {
  background(0); 


  drawSprites();
}



