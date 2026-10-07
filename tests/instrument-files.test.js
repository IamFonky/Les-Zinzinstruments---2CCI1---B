import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { INSTRUMENTS } from "../src/js/app.js";

describe("instrument folders", () => {
  it("chaque instrument a son dossier", () => {
    for (const id of INSTRUMENTS) {
      const folder = join(process.cwd(), "src", "instruments", id);
      expect(
        existsSync(folder),
        `Le dossier src/instruments/${id}/ est absent — crée-le, ou retire "${id}" de la liste INSTRUMENTS dans app.js.`
      ).toBe(true);
    }
  });

  it("chaque dossier a ses fichiers html, js et css", () => {
    for (const id of INSTRUMENTS) {
      for (const extension of ["html", "js", "css"]) {
        const file = join(process.cwd(), "src", "instruments", id, `${id}.${extension}`);
        expect(existsSync(file), `Le fichier src/instruments/${id}/${id}.${extension} est absent — crée-le dans le dossier ${id}.`).toBe(true);
      }
    }
  });
});
