const Character = require('./Character')

class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
        super(name, lifepoints, attackPts, defensePts)
        this.shieldPts = shieldPts
        this.position = 'attack'
    }

    attack(target) {
        if (this.position === 'attack') {
            const damage = Math.max(0, this.attackPts - target.defensePts)
            target.lifepoints -= damage
        } else {
            const damage = Math.max(0, this.attackPts + this.shieldPts - target.defensePts)
            target.lifepoints -= damage
        }
    }

    changeStance() {
        this.position = this.position === 'attack' ? 'defense' : 'attack'
    }
}

module.exports = Warrior
