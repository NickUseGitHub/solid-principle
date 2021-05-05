import { EnergyResource, IndexOfEnergyResource, SendableSound } from './types';
import VehicleSendSound from './vehicleSendSound';

type RoboType = Omit<VehicleSendSound, 'sendSound'>;

export default class RobotSendSound implements RoboType, SendableSound {
  private voice: string = '011101001101';

  getVoice() {
    return this.voice;
  }

  sendSound(energyResources: EnergyResource[]): IndexOfEnergyResource {
    const voice = this.voice;
    const noneIndex = -1;
    const energyType = EnergyResource.SOLARCELL;
    const errMsg = `no electricity no ${voice}`;

    if (!energyResources || energyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    const requiredEnergyResources = energyResources.filter((e) => e === EnergyResource.SOLARCELL);
    if (!requiredEnergyResources || requiredEnergyResources.length === 0) {
      console.error(errMsg);
      return noneIndex;
    }

    console.log('feed electricity');
    console.log('Robot is now online.');
    console.log(`Robot send sound  ${voice}!!!!`);

    return energyResources.indexOf(energyType);
  }
}
