import { describe, it, expect, vi } from "vitest";
import { playTone } from "../src/js/audio.js";
import { id, play } from "../src/instruments/accordion/accordion.js";
import html from "../src/instruments/accordion/accordion.html?raw";
import css from "../src/instruments/accordion/accordion.css?raw";

vi.mock("../src/js/audio.js", () => ({
  playTone: vi.fn(),
  noiseBurst: vi.fn(),
  playVoice: vi.fn(),
}));

describe("accordion", () => {
  it("affiche sa bulle", () => {
    expect(html, `accordion.html : le <button> doit porter data-instrument="accordion" — corrige l'attribut data-instrument.`).toContain(`data-instrument="${id}"`);
    expect(html, `accordion.html : la bulle doit être data-popup="SQUEEZE! 🪗" — corrige l'attribut data-popup (texte et émoji).`).toContain('data-popup="SQUEEZE! 🪗"');
  });

  it("porte sa couleur", () => {
    expect(css, `accordion.css : la couleur du bouton vient de --hue: 120 — corrige la valeur de --hue.`).toContain("--hue: 120");
  });

  it("joue ses notes", () => {
    play();
    expect(playTone, "accordion.js : il faut exactement 3 notes — playTone(fréquence, onde, durée, volume, tempo, détune).").toHaveBeenCalledTimes(3);
    expect(playTone, `accordion.js : la note n°1 est incorrecte — appelle playTone(220, "square", 1.1, 0.1, 0, 5) exactement.`).toHaveBeenNthCalledWith(1, 220, "square", 1.1, 0.1, 0, 5);
    expect(playTone, `accordion.js : la note n°2 est incorrecte — appelle playTone(261.63, "square", 1.1, 0.1, 0, 5) exactement.`).toHaveBeenNthCalledWith(2, 261.63, "square", 1.1, 0.1, 0, 5);
    expect(playTone, `accordion.js : la note n°3 est incorrecte — appelle playTone(329.63, "square", 1.1, 0.1, 0, 5) exactement.`).toHaveBeenNthCalledWith(3, 329.63, "square", 1.1, 0.1, 0, 5);
  });
});