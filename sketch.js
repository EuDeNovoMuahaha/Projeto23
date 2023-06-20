var plane;
var engine, world;
var block1, block2;
var part1, part2, part3, part4, part5;
var rot1, rot2, rot3;
var angle1 = 60, angle2 = 60, angle3 = 60;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options = {
		isStatic: true
	}
    plane = Bodies.rectangle(600, height, 1200, 20, plane_options);
	World.add(world, plane);

    block1 = Bodies.rectangle(500, 300, 150, 20, plane_options);
	World.add(world, block1);

    block2 = Bodies.rectangle(700, 300, 150, 20, plane_options);
	World.add(world, block2);

	var part_options = {
		restitution: 0.4,
		friction: 0.02
	}
    part1 = Bodies.circle(220, 10, 10, part_options);
	World.add(world, part1);

	part2 = Bodies.circle(220, 10, 10, part_options);
	World.add(world, part2);

	part3 = Bodies.circle(225, 10, 10, part_options);
	World.add(world, part3);

	part4 = Bodies.circle(230, 10, 10, part_options);
	World.add(world, part4);

	part5 = Bodies.circle(230, 10, 10, part_options);
	World.add(world, part5);

	var rot_options = {
		isStatic: true
	}
    rot1 = Bodies.rectangle(250, 200, 150, 20, rot_options);
	World.add(world, rot1);

	rot2 = Bodies.rectangle(250, 200, 150, 20, rot_options);
	World.add(world, rot2);

	rot3 = Bodies.rectangle(250, 200, 150, 20, rot_options);
	World.add(world, rot3);

    fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	
}


function draw() {
  rectMode(CENTER);
  background(128, 128, 128);
  Engine.uptade(engine);

  rect(plane.position.x. plane.position.y, 1200, 20);
  rect(block1.position.x. block1.position.y, 1200, 20);
  rect(block2.position.x. block2.position.y, 1200, 20);

  ellipse(part1.position.x, part1.position.y, 10);
  ellipse(part2.position.x, part2.position.y, 10);
  ellipse(part3.position.x, part3.position.y, 10);
  ellipse(part4.position.x, part4.position.y, 10);
  ellipse(part5.position.x, part5.position.y, 10);

  Matter.Body.rotate(rot1, angle1);
  push();
  translate(rot1.position.x, rot1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 0.2;

  Matter.Body.rotate(rot2, angle2);
  push();
  translate(rot2.position.x, rot2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 0.2;

  Matter.Body.rotate(rot3, angle3);
  push();
  translate(rot3.position.x, rot3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 0.2;

  drawSprites();
 
}



