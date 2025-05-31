
// // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // import { Resources } from "./resources.js";
// // // // import { Bullet } from "./bullet.js";

// // // // export class Shooter extends Actor {
// // // //   constructor() {
// // // //     super({
// // // //       width: 40,
// // // //       height: 60,
// // // //       collisionType: CollisionType.Active,
// // // //     });

// // // //     this.speed = 200;
// // // //     this.name = "shooter";
// // // //     this.lastDirection = new Vector(1, 0);
// // // //     this.targetRotation = 0;
// // // //   }

// // // //   onInitialize(engine) {
// // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // //     // Movement
// // // //     engine.input.keyboard.on("hold", (evt) => {
// // // //       const dir = new Vector(0, 0);
// // // //       if (evt.key === Keys.W) dir.y = -1;
// // // //       if (evt.key === Keys.S) dir.y = 1;
// // // //       if (evt.key === Keys.A) dir.x = -1;
// // // //       if (evt.key === Keys.D) dir.x = 1;

// // // //       if (dir.x !== 0 || dir.y !== 0) {
// // // //         this.lastDirection = dir.normalize();
// // // //         this.vel = this.lastDirection.scale(this.speed);
// // // //         this.targetRotation = this.lastDirection.toAngle();
// // // //       }
// // // //     });

// // // //     engine.input.keyboard.on("release", (evt) => {
// // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // //         this.vel = Vector.Zero;
// // // //       }
// // // //     });

// // // //     // Shooting
// // // //     engine.input.keyboard.on("press", (evt) => {
// // // //       if (evt.key === Keys.Space) {
// // // //         const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
// // // //         engine.add(bullet);
// // // //       }
// // // //     });
// // // //   }

// // // //   // Smooth rotation
// // // //   lerpAngle(a, b, t) {
// // // //     let diff = b - a;
// // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // //     return a + diff * t;
// // // //   }

// // // //   onPreUpdate(engine, delta) {
// // // //     const smoothing = 10;
// // // //     this.rotation = this.lerpAngle(this.rotation, this.targetRotation, delta / 1000 * smoothing);
// // // //   }
// // // // }


// // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // import { Resources } from "./resources.js";
// // // import { Bullet } from "./bullet.js";

// // // export class Shooter extends Actor {
// // //   constructor() {
// // //     super({
// // //       width: 40,
// // //       height: 60,
// // //       collisionType: CollisionType.Active,
// // //     });

// // //     this.speed = 200;
// // //     this.name = "shooter";
// // //     this.lastDirection = new Vector(1, 0);
// // //     this.targetRotation = 0;
// // //   }

// // //   onInitialize(engine) {
// // //     this.graphics.use(Resources.Shooter.toSprite());
// // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // //     engine.input.keyboard.on("hold", (evt) => {
// // //       const dir = new Vector(0, 0);
// // //       if (evt.key === Keys.W) dir.y = -1;
// // //       if (evt.key === Keys.S) dir.y = 1;
// // //       if (evt.key === Keys.A) dir.x = -1;
// // //       if (evt.key === Keys.D) dir.x = 1;

// // //       if (dir.x !== 0 || dir.y !== 0) {
// // //         this.lastDirection = dir.normalize();
// // //         this.vel = this.lastDirection.scale(this.speed);
// // //         this.targetRotation = this.lastDirection.toAngle();
// // //       }
// // //     });

// // //     engine.input.keyboard.on("release", (evt) => {
// // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // //         this.vel = Vector.Zero;
// // //       }
// // //     });

// // //     // Mouse click to shoot
// // //     engine.input.pointers.primary.on("down", (evt) => {
// // //       const mousePos = evt.worldPos;
// // //       const direction = mousePos.sub(this.pos).normalize();
// // //       const bullet = new Bullet(this.pos.clone(), direction);
// // //       engine.add(bullet);
// // //     });
// // //   }

// // //   lerpAngle(a, b, t) {
// // //     let diff = b - a;
// // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // //     return a + diff * t;
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     const smoothing = 10;
// // //     this.rotation = this.lerpAngle(
// // //       this.rotation,
// // //       this.targetRotation,
// // //       (delta / 1000) * smoothing
// // //     );
// // //   }
// // // // }
// // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // import { Resources } from "./resources.js";
// // // import { Bullet } from "./bullet.js";

