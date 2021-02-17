const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log1=new Log(600,100,360,20)
	ground = new Ground(width / 2, height, width, 20);
    bird1 = new Bird(750, 300, 30);
    chain1=new Chain(bird1,log1)
    paper1 = new Bird(690, 300, 30);
    log2 = new Log(690, 100, 60, 20)
    chain2=new Chain(paper1,log2)
    paper2 = new Bird(630, 300, 30);
    log3=new Log(630,100,60,20)
    chain3=new Chain(paper2,log3)
    paper3 = new Bird(570, 300, 30);
    log4 = new Log(570, 100, 60, 20);
    chain4=new Chain(paper3,log4)
    paper4 = new Bird(510, 300, 30);
    log5=new Log(510,100,60,20)
    chain5=new Chain(paper4,log5)
    paper5 = new Bird(450, 300, 30);
    log6=new Log(450,100,60,20)
    chain6=new Chain(paper5,log6)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    bird1.display();
    paper1.display();
    paper2.display();
    paper3.display();
    paper4.display();
    paper5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
    bird2.display();
    chain2.display();    
}
