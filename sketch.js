var box;

function setup() {
  createCanvas(600, 600);

  box = createSprite(300,300,50,50);
  box.shapeColor = "#9EA9F7";
}

function draw() {
  //background("#1fcc92");

  //keyDown = verifica se uma tecla foi pressionada
  if (keyDown("up")) {
    box.y = box.y -2;
  }

  if (keyDown("down")) {
    box.y = box.y +2;
  }
 
  if (keyDown("left")) {
    box.x = box.x -2;
  }

  if (keyDown("right")) {
    box.x = box.x +2;
  }

  if (keyDown("space")) {
    background("#7B59F0");
  } else {
    background("#04082B");
  }


  drawSprites();
}

