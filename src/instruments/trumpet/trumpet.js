import { playTone } from "../../js/audio.js";

export const id = "piano";

export function play() {
  playTone(867.63, "triangle", 1.2, 0.4);
  playTone(632.63, "triangle", 1.2, 0.3);
  playTone(989.63, "triangle", 1.2, 0.25);
}
