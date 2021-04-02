const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var division=[];
var ground1
var particle=[];
var plinko=[];

var divisionHeight=300;

function setup(){
  createCanvas(900,400)
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  for (var x=0; x<400;x=x+80){
    division.push(new Division(x,height-divisionHeight/2,10,divisionHeight))
  }

}
function draw(){
  background("black")
  for(var k=0;k<division.length;k++){
    division[k].display()
  }
  //drawSprites()
 
}