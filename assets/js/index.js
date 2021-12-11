var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.innerHTML = pickedColor;
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var footer = document.querySelector(".footer");
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easy');
var hardBtn = document.getElementById('hard');

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});


for (var i = 0; i < squares.length; i++) {
  // Add the colors to each of them
  squares[i].style.backgroundColor = colors[i];
  // Add event listeners
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.innerHTML = "Correct";
      h1.style.backgroundColor = clickedColor;
      footer.style.backgroundColor = clickedColor;
      resetButton.innerHTML = "PLAY AGAIN?";
      changeColor(pickedColor);
    } else {
      this.style.backgroundColor = "#232222";
      messageDisplay.innerHTML = "Wrong";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function() {
  //generate Random Colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from the array
    pickedColor = pickColor();
    // Change colorDisplay to match pickedColor
    colorDisplay.innerHTML = pickedColor;
    // Change the color of the squares
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
    // Change the background-color of h1 and footer to steelblue
    h1.style.backgroundColor = "steelblue";
    footer.style.backgroundColor = "steelblue";
    //Remove the Correct
    messageDisplay.innerHTML = "";
    //Change the button text back to " New Color"
    this.innerHTML = "New Colors";
});
