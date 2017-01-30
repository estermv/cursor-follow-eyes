'use strict';

var originLeft = {
  x: 78.56,
  y: 69.11
};
var originRight = {
  x: 121.44,
  y: 69.11
}

var circleRadius = 3.65;
var leftEye, leftEyePosition, rightEye, rightEyePosition;

window.onload = function() {
  leftEye = document.querySelector('#eye-left circle');
  leftEyePosition = leftEye.getBoundingClientRect();

  rightEye = document.querySelector('#eye-right circle');
  rightEyePosition = rightEye.getBoundingClientRect();

  this.addEventListener('mousemove', moveEyes);
}

function moveEyes (event) {
  var x = event.pageX,
      y = event.pageY;

  moveEye(x, y, leftEye, leftEyePosition, originLeft);
  moveEye(x, y, rightEye, rightEyePosition, originRight);

}

function moveEye(x, y, eye, position, origin) {
  // Get the mouse position relative to the centre of the circle (circleX,circleY)
  var  dx = x;
  var  dy = y;

  var svg = document.getElementById('guillem-svg'),
  NS = svg.getAttribute('xmlns');


  var pt = svg.createSVGPoint(), svgP, circle;

  pt.x = dx;
  pt.y = dy;
  svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

  // circle = document.createElementNS(NS, 'circle');
  var distance = Math.sqrt(svgP.x * svgP.x + svgP.y * svgP.y);
  var finalx = origin.x + (svgP.x * ((20.96 / 2) - circleRadius) / distance);
  var finaly = origin.y + (svgP.y * ((12.75 / 2) - circleRadius) / distance);

  // var finalx = (circleX + svgP.x);
  // var finaly = (circleY + svgP.y);

  eye.setAttributeNS(null, 'cx', finalx);
  eye.setAttributeNS(null, 'cy', finaly);
}
