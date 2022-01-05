class Sand {
    constructor(x, y,r) {
      var options = {
          'restitution':0.55,
          'friction':7,
          'density':2.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var sandpos =this.body.position;
      
      push();
      translate(sandpos.x, sandpos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke ("black")
      fill("crimson");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  