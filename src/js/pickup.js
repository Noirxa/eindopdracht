

// import { Actor, Vector, CollisionType } from "excalibur";
// import { Resources } from "./resources.js";

// export class AmmoPickup extends Actor {
//   constructor(pos, amount = 10) {
//     super({
//       pos: pos,
//       width: 64,
//       height: 64,
//       collisionType: CollisionType.Fixed,
//     });

//     this.amount = amount;
//     this.name = "ammoPickup";
//   }

//   onInitialize(engine) {
//     this.graphics.use(Resources.AmmoPickup.toSprite());
//     this.scale = new Vector(0.20, 0.20);

// this.on("collisionstart", (evt) => {
//   const other = evt.other?.owner;
//   if (other?.name === "shooter") {
//     other.addAmmo(this.amount, engine); // Pass engine so UI updates
//     this.kill();
//   }
// });

//   }
// }


import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

export class AmmoPickup extends Actor {
  #amount;

  constructor(pos, amount = 10) {
    super({
      pos: pos,
      width: 64,
      height: 64,
      collisionType: CollisionType.Fixed,
    });

    this.#amount = amount;
    this.name = "ammoPickup";
  }

  get amount() {
    return this.#amount;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.AmmoPickup.toSprite());
    this.scale = new Vector(0.20, 0.20);

    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (other?.name === "shooter") {
        other.addAmmo(this.#amount, engine); // Pass engine so UI updates
        this.kill();
      }
    });
  }
}
