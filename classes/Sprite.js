class Sprite {
    constructor({ position, imageSrc }){
      console.log(imageSrc);
      this.position = position
      this.image = new Image()
      this.image.src = imageSrc
      this.image.onload = () => {
        this.loaded = true
      }
    }
    draw() {
      if (!this.loaded) return
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  
    update() {
      this.draw()
    }
  }
  