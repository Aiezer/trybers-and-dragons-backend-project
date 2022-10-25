import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addInstances();
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

export default Halfling;