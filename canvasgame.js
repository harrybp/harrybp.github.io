/*
* Game by Harry BP
*/
var playerImgR = document.getElementById("playerImg");
var playerImgL = document.getElementById("playerImg2");
var creatureR = document.getElementById("playerImg3");
var creatureL = document.getElementById("playerImg4");

map = [];
function draw(){
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //ctx.fillRect(playerPosX, playerPosY, playerWidth, playerHeight);
  var img = playerImgR;
  if(faceDirection < 0){
    img = playerImgL;
  }
  ctx.drawImage(img, playerPosX, playerPosY, playerWidth, playerHeight);
  for(x = 0; x < tileCount; x++){
    if(tiles[x].left + gridDimension < 0 || tiles[x].left > gameSize || tiles[x].top + gridDimension < 0 || tiles[x].top > gameSize)
      continue;
    if(tiles[x].isCreature){
      /*var img = creatureR;*/
      var z = gridDimension/4;
      if(creatures[tiles[x].id].direction == -1){
        z = gridDimension - gridDimension/4 - gridDimension/3;
      }
      /*ctx.drawImage(img, tiles[x].left,tiles[x].top,gridDimension,tiles[x].height);*/
      ctx.fillStyle = "rgb(" + (255 - (30*creatures[tiles[x].id].health)) + ",142,61)";
      ctx.fillRect(tiles[x].left, tiles[x].top, gridDimension, tiles[x].height);
      ctx.fillStyle = "#73ba60";
      ctx.fillRect(tiles[x].left, tiles[x].top, gridDimension, gridDimension);
      ctx.fillStyle =  "#7fba6f";
      ctx.fillRect(tiles[x].left + (gridDimension/3), tiles[x].top + gridDimension, gridDimension/3, 2*gridDimension/3);
      ctx.fillStyle = "white";
      ctx.fillRect(tiles[x].left + z, tiles[x].top + gridDimension/3, gridDimension/3, gridDimension/3);
    } else {
      ctx.fillStyle = tiles[x].color;
    ctx.fillRect(tiles[x].left,tiles[x].top,gridDimension,tiles[x].height);
    }
    
  }
  ctx.fillStyle = "red";
  for(i = 0; i < 5; i++){
    if(i*20 < health){
      ctx.fillRect(gridDimension + (i*2*gridDimension), gameSize - (2*gridDimension), gridDimension, gridDimension);
    }  
  }
  ctx.font="30px Arial Black";
  ctx.fillStyle = "white";
  ctx.fillText(score, gridDimension, 2*gridDimension, 2*gridDimension);
}
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 384;
canvas.height = 384;
document.body.appendChild(canvas);
//--------------------------------------------------------------------------
//Global Game properties
var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var gameSize, jumpSpeed, creatureJumpSpeed, gridDimension, playerPosX, playerPosY, playerSpeed, creatureSpeed, startX, startY, arrowSpeed, arrowHeight, playerWidth, playerHeight, gravity;
var xDeleteDist = 2;
var yDeleteDist = 5;
var renderDist = 5;
var frameLength = 30;
var damageTimeout = 25;
var gridSize = 16;
var logging = false;
var creatureHealth = 4;
var creatureAbudance = 3; //One in x

//--------------------------------------------------------------------------
//Calculate all element sizes from game size
calculateSize(384);
function calculateSize(x){
  gameSize = parseInt(x);
  playerWidth = gameSize/16;
  playerHeight = (playerWidth*2.5);
  gravity = gameSize/128;
  jumpSpeed = gameSize/16;
  creatureJumpSpeed = gameSize/24;
  gridDimension = parseInt(gameSize/gridSize);
  playerPosX = gameSize/2;
  playerPosY = gameSize/2;
  playerSpeed = gameSize/64;
  creatureSpeed = gameSize/128;
  startX = gameSize/4;
  startY = gameSize/2;
  //startX = 4500;
  //startY = 200;
  arrowSpeed = gravity*4;
  arrowHeight = gameSize/64;
}

//--------------------------------------------------------------------------
/*/Resize game based on input
function getResize(){
  var val = document.getElementById("resize").value;
  gameSize = val;
  die();
  calculateSize(val);
  init();
}*/

