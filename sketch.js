
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(350,135,400,30)
	bob1 = new Bob(375,235,70)
	bob2 = new Bob(405,235,70)
	bob3 = new Bob(435,235,70)
	bob4 = new Bob(465,235,70)
	bob5 = new Bob(495,235,70)
	rope1 = new Chain(bob1.body,{x:200,y:150})
	rope2 = new Chain(bob2.body,{x:275,y:150})
	rope3 = new Chain(bob3.body,{x:350,y:150})
	rope4 = new Chain(bob4.body,{x:425,y:150})
	rope5 = new Chain(bob5.body,{x:495,y:150})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



