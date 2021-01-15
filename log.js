class Log {

    constructor(x,y,height,angle){

        var option= {
            restitution : 0.5,
            friction: 1,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,20,height,option)
        this.width = 20
        this.height = height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("white")
        stroke("green")
        strokeWeight(4)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}