var video;
var img;
var vScale = 16;

function setup() {
			img=loadImage('em.png');

  createCanvas(640, 480);
  pixelDensity(displayDensity());
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = video.width; x > 0; x--) { //backwards to mirror
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      
      
var bright = (r+g+b)/3;
	  console.log(bright);

      // var w = map(bright,255,0, 0, vScale);
	  if (bright<125){
	  image(img, x*vScale, y*vScale,15,15);}

      // noStroke();
      // fill(255);
      // rectMode(CENTER);
     // text('hiii',x*vScale, y*vScale, w, w);
      //rect(x*vScale, y*vScale, w, w);

    }
  }
 
}

