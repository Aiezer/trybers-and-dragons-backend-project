import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.addInstances();
  }

  private static addInstances() {
    this.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Ranger;