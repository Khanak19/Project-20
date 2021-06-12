
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var wedge;
var angle=60;
var angle1=60;
var angle2=60;
var poly;
var block1;
var block2;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
   
   var ground_options ={
     isStatic: true
   };
  
  var ops={
    isStatic:true
  };

  var block1_options={
	  isStatic:true
  }

  var block2_options={
	isStatic:true
}
var particle1_options={
	restitution:0.4,
	friction:0.02,
}
var particle2_options={
	restitution:0.4,
	friction:0.02,
}
var particle3_options={
	restitution:0.4,
	friction:0.02,
}
var particle4_options={
	restitution:0.4,
	friction:0.02,
}
var particle5_options={
	restitution:0.4,
	friction:0.02,
}
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  block1 = Bodies.rectangle(100,300,100,20,block1_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(300,300,100,20,block2_options)
  World.add(world,block2);
 
  particle1 = Bodies.circle(220,10,10,particle1_options)
  World.add(world,particle1);

  particle2 = Bodies.circle(220,10,10,particle2_options)
  World.add(world,particle2);

  particle3 = Bodies.circle(150,100,10,particle3_options)
  World.add(world,particle3);

  particle4 = Bodies.circle(150,100,10,particle4_options)
  World.add(world,particle4);

  particle5 = Bodies.circle(100,150,10,particle5_options)
  World.add(world,particle5);
  
  rotator1 = Bodies.rectangle(200,200,100,20,ops);
  World.add(world,rotator1);
  rotator2 = Bodies.rectangle(200,200,100,20,ops);
  World.add(world,rotator2);
  rotator3 = Bodies.rectangle(200,200,100,20,ops);
  World.add(world,rotator3);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(rotator1,angle)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=2.0;
  Matter.Body.rotate(rotator2,angle1)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle1);
  rect(0,0,100,20);
  pop();
  
  angle1 +=2.4;
  Matter.Body.rotate(rotator3,angle2)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle2);
  rect(0,0,100,20);
  pop();
  
  angle2 +=2.8;

  rect(ground.position.x,ground.position.y,400,20);
  rect(block1.position.x,block1.position.y,100,20);
  rect(block2.position.x,block2.position.y,100,20);
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);


  //rect(wall.position.x,wall.position.y,70,20);

  
  
}