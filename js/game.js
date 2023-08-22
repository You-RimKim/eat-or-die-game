class Game {
    constructor() {
        this.welcomeScreen = document.querySelector("#game-welcome");
        this.instroScreen = document.querySelector("#game-instruction");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.nyancat = new Player(
            this.gameScreen,
            100,
            100,
            100,
            100,
            "../img/nyan-cat.gif"
        );
        this.height = 600;
        this.width = 500;
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
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) {
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.nyancat.move();

        for (let i = 0; i < this.unhealthyFoods.length; i++) {
            const unhealthyFood = this.unhealthyFoods[i];
            unhealthyFood.move();

            if (this.nyancat.didCollide(unhealthyFood)) {
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

            if (this.nyancat.didCollide(healthyFood)) {
                this.score++;
                healthyFood.element.remove();
                this.healthyFoods.splice(i, 1);
                i++;
                this.scoreElement.textContent = `${this.score}`;
            }
        }

    if (this.lives === 0) {
        this.endGame();
    }

    if (Math.random() > 0.98 && this.unhealthyFoods.length < 1) {
        this.unhealthyFoods.push(new Food(this.gameScreen, "../img/food/unhealthier/burger.png"));
    }

    if (Math.random() > 0.98 && this.healthyFoods.length < 1) {
        this.healthyFoods.push(new Food(this.gameScreen, "../img/food/healthy/broccoli.png"));
    }

    }

endGame() {
    this.nyancat.element.remove();
    this.unhealthyFoods.forEach(unhealthyFood => unhealthyFood.element.remove());

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
}

}