const Character = require('./Character')

class Mage extends Character {
    constructor(name, lifepoints, attackPts, defensePts, magicPts) {
        super(name, lifepoints, attackPts, defensePts)
        this.magicPts = magicPts
    }

    attack(target) {
        const damage = Math.max(0, this.attackPts + this.magicPts - target.defensePts)
        target.lifepoints -= damage
    }

    heal(target) {
        target.lifepoints += 2 * this.magicPts
    }
}

module.exports = Mage
