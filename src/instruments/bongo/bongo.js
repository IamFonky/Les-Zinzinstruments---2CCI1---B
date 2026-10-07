import { noiseBurst, playTone } from "../../js/audio.js";

export const id = "bongo";

export function play() {
  noiseBurst(1, 0.1, 0.4, 2500);
  noiseBurst(2, 0.1, 0.4, 3000, 0.18);
  playTone(1, 300, "sine", 0.15, 0.4);
  playTone(2, 380, "sine", 0.15, 0.4, 0.18);
}
