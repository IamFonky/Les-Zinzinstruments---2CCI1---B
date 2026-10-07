import { playTone } from "../../js/audio.js";

export const id = "violin";

export function play() {
  playTone(440, "sawtooth", 0.9, 0.12, 0, 6);
  playTone(493.88, "sawtooth", 0.9, 0.12, 0.45, 6);
  playTone(523.25, "sawtooth", 1.1, 0.14, 0.9, 6);
}
