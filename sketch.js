// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ball1,ball2,ball3,ball4;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world
 ball1 = new Ball(100,100,30);
 ground = new Ground(600,390,1200,20);
 
}

function draw() {
    background("white");
    Engine.update(engine);
// Remember to update the Matter Engine and set the background.
ground.display();
ball1.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}