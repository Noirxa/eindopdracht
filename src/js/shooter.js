
// // // // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // // // import { Resources } from "./resources.js";
// // // // // // // // import { Bullet } from "./bullet.js";

// // // // // // // // export class Shooter extends Actor {
// // // // // // // //   constructor() {
// // // // // // // //     super({
// // // // // // // //       width: 40,
// // // // // // // //       height: 60,
// // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // //     });

// // // // // // // //     this.speed = 200;
// // // // // // // //     this.name = "shooter";
// // // // // // // //     this.lastDirection = new Vector(1, 0);
// // // // // // // //     this.targetRotation = 0;
// // // // // // // //   }

// // // // // // // //   onInitialize(engine) {
// // // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // // // // // //     // Movement
// // // // // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // // // // //       const dir = new Vector(0, 0);
// // // // // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // // // // //       if (dir.x !== 0 || dir.y !== 0) {
// // // // // // // //         this.lastDirection = dir.normalize();
// // // // // // // //         this.vel = this.lastDirection.scale(this.speed);
// // // // // // // //         this.targetRotation = this.lastDirection.toAngle();
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // // // // //         this.vel = Vector.Zero;
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     // Shooting
// // // // // // // //     engine.input.keyboard.on("press", (evt) => {
// // // // // // // //       if (evt.key === Keys.Space) {
// // // // // // // //         const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
// // // // // // // //         engine.add(bullet);
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }

// // // // // // // //   // Smooth rotation
// // // // // // // //   lerpAngle(a, b, t) {
// // // // // // // //     let diff = b - a;
// // // // // // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // // // // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // // // // // //     return a + diff * t;
// // // // // // // //   }

// // // // // // // //   onPreUpdate(engine, delta) {
// // // // // // // //     const smoothing = 10;
// // // // // // // //     this.rotation = this.lerpAngle(this.rotation, this.targetRotation, delta / 1000 * smoothing);
// // // // // // // //   }
// // // // // // // // }


// // // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // // import { Resources } from "./resources.js";
// // // // // // // import { Bullet } from "./bullet.js";

// // // // // // // export class Shooter extends Actor {
// // // // // // //   constructor() {
// // // // // // //     super({
// // // // // // //       width: 40,
// // // // // // //       height: 60,
// // // // // // //       collisionType: CollisionType.Active,
// // // // // // //     });

// // // // // // //     this.speed = 200;
// // // // // // //     this.name = "shooter";
// // // // // // //     this.lastDirection = new Vector(1, 0);
// // // // // // //     this.targetRotation = 0;
// // // // // // //   }

// // // // // // //   onInitialize(engine) {
// // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // // // //       const dir = new Vector(0, 0);
// // // // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // // // //       if (dir.x !== 0 || dir.y !== 0) {
// // // // // // //         this.lastDirection = dir.normalize();
// // // // // // //         this.vel = this.lastDirection.scale(this.speed);
// // // // // // //         this.targetRotation = this.lastDirection.toAngle();
// // // // // // //       }
// // // // // // //     });

// // // // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // // // //         this.vel = Vector.Zero;
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Mouse click to shoot
// // // // // // //     engine.input.pointers.primary.on("down", (evt) => {
// // // // // // //       const mousePos = evt.worldPos;
// // // // // // //       const direction = mousePos.sub(this.pos).normalize();
// // // // // // //       const bullet = new Bullet(this.pos.clone(), direction);
// // // // // // //       engine.add(bullet);
// // // // // // //     });
// // // // // // //   }

// // // // // // //   lerpAngle(a, b, t) {
// // // // // // //     let diff = b - a;
// // // // // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // // // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // // // // //     return a + diff * t;
// // // // // // //   }

// // // // // // //   onPreUpdate(engine, delta) {
// // // // // // //     const smoothing = 10;
// // // // // // //     this.rotation = this.lerpAngle(
// // // // // // //       this.rotation,
// // // // // // //       this.targetRotation,
// // // // // // //       (delta / 1000) * smoothing
// // // // // // //     );
// // // // // // //   }
// // // // // // // // }
// // // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // // import { Resources } from "./resources.js";
// // // // // // // import { Bullet } from "./bullet.js";

