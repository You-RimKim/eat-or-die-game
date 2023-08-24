const music = document.getElementById("background-music");
const icon = document.getElementById("audio-icon");
music.volume = 0.2;

icon.onclick = function() {
  if(music.paused) {
    music.play();
    icon.src="../resources/img/buttons/audio-stop.png";
  } else {
    music.pause();
    icon.src="../resources/img/buttons/audio-button.png";
  }
}

window.onload = function () {
  //const welcomeButton = document.getElementById("eat-or-die-button");//
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  /*welcomeButton.addEventListener("click", function () {
    instructionPage();
  })*/

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  /*function instructionPage() {
    const instructionsElement = document.getElementById("game-instruction");
    instructionsElement.style.display = "block";
  }*/

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};