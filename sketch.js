// let img;
// let pxls = [];

// function preload() {
//   img = loadImage('flower.jpg');
// }

// function setup() {
//   createCanvas(img.width, img.height);
//   pixelDensity(1);
//   image(img, 0, 0);
//   loadPixels();

//   createCanvas(img.width, img.height + 50);

//   for (let y = 0; y < img.height; y++) {
//     for (let x = 0; x < img.width; x++) {
//       let index = (x + y * img.width) * 4;
//       let clr = [pixels[index], pixels[index + 1], pixels[index + 2], pixels[index + 3]];
//       let pxl = new Pxl(x, y, clr, index);
//       pxls.push(pxl);
//     }
//   }

//   background(0);
//   for (pxl = pxls.length - 2 * img.height; pxl < pxls.length; pxl++) {
//     pxls[pxl].draw();
//   }
//   loadPixels();
//   for (pxl = pxls.length - 2 * img.height; pxl < pxls.length; pxl++) {
//     pxls[pxl].move();
//   }
// }

// function draw() {
//   // background(0);
//   // for (let pxl in pxls) {
//   //   pxls[pxl].draw();
//   // }
//   // loadPixels();
//   // for (let pxl in pxls) {
//   //   pxls[pxl].move();
//   // }
// }

// class Pxl {
//   constructor(x, y, clr, index) {
//     this.x = x;
//     this.y = y;
//     this.clr = clr;
//     this.index = index;
//   }

//   move() {
//     // console.log(this.clr, [pixels[this.index + img.width], pixels[this.index + img.width + 1], pixels[this.index + img.width + 2], pixels[this.index + img.width + 3]]);
//     if (pixels[this.index + img.width] === 0 && pixels[this.index + img.width + 1] === 255 && pixels[this.index + img.width + 2] === 0 && pixels[this.index + img.width + 3] === 0) {
//       this.y = this.y + 1;
//       if (this.index === 500) {
//         // console.log("test");
//       }
//     }
//   }

//   draw() {
//     stroke(this.clr);
//     point(this.x, this.y);
//   }
// }