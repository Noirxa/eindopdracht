// ui.js
import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

export class UI extends Actor {
  constructor() {
    super();

    this.label = new Label({
      text: "Score: 0",
      pos: new Vector(50, 50),
      font: new Font({
        family: "Arial",
        size: 28,
        unit: FontUnit.Px,
        color: Color.White,
      }),
    });

    this.addChild(this.label);
  }

  showScore(score) {
    this.label.text = `Score: ${score}`;
  }
}