// // // // // // // export class Shooter extends Actor {
// // // // // // //   constructor() {
// // // // // // //     super({
// // // // // // //       width: 40,
// // // // // // //       height: 60,
// // // // // // //       collisionType: CollisionType.Active,
// // // // // // //     });

// // // // // // //     this.speed = 200;
// // // // // // //     this.name = "shooter";
// // // // // // //     this.targetRotation = 0;
// // // // // // //     this.currentRotation = 0;  // houd huidige rotatie bij
// // // // // // //   }

// // // // // // //   onInitialize(engine) {
// // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // // // // //     // Muisbeweging opslaan voor rotatie
// // // // // // //     engine.input.pointers.primary.on("move", (evt) => {
// // // // // // //       const mousePos = evt.worldPos;
// // // // // // //       const direction = mousePos.sub(this.pos);
// // // // // // //       if (direction.magnitude > 0) {  // hier zonder ()
// // // // // // //         this.targetRotation = direction.toAngle();
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Schieten met muisklik
// // // // // // //     engine.input.pointers.primary.on("down", (evt) => {
// // // // // // //       const direction = Vector.fromAngle(this.targetRotation);
// // // // // // //       const bullet = new Bullet(this.pos.clone(), direction);
// // // // // // //       engine.add(bullet);
// // // // // // //     });
// // // // // // //   }

// // // // // // //   lerpAngle(a, b, t) {
// // // // // // //     let diff = b - a;
// // // // // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // // // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // // // // //     return a + diff * t;
// // // // // // //   }

// // // // // // //   onPreUpdate(engine, delta) {
// // // // // // //     // Bewegingsinput aflezen
// // // // // // //     const moveDir = new Vector(0, 0);
// // // // // // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // // // // // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // // // // // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // // // // // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // // // // // //     if (moveDir.magnitude > 0) {  // hier ook zonder ()
// // // // // // //       this.vel = moveDir.normalize().scale(this.speed);
// // // // // // //     } else {
// // // // // // //       this.vel = Vector.Zero;
// // // // // // //     }

// // // // // // //     // Smooth rotatie naar muispositie
// // // // // // //     const smoothing = 10;
// // // // // // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // // // // // //     this.rotation = this.currentRotation;
// // // // // // //   }
// // // // // // // }


// // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // import { Resources } from "./resources.js";
// // // // // // import { Bullet } from "./bullet.js";

// // // // // // export class Shooter extends Actor {
// // // // // //   constructor() {
// // // // // //     super({
// // // // // //       width: 40,
// // // // // //       height: 60,
// // // // // //       collisionType: CollisionType.Active,
// // // // // //     });

// // // // // //     this.speed = 200;
// // // // // //     this.name = "shooter";
// // // // // //     this.targetRotation = 0;
// // // // // //     this.currentRotation = 0;

// // // // // //     this.scale = new Vector(0.6, 0.6); // kleiner maken
// // // // // //   }

// // // // // //   onInitialize(engine) {
// // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // // // //     engine.input.pointers.primary.on("move", (evt) => {
// // // // // //       const mousePos = evt.worldPos;
// // // // // //       const direction = mousePos.sub(this.pos);
// // // // // //       if (direction.magnitude > 0) {
// // // // // //         this.targetRotation = direction.toAngle();
// // // // // //       }
// // // // // //     });

// // // // // //     engine.input.pointers.primary.on("down", (evt) => {
// // // // // //       const direction = Vector.fromAngle(this.targetRotation);
// // // // // //       const bullet = new Bullet(this.pos.clone(), direction);
// // // // // //       engine.add(bullet);
// // // // // //     });
// // // // // //   }

// // // // // //   lerpAngle(a, b, t) {
// // // // // //     let diff = b - a;
// // // // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // // // //     return a + diff * t;
// // // // // //   }

