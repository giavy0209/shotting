class Bullets {
    constructor (game) {
        this.game = game
        this.ctx = this.game.ctx
        this.rect = this.game.rect

        this.size = BULLET_SIZE * this.game.width
        this.speed = BULLET_SPEED * this.game.height
        this.bullets = []

        this.game.canvas.onclick = e => {
            const x = e.clientX - this.rect.x
            const y = this.game.height - this.game.player.gunHeight
            this.bullets.push({
                x,
                y ,
            })
        }
        this.createBullet()
    }

    createBullet () {
        setInterval(() => {
            const x = this.game.player.x + this.game.player.gunWidth /2 
            const y = this.game.height - this.game.player.gunHeight
            this.bullets.push({
                x,
                y ,
            })
        }, 100);
    }

    update () {
        this.draw()
        this.bullets.forEach((bullet,index) => {
            bullet.y-=this.speed
            if(bullet.y < 0) {
                setTimeout(() => {
                    this.bullets.splice(index , 1)
                }, 0);
            }
            this.game.enemy.enemies.forEach((enemy , jndex) => {
                if(distance(bullet.x , bullet.y , enemy.x , enemy.y, this.size , enemy.s) <= 0){
                    setTimeout(() => {
                        this.game.enemy.enemies[jndex].hp--
                        this.bullets.splice(index , 1)
                    }, 0);
                }
            })
        })
    }

    draw () {
        this.bullets.forEach(({x,y}) => {
            this.ctx.beginPath()
            this.ctx.arc(
                x,y , this.size , 0 , Math.PI * 2, false
            )
            this.ctx.fillStyle = '#00ff00'
            this.ctx.fill()
            this.ctx.closePath()
        })
    }
}