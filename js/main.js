// Part i: hover highlights boxes with a different background color

var boxHover = document.getElementsByClassName("box");
console.log(boxHover);

function toggleColor() {
  for (i=0; i < boxHover.length; i++) {
    boxHover[i].classList.toggle("orange");
  }
};

for (i=0; i<boxHover.length; i++) {
  boxHover[i].addEventListener("mouseenter", toggleColor);
  boxHover[i].addEventListener("mouseleave", toggleColor);
};

// Part ii: box #1 click

var messageOne = document.createElement("p");
messageOne.innerHTML = "Ooh - so close, but no cigar";

document.getElementById("one").addEventListener("click",
  function() {
    document.getElementById("main").appendChild(messageOne);
  }, false
);


// Part iii: box #2 click

var messageTwo = document.createElement("p");
messageTwo.innerHTML = "Ding Ding Ding - We have a winner!";

document.getElementById("two").addEventListener("click",
  function() {
    document.getElementById("main").appendChild(messageTwo);
  }, false
);


// Part iv: box #3 click

var messageThree = document.createElement("p");
messageThree.innerHTML = "Oops, better luck next time";

document.getElementById("three").addEventListener("click",
  function() {
    document.getElementById("main").appendChild(messageThree);
  }, false
);


// Part v: start over button

var startButton = document.getElementById("startover");
console.log(startButton);

function startOver() {
  startButton.classList.remove("hide");
  startButton.classList.add("show");
};

for (i=0; i<boxHover.length; i++) {
  boxHover[i].addEventListener("click", startOver);
};
