function collision({

}) {
    return (
        this.position.y + this.height >= collisionBlocks.position.y &&
        this.position.y <= collisionBlocks.position.y + collisionBlocks.height &&
        this.position.x <= collisionBlocks.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x 
    )

}