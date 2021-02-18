const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;

function preload(){
  binImage=loadImage("dustbingreen.png");
}

function setup(){
  createCanvas(800, 700);
  engine=Engine.create();
  world=engine.world;

  box1 = new box(100,500,70,70);
  bin1 = new bin()

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}

function draw(){
  background("blue");
  drawSprites();
  box1.display();
  Engine.update(engine);
}