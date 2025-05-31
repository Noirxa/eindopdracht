

import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Background extends Actor {
  // Private veld om positie te bewaren (optioneel, want pos is al Actor property)
  #pos;

  onInitialize(engine) {
    // Stel de achtergrond sprite in
    this.graphics.use(Resources.Background.toSprite());

    // Positie en anchor instellen (linksboven)
    this.#pos = new Vector(0, 0);
    this.pos = this.#pos;
    this.anchor = Vector.Zero;

    // Zet z-index laag zodat achtergrond achter alles staat
    this.z = -100;
  }
}
