class Bin {
    constructor(x, y, width, height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        noStroke();
        fill('#D5F5E3');
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
}