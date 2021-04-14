class Player {
    constructor (game) {
        this.game = game
        this.ctx = this.game.ctx
        this.rect = this.game.rect

        this.gunWidth = GUN_WIDTH * this.game.width
        this.gunHeight = GUN_HEIGHT * this.game.height
        this.x = this.game.width / 2 - this.gunWidth / 2
        this.y = this.game.height - this.gunHeight
                
        this.game.canvas.onmousemove = e => {
            this.x = e.clientX - this.rect.x - this.gunWidth / 2
        }
    }

    
    update() {
        this.draw ()
    }

    draw () {
        this.ctx.beginPath()
        this.ctx.rect(this.x , this.y , this.gunWidth , this.gunHeight)
        this.ctx.fillStyle = '#ff0000'
        this.ctx.fill()
    }
}