// // // // // //   onPreUpdate(engine, delta) {
// // // // // //     const moveDir = new Vector(0, 0);
// // // // // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // // // // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // // // // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // // // // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // // // // //     if (moveDir.magnitude > 0) {
// // // // // //       this.vel = moveDir.normalize().scale(this.speed);
// // // // // //     } else {
// // // // // //       this.vel = Vector.Zero;
// // // // // //     }

// // // // // //     const smoothing = 10;
// // // // // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // // // // //     this.rotation = this.currentRotation;
// // // // // //   }

// // // // // //   onPostUpdate(engine, delta) {
// // // // // //     // clamp positie zó dat shooter niet buiten level kan
// // // // // //     const halfWidth = (this.width * this.scale.x) / 2;
// // // // // //     const halfHeight = (this.height * this.scale.y) / 2;

// // // // // //     const minX = 0 + halfWidth;
// // // // // //     const minY = 0 + halfHeight;
// // // // // //     const maxX = 2000 - halfWidth;
// // // // // //     const maxY = 1200 - halfHeight;

// // // // // //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// // // // // //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// // // // // //   }
// // // // // // }


// // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // import { Resources } from "./resources.js";
// // // // // import { Bullet } from "./bullet.js";

// // // // // export class Shooter extends Actor {
// // // // //   constructor() {
// // // // //     super({
// // // // //       width: 40,
// // // // //       height: 60,
// // // // //       collisionType: CollisionType.Active,
// // // // //     });

// // // // //     this.speed = 200;
// // // // //     this.name = "shooter";
// // // // //     this.targetRotation = 0;
// // // // //     this.currentRotation = 0;
// // // // //     this.scale = new Vector(0.6, 0.6);
// // // // //     this.ammo = 10; // ✅ ammo toegevoegd
// // // // //   }

// // // // //   onInitialize(engine) {
// // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // // //     engine.input.pointers.primary.on("move", (evt) => {
// // // // //       const mousePos = evt.worldPos;
// // // // //       const direction = mousePos.sub(this.pos);
// // // // //       if (direction.magnitude > 0) {
// // // // //         this.targetRotation = direction.toAngle();
// // // // //       }
// // // // //     });

// // // // //     engine.input.pointers.primary.on("down", (evt) => {
// // // // //       if (this.ammo > 0) {
// // // // //         const direction = Vector.fromAngle(this.targetRotation);
// // // // //         const bullet = new Bullet(this.pos.clone(), direction);
// // // // //         engine.add(bullet);
// // // // //         this.ammo--; // ✅ ammo verlagen
// // // // //       } else {
// // // // //         console.log("Geen ammo meer!");
// // // // //       }
// // // // //     });
// // // // //   }

// // // // //   lerpAngle(a, b, t) {
// // // // //     let diff = b - a;
// // // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // // //     return a + diff * t;
// // // // //   }

// // // // //   onPreUpdate(engine, delta) {
// // // // //     const moveDir = new Vector(0, 0);
// // // // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // // // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // // // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // // // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // // // //     if (moveDir.magnitude > 0) {
// // // // //       this.vel = moveDir.normalize().scale(this.speed);
// // // // //     } else {
// // // // //       this.vel = Vector.Zero;
// // // // //     }

// // // // //     const smoothing = 10;
// // // // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // // // //     this.rotation = this.currentRotation;
// // // // //   }

// // // // //   onPostUpdate(engine, delta) {
// // // // //     const halfWidth = (this.width * this.scale.x) / 2;
// // // // //     const halfHeight = (this.height * this.scale.y) / 2;

// // // // //     const minX = 0 + halfWidth;
// // // // //     const minY = 0 + halfHeight;
// // // // //     const maxX = 2000 - halfWidth;
// // // // //     const maxY = 1200 - halfHeight;

// // // // //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// // // // //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// // // // //   }
// // // // // }


// // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // import { Resources } from "./resources.js";
// // // // import { Bullet } from "./bullet.js";

// // // // export class Shooter extends Actor {
// // // //   constructor() {
// // // //     super({
// // // //       width: 80,
// // // //       height: 100,
// // // //       collisionType: CollisionType.Active,
// // // //     });

