const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var trashcan, paper;

var canvas;

var floor;
var paper;
var bin;

var bg;
function preload() {
	bg = loadImage("sprites/bg.jpg");
}
function setup() {
	canvas = createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	bin = new Dustbin(700, 340);
	floor = new Floor(70);
	paper = new Paper(70, 290, 30);
	bin = new Dustbin(700, 330);
}
function draw() {
	background(bg);
	Engine.update(engine);
	paper.display();
	bin.display();
	floor.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 152.5, y:-157.5});
	}
}