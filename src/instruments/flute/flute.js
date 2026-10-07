import { playTone } from "../../js/audio.js";

export const id = "flute";

export function play() {
playTone(1046.5, "sine", 0.25, 0.25, 0, -5);
playTone(1174.66, "sine", 0.25, 0.25, 0.2, -5);
playTone(1318.51, "sine", 0.45, 0.25, 0.4, -5);
}