//--------------------------------------------------------------------------
/*Toggles borders and dev information
function toggleDevMode(){
  logging = !logging;
    for(i = 0; i < 4; i++){
      if(logging){
      borders[i].style.backgroundColor = "transparent";
    } else {
      var bodyStyle = window.getComputedStyle(document.body, null);
      var bgColor = bodyStyle.backgroundColor;
      borders[i].style.backgroundColor = bgColor;
      bottomBorder.textContent = "";
    }
  }
}*/

//--------------------------------------------------------------------------
//Game state
var headTile, maxCol, scoreTile, borders, tileCount, paused ,gravSpeed, jumpCount, xSpeed, xPosition , xPositionOffset, yPosition, yPositionOffset, col, rowNo, tileLefts, tileTops, moved, crouched, faceDirection, arrowCount, creatureCount, activeCreatureCount, creatures, tiles, hearts, health, dead, damageTime, score, bottomBorder, player, container;
var pause = [];
var timeTest = false;

//--------------------------------------------------------------------------
//Object constructors
function tileObj(left, top, height, isArrow, direction, isCreature, id, color){
  this.left = left;
  this.top = top;
  this.height = height;
  this.isArrow = isArrow;
  this.direction = direction;
  this.isCreature = isCreature;
  this.id = id;
  this.color = color;
}

function creature(cGravSpeed, health, frozen, direction){
  this.cGravSpeed = cGravSpeed;
  this.health = health;
  this.frozen = frozen;
  this.direction = direction;
}

//--------------------------------------------------------------------------
//On load
window.onload = function(){
	init();
}

//--------------------------------------------------------------------------
//Initialise game state, create all elements
function init(){
  //Reset gamestate
  tileCount = 0;
  paused = true;
  gravSpeed = 0;
  jumpCount = 0;  
  xSpeed = 0;
  xPosition = 0;
  xPositionOffset = 0;
  yPosition = 0;
  yPositionOffset = 0;
  col = 0;
  rowNo =0;
  moved = false;
  crouched = false;
  faceDirection = 1;
  arrowCount = 0;
  creatureCount = 0;
  activeCreatureCount = 0;
  creatures = [];
  tiles = [];
  health = 100;
  dead = false;
  score = 0;
  damageTime = 0;
  maxCol = 0;
  
  xPosition = startX;
  yPosition = startY;
  xPositionOffset = xPosition % gridDimension;
  yPositionOffset = yPosition % gridDimension;
  col = Math.floor(xPosition/gridDimension);
  rowNo = Math.floor(yPosition/gridDimension);
  genMap();
  //Load initial tiles
  renderCreatures(); 
  for(x = -1; x < gridSize + 1; x++){
    loadCol(x+col,x*gridDimension);
  }
  paused = false;
}

//--------------------------------------------------------------------------
//Randomly generate map
function genMap(){
  var length = 1000;
  var height = 30;
  var leeway = 7;
  var minRadius = 3;

  //Initialise arrays
  map = [];
  for(i = 0; i < height; i++){
    map.push([])
  }
  for(i = 0; i < height; i++){
    for(j = 0; j < length; j++){
      map[i][j] = 1;
    }
  }

  //Generate
  var creatureSpawns = 0;
  var circleYCenter = 16;
  for(circleXCenter = 10; circleXCenter < length; circleXCenter+= 2){
    //console.log(circleXCenter);
    if(circleYCenter < minRadius + leeway){
      change = 3;
    } else if(circleYCenter > (height-minRadius-leeway)){
      change = -3;
    } else {
      var change = 2 - Math.floor(Math.random() * (3 - 1 + 1) + 1);
    }
    
    //console.log(change);
    circleYCenter += change;
    if(circleYCenter < minRadius + leeway){
      circleYCenter = minRadius + leeway;
    } else if(circleYCenter > (height-minRadius-leeway)){
      circleYCenter = (height-minRadius-leeway);
    }
    var cTop = circleYCenter - leeway;
    var cBottom = height - leeway - circleYCenter;
    var maxRadius = Math.min(cTop, cBottom);
    var isCreature = Math.floor(Math.random() * (creatureAbudance - 1 + 1) + 1);
    var radius = Math.floor(Math.random() * (maxRadius - minRadius + 1) + minRadius);
    for(i = 0; i < height; i++){
      for(j = 0; j < length; j++){
        var  x = Math.sqrt(Math.pow(Math.abs(circleYCenter-i),2) + Math.pow(Math.abs(circleXCenter-j),2));
        if(x< radius){
          map[i][j] = 0;
        }
      }
    }
    if(isCreature == 1 && circleXCenter > 25){
      map[circleYCenter+radius][circleXCenter] = creatureSpawns + 5;
      creatureSpawns++;
    }
  }
}

