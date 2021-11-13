class Snow {
    constructor(x,y,r){

        var options={
            'restitution':1.3,
            'friction':0.1,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option)
        //world.add(world.this.body);

        this.image = loadImage("snow1.png");
        world.add(world,this.body)

    }
    updateY(){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
    display(){
        var snowpos=this.body.position;
        Push()
        translate(snowpos.x,snowpos.y);
        rectMode(CENTER)
        //strokeweight(4);
        //stroke("black");
        Fill(rgb(92,114,237));
        
        imageMode(CENTER)
        image(this.image,0,0,this.weight,this.height);

        Pop()
    
    }
  
}