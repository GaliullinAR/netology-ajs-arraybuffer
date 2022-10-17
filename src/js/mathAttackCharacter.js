import Character from './character';

export default class MathAttackCharacter extends Character {
  constructor(name, attack, stoned, range) {
    super(name, attack, stoned);
    this.range = range;
  }

  set attackValue(value) {
    this.attack = value;
  }

  get attackValue() {
    let attackVal = this.attack;

    attackVal -= (attackVal * ((this.range - 1) / 10));

    if (this.stoned) {
      attackVal -= (Math.log(this.range) * 5);
    }

    if (attackVal > 0) {
      return Math.floor(attackVal);
    }
    return 0;
  }
}
