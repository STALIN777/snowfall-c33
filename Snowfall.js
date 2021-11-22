class Snowfall {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':20,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
       this.image=loadImage("snow4.webp")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.position.y)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER)
      //rect(0, 0, this.width, this.height);
      image(this.image,this.body.position.x , this.body.position.y,20,20)
      pop();
    }
  }