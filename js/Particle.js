class Particles{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,option);
        this.color=color(random(0,255),random(0.255),random(0,255))//hexadecimal(hue),(saturation),(lightness)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        fill(this.color);
        push()
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
    }
}