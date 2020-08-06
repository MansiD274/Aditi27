class Rope {
    constructor(xOffset,yOffset,bodyA ,bodyB){
        this.offsetX=xOffset
		this.offsetY=yOffset
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            /*length: 500,
            stiffness: 0.1*/
            pointB:{x:this.offsetX,y:this.offsetY}
        } 
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    
    display(){
        strokeWeight=4;
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x+this.offsetX,this.chain.bodyB.position.y+this.offsetY)
    }
}