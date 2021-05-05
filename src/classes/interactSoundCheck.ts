import { EnergyResource, IndexOfEnergyResource, SendableSound } from './types';

export default class InteractSoundCheck {
  private soundableObjectList: SendableSound[];
  private energyResources: EnergyResource[];

  constructor({
    soundableObjectList,
    energyResources,
  }: {
    soundableObjectList: SendableSound[];
    energyResources: EnergyResource[];
  }) {
    this.soundableObjectList = soundableObjectList;
    this.energyResources = energyResources;
  }

  checkThingsSound() {
    if (!this.soundableObjectList || this.soundableObjectList.length === 0) {
      console.log('nothings here!');
      return;
    }

    this.soundableObjectList.forEach((soundableObject) => {
      const indexOfEnergyResource = soundableObject.sendSound(this.energyResources);
      this.consumeResource(indexOfEnergyResource);
    });
  }

  consumeResource(index: IndexOfEnergyResource) {
    if (index >= 0) {
      delete this.energyResources[index];
      this.energyResources = this.energyResources.filter(Boolean);
    }
  }

  getResources() {
    return this.energyResources;
  }
}
