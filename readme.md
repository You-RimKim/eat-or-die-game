Eat or Die

Click here to see deployed game

## Description
    Eat or Die is a single-player, browser-based pixel-game with the goal to incentivise the player to opt for healthy food options.
    In the game the player moves Nyancat and tries to collect food items which are dropping from top to bottom. If the player opts for healthier food (e.g. vegetables), the player's score will increase. If the player opts for unhealthier food (e.g. fast food), the player's life will decrease. Further, with every food consumption Nyancat's size will increase and it will get harder for the player to avoid unhealthier food options.
    If all lives are being used, the game ends and the player can try again.


## MVP
    - The game starts with the welcome screen including instructions and a "Lets's eat!" (start game) button
    - Player has the option to play background music by clicking on the audio icon on the top left side
    - Player can move Nyancat in all directions with the arrow keys
    - Food options will fall down from top of the gamescreen to the bottom
    - Player can collect/consume the food items by colliding with them:
        - If healthier food options are being collected, the score will increase
        - If unhealthier food options are being collected, the lives will decrease
    - Everytime the player collides with a food item, the size of Nyancat will increase, meaning the game difficulty will increase
    - Further, everytime the player collides with a food item, a "Nom!" sound will be activated
    - If the lives reach 0, the game over screen will appear and the game ends
    - On the game over screen the player has the opportunity to play again by clicking the button "Try again"


## Backlog Functionalities
    - Future possible features:
        - Tracking of highscore
        - Extra welcome page redirecting to the instruction page
        - Food items coming from different directions (not only from top to bottom)
        - Increase of lives if a certain amount of healthier food is reached
        - Merging classes Unhealthy() and Healthy() together and then differentiate


## Used Technologies
    - HTML
    - CSS
    - JavaScript
    - DOM Manipulation
    - JS Classes
    - JS Audio() and JS Image()
    - Adobe Photoshop


## Data structure
    - script.js
        - icon.onclick();
        - window.onload();
        - startButton();
        - restartButton();
        - startGame();
        - location.reload();
        - handleKeydown();
        - possibleKeystrokes.includes()
        - event.preventDefault();
        - window.addEventListener();
    - game.js
        - Game()
            - this.startScreen;
            - this.gameScreen;
            - this.gameEndScreen;
            - this.player;
            - this.gameScreen;
            - this.height;
            - this.width;
            - this.unhealthyFoods;
            - this.healthyFoods;
            - this.score;
            - this.lives;
            - this.scoreElement;
            - this.livesElement;
            - this.gameIsOver;
        - start();
        - gameLoop();
        - update();
        - endGame();
    - nyancat.js
        - Player()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.directionX;
            - this.directionY;
            - this.speedX;
            - this.speedY;
            - this.element = document.createElement("img");
        - move();
        - increaseSize();
        - didCollideUnhealthy();
        - didCollideHealthy();
        - updatePosition();
    - food.js
        - Unhealthy()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.speed;
            - this.element = document.createElement("img");
        - move();
        - updatePosition();
        - Healthy()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.speed;
            - this.element = document.createElement("img");
        - move();
        - updatePosition();


## States
    - Start Screen with Instruction
    - Game Screen
    - Game Over Screen


## Ideal Task Order
    - Wireframing and logic of game
    - Basic HTML & CSS skeleton
    - Researching resources (images, videos and audio)
    - Basic JavaScript set up (moving from screen to screen, game logic, food items falling down, Nyancat moving)
    - Adding features (audio, increase of difficulty level, speed of food and Nyancat)
    - Finalising design elements in Photoshop


## Links
    - Notion: https://www.notion.so/406729598c1142ce8c2a257abdfb5615?v=c158e99a6b4a4be1ad834891c255862c&pvs=4
Slides Link
Github repository Link
Deployment Link


## Resources used:
    - Video background: https://www.vecteezy.com/video/25457877-blurred-animation-smooth-a-colorful-marble-acrylic-seamless-pattern-water-texture-watercolor-marble-background
    - Nyancat GIF: https://gist.github.com/s-shivangi/7b54ec766cf446cafeb83882b590174d
    - Gamescreen background: https://opengameart.org/content/glowing-city-background
    - Sound effect: https://www.youtube.com/watch?v=9TwiaXA6abQ
    - Sound Icons:
        - https://thenounproject.com/icon/music-158799/
        - https://thenounproject.com/icon/nyan-cat-40726/
    - Background music: https://pixabay.com/music/video-games-cruising-down-8bit-lane-159615/