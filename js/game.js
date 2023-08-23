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
      this.height = 600;
      this.width = 900;
      this.unhealthyFoods = [];
      this.healthyFoods = [];
      this.score = 0;
      this.lives = 3;
      this.scoreElement = document.querySelector("#score");
      this.livesElement = document.querySelector("#lives");
      this.gameIsOver = false;
    }
  
    start() {

      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  

      this.startScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";
  
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
            
            if(this.height < this.unhealthyFoods[i].top) {
              unhealthyFood.element.remove();
                this.unhealthyFoods.splice(i, 1);
            }
            
            
            if (this.player.didCollideUnhealthy(unhealthyFood)) {
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
            
            if(this.height < this.healthyFoods[i].top) {
              healthyFood.element.remove();
                this.healthyFoods.splice(i, 1);
            }
            
            if (this.player.didCollideHealthy(healthyFood)) {
                this.score++;
                healthyFood.element.remove();
                this.healthyFoods.splice(i, 1);
                i--;
                this.scoreElement.textContent = `${this.score}`;
            }
        }
            
            if (Math.random() > 0.5 && this.unhealthyFoods.length < 1) {
                this.unhealthyFoods.push(new Unhealthy(this.gameScreen));
            }
            if (Math.random() > 0.5 && this.healthyFoods.length < 1) {
                this.healthyFoods.push(new Healthy(this.gameScreen));
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