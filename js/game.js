class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player(
        this.gameScreen,
        50,
        250,
        200,
        100,
        "../img/nyan-cat.gif"
      );
      this.height = 800;
      this.width = 1500;
      this.unhealthyFoods = [];
      this.healthyFoods = [];
      this.score = 0;
      this.lives = 3;
      this.scoreElement = document.querySelector("#score");
      this.livesElement = document.querySelector("#lives");
      this.gameIsOver = false;
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      //
      this.gameLoop();
    }
  
    gameLoop() {
      console.log("in the game loop");
  
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
      window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.player.move();

        for (let i = 0; i < this.unhealthyFoods.length; i++) {
            const unhealthyFood = this.unhealthyFoods[i];
            unhealthyFood.move();
            if (this.player.didCollide(unhealthyFood)) {
                unhealthyFood.element.remove();
                this.unhealthyFoods.splice(i, 1);
                this.lives--;
                i--;
                this.livesElement.textContent = `${this.lives}`;
            }
        }
        
        for (let i = 0; i < this.healthyFoods.length; i++) {
            const healthyFood = this.healthyFoods[i];
            healthyFood.move();
            if (this.player.didCollide(healthyFood)) {
                this.score++;
                healthyFood.element.remove();
                this.healthyFoods.splice(i, 1);
                i++;
                this.scoreElement.textContent = `${this.score}`;
            }
        }
            
            if (Math.random() > 0.5 && this.unhealthyFoods.length < 1) {
                this.unhealthyFoods.push(new Unhealthy(this.gameScreen, "../img/food/unhealthy/burger.png"));
            }
            if (Math.random() > 0.5 && this.healthyFoods.length < 1) {
                this.healthyFoods.push(new Healthy(this.gameScreen, "../img/food/healthy/broccoli.png"));
            }

            if (this.lives === 0) {
                this.endGame();
            }
    }
    endGame() {
        this.player.element.remove();
        this.unhealthyFoods.forEach(unhealthyFood => unhealthyFood.element.remove());
        this.gameIsOver = true;
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
    }
  
    /*update() {
      this.player.move();
  
      // Check for collision and if an obstacle is still on the screen
      for (let i = 0; i < this.unhealthyFoods.length; i++) {
        const unhealthyFood = this.unhealthyFoods[i];
        unhealthyFood.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(unhealthyFood)) {
          unhealthyFood.element.remove();
          this.unhealthyFoods.splice(i, 1);
          this.lives--;
          i--;
          this.livesElement.textContent = `${this.lives}`;
        } // If the obstacle is off the screen (at the bottom)
        else if (unhealthyFood.top > this.height) {
          this.score++;
          unhealthyFood.element.remove();
          this.unhealthyFoods.splice(i, 1);
          i--;
          this.scoreElement.textContent = `${this.score}`;
        }
      }
  
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability
      // when there is no other obstacles on the screen
      if (Math.random() > 0.98 && this.unhealthyFoods.length < 1) {
        this.unhealthyFoods.push(new Unhealthy(this.gameScreen));
      }
    }
  
    // Create a new method responsible for ending the game
    endGame() {
      this.player.element.remove();
      this.unhealthyFoods.forEach(function (unhealthyFood) {
        unhealthyFood.element.remove();
      });
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
  }*/