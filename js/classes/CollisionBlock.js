class CollisionBlock {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.width = 16;
    this.height = 16;

    this.image = new Image();
    this.image.src = imageSrc;

    // Ensure the image is fully loaded before using it
    this.image.onload = () => {
      console.log("CollisionBlock image loaded successfully");
    };
  }

  draw() {
    if (!this.image.complete) {
      console.error("CollisionBlock image is not yet loaded");
      return;
    }

    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}

export default CollisionBlock;
