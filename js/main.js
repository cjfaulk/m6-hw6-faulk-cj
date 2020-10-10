// Part i: hover highlights boxes with a different background color

document.getElementById("one").addEventListener("mouseenter", boxBackground);
document.getElementById("two").addEventListener("mouseenter", boxBackground);
document.getElementById("three").addEventListener("mouseenter", boxBackground);

function boxBackground() {
  this.style.backgroundColor = "#FFA500";
  return false;
};

document.getElementById("one").addEventListener("mouseleave", boxBackgroundTwo);
document.getElementById("two").addEventListener("mouseleave", boxBackgroundTwo);
document.getElementById("three").addEventListener("mouseleave", boxBackgroundTwo);

function boxBackgroundTwo() {
  this.style.backgroundColor = "";
  return false;
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



// Part v: start over button
