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

function createCircularProgress() {
  const circularProgress = document.querySelector(".circular-progress");

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
  var elementsToAnimate1 = ["myBar4"];
  var elementsToAnimate2 = ["myBar2", "myBar5"];
  var elementsToAnimate3 = ["myBar1", "myBar3"];

  elementsToAnimate1.forEach(function(elementId) {
    move(elementId, 100);
  });

  elementsToAnimate2.forEach(function(elementId) {
    move(elementId, 75);
  });

  elementsToAnimate3.forEach(function(elementId) {
    move(elementId, 50);
  });

  createCircularProgress();
});
