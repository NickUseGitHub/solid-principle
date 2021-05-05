import { MovableObject, MoveDirection } from './types';

type UnRidableButMovableObject = Omit<MovableObject, 'getPassenger'>;

export default class AnimalMove implements UnRidableButMovableObject {
  private speed: number;

  constructor({ speed }: { speed: number }) {
    this.speed = speed;
  }

  move(direction: MoveDirection) {
    return this.speed * direction;
  }
}
