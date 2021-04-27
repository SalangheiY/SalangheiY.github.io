var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var radius = canvas.height / 2;


ctx.translate(radius, radius);

radius = radius * 0.9;

setInterval(draw, 1000);

function draw() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2)
  ctx.fillStyle = 'white';
  ctx.fill();
  // ctx.

  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius *0.1;
  ctx.stroke();

  // draw the center of the clock
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, Math.PI *2);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var i;
  ctx.font = 0.15 * radius + 'px arial'
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  // ctx.fillStyle = 'black'
  for (i = 1; i < 13; i++) {
    ang = i * Math.PI / 6;
    // console.log(ctx.x, ctx.y)
    ctx.rotate(ang);
    ctx.translate(0, -0.85 * radius);
    ctx.rotate(-ang);
    ctx.fillText(i.toString(), 0, 0)
    ctx.rotate(ang);
    ctx.translate(0, 0.85 * radius);
    ctx.rotate(-ang);
  }
}


function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = hour % 12;
  hour = (hour * Math.PI/6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (6 * 360));
  drawHand(ctx, hour, 0.5 * radius, radius * 0.07);
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius* 0.8, radius * 0.07);
  second = second * Math.PI / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02)


}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}