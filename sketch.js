
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6
var tree , ground , stone , boy , sling	, boy1 , ground

function preload()
{
	boy1 = loadImage("images/boy.png");
}

function setup() {
	createCanvas(700, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	mango1 = new Tree(500,500);
	mango2 = new Tree(450,500);
	mango3 = new Tree(450,450);
	mango4 = new Tree(550,500);
	mango5 = new Tree(500,450);
	mango6 = new Tree(550,450);

	stone = new Stone(200,200);

	tree = new Box(500,600);

	sling = new SlingShot(stone.body,{x:120,y:530});

	ground = new Ground(350,650,700,100);

	
	

	


}


function draw() {

  rectMode(CENTER);
  background(225);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  

  stone.display();
sling.display();
ground.display();

if(touch(stone.body,mango1.body)){
	
	Matter.Body.setStatic(stone.body,false)
console.log("H");
}
if(touch(stone.body,mango2.body)){
	
	Matter.Body.setStatic(stone.body,false)
	console.log("H");
}
if(touch(stone.body,mango3.body)){
	
	Matter.Body.setStatic(stone.body,false)
	console.log("H");
}
if(touch(stone.body,mango4.body)){
	
	Matter.Body.setStatic(stone.body,false)
	console.log("H");
}
if(touch(stone.body,mango5.body)){
	
	Matter.Body.setStatic(stone.body,false)
	console.log("H");
}
if(touch(stone.body,mango6.body)){
	
	Matter.Body.setStatic(stone.body,false)
	console.log("H");
}

image(boy1,100,500,100,100);
  
  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})



}

function mouseReleased(){

	sling.fly();

}

