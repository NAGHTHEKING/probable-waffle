const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img;
function preload()
{
	img= loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 200);

	engine = Engine.create();
	world = engine.world;
ground= new Ground(400,195,800,15)
	body1= new Rectangle(600,135,10,70)
body2= new Rectangle(660,135,10,70)

circul=new Circul(100,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 body1.display();
 body2.display();
  imageMode (CENTER);
 image (img,620,135,100,100)
  ground.display();
  
  circul.display();
  drawSprites();
 }

 function keyPressed(){
 
  if(keyCode===38){

    Matter.Body.applyForce(circul.body,circul.body.position,{x:25,y:-25})
  }
 }
  
