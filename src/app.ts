import AnimalMove from '@classes/animalMove';
import VehicleMove from '@classes/vehicleMove';
import { MoveDirection } from '@classes/types';

export default function run() {
  const tigerMove = new AnimalMove({ speed: 20 });
  const lambogini = new VehicleMove({ speed: 240 });

  console.log('tigerMove MoveDirection.NORTH', tigerMove.move(MoveDirection.NORTH));
  console.log('tigerMove MoveDirection.SOUTH', tigerMove.move(MoveDirection.SOUTH));
  console.log('lambogini MoveDirection.NORTH', lambogini.move(MoveDirection.NORTH));
  console.log('lambogini MoveDirection.SOUTH', lambogini.move(MoveDirection.SOUTH));
}
