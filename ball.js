class ball{    
    constructor(x,y,r){
      var options = {
          isStatic: false,
          friction: 0.8,
          density: 1.2,
          restitution: 0.3
      }
       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
       this.radius = r
    }    
    display(){
        var p = this.body.position
        var a = this.body.angle
        push()
        rectMode(CENTER)
        translate(p.x,p.y)
        fill("blue")
        ellipse(0,0,this.radius)
        pop()
    }
    move(){
       // var p = this.body.position
        //var a = this.body.angle
        //push()
        
        Matter.Body.applyForce (this.body,this.body.position,{x:65,y:-65});
        
        //pop()
    }
   }