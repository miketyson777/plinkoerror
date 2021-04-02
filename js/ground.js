class Ground{
  constructor(x,y,w,h){
    var options={
      isStatic:true
    }
    this.x=x; 
    this.y=y;
    this.width=w; 
    this.height=h; 

    this.body=Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body)
  }
  display(){
    var pos=this.body.postion
    fill("white")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
  }
}