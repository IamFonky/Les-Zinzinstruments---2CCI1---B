import { playTone } from "../../js/audio.js";

export const id = "banjo";

export function play() {
  playTone(196, "triangle", 0.18, 0.3);
  playTone(293.66, "triangle", 0.18, 0.3, 0.08);
  playTone(392, "triangle", 0.18, 0.3, 0.16);
  playTone(493.88, "triangle", 0.35, 0.3, 0.24);
 
}
