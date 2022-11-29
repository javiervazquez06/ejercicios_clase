var i = 0;
//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(400,400);
    background (125)
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}

//corre continuamente después de la función setup
function draw(){
    console.log("draw");
    var red = random(0,255);
    var green = random(0,255);
    var blue = random(0,255);
    background(red,green,blue);
    
    console.log("draw");

    //mouseX es una variable GLOBAL con la coordenada(x) del puntero del ratón.
    //mouseY es una variable GLOBAL con la coordenada(y) del puntero del ratón.
    console.log("mouseX:"+mouseX+", mouseY:"+mouseY);
    
      //instrucciones a ejecutar en bucle
    

}
