const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating bodies
var engine, world;

var ground, hero, fly, monster;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;

var bg;

function preload() {
//preload the images here
bg =  loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground = new Ground(200, 500, 1500, 20);
  hero = new Hero(300, 10, 5);
  fly = new Fly(hero.body, { x: 500, y: 50 });
  box1 = new Block(580,450,60,60);
  box2 = new Block(580,490,60,60);
  box3 = new Block(580,450,60,60);
  box4 = new Block(580,450,60,60);
  box5 = new Block(580,450,60,60);
  box6 = new Block(580,450,60,60);
  box7 = new Block(580,450,60,60);
  box8 = new Block(680,450,60,60);
  box9 = new Block(680,490,60,60);
  box10 = new Block(680,450,60,60);
  box11 = new Block(680,450,60,60);
  box12 = new Block(680,450,60,60);
  box13 = new Block(680,450,60,60);
  box14 = new Block(680,400,60,60);
  box15 = new Block(780,450,60,60);
  box16 = new Block(780,450,60,60);
  box17 = new Block(780,450,60,60);
  box18 = new Block(780,450,60,60);
  box19 = new Block(780,450,60,60);
  box20 = new Block(780,450,60,60);
  box21 = new Block(780,450,60,60);
monster = new Monster(1000, 100, 5);




}

function draw() {
  background(bg);
  Engine.update(engine);

//displaying the sprites
ground.display();
hero.display();
fly.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
monster.display();


}

function mouseDragged(){
Matter.Body.setPosition(hero.body, {x:mouseX, y: mouseY});


}
