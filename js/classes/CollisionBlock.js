class CollisionBlock {
    constructor({ position, }){
    this.position = position
    this.width = 16
    this.height = 16
   
    }
    draw() {
      c.fillRect = 'rgba(255, 0, 0, 0.5)'
      c.fillRect(this.position.x, this.position.y, this.width, this.height)     
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  
    update() {
      this.draw()
    }
  }
  