canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var maxX = 180;
var maxY = 180;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;
  posX=(maxX*x/180 - 10);
  posY=(maxY*y/180 - 10);
  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#333';
  ctx.fillRect(posX, posY, 20, 20);
}

window.addEventListener('deviceorientation', handleOrientation);
