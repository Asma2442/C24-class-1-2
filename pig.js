class Pig {

    constructor(x,y){

        var option= {
            restitution : 0.2,
            friction: 0.2,
            density: 0.8
        }

        this.body = Bodies.rectangle(x,y,50,50,option)
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}