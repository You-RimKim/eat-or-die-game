/*document.addEventListener("DOMContentLoaded", function () {
    const containerClick = document.getElementById("clickToContinue");

    containerClick.addEventListener("click", function() {
        window.location.href = "#";
    })
})*/

window.onload = function () {
    const welcomePage = document.getElementbyId("game-welcome");
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game = new Game();
  
    welcomePage.addEventListener("click", function() {
      welcomeGame();
    });

    startButton.addEventListener("click", function() {
      startGame();
    });
  
    restartButton.addEventListener("click", function() {
      restartGame();
    });
}

function welcomePage () {
    location.reload();
}

function startGame() {
  game.start();
  console.log("start game");
}

function restartGame() {
    location.reload();
}

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  event.preventDefault();
  switch(event.key) {
    case "ArrowLeft":
      game.nyancat.directionX = -1;
      break;
    case "ArrowUp":
      game.nyancat.directionY = -1;
      break;
    case "ArrowRight":
      game.nyancat.directionX = 1;
      break;
    case "ArrowDown":
      game.nyancat.directionY = 1;
      break;
  }
});

window.addEventListener("keydown", handleKeydown);