//--------------------------------------------------------------------------
//Take 'amount' of health off total and update health display
function loseHealth(amount){
  var time = new Date;
  if(time - damageTime < damageTimeout){
    return;
  }
  damageTime = time;
  health -= amount;
  if(health < 1){
    die();
  } 
}

//--------------------------------------------------------------------------
//Stop game, display game over message
function die(){
  dead = true;
  paused = true;
}

//--------------------------------------------------------------------------
//Calls update Frame repeatedly
var start = null;
window.requestAnimationFrame(step);
function step(timestamp){
  if(!start) start = timestamp;
  var progress = timestamp - start;
  if(progress > frameLength){
    start = timestamp;
    if(!paused){
      updateFrame();
    }
  }
  window.requestAnimationFrame(step);
}

//--------------------------------------------------------------------------
//Called at regular intervals to update positions of everything on screen
function updateFrame(){
  //Move objects
  if(arrowCount > 0){
    moveArrows();
  }
  if(activeCreatureCount > 0){
    moveCreatures();
    yDeleteDist = 5;
  } else {
    yDeleteDist = 2;
  }
  yAccelerate();
  col = Math.floor(xPosition/gridDimension);
  rowNo = Math.floor(yPosition/gridDimension);
  panMap();
  if(col > maxCol){
    maxCol = col;
    score++;
  }

  if(logging){
    bottomBorder.textContent = (tileCount-creatureCount) + " tiles loaded + "+creatureCount+" creatures ("+activeCreatureCount+" Active)| x: " + xPosition + ", col: " + col + " | y: " + yPosition + ", row: " + rowNo + " | Direction: " + faceDirection + " | " + arrowCount + " arrows";
  }
  draw();
}

//--------------------------------------------------------------------------
//Calculates left positioning of all elements based on player x axis movement
//Also renders new columns and rows 
function panMap(){
    var moveAmount = null;
    //Check each tile
    for(i = 0; i < tileCount; i++){
      var pLeftOriginal = tiles[i].left;
      var pTop = tiles[i].top;
      var newPLeft = pLeftOriginal + xSpeed;
      var arrow = false;
      if(tiles[i].isArrow){
        var tileHeight = arrowHeight;
      } else {
        var tileHeight = gridDimension;
      }

      //Check for clash with player
      if(!tiles[i].isCreature && !tiles[i].isArrow && newPLeft < playerPosX + playerWidth && newPLeft + gridDimension > playerPosX && playerPosY + playerHeight > pTop && playerPosY < pTop + tileHeight){
        if(xSpeed < 0){
          newPLeft = playerPosX + playerWidth;
        } else {
          newPLeft = playerPosX - gridDimension;
        }
      } 
      //Get minimum move amount
      if(moveAmount == null || (xSpeed < 0 && newPLeft - pLeftOriginal > moveAmount) || (xSpeed > 0 && newPLeft - pLeftOriginal < moveAmount)){
        moveAmount = newPLeft - pLeftOriginal;
      }
    }
  if(moveAmount != 0){//Move tiles
    moved = true;
    for(i = 0; i < tileCount; i++){
      tiles[i].left += moveAmount;
      if(tiles[i].isCreature && creatures[tiles[i].id].frozen && tiles[i].left > 0 && tiles[i].left < gameSize){
        creatures[tiles[i].id].frozen = false;
        activeCreatureCount++;
      }
    
    }
  }
  
  if(tileCount < 1){//If not tiles then no clash possible
    moveAmount = xSpeed;
  }
  if(tileCount > 20 && moved){
    deleteTiles();
  }
 
  //Render new rows and columns about to come into view
  xPosition-= moveAmount;
  xPositionOffset -= moveAmount;
  while(xPositionOffset > gridDimension){
    xPositionOffset-=gridDimension;
    loadCol(col+gridSize, gameSize-xPositionOffset);
  }
  while(xPositionOffset < -gridDimension){
    xPositionOffset+=gridDimension;
    loadCol(col-1, -gridDimension - (xPositionOffset%gridDimension));
  }
  while(yPositionOffset > gridDimension){
      var test = Math.floor(yPositionOffset/gridDimension)-1;
      yPositionOffset-=gridDimension;
      loadRow(rowNo+gridSize-test, gameSize-yPositionOffset);
    }
  while(yPositionOffset < -gridDimension){
    var test = Math.floor(-yPositionOffset/gridDimension)-1;
    yPositionOffset+=gridDimension;
    loadRow(rowNo-test, -gridDimension-(yPositionOffset%gridDimension));
  }
  
}

