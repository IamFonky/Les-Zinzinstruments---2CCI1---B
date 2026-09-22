import { playTone } from "../../js/audio.js";

export const id = "piano";

export function play() {
  playTone(261.63, "triangle", 1.2, 0.4);
  playTone(329.63, "triangle", 1.2, 0.3);
  playTone(392, "triangle", 1.2, 0.25);
}
