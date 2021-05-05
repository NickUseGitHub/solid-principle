import { MovableObject, MoveDirection, Ridable } from './types';

export default class VehicleMove implements MovableObject, Ridable {
  private speed: number;

  constructor({ speed }: { speed: number }) {
    this.speed = speed;
  }

  move(direction: MoveDirection) {
    return this.speed * direction;
  }

  getPassenger(amountOfPassenger: number) {
    console.log(`กำลังพาไปสู่ความเวิ้งว้างอันไกลโพ้นกัน ${amountOfPassenger} คน`);
  }
}
