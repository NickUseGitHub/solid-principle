import { MoveDirection } from './types';

export default class VehicleMove {
  private speed: number;

  constructor({ speed }: { speed: number }) {
    this.speed = speed;
  }

  move(direction: MoveDirection) {
    return this.speed * direction;
  }
}
