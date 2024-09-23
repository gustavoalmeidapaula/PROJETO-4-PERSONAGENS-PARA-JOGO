class Character {
    constructor(name, lifepoints, attackPts, defensePts){
        this.name=name
        this.lifepoints=lifepoints
        this.attackPts=attackPts
        this.defensePts=defensePts
    }
    attack(target) {
    const damage = this.attackPts - target.defensePts
    if (damage > 0) {
        target.lifepoints -= damage
    }
    console.log(`${this.name} atacou ${target.name} e causou ${damage} pontos de dano!`)
    console.log(`${target.name} agora tem ${target.lifepoints} pontos de vida restantes.`)
  }

}
module.exports= Character
