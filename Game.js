class Game {
    constructor () {
        this.width = window.innerHeight / 16 * 9
        this.height = window.innerHeight

        this.canvas = document.createElement('canvas')

        this.canvas.width = this.width
        this.canvas.height = this.height
        this.ctx = this.canvas.getContext('2d')

        
        document.body.appendChild(this.canvas)
        this.rect = this.canvas.getBoundingClientRect()

        this.player = new Player(this)
        this.bullets = new Bullets(this)
        this.enemy = new Enemy(this)
        this.loop()
    }

    loop() {
        this.update()
        requestAnimationFrame(() => {
            this.loop()
        })
    }

    update() {
        this.draw () 
        this.player.update()
        this.bullets.update()
        this.enemy.update()
    }

    draw () {
        this.ctx.clearRect(0 , 0 , this.width , this.height)
    }
}