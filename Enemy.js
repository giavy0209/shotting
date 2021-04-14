class Enemy {
    constructor (game) {
        this.game = game
        this.ctx = this.game.ctx
        this.rect = this.game.rect
        this.gravity = GRAVITY * this.game.height

        this.minSize = ENEMY_MIN_SIZE * this.game.width
        this.maxSize = ENEMY_MAX_SIZE * this.game.width
        this.sizeRange = this.maxSize - this.minSize

        this.speed = ENEMY_SPEED * this.game.height

        this.enemies = []

        this.createEnemy()
    }

    createEnemy () {
        const y = -this.maxSize
        const s = this.maxSize
        const x = random(0 + s, this.game.width - s)
        const dx = random(0 , this.game.width * 0.01)
        const dy = 0
        const hp = 10
        this.enemies.push({
            x,dx, y ,dy, s, hp,startHP : hp
        })
        setInterval(() => {
            const y = this.maxSize
            const s = this.maxSize
            const x = random(0 + s, this.game.width - s)
            const dx = random(0 , this.game.width * 0.01)
            const dy = 0
            const hp = 10
            this.enemies.push({
                x,dx, y ,dy, s,hp,startHP : hp
            })
        }, 2000);
    }

    update () {
        this.draw ()
        this.enemies.forEach((enemy, index) => {
            if(enemy.hp <= 0) {
                this.enemies.splice(index, 1)
                return
            }
            if(enemy.y + enemy.s  >= this.game.height) {
                enemy.dy = -enemy.dy
            }else {
                enemy.dy += this.gravity
            }
            if(enemy.x - enemy.s <= 0 || enemy.x + enemy.s >= this.game.width){
                enemy.dx = -enemy.dx
            } 

            enemy.y += enemy.dy
            enemy.x += enemy.dx
        })
    }

    draw () {
        this.enemies.forEach(({x,y,s,hp,startHP}) => {
            
            const size = ((hp / startHP) >= 0.1) ? this.sizeRange * (hp /startHP) : this.sizeRange * 0.1

            this.ctx.beginPath()
            this.ctx.arc(
                x,y , this.minSize + size , 0 ,  Math.PI * 2
            )
            this.ctx.fillStyle = '#fac800'
            this.ctx.fill()
            this.ctx.fillStyle = '#000'
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.strokeText(hp , x,y );
        })
    }
}