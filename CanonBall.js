class CanonBall {
  constructor(x, y) {
    var options = {
      density :   1.5,
      friction : 1.0,
      restitution : 0.8,
      frictionAir:0.06
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.cannonBall = loadImage("assets/canonBall.png");
    World.add(world,this.body);
    this.radius = radius;
  };

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    ellipseModeI(RADUS);
    fill("blue");
    ellipse(pos.x,pos.y,this.radius);
    pop();
    image(this.canonBall,200,20)
  };
};
