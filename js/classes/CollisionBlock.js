// Get canvas and context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4
};

// Example collision map data
const floorCollisions = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0],
  [0, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // Add more rows as needed
];

const platformCollisions = [
  [0, 0, 0, 0, 0, 202, 202, 0, 0, 0],
  [202, 202, 0, 0, 202, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 202, 202, 0, 0],
  // Add more rows as needed
];

// Define the CollisionBlock class
class CollisionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = 16;
    this.height = 16;
  }

  draw() {
    c.fillStyle = 'blue';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}

const gravity = 0.5;

// Create collision blocks from the floor and platform data
const collisionBlocks = [];
floorCollisions.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      collisionBlocks.push(new CollisionBlock({
        position: {
          x: x * 16,
          y: y * 16
        }
      }));
    }
  });
});

const platformCollisionBlocks = [];
platformCollisions.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      platformCollisionBlocks.push(new CollisionBlock({
        position: {
          x: x * 16,
          y: y * 16
        }
      }));
    }
  });
});

// Draw all blocks (just for testing)
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  collisionBlocks.forEach(block => block.update());
  platformCollisionBlocks.forEach(block => block.update());
}

animate();

