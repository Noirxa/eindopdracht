

import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";
import { Zombie } from "./zombie.js";

export class Bullet extends Actor {
  constructor(pos, direction) {
    super({
      pos: pos,
      width: 16,
      height: 16,
      collisionType: CollisionType.Passive,
    });

    this.vel = direction.scale(400); // move in shooting direction
    this.graphics.use(Resources.Bullet.toSprite());
    this.scale = new Vector(0.05, 0.05); // scale bullet down
    this.name = "bullet";

    // Zorg dat de bullet roteert in de richting van de beweging (richting van de shooter)
    this.rotation = direction.toAngle();
  }

  onInitialize(engine) {
    this.on("collisionstart", (evt) => {
      // if(evt.other.owner instanceof Zombie) {
      //     evt.other.owner.killZombie()
      // } dit is de code die de docent had gemaakt is en correct is voor de rode krantjes
      const target = evt.other.owner;
      if (
        (target.name === "zombie" || target.name === "fastzombie") &&
        typeof target.killZombie === "function"
      ) {
        target.killZombie();
        this.kill();
      }
    });
  }

  onPreUpdate(engine, delta) {
    // Remove bullet if it goes offscreen
    if (
      this.pos.x < 0 ||
      this.pos.x > engine.drawWidth ||
      this.pos.y < 0 ||
      this.pos.y > engine.drawHeight
    ) {
      this.kill();
    }
  }
}
