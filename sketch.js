
var colorList = ['#ffffff',
                 '#e5103a'];
                 

function setup() {
  createCanvas(400, 400);
  
  frameRate(100);
}

function draw() {
  
    x=frameCount % 512;
    if(x<=256){
    background(x, 20, 100);
    stroke(256);
    strokeWeight(5);
    
    
  var x = random() * width;
  var y = random() * height;
  var d = random() * 10;
  
  ellipse (x,y,d);
  ellipse (x*2,y*2,d*2);
  ellipse (x*3, y*3, d*3);
  
  for(var z = 25; z < 400; z+=25)
  {
    
  var index = floor(random() * colorList.length);

  var colorHex = colorList[index];

  stroke(color(colorHex));

    line(z,mouseY,z,mouseX);
    line(mouseX,z,mouseY,z);
  }

  
  
  for(var a = 25; a < width; a+=25) {
    
    for(var b = 25; b < height; b+=25){
     
     if(random() < 0.05) {
       stroke(229, 16, 58);
        (40, 48, 112);
      }else{
        stroke(40, 48, 112);
        fill(229, 16, 58);
      }
        
      ellipse(a, b, 10);
    }
  }
  
  if(random() < 10) { 
        fill(30);
      }else{
        fill(0, 0, 255);
      }

    }
push();
  noStroke();
  fill(255);
  textSize(13);
text("Move the cursor to create your nest", 100, 399);
fill(0, 102, 153);
pop();
  }

  