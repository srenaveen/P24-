const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,engine,world,ground;
var B1,B2,B3

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,600,40);
	ground = new Ground(800,650,1600,20);
	B1 = new Basket(1400,630,160,20);
	B2 = new Basket(1330,590,20,100);
	B3 = new Basket(1470,590,20,100);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  B1.display();
  B2.display();
  B3.display();
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});	
  }
 
}



