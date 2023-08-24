const music = document.getElementById("background-music");
const icon = document.getElementById("audio-icon");
music.volume = 0.3;

icon.onclick = function() {
  if(music.paused) {
    music.play();
    icon.src="./resources/img/buttons/audio-stop.png";
  } else {
    music.pause();
    icon.src="./resources/img/buttons/audio-button.png";
  }
}

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

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
        // movement to left
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
          // movement to up
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          // movement to right
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