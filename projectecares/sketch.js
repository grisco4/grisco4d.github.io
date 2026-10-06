function setup() {
  createCanvas(600, 600);//area dibuixable de 600 * 600 px
}

function draw() {
background(230,250,160);//color de fons del dibuix. Si només té un número, el fons serà gris, si té trtes seguira el rgb, ("red","green, i "blue"), aquest sistema permet 16 milions de colors diferents(255*255*255)
  fill(255,255,255)
ellipse(300,300,400,400);
 //ull dret 
circle(200,250,150);
  fill(200,199,250);
  circle(200,240,100);
  fill(100,20,150);
  circle(200,240,40);
  fill(255,255,255);
  circle(190,225,30);
  circle(215,260,15);
//ull esquerre
  fill(255,255,255);
circle(400,250,150);
  fill(200,199,250);
  circle(400,240,100);
   fill(100,20,150);
  circle(400,240,40);
  fill(255,255,255);
  circle(390,225,30);
  circle(415,260,15);
//boca
  fill(255,100,150);
triangle(200,400,300,450,400,400);
}
