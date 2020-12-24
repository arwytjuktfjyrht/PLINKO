const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world

var ground;
var divisions=[];
var l1=[];
var l2=[];
var l3=[];
var l4=[];
var l5=[];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground = new Border(width/2, height-10, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Border(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var q = 0; q <= width; q = q + 80) {
    l1.push(new G2(q, 400, 10, 10));
  }

  for (var w = 0; w <= width; w = w = 80) {
    l2.push(new G2(w, 350, 10, 10));
  }

  for (var z = 0; z <= width; z = z + 80) {
    l3.push(new G2(z, 300, 10, 10));
  }

  for (var x = 0; x <= width; x = x + 80) {
    l4.push(new G2(x, 250, 10, 10));
  }

  for (var v = 0; v <= width; v = v + 80) {
    l5.push(new G2(v, 200, 10, 10));
  }
 
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  ground.display();
  for(var a = 0; a < divisions.length; a++){
    divisions[a].display();
  }
  
 // drawSprites();
}