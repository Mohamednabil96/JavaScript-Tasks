var marbles = document.getElementById("marbles").getElementsByTagName("img");
var currentMarble = 0;
var intervalId = null;

function animateAll() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }
  
  intervalId = setInterval(function() {
    if (currentMarble < marbles.length) {
    for (var i = 0; i < marbles.length; i++) {
      marbles[i].src = "./marble1.jpg";
    }
      marbles[currentMarble].src = "./marble3.jpg";
      currentMarble++;
    } else {
      clearInterval(intervalId);
      intervalId = null;
    for (var i = 0; i < marbles.length; i++) {
      marbles[i].src = "./marble1.jpg";
    }
    }
    }, 1000);
  }