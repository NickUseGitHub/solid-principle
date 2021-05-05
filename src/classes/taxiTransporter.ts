import { MovableObject, MoveDirection, Ridable } from './types';

type Transportable = Ridable & MovableObject;

export default class TaxiTransporter {
  sendPassenger(movableObjects: Transportable[]) {
    movableObjects.forEach((movableObject) => {
      const vector = movableObject.move(MoveDirection.SOUTH);
      movableObject.getPassenger(4);
      console.log(`ไปทาง ${vector}`);
    });
  }
}
