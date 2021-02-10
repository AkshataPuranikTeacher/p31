class Drop{
    constructor(x,y){
        var options = {
            resistitution : 0.3,
            friction : 0.1,
            isStatic : false
        }
        this.r = 5;
        this.body = Bodies.circle(x,y,this.r ,options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}