// // // export class Shooter extends Actor {
// // //   constructor() {
// // //     super({
// // //       width: 40,
// // //       height: 60,
// // //       collisionType: CollisionType.Active,
// // //     });

// // //     this.speed = 200;
// // //     this.name = "shooter";
// // //     this.targetRotation = 0;
// // //     this.currentRotation = 0;  // houd huidige rotatie bij
// // //   }

// // //   onInitialize(engine) {
// // //     this.graphics.use(Resources.Shooter.toSprite());
// // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // //     // Muisbeweging opslaan voor rotatie
// // //     engine.input.pointers.primary.on("move", (evt) => {
// // //       const mousePos = evt.worldPos;
// // //       const direction = mousePos.sub(this.pos);
// // //       if (direction.magnitude > 0) {  // hier zonder ()
// // //         this.targetRotation = direction.toAngle();
// // //       }
// // //     });

// // //     // Schieten met muisklik
// // //     engine.input.pointers.primary.on("down", (evt) => {
// // //       const direction = Vector.fromAngle(this.targetRotation);
// // //       const bullet = new Bullet(this.pos.clone(), direction);
// // //       engine.add(bullet);
// // //     });
// // //   }

// // //   lerpAngle(a, b, t) {
// // //     let diff = b - a;
// // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // //     return a + diff * t;
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     // Bewegingsinput aflezen
// // //     const moveDir = new Vector(0, 0);
// // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // //     if (moveDir.magnitude > 0) {  // hier ook zonder ()
// // //       this.vel = moveDir.normalize().scale(this.speed);
// // //     } else {
// // //       this.vel = Vector.Zero;
// // //     }

// // //     // Smooth rotatie naar muispositie
// // //     const smoothing = 10;
// // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // //     this.rotation = this.currentRotation;
// // //   }
// // // }


// // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // import { Resources } from "./resources.js";
// // import { Bullet } from "./bullet.js";

// // export class Shooter extends Actor {
// //   constructor() {
// //     super({
// //       width: 40,
// //       height: 60,
// //       collisionType: CollisionType.Active,
// //     });

// //     this.speed = 200;
// //     this.name = "shooter";
// //     this.targetRotation = 0;
// //     this.currentRotation = 0;

// //     this.scale = new Vector(0.6, 0.6); // kleiner maken
// //   }

// //   onInitialize(engine) {
// //     this.graphics.use(Resources.Shooter.toSprite());
// //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// //     engine.input.pointers.primary.on("move", (evt) => {
// //       const mousePos = evt.worldPos;
// //       const direction = mousePos.sub(this.pos);
// //       if (direction.magnitude > 0) {
// //         this.targetRotation = direction.toAngle();
// //       }
// //     });

// //     engine.input.pointers.primary.on("down", (evt) => {
// //       const direction = Vector.fromAngle(this.targetRotation);
// //       const bullet = new Bullet(this.pos.clone(), direction);
// //       engine.add(bullet);
// //     });
// //   }

// //   lerpAngle(a, b, t) {
// //     let diff = b - a;
// //     if (diff < -Math.PI) diff += Math.PI * 2;
// //     if (diff > Math.PI) diff -= Math.PI * 2;
// //     return a + diff * t;
// //   }

// //   onPreUpdate(engine, delta) {
// //     const moveDir = new Vector(0, 0);
// //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// //     if (moveDir.magnitude > 0) {
// //       this.vel = moveDir.normalize().scale(this.speed);
// //     } else {
// //       this.vel = Vector.Zero;
// //     }

// //     const smoothing = 10;
// //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// //     this.rotation = this.currentRotation;
// //   }

// //   onPostUpdate(engine, delta) {
// //     // clamp positie zó dat shooter niet buiten level kan
// //     const halfWidth = (this.width * this.scale.x) / 2;
// //     const halfHeight = (this.height * this.scale.y) / 2;

// //     const minX = 0 + halfWidth;
// //     const minY = 0 + halfHeight;
// //     const maxX = 2000 - halfWidth;
// //     const maxY = 1200 - halfHeight;

// //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// //   }
// // }


// import { Actor, Keys, CollisionType, Vector } from "excalibur";
// import { Resources } from "./resources.js";
// import { Bullet } from "./bullet.js";

