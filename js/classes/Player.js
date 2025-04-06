class Player {
  constructor(position, collisionBlocks) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,  // gravity pulling the player down
    };
    this.width = 100;
    this.height = 100;
    this.collisionBlocks = collisionBlocks;  // array of collision blocks
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  applyGravity() {
    this.position.y += this.velocity.y;
    this.velocity.y += gravity;  // increase velocity due to gravity
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];


      if (
        this.position.x + this.width > collisionBlock.x &&
        this.position.x < collisionBlock.x + collisionBlock.width &&
        this.position.y + this.height <= collisionBlock.y + collisionBlock.height && // the player is falling
        this.position.y + this.height + this.velocity.y >= collisionBlock.y // check if the player is about to land on the block
      ) {
        this.velocity.y = 0;  
        this.position.y = collisionBlock.y - this.height; // position the player just on top of the block
      }
    }
  }
}

  