let count = 0;
let maxLimit = 9;

const displayMessage = function (text) {
  document.querySelector(".text").textContent = text;
};
const display = function (counterLabel) {
  document.querySelector(".counterLabel").textContent = counterLabel;
};

// Increase Button
document.querySelector(".increaseBtn").addEventListener("click", function () {
  if (count < maxLimit) {
    count++;
    display(count);
    displayMessage("");

  } else if (count >= maxLimit) {
    displayMessage("exceed limit");
    display("");
  }
});

// Decrease Button
document.querySelector(".decreaseBtn").addEventListener("click", function () {
  if (count > 0) {
    count--;
    display(count);
    displayMessage("");

  } else if (count <= 0) {
    displayMessage("Below Zero");
    display("");
  }
});

// Reset Button
document.querySelector(".resetBtn").addEventListener("click", function () {
  count = 0;
  display(count);
  displayMessage("");
});

// DARKMODE
const inputElmt = document.querySelector(".input");
const bodyElmt = document.querySelector("body");
const containerElmt = document.querySelector(".btnContainer");
const counterLabel = document.querySelector(".counterLabel");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");

inputElmt.checked = JSON.parse(localStorage.getItem("mode"));
updateBackground();

inputElmt.addEventListener("input", () => {
  updateBackground();
  updateColor();
  updateLocale();
});

function updateBackground() {
  if (inputElmt.checked) {
    containerElmt.style.background = "#1e1d1d";
    bodyElmt.style.background = "white";
  } else {
    containerElmt.style.background = "white";
    bodyElmt.style.background = "#1e1d1d";
  }
}
function updateColor() {
  if (inputElmt.checked) {
    counterLabel.style.color = "white";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
  } else {
    counterLabel.style.color = "black";
    icon1.style.color = "black";
    icon2.style.color = "black";
    icon3.style.color = "black";
  }
}

function updateLocale() {
  localStorage.setItem("mode", JSON.stringify(inputElmt.checked));
}
