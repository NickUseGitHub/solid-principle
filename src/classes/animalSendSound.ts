export default class AnimalSendSound {
  private voice: string;

  constructor({ voice }: { voice: string }) {
    this.voice = voice;
  }

  getVoice() {
    return this.voice;
  }
}