//--------------------------------------------------------------------------
//Calculates top positioning of all elements on screen based on player y axis movement
function yAccelerate(){
  gravSpeed+=gravity;
  var moveAmount = null;

  //Check each tile
  for(i = 0; i < tileCount; i++){
    var pLeft = tiles[i].left;
    var pTopOriginal = tiles[i].top;
    var newPTop = pTopOriginal - gravSpeed;

    if(tiles[i].isArrow){
      var tileHeight = arrowHeight;
    } else {
      var tileHeight = gridDimension;
    }

    //Check for clash with player
    if(!tiles[i].isCreature && !tiles[i].isArrow && pLeft < playerPosX + playerWidth && pLeft + gridDimension > playerPosX && playerPosY + playerHeight > newPTop && playerPosY < newPTop + tileHeight){
        if(gravSpeed > 0){//player falling
          var newPTop = playerPosY + playerHeight;
        } else if(gravSpeed < 0){//Player jumping
          var newPTop = playerPosY - tileHeight;
        }
      }
      //Find minimum move amount possible
      if(moveAmount== null || (gravSpeed > 0 && newPTop - pTopOriginal > moveAmount) || (gravSpeed < 0 && newPTop - pTopOriginal < moveAmount) ){
        moveAmount = newPTop - pTopOriginal;
      }
    }
    if(tileCount < 1){ //If no tiles can be no clashes
      moveAmount = -gravSpeed;
    }
    if(moveAmount != -gravSpeed){//Clash has occured
      if(gravSpeed > 0){
        jumpCount = 0;
      }
      gravSpeed = 0;
      
      
    }
    if(moveAmount != 0){//Move tiles
      moved = true;
    }
    if(moved){
      for(i = 0; i < tileCount; i++){
        tiles[i].top += moveAmount;
        if(!(tiles[i].isCreature && creatures[tiles[i].id].frozen) && tiles[i].left + gridDimension > -gridDimension && tiles[i].left < gameSize + gridDimension && tiles[i].top + gridDimension > -gridDimension && tiles[i].top < gameSize + gridDimension){
          moved = false;
        }
        
      }
    }
    yPosition-=moveAmount;
    yPositionOffset-=moveAmount;
  
}

//--------------------------------------------------------------------------
//Captures key presses
window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if(key == 38){
      if(jumpCount < 2){
        if(jumpCount < 1){//Jump
          gravSpeed = -jumpSpeed;
        } else {//Double jump
          gravSpeed = -jumpSpeed+2;
        }
        jumpCount ++;
      }
    } 
    if (key == 39) {
      xSpeed = -playerSpeed; //-->Right
      if(faceDirection == -1){
        var x = playerWidth/2.4;
        //headTile.style.cssText += "border-width: "+x+"px 0px "+x+"px "+x+"px;";
      }
      faceDirection = 1;
    }else if (key == 37) {
      xSpeed = playerSpeed; //<--Left
      if(faceDirection == 1){
        var x = playerWidth/2.4;
        //headTile.style.cssText += "border-width: "+x+"px "+x+"px "+x+"px 0px;";
      }
      faceDirection = -1;
    }
    if(key == 40 && !crouched){//Down\/
      playerHeight -= playerWidth;
      playerPosY+=playerWidth;
      crouched = true;
    }
    if(key == 80){//(P)ause
      if(!dead){
        paused = !paused;
        if(paused){
          ctx.fillStyle = "white";
          ctx.fillRect(3*gridDimension, 3*gridDimension, 3*gridDimension, 10*gridDimension);
          ctx.fillRect(10*gridDimension, 3*gridDimension, 3*gridDimension, 10*gridDimension);
        }
      } else {
        init();
      }
    }
  }

//--------------------------------------------------------------------------
//Captures key releases
window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if(key == 39 || key == 37){
    xSpeed = 0;
  }
  if(key == 84){//T for test
    if(logging){
      timeCheck();
    } 
  }
  if(key == 40){
    playerHeight += playerWidth;
    playerPosY-=playerWidth;
    crouched = false;
  }
  if(key == 81){
    //frameLength = 30;
  }
  if(key == 83){//(S)hoot
      shoot();
    }
}

