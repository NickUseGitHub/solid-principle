import AnimalMove from '@classes/animalMove';
import VehicleMove from '@classes/vehicleMove';
import { MoveDirection } from '@classes/types';

export default function run() {
  const tigerMove = new AnimalMove({ speed: 20 });
  const lamboginiMove = new VehicleMove({ speed: 240 });

  console.log('----------- check movable object -----------');
  console.log('tigerMove MoveDirection.NORTH', tigerMove.move(MoveDirection.NORTH));
  console.log('tigerMove MoveDirection.SOUTH', tigerMove.move(MoveDirection.SOUTH));
  console.log('lamboginiMove MoveDirection.NORTH', lamboginiMove.move(MoveDirection.NORTH));
  console.log('lamboginiMove MoveDirection.SOUTH', lamboginiMove.move(MoveDirection.SOUTH));
  console.log('-------------------------------------------------------');
}
