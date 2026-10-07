import { playTone, noiseBurst } from "../../js/audio.js";

export const id = "drum";

export function play() {
  noiseBurst(0.25, 0.6, 400);
  playTone(90, "sine", 0.3, 0.7);
  playTone(60, "sine", 0.4, 0.5, 0.02);
}