//--------------------------------------------------------------------------
//Creates a new div element and adds it to the game container (and tile array)
function createTile(width, height, xOffset, yOffset, image, dontAdd){
  var rand = Math.floor(Math.random() * 3);
  var bgColor = "#666666";
  if(rand == 0){
    bgColor = "#727272";
  } else if(rand == 1){
    bgColor = "#5e5e5e";
  }  
  tiles[tileCount] = new tileObj(xOffset, yOffset, height, false, 0, false, 0, bgColor);
  tileCount++;
  
}

//--------------------------------------------------------------------------
//Loads a new column to the left or right of whats visibile
function loadCol(number, position){
  for(i = -(renderDist-1); i < gridSize+renderDist; i++){
    if(number >= 0 && number < map[0].length && i+rowNo < map.length && i+rowNo >= 0 && map[i+rowNo][number] != 0 && map[i+rowNo][number] < 5){
      createTile(gridDimension, gridDimension, position, (i+rowNo)*gridDimension-yPosition, "");
    }
  }
}

//--------------------------------------------------------------------------
//Loads a new row above or below whats visible
function loadRow(number, position){
  if(number < map.length && number >= 0){
    var row = map[number];
    for(i = -(renderDist-1); i < gridSize+renderDist; i++){
      if(i+col < row.length && i+col >= 0 && row[i+col] != 0 && row[i+col] < 5){
        createTile(gridDimension, gridDimension, (i+col)*gridDimension-xPosition, position, ""); 
      }
    }
  } 
}

//--------------------------------------------------------------------------
//Scans the map for creatures, creates them and adds them to creatures and tile array
function renderCreatures(){
  for(j = 0; j < map.length; j++){
    for(i = 0; i < map[j].length; i++){
      if(map[j][i] >= 5){
        var xOffset = ((i*gridDimension)-xPosition);
        var yOffset = (((j-1)*gridDimension)-yPosition);
        tiles[tileCount] = new tileObj(xOffset, yOffset, 2*gridDimension, false, 0, true, map[j][i], "#000000");
        tileCount++;
        creatures[map[j][i]]= new creature(0, creatureHealth, true, -1);
        creatureCount++;
      }
    }
  }
}

//--------------------------------------------------------------------------
//Calculates next top and left position of all non frozen creatures
function moveCreatures(){
  for(i = 0; i < tileCount; i++){
    if(!tiles[i].isCreature || creatures[tiles[i].id].frozen ){
      continue;
    }
    var intendsToJump = false;
    var jumpConfirmed = false;
    var move = creatures[tiles[i].id].direction * creatureSpeed;
    if(tiles[i].left < playerPosX){
      if(creatures[tiles[i].id].direction != 1){
        creatures[tiles[i].id].direction = 1;
      }
    } else {
      if(creatures[tiles[i].id].direction != -1){
        creatures[tiles[i].id].direction = -1;
      }
    }
    var creature = tiles[i];
    var newLeft = tiles[i].left + move;
    for(j = 0; j < tileCount; j++){
      if(tiles[j].isArrow || i == j || (tiles[j].isCreature && creatures[tiles[j].id].frozen)){
        continue;
      }
      var block = tiles[j];
      if(newLeft < block.left + gridDimension && newLeft + gridDimension > block.left && creature.top + (2*gridDimension) > block.top && creature.top < block.top + gridDimension){
        intendsToJump = true;
        if(move > 0){ //-->
          var newLeftT = block.left - gridDimension;
          if(newLeftT < newLeft){
            newLeft = newLeftT;
          }
        } else {//<--
          var newLeftT = block.left + gridDimension;
          if(newLeftT > newLeft){
            newLeft = newLeftT;
          }
        }
      }
    }
    if(newLeft < playerPosX + playerWidth && newLeft + gridDimension > playerPosX && creature.top + (2*gridDimension) > playerPosY && creature.top < playerPosY + playerHeight){
      if(move > 0){
        var newLeftT = playerPosX - gridDimension;
        if(newLeftT < newLeft){
          newLeft = newLeftT;
        }
      }else {
        var newLeftT = playerPosX + playerWidth;
        if(newLeftT > newLeft){
          newLeft = newLeftT;
        }
      }
      loseHealth(2);
    }
    creature.left = newLeft;

    creatures[creature.id].cGravSpeed += gravity;
    var newTop = creature.top + creatures[creature.id].cGravSpeed;

    for(j = 0; j < tileCount; j++){
      if(tiles[j].isArrow || tiles[j].isCreature){//|| i==j ||(tiles[j].isCreature && creatures[tiles[j].id].frozen)){
        continue;
      }
      var block = tiles[j];
      if(creature.left < block.left + gridDimension && creature.left + gridDimension > block.left && newTop + (2*gridDimension) > block.top && newTop < block.top + gridDimension){         
        if(creatures[creature.id].cGravSpeed > 0){//creature falling
          var newTopT = block.top - (gridDimension*2);
          if(newTopT < newTop){
            newTop = newTopT;
          }
          if(intendsToJump){
            jumpConfirmed = true;
          }
        } else if(creatures[creature.id].cGravSpeed < 0){
          var newTopT = block.top + gridDimension;
          if(newTopT > newTop){
            newTop = newTopT;
          }
        }
      } 
    }

    if(newTop != creature.top + creatures[creature.id].cGravSpeed){
      creatures[creature.id].cGravSpeed = 0;
    }
    if(jumpConfirmed){
      creatures[creature.id].cGravSpeed = -creatureJumpSpeed;
    }
    creature.top = newTop;
  }
}

