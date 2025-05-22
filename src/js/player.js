import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Player extends Actor {
  constructor() {
    super();
    this.speed = 200;
  }

  onInitialize() {
    this.graphics.use(Resources.Player.toSprite());
    this.pos = new Vector(400, 300);
  }

  onPreUpdate(engine, delta) {
    const moveDir = new Vector(0, 0);

    // Check keys using engine.input.keyboard.isHeld with key codes
    if (engine.input.keyboard.isHeld(engine.input.Keys.W)) moveDir.y -= 1;
    if (engine.input.keyboard.isHeld(engine.input.Keys.S)) moveDir.y += 1;
    if (engine.input.keyboard.isHeld(engine.input.Keys.A)) moveDir.x -= 1;
    if (engine.input.keyboard.isHeld(engine.input.Keys.D)) moveDir.x += 1;

    if (moveDir.magnitude > 0) {
      this.vel = moveDir.normalize().scale(this.speed);
    } else {
      this.vel = Vector.Zero;
    }
  }
}
