// import { Actor, Vector, CollisionType } from "excalibur";
// import { Resources } from "./resources.js";

// function getRandomEdgePosition(width, height) {
//   const edge = Math.floor(Math.random() * 4);
//   switch (edge) {
//     case 0: return new Vector(Math.random() * width, 0);
//     case 1: return new Vector(width, Math.random() * height);
//     case 2: return new Vector(Math.random() * width, height);
//     case 3: return new Vector(0, Math.random() * height);
//     default: return new Vector(0, 0);
//   }
// }

// export class FastZombie extends Actor {
//   constructor(target, speed = 180) {
//     super({
//       width: 40,
//       height: 60,
//       collisionType: CollisionType.Active,
//     });

//     this.target = target;
//     this.speed = speed;
//     this.name = "fastzombie";
//   }

//   onInitialize(engine) {
//     this.graphics.use(Resources.FastZombie.toSprite());
//     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
//   }

//   onPreUpdate(engine, delta) {
//     if (this.target && !this.target.isKilled()) {
//       const direction = this.target.pos.sub(this.pos).normalize();
//       this.vel = direction.scale(this.speed);
//     } else {
//       this.vel = Vector.Zero;
//     }
//   }

//   killZombie() {
//     this.kill();
//     // TODO: Add score increase or death effects here
//   }
// }
