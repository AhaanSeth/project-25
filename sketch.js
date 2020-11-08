
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;

var ground;

var paper

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	//groundSprite=createSprite(width/2, height-35, width,10, {isStatic:true});
	//groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800, height-35, 1600, 20)
	dustbin1 = new Dustbin(375, 450, 200, 200)
    //dustbin2 = new Dustbin(260, 590, 30, 150)
	//dustbin3 = new Dustbin(460, 590, 30, 150)

	paper = new Paper(1200, 600, 40);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-120, y:120})
	}
}