//--------------------------------------------------------------------------
//Removes all tiles outside the delete distance from the container and tile array
function deleteTiles(){
  for(i= 0; i < tileCount; i++){
    if(tiles[i].isArrow){
      continue;
    }
    var left = tiles[i].left;
    var top = tiles[i].top;
    if(left < -(xDeleteDist*gridDimension)||  left > gameSize + ((xDeleteDist-1)*gridDimension) || top < -(yDeleteDist*gridDimension) || top > gameSize + ((yDeleteDist-1)*gridDimension)){
      if(tiles[i].isCreature){
        if(!creatures[tiles[i].id].frozen && creatures[tiles[i].id].health > 0){
          creatures[tiles[i].id].frozen = true;
          activeCreatureCount--;
        }
      } else {
        tiles.splice(i,1);
        tileCount--;
      }
    }
  }
}

//--------------------------------------------------------------------------
//Creates new arrow element
function shoot(){
  var left = playerPosX + (faceDirection*playerWidth) + playerWidth;
  if(faceDirection == 1){
    left -= playerWidth;
  }
  tiles[tileCount] = new tileObj(left, playerPosY + playerWidth, arrowHeight, true, faceDirection, false, 0, "#000000");
  tileCount++;
  arrowCount++;
}

//--------------------------------------------------------------------------
//Calculates next x position of all arrows, and checks if they hit a wall or creature
function moveArrows(){
  for(i = 0; i < tileCount; i++){
    if(!tiles[i].isArrow){
      continue;
    }
    tiles[i].left += (arrowSpeed*tiles[i].direction);
    var clash = false;
    for(j = 0; j < tileCount; j++){
      if(tiles[j].top < tiles[i].top + arrowHeight && tiles[j].top+tiles[j].height > tiles[i].top && tiles[j].left < tiles[i].left && tiles[j].left + gridDimension > tiles[i].left){
        clash = true;
        if(tiles[j].isCreature && !creatures[tiles[j].id].frozen &&creatures[tiles[j].id].health > 0){
          creatures[tiles[j].id].health -= 1;
          var val = (255 - (40*creatures[tiles[j].id].health));
          if(creatures[tiles[j].id].health < 1){
            tiles.splice(j, 1);
            tileCount--;
            i--;
            activeCreatureCount--;
            creatureCount--;
            score += 25;
            break;
          }
        }
      }
    }
    if(clash || tiles[i].left > 1000 || tiles[i].left < -1000){
      tiles.splice(i, 1);
      arrowCount--;
      tileCount--;
    } 
  }
}

//--------------------------------------------------------------------------
//Test time for 10000 frames of strafing right and left (For development)
function timeCheck() {
  console.log("Go!");
  var iterations = 10000;
  xSpeed = -1;
  var startTime = Date.now();
  while(iterations > 0){
    updateFrame();
    iterations--;
    if((iterations % 2000) == 0){
      xSpeed =- xSpeed;
      console.log("Switch direction");
    }
  }
  var endTime = Date.now();
  var timeTaken = parseInt(endTime - startTime);
  var fps = parseInt(10000000/timeTaken);
  console.log("Time: " + timeTaken + "ms, thats " + fps + "fps");
  paused = true;
  bottomBorder.textContent = ("Time: " + timeTaken + "ms, thats " + fps + "fps"); 
}