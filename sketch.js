const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,dustbin1,dustbin2,dustbin3,paper;
var Img1, Img2;


function preload() {

  Img1 = loadImage(".vscode/Paper.png");
  Img2 = loadImage(".vscode/Dustbin.png");  

}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  
  ground= new Ground(0,350,1200,10);

  dustbin1= new Dustbin(900,330,200,120);
  dustbin2= new Dustbin(1100,230,100,100);
  dustbin3= new Dustbin(900,230,100,100);

  paper= new Paper(200,335,30);
  
  

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();  

  dustbin1(Img2);
  paper(Img1);


drawSprites();  
}

function keyPressed() {

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-85});

}

}