// // // //     this.speed = 200;
// // // //     this.name = "shooter";
// // // //     this.targetRotation = 0;
// // // //     this.currentRotation = 0;
// // // //     this.ammo = 10;

// // // //     this.scale = new Vector(0.6, 0.6);
// // // //   }

// // // //   onInitialize(engine) {
// // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // // //     engine.input.pointers.primary.on("move", (evt) => {
// // // //       const mousePos = evt.worldPos;
// // // //       const direction = mousePos.sub(this.pos);
// // // //       if (direction.magnitude > 0) {
// // // //         this.targetRotation = direction.toAngle();
// // // //       }
// // // //     });

// // // //     engine.input.pointers.primary.on("down", (evt) => {
// // // //       if (this.ammo > 0) {
// // // //         const direction = Vector.fromAngle(this.targetRotation);
// // // //         const bullet = new Bullet(this.pos.clone(), direction);
// // // //         engine.add(bullet);
// // // //         this.ammo--;
// // // //         engine.ui?.showAmmo(this.ammo);
// // // //       }
// // // //     });

// // // //     this.addAmmo = function (amount) {
// // // //       this.ammo += amount;
// // // //       engine.ui?.showAmmo(this.ammo);
// // // //     };
// // // //   }

// // // //   lerpAngle(a, b, t) {
// // // //     let diff = b - a;
// // // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // // //     return a + diff * t;
// // // //   }

// // // //   onPreUpdate(engine, delta) {
// // // //     const moveDir = new Vector(0, 0);
// // // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // // //     if (moveDir.magnitude > 0) {
// // // //       this.vel = moveDir.normalize().scale(this.speed);
// // // //     } else {
// // // //       this.vel = Vector.Zero;
// // // //     }

// // // //     const smoothing = 10;
// // // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // // //     this.rotation = this.currentRotation;
// // // //   }

// // // //   onPostUpdate(engine, delta) {
// // // //     const halfWidth = (this.width * this.scale.x) / 2;
// // // //     const halfHeight = (this.height * this.scale.y) / 2;

// // // //     const minX = 0 + halfWidth;
// // // //     const minY = 0 + halfHeight;
// // // //     const maxX = 2000 - halfWidth;
// // // //     const maxY = 1200 - halfHeight;

// // // //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// // // //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// // // //   }
// // // // }


// // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // import { Resources } from "./resources.js";
// // // import { Bullet } from "./bullet.js";

// // // export class Shooter extends Actor {
// // //   constructor() {
// // //     super({
// // //       width: 80,
// // //       height: 100,
// // //       collisionType: CollisionType.Active,
// // //     });

// // //     this.speed = 200;
// // //     this.name = "shooter";
// // //     this.targetRotation = 0;
// // //     this.currentRotation = 0;
// // //     this.ammo = 10;

// // //     this.scale = new Vector(0.6, 0.6);
// // //   }

// // //   onInitialize(engine) {
// // //     this.graphics.use(Resources.Shooter.toSprite());
// // //     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// // //     engine.input.pointers.primary.on("move", (evt) => {
// // //       const mousePos = evt.worldPos;
// // //       const direction = mousePos.sub(this.pos);
// // //       if (direction.magnitude > 0) {
// // //         this.targetRotation = direction.toAngle();
// // //       }
// // //     });

// // //     engine.input.pointers.primary.on("down", (evt) => {
// // //       if (this.ammo > 0) {
// // //         const direction = Vector.fromAngle(this.targetRotation);
// // //         const bullet = new Bullet(this.pos.clone(), direction);
// // //         engine.add(bullet);
// // //         this.ammo--;
// // //         engine.ui?.showAmmo(this.ammo);
// // //       }
// // //     });

// // //     this.addAmmo = function (amount) {
// // //       this.ammo += amount;
// // //       engine.ui?.showAmmo(this.ammo);
// // //     };
// // //   }

// // //   lerpAngle(a, b, t) {
// // //     let diff = b - a;
// // //     if (diff < -Math.PI) diff += Math.PI * 2;
// // //     if (diff > Math.PI) diff -= Math.PI * 2;
// // //     return a + diff * t;
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     const moveDir = new Vector(0, 0);
// // //     if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
// // //     if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
// // //     if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
// // //     if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

