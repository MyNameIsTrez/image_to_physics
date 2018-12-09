let img;
let pxls = [];

function preload() {
  img = loadImage('flower.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  image(img, 0, 0);
  loadPixels();

  createCanvas(img.width, img.height + 50);
  background(150);

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = x + y * img.width;
      let newi = index * 4;
      let clr = [pixels[newi], pixels[newi + 1], pixels[newi + 2], pixels[newi + 3]];
      let pxl = new Pxl(x, y, clr, index);
      pxls.push(pxl);
    }
  }
}

function draw() {
  for (let pxl in pxls) {
    pxls[pxl].move();
    pxls[pxl].draw();
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
    if (this.y < height - 1) {
      this.y = this.y + 1;
    }
  }

  draw() {
    stroke(this.clr);
    point(this.x, this.y);
  }
}