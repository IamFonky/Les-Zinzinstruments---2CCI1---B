import { playTone } from "../../js/audio.js";

export const id = "guitar";

export function play() {
  playTone(196, "sawtooth", 1.5, 0.15);
  playTone(196, "triangle", 1.5, 0.2 , 0, 8);
  playTone(196, "triangle", 1.2, 0.15, 0.12);
}
