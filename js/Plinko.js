class Plinko{
    constructor(x,y,r){
var options={
    restitution:0.5,
    isStatic:true,
    friction:0.2
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill("white")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}