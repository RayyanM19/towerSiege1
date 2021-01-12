class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.5
        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}