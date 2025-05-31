

// import { Actor, Vector, CollisionType } from "excalibur";
// import { Resources } from "./resources.js";

// export class Bullet extends Actor {
//   constructor(pos, direction) {
//     super({
//       pos: pos,
//       width: 16,
//       height: 16,
//       collisionType: CollisionType.Passive,
//     });

//     this.vel = direction.scale(400);
//     this.graphics.use(Resources.Bullet.toSprite());
//     this.scale = new Vector(0.02, 0.02);
//     this.name = "bullet";
//     this.rotation = direction.toAngle();
//   }

//   onInitialize(engine) {
//     this.on("collisionstart", (evt) => {
//       const other = evt.other?.owner;
//       if (
//         other &&
//         (other.name === "zombie" || other.name === "fastzombie") &&
//         typeof other.killZombie === "function"
//       ) {
//         other.killZombie();
//         this.kill();
//       }
//     });
//   }

//   onPreUpdate(engine, delta) {
//     if (
//       this.pos.x < 0 ||
//       this.pos.x > engine.drawWidth ||
//       this.pos.y < 0 ||
//       this.pos.y > engine.drawHeight
//     ) {
//       this.kill();
//     }
//   }
// }


import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class Bullet extends Actor {
  // Private velden voor velocity en richting
  #vel;
  #direction;

  constructor(pos, direction) {
    super({
      pos: pos,
      width: 16,
      height: 16,
      collisionType: CollisionType.Passive,
    });

    // Velocity wordt opgeslagen in privéveld en geschaald
    this.#direction = direction;
    this.#vel = direction.scale(400);
    this.vel = this.#vel;

    // Stel sprite en schaal in
    this.graphics.use(Resources.Bullet.toSprite());
    this.scale = new Vector(0.02, 0.02);

    this.name = "bullet";

    // Richting van bullet (rotatie)
    this.rotation = direction.toAngle();
  }

  onInitialize(engine) {
    // Luister naar botsingen met zombies om ze te doden en bullet te verwijderen
    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (
        other &&
        (other.name === "zombie" || other.name === "fastzombie") &&
        typeof other.killZombie === "function"
      ) {
        other.killZombie();
        this.kill();
      }
    });
  }

  onPreUpdate(engine, delta) {
    // Verwijder bullet als deze buiten het scherm komt
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
