import AnimalSendSound from './animalSendSound';
import { EnergyResource } from './types';
import VehicleSendSound from './vehicleSendSound';

export default class InteractSoundCheck {
  private objectList: any[];
  private energyResources: EnergyResource[];

  constructor({ objectList, energyResources }: { objectList: any[]; energyResources: EnergyResource[] }) {
    this.objectList = objectList;
    this.energyResources = energyResources;
  }

  checkThingsSound() {
    if (!this.objectList || this.objectList.length === 0) {
      console.log('nothings here!');
      return;
    }

    console.log('ngogn this.energyResources', this.energyResources);

    const foods = (this.energyResources || []).filter((e) => e === EnergyResource.FOOD);
    const electricityResources = (this.energyResources || []).filter((e) => e === EnergyResource.ELECTRICITY);

    this.objectList.forEach((obj) => {
      if (obj instanceof AnimalSendSound) {
        const voice = obj.getVoice();

        if (foods && foods.length === 0) {
          console.log(`no food no ${voice}`);
          return;
        }
        console.log('feed foods');
        console.log('animal is now full.');
        console.log(`Animal send sound  ${voice}!!!!`);

        foods.pop();
      } else if (obj instanceof VehicleSendSound) {
        const voice = obj.getVoice();
        if (foods && foods.length === 0) {
          console.log(`no eletricity no ${voice}`);
          return;
        }
        console.log('fulfil eletricity in vehicle');
        console.log('vehicle is now full.');
        console.log(`Vehicle send sound  ${voice}!!!!`);

        electricityResources.pop();
      }
    });

    this.energyResources = [...foods, ...electricityResources];
  }

  getResources() {
    return this.energyResources;
  }
}
