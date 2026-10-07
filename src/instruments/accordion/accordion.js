import { playTone } from "../../js/audio.js";

export const id = "accordion";

export function play() {
  playTone(220, "square", 1.1, 0.1, 0, 5);
  playTone(261.63, "square", 1.1, 0.1, 0, 5);
  playTone(329.63, "square", 1.1, 0.1, 0, 5);
}
