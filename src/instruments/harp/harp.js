import { playTone } from "../../js/audio.js";

export const id = "harp";

export function play() {
  playTone(523.25, "triangle", 1.2, 0.22);
  playTone(659.25, "triangle", 1.1, 0.2, 0.09);
  playTone(783.99, "triangle", 1, 0.18, 0.18);
  playTone(1046.5, "triangle", 1,4, 0.16, 0.27);
}
