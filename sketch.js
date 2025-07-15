let angle = 0;
let w = 26;
let ma;
let maxD;
let r;
let g;
let b;
function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(100);
  ortho(-300, 300, -300, 300);

  rotateX(-QUARTER_PI);
  //rotateY(ma);
  rotateY(angle * 0.03);
  
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      //let d = dist(x, z, mouseX, mouseY);
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -3, 3);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 300);
      //normalMaterial();
      r=255;
      g=24;
      b=240;
     rainbow(h);
      fill(r,g,b);
      translate(x - width / 2, 0, z - height / 2);
      box(w - 2, h, w - 2);
      //rect(x - width/2 + w / 2, 0, w-2, h);

      pop();
    }
  }
  angle -= 0.05;
}

function rainbow(dist){
      if(dist<50){
        r=255;
        g=0;
        b=0
      }
      else if(dist<100){
        r=255;
        g=165;
        b=0
      }
   else if(dist<150){
        r=255;
        g=255;
        b=0
      }
  else if(dist<200){
        r=0;
        g=255;
        b=0
      }
  else if(dist<250){
        r=0;
        g=0;
        b=255;
      }
  else if(dist<300){
        r=75;
        g=0;
        b=130
      }
  else{
    r=238;
    g=0;
    b=0;
  }    
      

}