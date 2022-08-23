var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6f4a254c-0799-4d7c-9bf0-8248676bce03","854cd12a-1123-4787-9910-4488517d25fb","529b0b7a-2466-4b21-99a5-e1ff84214164","539a72f4-6b4c-42f9-a5f1-2f2f6dd22a56","a698f872-714f-4daf-8632-895119b13271"],"propsByKey":{"6f4a254c-0799-4d7c-9bf0-8248676bce03":{"name":"rocke","sourceUrl":"assets/api/v1/animation-library/gamelab/X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz/category_stickers/sticker_33.png","frameSize":{"x":332,"y":282},"frameCount":1,"looping":true,"frameDelay":2,"version":"X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":282},"rootRelativePath":"assets/api/v1/animation-library/gamelab/X7u_1j9fkZFy46sxjbTO4VA9Tgl650Zz/category_stickers/sticker_33.png"},"854cd12a-1123-4787-9910-4488517d25fb":{"name":"rocket","sourceUrl":"assets/api/v1/animation-library/gamelab/smJq1V8_R..28mzSGvzZahN32S2hC3YW/category_stickers/sticker_32.png","frameSize":{"x":308,"y":278},"frameCount":1,"looping":true,"frameDelay":2,"version":"smJq1V8_R..28mzSGvzZahN32S2hC3YW","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":278},"rootRelativePath":"assets/api/v1/animation-library/gamelab/smJq1V8_R..28mzSGvzZahN32S2hC3YW/category_stickers/sticker_32.png"},"529b0b7a-2466-4b21-99a5-e1ff84214164":{"name":"fire","sourceUrl":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png","frameSize":{"x":232,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png"},"539a72f4-6b4c-42f9-a5f1-2f2f6dd22a56":{"name":"explote2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png","frameSize":{"x":398,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png"},"a698f872-714f-4daf-8632-895119b13271":{"name":"explote1","sourceUrl":"assets/api/v1/animation-library/gamelab/RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv/category_video_games/burst04.png","frameSize":{"x":398,"y":318},"frameCount":1,"looping":true,"frameDelay":2,"version":"RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":318},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RZxIB1TzLq8KxqEkMmaak3ppw9ee5yfv/category_video_games/burst04.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle = createSprite(390, 200, 10,70);
var computerPaddle = createSprite(10, 200, 10,70);
var ball = createSprite(203, 201, 20,20);
function drawred() {
  for (var num = 0; num <= 400; num = num + 20) {
   line(200, num, 200, num + 10);
   
 }
}
function resetball()
{
  ball.x=200;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  
  
}

playerPaddle.shapeColor="Blue";
ball.shapeColor="Green";
computerPaddle.shapeColor="Red";
ball.setAnimation("fire");
ball.scale = "0.15";
playerPaddle.setAnimation("rocket");
playerPaddle.scale = "0.3";
computerPaddle.setAnimation("rocke");
computerPaddle.scale = "0.3";

function draw() {
 background("white");
 drawred();

 
 
  
 
 
 if (ball.isTouching(playerPaddle)||ball.isTouching(computerPaddle)) {
   playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_3.mp3", false);
 }
 
 
  if (keyDown("up")) {
    playerPaddle.y = playerPaddle.y -25;
  }
  if (keyDown("down")) {
    playerPaddle.y = playerPaddle.y +25;
  }
  if (keyDown("space")) {
    ball.velocityX = 5 ;
    ball.velocityY = 5  ;
  }
  computerPaddle.y = ball.y;
  if(ball.x<0 || ball.x>400)
  {
    resetball();
  }
  if (keyWentUp("m")) {
    playerPaddle.setAnimation("rocket");
  }
  if (keyWentDown("m")) {
    playerPaddle.setAnimation("explote2");
  }
  if (keyWentUp("w")) {
    computerPaddle.setAnimation("rocke");
  }
  if (keyWentDown("w")) {
    computerPaddle.setAnimation("explote1");
  }

  createEdgeSprites();
 ball.bounceOff(topEdge);
 ball.bounceOff(bottomEdge);
 ball.bounceOff(playerPaddle);
 ball.bounceOff(computerPaddle);
      
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
