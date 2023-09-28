const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let verticalPosition = 0;

function handleKeyPress(e) {
  if (e.code === "KeyS") {
    position = position - 15;
  }
  if (e.code === "KeyD") {
    position = position + 15;
  }

  if (e.code === "KeyE") {
    verticalPosition = verticalPosition - 15;
  }

  if (e.code === "KeyX") {
    verticalPosition = verticalPosition + 15;
  }
  if (position < 0) {
    position = 0;
  }

  if (verticalPosition < 0) {
    verticalPosition = 0;
  }

  refresh();
}

function refresh() {
  ball.style.left = position + "px";
  ball.style.top = verticalPosition + "px";
}
