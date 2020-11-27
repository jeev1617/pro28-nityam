class Mango{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y,50, options);
        this.image = loadImage("mango.png");
        this.r=50;
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.r,this.r);
      }
}