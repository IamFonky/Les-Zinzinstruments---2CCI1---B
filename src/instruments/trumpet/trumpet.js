import { playTone } from "../../js/audio.js";

export const id = "piano";

export function play() {
  playTone( 233.08, "sawtooth", 0.35, 0.25);
  playTone(311.13, "sawtooth", 0.35, 0.25, 0.25);
  playTone(349.23, "sawtooth", 0.6, 0.3, 0.5);
}
