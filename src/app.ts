import AnimalMove from '@classes/animalMove';
import VehicleMove from '@classes/vehicleMove';
import { EnergyResource, MoveDirection } from '@classes/types';
import AnimalSendSound from '@classes/animalSendSound';
import VehicleSendSound from '@classes/vehicleSendSound';
import InteractSoundCheck from '@classes/interactSoundCheck';

export default function run() {
  const tigerMove = new AnimalMove({ speed: 20 });
  const lamboginiMove = new VehicleMove({ speed: 240 });

  console.log('----------- check movable object -----------');
  console.log('tigerMove MoveDirection.NORTH', tigerMove.move(MoveDirection.NORTH));
  console.log('tigerMove MoveDirection.SOUTH', tigerMove.move(MoveDirection.SOUTH));
  console.log('lamboginiMove MoveDirection.NORTH', lamboginiMove.move(MoveDirection.NORTH));
  console.log('lamboginiMove MoveDirection.SOUTH', lamboginiMove.move(MoveDirection.SOUTH));
  console.log('-------------------------------------------------------');

  console.log('----------- check sound object -----------');
  const tigerSound = new AnimalSendSound({ voice: 'Arrrrh' });
  const tigerSound1 = new AnimalSendSound({ voice: 'Arrrrh1' });
  const tigerSound2 = new AnimalSendSound({ voice: 'Arrrrh2' });
  const lamboginiSound = new VehicleSendSound({ voice: 'บรื้นนนนนนนน' });
  const lamboginiSound1 = new VehicleSendSound({ voice: 'บรื้นนนนนนนน1' });
  const checkThingsSound = new InteractSoundCheck({
    objectList: [tigerSound, tigerSound1, tigerSound2, lamboginiSound, lamboginiSound1],
    energyResources: [
      EnergyResource.ELECTRICITY,
      EnergyResource.ELECTRICITY,
      EnergyResource.ELECTRICITY,
      EnergyResource.ELECTRICITY,
      EnergyResource.ELECTRICITY,
    ],
  });
  checkThingsSound.checkThingsSound();

  const leftResouces = checkThingsSound.getResources();

  console.log('resource left:', leftResouces);
  console.log('-------------------------------------------------------');
}
