class G {
  constructor(x,y,radius) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = this.radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y, this.radius,this.radius);
  }
}