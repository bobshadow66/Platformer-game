export default class Player {
    constructor({ x, y }) {
      this.position = { x, y };
      this.velocity = { x: 0, y: 0 };
    }
  
    update() {
      console.log('Updating player');
    }
  }