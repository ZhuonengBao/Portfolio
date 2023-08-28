function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function move(elementId, maxWidth) {
  var elem = document.getElementById(elementId);
  var width = 0;
  var id = setInterval(frame, 10);
  
  function frame() {
    if (width >= maxWidth) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function createCircularProgress(circleClass) {
  const circularProgress = document.querySelector(circleClass);

  let startValue = 0,
    endValue = 100,
    speed = 10,
    progressColor = "black";

  const progress = setInterval(() => {
    startValue++;
    circularProgress.style.background = `conic-gradient(${progressColor} ${
      (startValue * 360) / 100
    }deg, transparent ${(startValue * 360) / 100}deg)`;

    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", function() {
  var elementsToAnimate1 = ["leftBar4", "topBar2", "topBar4"];
  var elementsToAnimate2 = ["leftBar2", "leftBar5", "topBar3"];
  var elementsToAnimate3 = ["leftBar1", "leftBar3","topBar1", "topBar5"];
  var circles = [".circle1-left-prog", ".circle2-left-prog", ".circle1-top-prog", ".circle2-top-prog"]

  elementsToAnimate1.forEach(function(elementId) {
    move(elementId, 100);
  });

  elementsToAnimate2.forEach(function(elementId) {
    move(elementId, 75);
  });

  elementsToAnimate3.forEach(function(elementId) {
    move(elementId, 50);
  });

  circles.forEach(function(circleClass) {
    setTimeout(function() {
      createCircularProgress(circleClass);
    }, 1250);
  });
});
