class Unhealthy {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 2;
    this.element = document.createElement("img");

    const unhealthyFoodImages = [
      "../img/food/unhealthy/burger.png",
      "../img/food/unhealthy/bacon.png",
      "../img/food/unhealthy/cookie.png",
      "../img/food/unhealthy/french_fries.png",
      "../img/food/unhealthy/doughnut_pink_sprinkles.png"
    ];
    
    const randomIndex = Math.floor(Math.random() * unhealthyFoodImages.length);
    this.element.src = unhealthyFoodImages[randomIndex];

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    // Update the unhealthy food's position based on the properties left and top
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    // Move the unhealthy food down by 3px
    this.top += 3;
    // Update the unhealthy food's position on the screen
    this.updatePosition();
  }
}

class Healthy {
  constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 300 + 70);
      this.top = 0;
      this.width = 50;
      this.height = 50;
      this.speed = 2;
      this.element = document.createElement("img");

      const healthyFoodImages = [
        "../img/food/healthy/broccoli.png",
        "../img/food/healthy/avocado_half.png",
        "../img/food/healthy/kale.png",
        "../img/food/healthy/chili_pepper_red.png",
        "../img/food/healthy/persimmon.png"
      ];
  
      const randomIndex = Math.floor(Math.random() * healthyFoodImages.length);
      this.element.src = healthyFoodImages[randomIndex];


      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;

      this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.top += 3;
      this.updatePosition();
    }
}