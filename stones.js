class Stone {
    constructor(x, y) {
      var options = {
        'isStatic': false,
          'restitution':0.8,
          'friction':3,
          'density':2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.image = loadImage("images/stone.png");
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };