const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4
}

// Ensure floorCollisions is defined before using it
if (typeof floorCollisions === 'undefined') {
  console.error('floorCollisions is not defined!')
}

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
  floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      console.log('draw a block here!')
      collisionBlocks.push(new CollisionBlock({
        position: {
          x: x * 16,
          y: y * 16,
        }
      }))
    }
  })
})

const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 36) {
  platformCollisions2D.push(platformCollisions.slice(i, i + 36))
}

const platformCollisionBlocks = []
platformCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
       collisionBlocks.push(
        new CollisionBlock({
         position: {
          x: x * 16,
          y: y * 16,
        }
      }))
    }
  })
})


const gravity = 0.5

const player = new Player({
  poisition: { 
    x: 500, 
    y: 0,
  },
 collisionBlocks,
});

const player2 = new Player({ 
  x: 300, 
  y: 100 
})

const keys = {
  d: { pressed: false },
  a: { pressed: false },
}

const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: './assets/background.png',
})

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'white'
  //c.fillRect(0, 0, canvas.width, canvas.height)

  c.save()
  c.scale(4, 4)
  c.translate(0, -background.image.height + scaledCanvas.height)
  background.update()
  collisionBlocks.forEach(collisionBlock => {
    collisionBlock.update()
  })

  platformCollisionBlocks.forEach((block) => {
    block.update()
  })

  c.restore()

  player.velocity.x = 0
  player2.velocity.x = 0

  if (keys.d.pressed) player.velocity.x = 5
  else if (keys.a.pressed) player.velocity.x = -5

  player.update()
  player2.update()
}

animate()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      if (player.velocity.y === 0) player.velocity.y = -20
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
})
