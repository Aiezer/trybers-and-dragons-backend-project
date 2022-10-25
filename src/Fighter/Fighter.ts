import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  defense: number;
  strength: number;
  energy?: Energy;

  levelUp() : void; 
  attack(enemy: Fighter) : void;
  special(enemy: Fighter) : void;
  receiveDamage(attackPoints: number) : number;
}