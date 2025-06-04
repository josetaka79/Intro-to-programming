// Select robot left eye
 document.getElementById("left-eye")

 // Change the color of robot left eye to purple
  document.getElementById("left-eye").style.backgroundColor = 
"purple";
  
//Make robot tilt his head to the left
 document.getElementById("head").style.transform = 
"rotate(5deg)";

 // Put a 2‐pixel‐wide, solid black border around his body.
 document.getElementById("body").style.border = "2px black solid";

// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";

// Put yellow dots around his right eye.
document.getElementById("right-eye").style.border = "4px yellow dotted";

// Change his left arm’s color.
document.getElementById("left-arm").style.backgroundColor = "#FF00FF";

// Change the text color.
document.getElementById("body").style.color = "#FF0000";

// Give Douglas hair.
document.getElementById("head").style.borderTop = "15px black solid";

var rightEye = document.getElementById("right-eye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    // draw every 10ms

    var id = setInterval(frame, 10) 
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

var leftArm = document.getElementById("left-arm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    // draw every 10ms
    var id = setInterval(frame, 10) 
    
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}