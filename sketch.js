var boy
var path
var pathimg
var score = 0;

function preload () { 
  pathimg = loadImage("cloud.png")
  boyImage = loadImage("boy1.png")

}

function setup() {
  createCanvas(800,400);
  //path = createSprite (random (200, 600), -150)
  // path2 = createSprite (random (100, 200), -150)
  // path3 = createSprite (random (400, 600), 100)
 // path4 = createSprite (random (620, 780), 50)

  
 

  

  boy = createSprite(400, 350, 50, 50);
  boy.addImage("boy", boyImage);
  boy.scale = 0.25;

  pathGroup = new Group ();

}

function draw() {
  background("blue");  
  textSize (40);
  text("Points : " + score, 600,50);
  Obstacles();


boy.x = World.mouseX


 boy.overlap(pathGroup,function(collector,collected) 
 
{
  collected.remove()
  score = score + 5;
}) 

drawSprites();
}


function Obstacles () 

{
if (frameCount % 40 === 0)
 {

  path = createSprite (random (200, 600), -150)
  path.addImage("cloud", pathimg);
  path.scale =  0.2
  path.velocityY = 3
  path.lifetime = 300 ;

  path.depth = boy.depth
  boy.depth = boy.depth + 1;

  pathGroup.add (path);
 } 
}
