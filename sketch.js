const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;

function setup() {
  createCanvas(500, windowHeight-1);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground()

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display()

}




