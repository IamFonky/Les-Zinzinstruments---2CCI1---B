import { playTone } from "../../js/audio.js";

export const id = "piano";

export function play() {
  playTone(440, "triangle", 1.2, 1);
  playTone(600, "triangle", 1.2, 1);
  playTone(700, "triangle", 1.2, 1);
}
