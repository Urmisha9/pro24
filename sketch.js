
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var ball;
//var hammer;

function preload()
{
	
}

function setup() {
var canvas = createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20);
	platform = new Plane(150, 305, 300, 170);

  rubber = new Rubber(700,330,100,100);
	stone = new Stone(700,320,100,100);
	iron = new Iron(300,310,70,40);
  hammer = new Hammer(350,330,150,50);
  sand1 = new Sand(505,450,10);
  sand2 = new Sand(515,450,10);
  sand3 = new Sand(510,450,10);
  sand4 = new Sand(525,450,10);
  sand5 = new Sand(530,450,10);
  sand6 = new Sand(535,450,10);
  sand8 = new Sand(519,450,10);
  sand9 = new Sand(515,450,10);
	sand10 = new Sand(505,450,10);
	sand11 = new Sand(500,450,10);
	sand12 = new Sand(420,450,10);
	sand13 = new Sand(415,450,10);
	
	


	 
	
}


   
  



function draw() {
  rectMode(CENTER);
  background("pink");
 

 

	Engine.run(engine);
 
 
  
  drawSprites();
  plane.display();
  stone.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  rubber.display();
  hammer.display();
  
 
 
 
}



