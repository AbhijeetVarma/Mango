class Box{
constructor(x,y){

   var options1 = {

        isStatic: true


    }

    var options2 = {

        isStatic: false

    }

    this.width = 300
    this.height = 200
    this.thickness = 20 
    



    this.bottomRect=Bodies.rectangle(x,y,this.width,this.thickness,options1);
World.add(world,this.bottomRect);

this.leftRect=Bodies.rectangle(x-100,y-50,this.thickness,this.height,options2);
World.add(world,this.leftRect);

this.rightRect=Bodies.rectangle(x+100,y-50,this.thickness,this.height,options2);
World.add(world,this.rightRect);

this.image = loadImage("images/tree.png");




}
display(){

var bp = this.bottomRect
var lp = this.leftRect
var rp = this.rightRect

var pos1 = bp.position
var pos2 = lp.position
var pos3 = rp.position

push()
translate(pos1.x , pos1.y-100);
fill(225,0,0)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)

pop()

//push()
//translate(pos1.x,pos1.y)
//rect(0,0,this.width,this.thickness);
//pop()

//push()
//translate(pos2.x,pos2.y)
//rect(0,0,this.thickness,this.height);
//pop()

//push()
//translate(pos3.x,pos3.y)
//rect(0,0,this.thickness,this.height);
//pop()










}





}