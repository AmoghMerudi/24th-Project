class Paperball{

    consrtuctor(x,y,diameter){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

     this.body = Bodies.ellipse(x, y, 20, options)
     this.diameter = 20
     World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        rect(pos.x, pos.y, this.diameter)
    }
}