class Pinko{
      constructor(x,y,radius){
          var options = {
              isStatic : true
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          fill("white");
      }
}