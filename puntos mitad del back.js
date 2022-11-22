function setup() {
    createCanvas(400, 400);
    ///RGB
    background(125);
  }

  
  function draw() {
    var x=50;
    while(x<width-25){
        ellipse(x,height/2,25,25);
        x=x+50;
    }
    
  }