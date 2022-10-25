import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addInstances();
  }

  private static addInstances() {
    this.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Warrior;