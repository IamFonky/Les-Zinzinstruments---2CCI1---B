import { playTone } from "../../js/audio.js";

export const id = "saxophone";

export function play() {
  playTone(311.13, "sawtooth", 0.3, 0.2, 0, -4);
  playTone(349.23, "sawtooth", 0.3, 0.2, 0.25, -4);
  playTone(415.3, "sawtooth", 0.55, 0.22, 0.5, -4);
}
