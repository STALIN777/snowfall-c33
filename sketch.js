const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var bg ;
var car,carimg;
var snow = [] ;

function preload()
{
  bg = loadImage("snow1.jpg")
}


function setup() 
{
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
 


}

function draw() {
  background(bg);  
  Engine.update(engine);
 
 // car=createSprite(50,50,10,10)
  //car.addImage(carimg)


  if(frameCount%20===0)
  {
    snow.push(new Snowfall(random(0,800),0,20,20))
  }


  //display the particles

  for(var k =0; k < snow.length; k++)
  {
    snow[k].display();
  
  }
  
  
  
  
  
  
  drawSprites();
}