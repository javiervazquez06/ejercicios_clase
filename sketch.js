//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(500,500);

    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}



function draw(){
  

  ellipse(mouseX, mouseY,50,50);
  if((mouseX<100)&(mouseY<100)){
  fill(color('green'));
  }else if ((mouseY>100)&(mouseY)){
    fill(color('red'));
  }
  
} 