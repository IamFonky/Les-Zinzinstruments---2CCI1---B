import { playTone } from "../../js/audio.js";

export const id = "unknown";

export function play() {
  playTone(233.08, "sawtooth", 0.3, 0.25);
  playTone(220, "sawtooth", 0.3, 0.25, 0.3);
  playTone(207.65, "sawtooth", 0.3, 0.25, 0.6);
  playTone(196, "sawtooth", 1, 0.3, 0.9, -30);
}
