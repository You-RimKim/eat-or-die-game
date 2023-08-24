class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.speedX = 3;
    this.speedY = 3;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {

    this.left += this.directionX * this.speedX;
    this.top += this.directionY * this.speedY;

    // Ensure the player's car stays within the game screen
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  increaseSize() {
    this.width += 20;
    this.height += 20;

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
  }

  didCollideUnhealthy(unhealthyFood) {
    const playerRect = this.element.getBoundingClientRect();
    const unhealthyFoodRect = unhealthyFood.element.getBoundingClientRect();

    if (
      playerRect.left < unhealthyFoodRect.right &&
      playerRect.right > unhealthyFoodRect.left &&
      playerRect.top < unhealthyFoodRect.bottom &&
      playerRect.bottom > unhealthyFoodRect.top
    ) {

      const collisionSound = document.getElementById("collision-sound");
      collisionSound.play();

      this.increaseSize();

      return true;
    } else {
      return false;
    }
  }

  didCollideHealthy(healthyFood) {
    const playerRect = this.element.getBoundingClientRect();
    const healthyFoodRect = healthyFood.element.getBoundingClientRect();
  

    if (
      playerRect.left < healthyFoodRect.right &&
      playerRect.right > healthyFoodRect.left &&
      playerRect.top < healthyFoodRect.bottom &&
      playerRect.bottom > healthyFoodRect.top
    ) {
      
      const collisionSound = document.getElementById("collision-sound");
      collisionSound.play();

      this.increaseSize();

      return true;
    } else {
      return false;
    }

  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}