// // //     if (moveDir.magnitude > 0) {
// // //       this.vel = moveDir.normalize().scale(this.speed);
// // //     } else {
// // //       this.vel = Vector.Zero;
// // //     }

// // //     const smoothing = 10;
// // //     this.currentRotation = this.lerpAngle(this.currentRotation, this.targetRotation, delta / 1000 * smoothing);
// // //     this.rotation = this.currentRotation;
// // //   }

// // //   onPostUpdate(engine, delta) {
// // //     const halfWidth = (this.width * this.scale.x) / 2;
// // //     const halfHeight = (this.height * this.scale.y) / 2;

// // //     const minX = 0 + halfWidth;
// // //     const minY = 0 + halfHeight;
// // //     const maxX = 2000 - halfWidth;
// // //     const maxY = 1200 - halfHeight;

// // //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// // //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// // //   }
// // // }


// // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // import { Resources } from "./resources.js";
// // import { Bullet } from "./bullet.js";

// // export class Shooter extends Actor {
// //   constructor() {
// //     super({
// //       width: 80,
// //       height: 100,
// //       collisionType: CollisionType.Active,
// //     });

// //     this.speed = 200;
// //     this.name = "shooter";
// //     this.targetRotation = 0;
// //     this.currentRotation = 0;
// //     this.ammo = 10;

// //     this.maxHealth = 100;
// //     this.health = this.maxHealth;

// //     this.scale = new Vector(0.6, 0.6);
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
// //       if (this.ammo > 0) {
// //         const direction = Vector.fromAngle(this.targetRotation);
// //         const bullet = new Bullet(this.pos.clone(), direction);
// //         engine.add(bullet);
// //         this.ammo--;
// //         engine.ui?.showAmmo(this.ammo);
// //       }
// //     });

// //     this.addAmmo = function (amount) {
// //       this.ammo += amount;
// //       engine.ui?.showAmmo(this.ammo);
// //     };

// //     this.takeDamage = function (amount) {
// //       this.health -= amount;
// //       if (this.health < 0) this.health = 0;
// //       engine.ui?.showHealth(this.health / this.maxHealth);

// //       if (this.health <= 0) {
// //         this.kill();
// //         engine.gameOver();
// //       }
// //     };

// //     // Direct health tonen bij start
// //     engine.ui?.showHealth(this.health / this.maxHealth);
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
// //     const halfWidth = (this.width * this.scale.x) / 2;
// //     const halfHeight = (this.height * this.scale.y) / 2;

// //     const minX = 0 + halfWidth;
// //     const minY = 0 + halfHeight;
// //     const maxX = 2000 - halfWidth;
// //     const maxY = 1200 - halfHeight;

// //     this.pos.x = Math.min(Math.max(this.pos.x, minX), maxX);
// //     this.pos.y = Math.min(Math.max(this.pos.y, minY), maxY);
// //   }
// // // }
// // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // import { Resources } from "./resources.js";
// // import { Bullet } from "./bullet.js";

// // export class Shooter extends Actor {
// //   constructor() {
// //     super({
// //       width: 80,
// //       height: 100,
// //       collisionType: CollisionType.Active,
// //     });

// //     this.speed = 200;
// //     this.name = "shooter";
// //     this.targetRotation = 0;
// //     this.currentRotation = 0;

// //     this.ammo = 10;       // current ammo in clip
// //     this.totalAmmo = 200; // total reserve ammo

// //     this.maxHealth = 100;
// //     this.health = this.maxHealth;

// //     this.isReloading = false;

// //     this.scale = new Vector(0.6, 0.6);

// //     this.reloadTime = 2000; // 2 seconds reload
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
// //       if (this.ammo > 0 && !this.isReloading) {
// //         const direction = Vector.fromAngle(this.targetRotation);
// //         const bullet = new Bullet(this.pos.clone(), direction);
// //         engine.add(bullet);
// //         this.ammo--;
// //         engine.ui?.showAmmo(this.ammo, this.totalAmmo);
// //       } else if (this.ammo === 0 && !this.isReloading) {
// //         this.reload(engine);
// //       }
// //     });

