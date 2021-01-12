
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var left_b, right_b, bottom_b;
var paper;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 700, 800, 60)

	paper = new Paper(100, 600, 20);

	left_b = new Bin(500, 620, 20, 100);
	right_b = new Bin(670, 620, 20, 100);
	bottom_b = new Bin(580, 660, 160, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#239B56');
  
  ground.display();
  paper.display();
  left_b.display();
  right_b.display();
  bottom_b.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y: -60})
	}
}