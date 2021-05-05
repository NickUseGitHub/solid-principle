import { EnergyResource, IndexOfEnergyResource } from './types';

export default class VehicleSendSound {
  private voice: string;

  constructor({ voice }: { voice: string }) {
    this.voice = voice;
  }

  getVoice() {
    return this.voice;
  }

  sendSound(energyResources: EnergyResource[]): IndexOfEnergyResource {
    const voice = this.voice;
    const noneIndex = -1;
    const energyType = EnergyResource.ELECTRICITY;
    const errMsg = `no eletricity no ${voice}`;

    if (!energyResources || energyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    const requiredEnergyResources = energyResources.filter((e) => e === energyType);
    if (!requiredEnergyResources || requiredEnergyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    console.log('fulfil eletricity in vehicle');
    console.log('vehicle is now full.');
    console.log(`Vehicle send sound  ${voice}!!!!`);

    return energyResources.indexOf(energyType);
  }
}