// //     // Add keyboard reload (R key)
// //     engine.input.keyboard.on("press", (evt) => {
// //       if (evt.key === Keys.R && !this.isReloading) {
// //         this.reload(engine);
// //       }
// //     });

// //     // Initial UI updates
// //     engine.ui?.showHealth(this.health / this.maxHealth);
// //     engine.ui?.showAmmo(this.ammo, this.totalAmmo);
// //     engine.ui?.setReloading(this.isReloading);
// //   }

// //   reload(engine) {
// //     if (this.isReloading) return;
// //     if (this.ammo === 10 || this.totalAmmo === 0) return; // Full clip or no ammo

// //     this.isReloading = true;
// //     engine.ui?.setReloading(true);

// //     setTimeout(() => {
// //       const neededAmmo = 10 - this.ammo;
// //       const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);

// //       this.ammo += ammoToLoad;
// //       this.totalAmmo -= ammoToLoad;

// //       this.isReloading = false;
// //       engine.ui?.showAmmo(this.ammo, this.totalAmmo);
// //       engine.ui?.setReloading(false);
// //     }, this.reloadTime);
// //   }

// //  addAmmo(amount, engine) {
// //   this.totalAmmo += amount;
// //   if (this.totalAmmo > 200) this.totalAmmo = 200; // cap max reserve ammo

// //   // Optionally auto-reload if clip isn't full and not already reloading
// //   if (this.ammo < 10 && !this.isReloading) {
// //     const neededAmmo = 10 - this.ammo;
// //     const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);
// //     this.ammo += ammoToLoad;
// //     this.totalAmmo -= ammoToLoad;
// //   }

// //   // Update the UI immediately
// //   if (engine?.ui) {
// //     engine.ui.showAmmo(this.ammo, this.totalAmmo);
// //   }
// // }

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
//       width: 80,
//       height: 100,
//       collisionType: CollisionType.Active,
//     });

//     this.speed = 200;
//     this.name = "shooter";
//     this.targetRotation = 0;
//     this.currentRotation = 0;

//     this.ammo = 10;       // current ammo in clip
//     this.totalAmmo = 200; // total reserve ammo

//     this.maxHealth = 100;
//     this.health = this.maxHealth;

//     this.isReloading = false;

//     this.scale = new Vector(0.6, 0.6);

//     this.reloadTime = 2000; // 2 seconds reload
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
//       if (this.ammo > 0 && !this.isReloading) {
//         const direction = Vector.fromAngle(this.targetRotation);
//         const bullet = new Bullet(this.pos.clone(), direction);
//         engine.add(bullet);
//         this.ammo--;
//         engine.ui?.showAmmo(this.ammo, this.totalAmmo);
//       } else if (this.ammo === 0 && !this.isReloading) {
//         this.reload(engine);
//       }
//     });

//     // Add keyboard reload (R key)
//     engine.input.keyboard.on("press", (evt) => {
//       if (evt.key === Keys.R && !this.isReloading) {
//         this.reload(engine);
//       }
//     });

//     // Example collision damage: take damage if touched by harmful actor
//     this.on("collisionstart", (evt) => {
//       const other = evt.other;
//       // Check if other entity is harmful, for example a zombie or enemy
//       if (other && other.name === "zombie") {
//         this.takeDamage(10, engine); // take 10 damage on collision with zombie
//       }
//     });

//     // Initial UI updates
//     engine.ui?.showHealth(this.health / this.maxHealth);
//     engine.ui?.showAmmo(this.ammo, this.totalAmmo);
//     engine.ui?.setReloading(this.isReloading);
//   }

//   reload(engine) {
//     if (this.isReloading) return;
//     if (this.ammo === 10 || this.totalAmmo === 0) return; // Full clip or no ammo

//     this.isReloading = true;
//     engine.ui?.setReloading(true);

//     setTimeout(() => {
//       const neededAmmo = 10 - this.ammo;
//       const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);

