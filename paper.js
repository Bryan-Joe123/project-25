class box{
    constructor(x,y,width,height){
        var box_option={
            restitution:0.8,
            friction:1.0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,height/2,box_option);
        World.add(world,this.body);
        this.h=height;
        this.image=loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;

        if(keyWentDown("up_arrow")){
            Matter.Body.applyForce(this.body,pos,{x:200,y:-140})
        }
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0, 0, 100,100);
    }
}