class box{    
    constructor(x,y,w,h){
      var options = {
          isStatic: true
      }
       this.body = Bodies.rectangle(x,y,w,h,options)
       World.add(world,this.body)
       this.width = w 
       this.height = h
    }    
    display(){
        var p = this.body.position
        var a = this.body.angle
        push()
        rectMode(CENTER)
        translate(p.x,p.y)
        rotate(a)
        stroke("red")
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
   }