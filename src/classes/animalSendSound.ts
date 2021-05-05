import { EnergyResource, IndexOfEnergyResource, SendableSound } from './types';

export default class AnimalSendSound implements SendableSound {
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
    const energyType = EnergyResource.FOOD;
    const errMsg = `no food no ${voice}`;

    if (!energyResources || energyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    const requiredEnergyResources = energyResources.filter((e) => e === energyType);
    if (!requiredEnergyResources || requiredEnergyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    console.log('feed foods');
    console.log('animal is now full.');
    console.log(`Animal send sound  ${voice}!!!!`);

    return energyResources.indexOf(energyType);
  }
}
