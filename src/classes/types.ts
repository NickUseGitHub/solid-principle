export enum MoveDirection {
  NORTH = 1,
  EAST = 1,
  SOUTH = -1,
  WEST = -1,
}

export enum EnergyResource {
  FOOD,
  ELECTRICITY,
  SOLARCELL,
}

export type IndexOfEnergyResource = number;

export interface SendableSound {
  sendSound(energyResource: EnergyResource[]): IndexOfEnergyResource;
}

export interface Ridable {
  getPassenger(amountOfPassenger: number): void;
}

export interface MovableObject {
  move(direction: MoveDirection): number;
}
