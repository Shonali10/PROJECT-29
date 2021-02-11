const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var ground ,base2 ,block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ;
    

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    base2 = new Ground(390,600,250,10);
    base1 = new Ground(800,500,300,10);

    block10 = new Block(300,275,30,40);
    block11 = new Block(330,275,30,40);
    block12 = new Block(360,275,30,40);
    block13 = new Block(390,275,30,40);
    block14 = new Block(420,275,30,40);
    block15 = new Block(450,275,30,40);
    block16 = new Block(480,275,30,40);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    
    block9 = new Block(390,155,30,40);
    

    block110 = new Block(710,275,30,40);
    block111 = new Block(740,275,30,40);
    block112 = new Block(770,275,30,40);
    block113 = new Block(800,275,30,40);
    block114 = new Block(830,275,30,40);
    block115 = new Block(860,275,30,40);
    block116 = new Block(890,275,30,40);

    block11 = new Block(740,235,30,40);
    block21 = new Block(770,235,30,40);
    block31 = new Block(800,235,30,40);
    block41 = new Block(830,235,30,40);
    block51 = new Block(860,235,30,40);

    block61 = new Block(770,195,30,40);
    block71 = new Block(800,195,30,40);
    block81 = new Block(830,195,30,40);
    
    block91 = new Block(800,155,30,40);

}
function draw(){
    background(60, 46, 46);
    Engine.update(engine);
    
    fill(1,228,208);
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block110.display();
    block111.display();
    block112.display();
    block113.display();
    block114.display();
    block115.display();
    block116.display();

    

    fill(255,189,195);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block11.display();
    block21.display();
    block31.display();
    block41.display();
    block51.display();
    
    fill(100,208,233);
    block6.display();
    block7.display();
    block8.display();

    block61.display();
    block71.display();
    block81.display();

    fill(253,253,150);
    block9.display();

    block91.display();

    base2.display();
    base1.display();

    ground.display();
}

