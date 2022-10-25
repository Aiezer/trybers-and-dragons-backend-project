import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.addInstances();
  }

  private static addInstances() {
    this.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Mage;