//       this.ammo += ammoToLoad;
//       this.totalAmmo -= ammoToLoad;

//       this.isReloading = false;
//       engine.ui?.showAmmo(this.ammo, this.totalAmmo);
//       engine.ui?.setReloading(false);
//     }, this.reloadTime);
//   }

//   addAmmo(amount, engine) {
//     this.totalAmmo += amount;
//     if (this.totalAmmo > 200) this.totalAmmo = 200; // cap max reserve ammo

//     // Optionally auto-reload if clip isn't full and not already reloading
//     if (this.ammo < 10 && !this.isReloading) {
//       const neededAmmo = 10 - this.ammo;
//       const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);
//       this.ammo += ammoToLoad;
//       this.totalAmmo -= ammoToLoad;
//     }

//     // Update the UI immediately
//     if (engine?.ui) {
//       engine.ui.showAmmo(this.ammo, this.totalAmmo);
//     }
//   }

//   takeDamage(amount, engine) {
//     this.health -= amount;
//     if (this.health < 0) this.health = 0;

//     // Update UI health bar
//     engine.ui?.showHealth(this.health / this.maxHealth);

//     // Check if player died
//     if (this.health <= 0) {
//       this.kill();
//       engine.gameOver?.(); // call game over method if exists
//     }
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

    this.ammo = 10;       // current ammo in clip
    this.totalAmmo = 200; // total reserve ammo

    this.maxHealth = 100;
    this.health = this.maxHealth;

    this.isReloading = false;

    this.scale = new Vector(0.6, 0.6);

    this.reloadTime = 2000; // 2 seconds reload
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
      if (this.ammo > 0 && !this.isReloading) {
        const direction = Vector.fromAngle(this.targetRotation);
        const bullet = new Bullet(this.pos.clone(), direction);
        engine.add(bullet);
        this.ammo--;
        engine.ui?.showAmmo(this.ammo, this.totalAmmo);
      } else if (this.ammo === 0 && !this.isReloading) {
        this.reload(engine);
      }
    });

    // Add keyboard reload (R key)
    engine.input.keyboard.on("press", (evt) => {
      if (evt.key === Keys.R && !this.isReloading) {
        this.reload(engine);
      }
    });

    // Collision: take damage when zombies touch player
    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (other && (other.name === "zombie" || other.name === "fastzombie")) {
        this.takeDamage(10, engine); // damage 10 per collision
      }
    });

    // Initial UI updates
    engine.ui?.showHealth(this.health / this.maxHealth);
    engine.ui?.showAmmo(this.ammo, this.totalAmmo);
    engine.ui?.setReloading(this.isReloading);
  }

  reload(engine) {
    if (this.isReloading) return;
    if (this.ammo === 10 || this.totalAmmo === 0) return; // Full clip or no ammo

    this.isReloading = true;
    engine.ui?.setReloading(true);

    setTimeout(() => {
      const neededAmmo = 10 - this.ammo;
      const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);

      this.ammo += ammoToLoad;
      this.totalAmmo -= ammoToLoad;

      this.isReloading = false;
      engine.ui?.showAmmo(this.ammo, this.totalAmmo);
      engine.ui?.setReloading(false);
    }, this.reloadTime);
  }

  addAmmo(amount, engine) {
    this.totalAmmo += amount;
    if (this.totalAmmo > 200) this.totalAmmo = 200; // cap max reserve ammo

    // Optionally auto-reload if clip isn't full and not already reloading
    if (this.ammo < 10 && !this.isReloading) {
      const neededAmmo = 10 - this.ammo;
      const ammoToLoad = Math.min(neededAmmo, this.totalAmmo);
      this.ammo += ammoToLoad;
      this.totalAmmo -= ammoToLoad;
    }

    // Update the UI immediately
    if (engine?.ui) {
      engine.ui.showAmmo(this.ammo, this.totalAmmo);
    }
  }

  takeDamage(amount, engine) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;

    // Update UI health bar
    engine.ui?.showHealth(this.health / this.maxHealth);

    // Check if player died
    if (this.health <= 0) {
      this.kill();
      engine.gameOver?.();
    }
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
