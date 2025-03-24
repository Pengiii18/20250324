let button1, button2, button3;
let sprite1, sprite2, sprite3;
let frame1 = 0, frame2 = 0, frame3 = 0;
let sprite1Playing = false, sprite2Playing = false, sprite3Playing = false;
let frameRate1 = 10, frameRate2 = 10, frameRate3 = 10; // 調整動畫速度
let iframe;

function preload() {
  sprite1 = loadImage('all_1.png');
  sprite2 = loadImage('all_2.png');
  sprite3 = loadImage('all_3.png'); // 加載新的圖片文件'all_3.png'
}

function setup() {
  createCanvas(400, 400);
  button1 = createButton('自我介紹');
  button1.position(100, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => sprite1Playing = true);
  button1.mouseOut(() => sprite1Playing = false);
  button1.mousePressed(() => showIframe('https://pengiii18.github.io/20250317/'));
  
  button2 = createButton('作品簡介');
  button2.position(230, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => sprite2Playing = true);
  button2.mouseOut(() => sprite2Playing = false);
  button2.mousePressed(() => showIframe('https://pengiii18.github.io/20250310/'));

  button3 = createButton('筆記說明');
  button3.position(360, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => sprite3Playing = true);
  button3.mouseOut(() => sprite3Playing = false);

  button4 = createButton('測驗題');
  button4.position(490, 50);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(() => sprite3Playing = true);
  button4.mouseOut(() => sprite3Playing = false);
}

function draw() {
  background(255);
  
  if (sprite1Playing) {
    let sx = frame1 * 26;
    image(sprite1, 50, 50, 26, 32, sx, 0, 26, 32); // 調整動畫顯示位置和大小
    if (frameCount % frameRate1 === 0) {
      frame1 = (frame1 + 1) % 5; // 5張合成圖
    }
  } else if (sprite2Playing) {
    let sx = frame2 * 48;
    image(sprite2, 50, 50, 48, 24, sx, 0, 48, 24); // 調整動畫顯示位置和大小
    if (frameCount % frameRate2 === 0) {
      frame2 = (frame2 + 1) % 6; // 6張合成圖
    }
  } else if (sprite3Playing) {
    let sx = frame3 * 35;
    image(sprite3, 50, 50, 35, 40, sx, 0, 35, 40); // 調整動畫顯示位置和大小
    if (frameCount % frameRate3 === 0) {
      frame3 = (frame3 + 1) % 6; // 假設'all_3.png'有6張合成圖
    }
  }
}

function showIframe(url) {
  if (iframe) {
    iframe.remove();
  }
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
  iframe.position(windowWidth * 0.1, windowHeight * 0.2);
}
