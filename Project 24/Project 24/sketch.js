
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall;

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	var ground_option = {
		isStatic: true
	}

	ground = Bodies.rectangle(600,340,1200,10,ground_option);
	World.add(world, ground);

	paperBall = new Paperball(10,339,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  paperBall.display();
}


