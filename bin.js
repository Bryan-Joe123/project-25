class bin{
    constructor(x,y,width,height){
        var bottom = Bodies.rectangle(600, 650, 200, 20, {isStatic:true} );
        World.add(world, bottom);
        var bottomSprite=createSprite(600, 550, 200, 20);
        bottomSprite.addImage(binImage);
        bottomSprite.scale=0.7;

        var left = Bodies.rectangle(500, 600, 20, 350, {isStatic:true} );
        World.add(world, left);
        // leftSprite=createSprite(500, 600, 20, 350);

        var right = Bodies.rectangle(700, 600, 20, 350, {isStatic:true} );
        World.add(world, right);
        // rightSprite=createSprite(700, 600, 20, 350);
    }
}