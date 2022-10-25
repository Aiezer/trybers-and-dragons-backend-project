import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addInstances() {
    this.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}

export default Dwarf;