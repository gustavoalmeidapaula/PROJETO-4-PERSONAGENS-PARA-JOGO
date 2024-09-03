class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
        this.name = name
        this.lifepoints = lifepoints
        this.attackPts = attackPts
        this.defensePts = defensePts
    }

    attack(target) {
        const damage = Math.max(0, this.attackPts - target.defensePts)
        target.lifepoints -= damage
    }
}

module.exports = Character;
