'use strict';

var circleX = 78.56;
var circleY = 69.11;
var circleRadius = 3.65;
var leftEye;

window.onload = function() {
  leftEye = document.querySelector('#eye-left circle');
  this.addEventListener('mousemove', moveEyes);
}

function moveEyes (event) {
  var x = event.pageX,
      y = event.pageY;

    // Get the mouse position relative to the centre of the circle (circleX,circleY)
    var  dx = x - circleX;
    var  dy = y - circleY;

    // Calculate distance from centre of circle to mouse (Pythagoras' theorem)
    var distance = Math.sqrt(dx * dx + dy *dy);
    
    // Scale the dx,dy coords back so they are on the circumference
    dx = 68.08 + (dx * circleRadius / distance);
    dy = 62.64 + (dy * circleRadius / distance);

    leftEye.setAttribute('cx', dx);
    leftEye.setAttribute('cy', dy);
}
