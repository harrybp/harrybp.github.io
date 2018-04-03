class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  add(otherVector){
    this.x += otherVector.x;
    this.y += otherVector.y;
  }
  limit(max){
    var actual = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    if(actual > max){
      this.x = this.x * max/actual;
      this.y = this.y * max/actual;
    }
  }
  dist(otherVector){
    return Math.sqrt( Math.pow( Math.abs(this.x - otherVector.x), 2) 
                    + Math.pow( Math.abs(this.y-otherVector.y), 2));
  }
  getAngle(){
    return Math.atan2(-this.x, this.y)
  }
  normalise(){
    this.limit(1);
  }
  divide(divisor){
    this.x = this.x/divisor;
    this.y = this.y/divisor;
  }
  subtract(otherVector){
    this.x -= otherVector.x;
    this.y -= otherVector.y;
  }
}
class Boid {
  constructor(startPos){
    this.pos = startPos;
    this.vel = new Vector(0,0);
    this.friends = [];
    this.thinkTimer = Math.floor(Math.random()*10);
    this.angle = this.vel.getAngle();
    this.smoothAmount = 10*Math.PI/180
    this.colour = '#019474';
  }

  update() {
    this.thinkTimer = (this.thinkTimer + 1) % 5;
    if(wrap)
      this.wrap();
    if(this.thinkTimer == 0)
      this.getFriends();
    this.flock();
    this.pos.add(this.vel)

  }

  getFriends(){
    var nearby = [];
    for(var x = 0; x < boids.length; x++){
      var boid = boids[x];
      if(this.pos.dist(boid.pos) < friendRadius){
        nearby.push(boid);
      }
    }
    this.friends = nearby;
  }

  flock() {
    var noise = new Vector(2*Math.random() - 1, 2*Math.random() -1);
    //noise.divide(2)
    this.vel.add(noise);
    this.vel.limit(maxSpeed);
    this.vel.add(this.getAverageDirection())
    this.vel.add(this.getAvoidDirection())
    this.vel.add(this.getCoheseDirection())
    this.vel.add(this.getAvoidBarriersDirection())
    if(!wrap)
      this.vel.add(this.getAvoidEdgeDirection())
  }

  wrap(){
    this.pos.x = (this.pos.x + totalWidth) % totalWidth;
    this.pos.y = (this.pos.y + totalHeight) % totalHeight;
  }

  getAverageDirection(){
    var sum = new Vector(0,0);
    for(var x = 0; x<this.friends.length; x++){
      var boid = this.friends[x];
      var dist = this.pos.dist(boid.pos);
      if(dist > 0){
        var direction = new Vector(boid.vel.x,boid.vel.y);
        direction.normalise();
        direction.divide(dist);
        sum.add(direction);
      }
    }
    return sum;
  }

  getAvoidDirection(){
    var sum = new Vector(0,0);
    for(var x = 0; x<this.friends.length; x++){
      var boid = this.friends[x];
      var dist = this.pos.dist(boid.pos);
      if(dist > 0 && dist < crowdRadius){
        var position = new Vector(this.pos.x,this.pos.y);
        position.subtract(boid.pos);
        position.normalise();
        position.divide(dist);
        sum.add(position);
      }
    }
    return sum;
  }

  getCoheseDirection(){
    var sum = new Vector(0,0);
    var count = 0;
    for(var x = 0; x<this.friends.length; x++){
      var boid = this.friends[x];
      var dist = this.pos.dist(boid.pos);
      if(dist > 0){
        sum.add(boid.pos);
        count++;
      }
    }
    if(count > 0){
      sum.divide(count);
      sum.subtract(this.pos);
      sum.limit(0.2)
      return sum;
    } else {
      return new Vector(0,0)
    }
  }

  getAvoidBarriersDirection(){
    var sum = new Vector(0,0);
    for(var i = 0; i < barriers.length; i++){
      var barrier = barriers[i];
      var dist = this.pos.dist(barrier.pos);
      if(dist < avoidRadius){

        var direction = new Vector(this.pos.x, this.pos.y);
        direction.subtract(barrier.pos);
        direction.divide(dist);
        direction.normalise();
        
        sum.add(direction);

      }
    }
    //sum.divide(0.5)
    return sum;

  }

  getAvoidEdgeDirection(){
    if(this.pos.x < 0){
      this.pos.x = 0;
    } else if(this.pos.x > totalWidth){
      this.pos.x = totalWidth;
    }
    if(this.pos.y < 0){
      this.pos.y = 0;
    } else if(this.pos.y > totalHeight){
      this.pos.y = totalHeight;
    }
    var sum = new Vector(0,0);
    var dist = 1;
    if(this.pos.x < avoidRadius){
      sum.add(new Vector(1,0))
      dist = this.pos.x;
    } else if(this.pos.x > totalWidth-avoidRadius){
      sum.add(new Vector(-1,0));
      dist = totalWidth - this.pos.x;
    }
    if(this.pos.y < avoidRadius){
      sum.add(new Vector(0,1))
      dist = this.pos.y;
    } else if(this.pos.y > totalHeight-avoidRadius){
      sum.add(new Vector(0,-1));
      dist = totalHeight- this.pos.y;
    }
    //console.log(dist)
    dist = dist / 4;
    if(dist > 0)
      sum.divide(dist)

    return sum;

  }

