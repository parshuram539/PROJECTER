const Engine = Matter.Engine;
const world = Matter.world;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var boy 
var sling
var snowball
var ground
var gift
var score 

function preload()
{
  backgroundImg=loadImage("snow2.png");

  boy=loadImage("snowman.png");
}
function setup() {
  createCanvas(1365,4625);
  engine = Engine.create();
  world = engine.world;
  
  score=0

  snowman=new Snowman(1200,10,120,120)
  snowball=new Snowball(400,330,50,50)
  sling=new sling(snowball.body,{x:400,y:330})
  ground=new ground(670,620,1400,30)
  
  
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  image(boy,360,260,200,200);

  noStroke();
  textSize(35)
  fill("white")
  text("Score"+ score,width-300,50)

  Snowman.display()
  Sling.display()
  Snowball.display(
  Ground.display()


  )
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX, y:mouseY})
}

function mouseRelessed(){
  sling.fly()
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(snowball.body,{x:400,y:330})
    sling.attach(snowball.body)
  }
}