// export class Shooter extends Actor {
//   constructor() {
//     super({
//       width: 40,
//       height: 60,
//       collisionType: CollisionType.Active,
//     });

//     this.speed = 200;
//     this.name = "shooter";
//     this.targetRotation = 0;
//     this.currentRotation = 0;
//     this.scale = new Vector(0.6, 0.6);
//     this.ammo = 10; // ✅ ammo toegevoegd
//   }

//   onInitialize(engine) {
//     this.graphics.use(Resources.Shooter.toSprite());
//     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

//     engine.input.pointers.primary.on("move", (evt) => {
//       const mousePos = evt.worldPos;
//       const direction = mousePos.sub(this.pos);
//       if (direction.magnitude > 0) {
//         this.targetRotation = direction.toAngle();
//       }
//     });

//     engine.input.pointers.primary.on("down", (evt) => {
//       if (this.ammo > 0) {
//         const direction = Vector.fromAngle(this.targetRotation);
//         const bullet = new Bullet(this.pos.clone(), direction);
//         engine.add(bullet);
//         this.ammo--; // ✅ ammo verlagen
//       } else {
//         console.log("Geen ammo meer!");
//       }
//     });
//   }

//   lerpAngle(a, b, t) {
//     let diff = b - a;
//     if (diff < -Math.PI) diff += Math.PI * 2;
//     if (diff > Math.PI) diff -= Math.PI * 2;
//     return a + diff * t;
//   }

//   onPreUpdate(engine, delta) {
//     const moveDir = new Vector(0, 0);
//     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
//     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
//     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
//     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

//     if (moveDir.magnitude > 0) {
//       this.vel = moveDir.normalize().scale(this.speed);
//     } else {
//       this.vel = Vector.Zero;
//     }

//     const smoothing = 10;
//     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
//     this.rotation = this.currentRotation;
//   }

//   onPostUpdate(engine, delta) {
//     const halfWidth = (this.width * this.scale.x) / 2;
//     const halfHeight = (this.height * this.scale.y) / 2;

//     const minX = 0 + halfWidth;
//     const minY = 0 + halfHeight;
//     const maxX = 2000 - halfWidth;
//     const maxY = 1200 - halfHeight;

//     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
//     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
//   }
// }


import { Actor, Keys, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Bullet } from "./bullet.js";

export class Shooter extends Actor {
  constructor() {
    super({
      width: 80,
      height: 100,
      collisionType: CollisionType.Active,
    });

    this.speed = 200;
    this.name = "shooter";
    this.targetRotation = 0;
    this.currentRotation = 0;
    this.ammo = 10;

    this.scale = new Vector(0.6, 0.6);
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Shooter.toSprite());
    this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

    engine.input.pointers.primary.on("move", (evt) => {
      const mousePos = evt.worldPos;
      const direction = mousePos.sub(this.pos);
      if (direction.magnitude > 0) {
        this.targetRotation = direction.toAngle();
      }
    });

    engine.input.pointers.primary.on("down", (evt) => {
      if (this.ammo > 0) {
        const direction = Vector.fromAngle(this.targetRotation);
        const bullet = new Bullet(this.pos.clone(), direction);
        engine.add(bullet);
        this.ammo--;
        engine.ui?.showAmmo(this.ammo);
      }
    });

    this.addAmmo = function (amount) {
      this.ammo += amount;
      engine.ui?.showAmmo(this.ammo);
    };
  }

  lerpAngle(a, b, t) {
    let diff = b - a;
    if (diff < -Math.PI) diff += Math.PI * 2;
    if (diff > Math.PI) diff -= Math.PI * 2;
    return a + diff * t;
  }

  onPreUpdate(engine, delta) {
    const moveDir = new Vector(0, 0);
    if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
    if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
    if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
    if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

    if (moveDir.magnitude > 0) {
      this.vel = moveDir.normalize().scale(this.speed);
    } else {
      this.vel = Vector.Zero;
    }

    const smoothing = 10;
    this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
    this.rotation = this.currentRotation;
  }

  onPostUpdate(engine, delta) {
    const halfWidth = (this.width * this.scale.x) / 2;
    const halfHeight = (this.height * this.scale.y) / 2;

    const minX = 0 + halfWidth;
    const minY = 0 + halfHeight;
    const maxX = 2000 - halfWidth;
    const maxY = 1200 - halfHeight;

    this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
    this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
  }
}
