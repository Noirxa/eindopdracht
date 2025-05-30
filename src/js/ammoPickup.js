// // ammoPickup.js
// import { Actor, Vector, CollisionType } from "excalibur";
// import { Resources } from "./resources.js";

// export class AmmoPickup extends Actor {
//   constructor(pos, amount = 10) {
//     super({
//       pos,
//       width: 20,
//       height: 20,
//       collisionType: CollisionType.Passive,
//     });
//     this.amount = amount;
//     this.graphics.use(Resources.Ammo.toSprite());
//     this.name = "ammoPickup";
//   }

//   onInitialize(engine) {
//     this.on("collisionstart", (evt) => {
//       if (evt.other.owner && evt.other.owner.name === "shooter") {
//         evt.other.owner.addAmmo(this.amount);
//         this.kill();
//       }
//     });
//   }
// }
