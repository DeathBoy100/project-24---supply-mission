
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball1,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	

	
	engine = Engine.create();
	world = engine.world;

	box1 = new box(750,590,20,100)
	box2 = new box(600,590,20,100)
	box3 = new box(675,650,170,20)
    ball1 = new ball(100,630,20)

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  keyPressed();
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ball1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		ball1.move();
		//Matter.Body.applyForce (ball1.Body.position,{x:85,y:-85});
	}
}

