import { MoveDirection } from './types';

export default class TaxiTransporter {
  sendPassenger(movableObjects: any[]) {
    movableObjects.forEach((movableObject) => {
      if (typeof movableObject.getPassenger !== 'function' && typeof movableObject.move !== 'function') {
        return;
      }

      const vector = movableObject.move(MoveDirection.SOUTH);
      movableObject.getPassenger(4);
      console.log(`ไปทาง ${vector}`);
    });
  }
}
