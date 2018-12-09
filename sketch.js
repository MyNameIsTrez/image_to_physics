let img;
let pxls = [];
let bg_clr = [255, 255, 255, 255]; // white

function preload() {
  img = loadImage('flower.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  image(img, 0, 0);
  loadPixels();

  createCanvas(img.width, img.height + 15);

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let clr = [pixels[index], pixels[index + 1], pixels[index + 2], pixels[index + 3]];
      let pxl = new Pxl(x, y, clr, index);
      pxls.push(pxl);
    }
  }
}

function draw() {
  background(bg_clr);
  for (let pxl in pxls) {
    pxls[pxl].draw();
  }
  loadPixels();
  for (let pxl in pxls) {
    pxls[pxl].move();
  }
}

class Pxl {
  constructor(x, y, clr, index) {
    this.x = x;
    this.y = y;
    this.clr = clr;
    this.index = index;
  }

  move() {
    let indexDown = this.index + img.width * 4;
    if (pixels[indexDown] === bg_clr[0] && pixels[indexDown + 1] === bg_clr[1] && pixels[indexDown + 2] === bg_clr[2] && pixels[indexDown + 3] === bg_clr[3]) {
      this.index = this.index + img.width * 4;
      this.y++;
    }
  }

  draw() {
    stroke(this.clr);
    point(this.x, this.y);
  }
}

function mousePressed() {
  pxls = [];
  setup();
}