  draw(){
    var angle = this.vel.getAngle();
    if(this.angle < angle){
      this.angle += this.smoothAmount;
    } else if(this.angle > angle) {
      this.angle -= this.smoothAmount;
    }
    ctx.fillStyle = this.colour;
    ctx.translate(this.pos.x, this.pos.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.arc(0, 0, 5 ,0,Math.PI);
    ctx.lineTo(0,-12);
    ctx.fill();
    ctx.rotate(-this.angle)
    ctx.translate(-this.pos.x, -this.pos.y);
  }
}
class Barrier {
  constructor(pos){
    this.pos = pos;
  }
  draw(){
    ctx.fillStyle = '#FF0000'
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.arc(0, 0, 5 ,0,2*Math.PI);
    ctx.fill();
    ctx.translate(-this.pos.x, -this.pos.y);
  }
}

var totalWidth = 500;
var totalHeight = 600;
init();


function init() {
  wrap = false
  boids = [];
  barriers = [];
  frameLength = 15;
  maxSpeed = 2.1;
  friendRadius = 60;
  crowdRadius = friendRadius / 2;
  avoidRadius = 20;
  mode = 'p'
  canvas = document.getElementById('canvas');
  canvas.addEventListener("mousedown", getMouseDown);
  document.addEventListener('mouseup', getMouseUp)
  canvas.addEventListener('mousemove', getMouseMove)
  canvas.width = totalWidth;
  canvas.height = totalHeight;
  ctx = canvas.getContext("2d");
  addXBoidsRandomly(1)
}

function update(){
  for(var x = 0; x < boids.length; x++){
    var boid = boids[x];
    boid.update();
  }
  if(count % 10 == 0)
    friendClustering();
}

function draw(){
  ctx.clearRect(0,0,totalWidth,totalHeight);
  for(var x = 0; x < boids.length; x++){
    var boid = boids[x];
    boid.draw();
  }
  for(var x = 0; x < barriers.length; x++){
    var barrier = barriers[x];
    barrier.draw();
  }
}

var maxFPS = 60;
var lastFrameTimeMs = 0;
var delta = 0;;
var timestep = 20;
var count = 0;
function mainLoop(timestamp) {
  // Throttle the frame rate.    
  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
      requestAnimationFrame(mainLoop);
      return;
  }
  count++;
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;
  while (delta >= timestep) {
    update();
    delta -= timestep;
  }
  draw();
  requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);

var clicked = false;
function getMouseDown(event){ count = 7; clicked = true; getMouseMove(event); }
function getMouseUp(event){ clicked = false; }
function getMouseMove(event){
  if(count > 0 && clicked){
    var loc = getMousePos(canvas, event);
    switch(mode){
      case 'p': addBarrier(loc);
      break;
      case 'b': addBoid(loc);
      break;
      case 'e': erase(loc);
      break;
      case 'k': kill(loc);
      break;
    }
    
    count = 0;
  }
}
function addBoid(loc){
  var newBoid = new Boid(loc);
  newBoid.colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  boids.push(newBoid);
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
}
function addXBoidsRandomly(x){
  for(var i = 0; i < x; i++){
    addBoid(new Vector(Math.random() * totalWidth, Math.random() * totalHeight));
  }
}
function addBarrier(pos){
  barriers.push(new Barrier(pos));
}
function radios(type){
  mode = type;
}
function erase(pos){
  for(var x = 0; x < barriers.length; x++){
    var barrier = barriers[x];
    var dist = pos.dist(barrier.pos);
    if(dist < 20){
      barriers.splice(x, 1);
    }
  }
}
function kill(pos){
  for(var x = 0; x < boids.length; x++){
    var boid = boids[x];
    var dist = pos.dist(boid.pos);
    if(dist < 20){
      boids.splice(x, 1);
    }
  }
}


function friendClustering(){
  var boidCopy = boids.slice();
  //order by frirends
  boidCopy.sort(function(a,b){
    return b.friends.length - a.friends.length;
  })
  for(var x = 0; x< boidCopy.length; x++){
    var boid = boidCopy[x];
    boid.checked = false;
  }
  var prevColours = [];
  for(var x = 0; x< boidCopy.length; x++){
    var boid = boidCopy[x];
    var colour = boid.colour;
    if(prevColours.indexOf(colour) >= 0){
      colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }
    prevColours.push(colour);
    if(!boid.checked)
      colourFriends(boid, colour);
  }
}

function colourFriends(boid, colour){
  boid.checked = true;
  boid.colour = colour;
  for(var i = 0; i < boid.friends.length; i++){
    var friend = boid.friends[i];
    if(!friend.checked){
      colourFriends(friend, colour);
    }
  }
}

//todo
//split clustering task up frame by frame
//cluster recursively by looking at friends



