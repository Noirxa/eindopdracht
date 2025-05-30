// // // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // // import { Resources } from './resources.js';

// // // // // // // // // // // export class Shooter extends Actor {
// // // // // // // // // // //   speed = 200;

// // // // // // // // // // //   onInitialize() {
// // // // // // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // // // // // //     this.pos = new Vector(200, 300);
// // // // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // // // //     this.body.collisionType = CollisionType.Active;
// // // // // // // // // // //   }

// // // // // // // // // // //   onPreUpdate(engine, _delta) {
// // // // // // // // // // //     const kb = engine.input.keyboard;
// // // // // // // // // // //     let move = Vector.Zero;

// // // // // // // // // // //     if (kb.isHeld('KeyW') || kb.isHeld('ArrowUp')) {
// // // // // // // // // // //       move = move.add(new Vector(0, -1));
// // // // // // // // // // //     }
// // // // // // // // // // //     if (kb.isHeld('KeyS') || kb.isHeld('ArrowDown')) {
// // // // // // // // // // //       move = move.add(new Vector(0, 1));
// // // // // // // // // // //     }
// // // // // // // // // // //     if (kb.isHeld('KeyA') || kb.isHeld('ArrowLeft')) {
// // // // // // // // // // //       move = move.add(new Vector(-1, 0));
// // // // // // // // // // //     }
// // // // // // // // // // //     if (kb.isHeld('KeyD') || kb.isHeld('ArrowRight')) {
// // // // // // // // // // //       move = move.add(new Vector(1, 0));
// // // // // // // // // // //     }

// // // // // // // // // // //     if (!move.equals(Vector.Zero)) {
// // // // // // // // // // //       move = move.normalize().scale(this.speed);
// // // // // // // // // // //     }

// // // // // // // // // // //     this.vel = move;
// // // // // // // // // // //   }
// // // // // // // // // // // }
// // // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur"
// // // // // // // // // // // import { Resources } from './resources.js'

// // // // // // // // // // // export class Shooter extends Actor {
// // // // // // // // // // //   constructor() {
// // // // // // // // // // //     super({
// // // // // // // // // // //       width: Resources.Shooter.width,
// // // // // // // // // // //       height: Resources.Shooter.height,
// // // // // // // // // // //       collisionType: CollisionType.Active
// // // // // // // // // // //     })
// // // // // // // // // // //     this.speed = 300
// // // // // // // // // // //   }

// // // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // // //     this.graphics.use(Resources.Shooter.toSprite())
// // // // // // // // // // //     this.scale = new Vector(1.5, 1.5)
// // // // // // // // // // //     this.pos = new Vector(200, 300)
// // // // // // // // // // //   }

// // // // // // // // // // //   onPreUpdate(engine) {
// // // // // // // // // // //     const kb = engine.input.keyboard
// // // // // // // // // // //     let move = Vector.Zero

// // // // // // // // // // //     if (kb.isHeld('KeyW') || kb.isHeld('ArrowUp')) move = move.add(new Vector(0, -1))
// // // // // // // // // // //     if (kb.isHeld('KeyS') || kb.isHeld('ArrowDown')) move = move.add(new Vector(0, 1))
// // // // // // // // // // //     if (kb.isHeld('KeyA') || kb.isHeld('ArrowLeft')) move = move.add(new Vector(-1, 0))
// // // // // // // // // // //     if (kb.isHeld('KeyD') || kb.isHeld('ArrowRight')) move = move.add(new Vector(1, 0))

// // // // // // // // // // //     this.vel = move.equals(Vector.Zero) ? Vector.Zero : move.normalize().scale(this.speed)
// // // // // // // // // // //   }
// // // // // // // // // // // }


// // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur"
// // // // // // // // // // import { Resources } from './resources.js'

// // // // // // // // // // export class Shooter extends Actor {
// // // // // // // // // //   constructor() {
// // // // // // // // // //     super({
// // // // // // // // // //       width: Resources.Shooter.width,
// // // // // // // // // //       height: Resources.Shooter.height,
// // // // // // // // // //       collisionType: CollisionType.Active
// // // // // // // // // //     })
// // // // // // // // // //     this.speed = 200
// // // // // // // // // //   }

// // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // //     this.graphics.use(Resources.Shooter.toSprite())
// // // // // // // // // //     this.scale = new Vector(1.5, 1.5)
// // // // // // // // // //     this.pos = new Vector(200, 300)
// // // // // // // // // //   }

// // // // // // // // // //   onPreUpdate(engine) {
// // // // // // // // // //     const kb = engine.input.keyboard
// // // // // // // // // //     const gp = engine.input.gamepads

// // // // // // // // // //     let move = Vector.Zero

// // // // // // // // // //     // Keyboard input
// // // // // // // // // //     if (kb.isHeld('KeyW') || kb.isHeld('ArrowUp')) move = move.add(new Vector(0, -1))
// // // // // // // // // //     if (kb.isHeld('KeyS') || kb.isHeld('ArrowDown')) move = move.add(new Vector(0, 1))
// // // // // // // // // //     if (kb.isHeld('KeyA') || kb.isHeld('ArrowLeft')) move = move.add(new Vector(-1, 0))
// // // // // // // // // //     if (kb.isHeld('KeyD') || kb.isHeld('ArrowRight')) move = move.add(new Vector(1, 0))

// // // // // // // // // //     // Gamepad input (gebruik eerste aangesloten gamepad)
// // // // // // // // // //     if (gp.length > 0) {
// // // // // // // // // //       const gamepad = gp.at(0) // eerste gamepad
// // // // // // // // // //       if (gamepad) {
// // // // // // // // // //         const x = gamepad.axes.length > 0 ? gamepad.axes[0] : 0 // linker stick horizontaal
// // // // // // // // // //         const y = gamepad.axes.length > 1 ? gamepad.axes[1] : 0 // linker stick verticaal

// // // // // // // // // //         // Dode zone om kleine stickbewegingen te negeren
// // // // // // // // // //         const deadZone = 0.15

// // // // // // // // // //         if (Math.abs(x) > deadZone || Math.abs(y) > deadZone) {
// // // // // // // // // //           move = move.add(new Vector(x, y))
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     if (!move.equals(Vector.Zero)) {
// // // // // // // // // //       move = move.normalize().scale(this.speed)
// // // // // // // // // //     }

// // // // // // // // // //     this.vel = move
// // // // // // // // // //   }
// // // // // // // // // // }


// // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // import { Resources } from "./resources.js";
// // // // // // // // // // import { Bullet } from "./bullet.js";

// // // // // // // // // // export class Shooter extends Actor {
// // // // // // // // // //   constructor() {
// // // // // // // // // //     super({
// // // // // // // // // //       width: Resources.Shooter.width,
// // // // // // // // // //       height: Resources.Shooter.height,
// // // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // // //     });

// // // // // // // // // //     this.speed = 200;
// // // // // // // // // //   }

// // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // // // // //     this.pos = new Vector(200, 300);
// // // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // // //     engine.input.keyboard.on("press", (evt) => {
// // // // // // // // // //       if (evt.key === "Space") {
// // // // // // // // // //         this.shoot(engine);
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   }
// // // // // // // // // //   shoot(engine) {
// // // // // // // // // //     const bullet = new Bullet(this.pos.clone(), this);
// // // // // // // // // //     // Use bullet.png sprite
// // // // // // // // // //     if (bullet.graphics && Resources.Bullet) {
// // // // // // // // // //       bullet.graphics.use(Resources.Bullet.toSprite());
// // // // // // // // // //     }
// // // // // // // // // //     engine.currentScene.add(bullet);
// // // // // // // // // //   }



// // // // // // // // // //   onPreUpdate(engine) {
// // // // // // // // // //     const kb = engine.input.keyboard;
// // // // // // // // // //     let move = Vector.Zero;

// // // // // // // // // //     if (kb.isHeld("KeyW")) move = move.add(new Vector(0, -1));
// // // // // // // // // //     if (kb.isHeld("KeyS")) move = move.add(new Vector(0, 1));
// // // // // // // // // //     if (kb.isHeld("KeyA")) move = move.add(new Vector(-1, 0));
// // // // // // // // // //     if (kb.isHeld("KeyD")) move = move.add(new Vector(1, 0));

// // // // // // // // // //     this.vel = move.normalize().scale(this.speed);
// // // // // // // // // //   }
// // // // // // // // // // }
// // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // import { Resources } from "./resources.js";
// // // // // // // // // import { Bullet } from "./bullet.js";

// // // // // // // // // export class Shooter extends Actor {
// // // // // // // // //   constructor() {
// // // // // // // // //     super({
// // // // // // // // //       width: Resources.Shooter.width,
// // // // // // // // //       height: Resources.Shooter.height,
// // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // //     });

// // // // // // // // //     this.speed = 200;
// // // // // // // // //   }

// // // // // // // // //   onInitialize(engine) {
// // // // // // // // //     this.graphics.use(Resources.Shooter.toSprite());
// // // // // // // // //     this.pos = new Vector(200, 300);
// // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // //     // Remove any previous "press" listeners before adding
// // // // // // // // //     engine.input.keyboard.off("press");

// // // // // // // // //     engine.input.keyboard.on("press", (evt) => {
// // // // // // // // //       console.log("Key pressed:", evt.key);  // Debug: check key name
// // // // // // // // //       if (evt.key === "Space") {
// // // // // // // // //         this.shoot(engine);
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   shoot(engine) {
// // // // // // // // //     const bullet = new Bullet(this.pos.clone(), this);
// // // // // // // // //     if (Resources.Bullet) {
// // // // // // // // //       bullet.graphics.use(Resources.Bullet.toSprite());
// // // // // // // // //     }
// // // // // // // // //     engine.currentScene.add(bullet);
// // // // // // // // //   }

// // // // // // // // //   onPreUpdate(engine) {
// // // // // // // // //     const kb = engine.input.keyboard;
// // // // // // // // //     let move = Vector.Zero;

// // // // // // // // //     if (kb.isHeld("KeyW")) move = move.add(new Vector(0, -1));
// // // // // // // // //     if (kb.isHeld("KeyS")) move = move.add(new Vector(0, 1));
// // // // // // // // //     if (kb.isHeld("KeyA")) move = move.add(new Vector(-1, 0));
// // // // // // // // //     if (kb.isHeld("KeyD")) move = move.add(new Vector(1, 0));

// // // // // // // // //     this.vel = move.equals(Vector.Zero) ? Vector.Zero : move.normalize().scale(this.speed);
// // // // // // // // //   }
// // // // // // // // // }

// // // // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // export class Shooter extends Actor {
// // // // // // // //   constructor() {
// // // // // // // //     super({
// // // // // // // //       width: 40,
// // // // // // // //       height: 60,
// // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // //     });

// // // // // // // //     this.speed = 200;
// // // // // // // //     this.name = "shooter";
// // // // // // // //   }

// // // // // // // //   onInitialize(engine) {
// // // // // // // //     this.graphics.use(Resources.Shooter.toSprite());

// // // // // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // // // // //       const dir = new Vector(0, 0);
// // // // // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // // // // //       this.vel = dir.normalize().scale(this.speed);
// // // // // // // //     });

// // // // // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // // // // //         this.vel = Vector.Zero;
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }
// // // // // // // // }


// // // // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // // // import { Resources } from "./resources.js";

// // // // // // // export class Shooter extends Actor {
// // // // // // //   constructor() {
// // // // // // //     super({
// // // // // // //       width: 40,
// // // // // // //       height: 60,
// // // // // // //       collisionType: CollisionType.Active,
// // // // // // //     });

// // // // // // //     this.speed = 200;
// // // // // // //     this.name = "shooter";
// // // // // // //   }

// // // // // // //   onInitialize(engine) {
// // // // // // //     this.graphics.use(Resources.Shooter.toSprite());

// // // // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // // // //       const dir = new Vector(0, 0);
// // // // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // // // //       this.vel = dir.normalize().scale(this.speed);
// // // // // // //     });

// // // // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // // // //         this.vel = Vector.Zero;
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }
// // // // // // // }

// // // // // // import { Actor, Keys, CollisionType, Vector, Shape } from "excalibur";
// // // // // // import { Resources } from "./resources.js";

// // // // // // export class Shooter extends Actor {
// // // // // //   constructor() {
// // // // // //     super({
// // // // // //       width: 40,
// // // // // //       height: 60,
// // // // // //       collisionType: CollisionType.Active,
// // // // // //     });

// // // // // //     this.speed = 200;
// // // // // //     this.name = "shooter";
// // // // // //   }

// // // // // //   onInitialize(engine) {
// // // // // //     this.graphics.use(Resources.Shooter.toSprite());

// // // // // //     // Define bounding box for collision
// // // // // //     this.collider.set(Shape.Box(this.width, this.height));

// // // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // // //       const dir = new Vector(0, 0);
// // // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // // //       this.vel = dir.normalize().scale(this.speed);
// // // // // //     });

// // // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // // //         this.vel = Vector.Zero;
// // // // // //       }
// // // // // //     });
// // // // // //   }
// // // // // // }


// // // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // // import { Resources } from "./resources.js";

// // // // // export class Shooter extends Actor {
// // // // //   constructor() {
// // // // //     super({
// // // // //       width: 40,
// // // // //       height: 60,
// // // // //       collisionType: CollisionType.Active,
// // // // //     });

// // // // //     this.speed = 200;
// // // // //     this.name = "shooter";  // IMPORTANT: so zombies can identify this actor
// // // // //   }

// // // // //   onInitialize(engine) {

// // // // //     this.graphics.use(Resources.Shooter.toSprite());

// // // // //     // Continuous movement handling (WASD)
// // // // //     engine.input.keyboard.on("hold", (evt) => {
// // // // //       const dir = new Vector(0, 0);
// // // // //       if (evt.key === Keys.W) dir.y = -1;
// // // // //       if (evt.key === Keys.S) dir.y = 1;
// // // // //       if (evt.key === Keys.A) dir.x = -1;
// // // // //       if (evt.key === Keys.D) dir.x = 1;

// // // // //       this.vel = dir.normalize().scale(this.speed);
// // // // //     });

// // // // //     engine.input.keyboard.on("release", (evt) => {
// // // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // // //         this.vel = Vector.Zero;
// // // // //       }
// // // // //     });
// // // // //   }
// // // // // }

// // // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // // import { Resources } from "./resources.js";

// // // // export class Shooter extends Actor {
// // // //   constructor() {
// // // //     super({
// // // //       width: 40,
// // // //       height: 60,
// // // //       collisionType: CollisionType.Active,
// // // //     });

// // // //     this.speed = 200;
// // // //     this.name = "shooter";
// // // //   }

// // // //   onInitialize(engine) {
// // // //     this.graphics.use(Resources.Shooter.toSprite());


// // // //     engine.input.keyboard.on("hold", (evt) => {
// // // //       const dir = new Vector(0, 0);
// // // //       if (evt.key === Keys.W) dir.y = -1;
// // // //       if (evt.key === Keys.S) dir.y = 1;
// // // //       if (evt.key === Keys.A) dir.x = -1;
// // // //       if (evt.key === Keys.D) dir.x = 1;

// // // //       this.vel = dir.normalize().scale(this.speed);
// // // //     });

// // // //     engine.input.keyboard.on("release", (evt) => {
// // // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // // //         this.vel = Vector.Zero;
// // // //       }
// // // //     });
// // // //   }
// // // // }

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
// //     this.lastDirection = new Vector(1, 0);
// //   }

// // onInitialize(engine) {
// //   this.graphics.use(Resources.Shooter.toSprite());
// //   this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

// //   engine.input.keyboard.on("hold", (evt) => {
// //     const dir = new Vector(0, 0);
// //     if (evt.key === Keys.W) dir.y = -1;
// //     if (evt.key === Keys.S) dir.y = 1;
// //     if (evt.key === Keys.A) dir.x = -1;
// //     if (evt.key === Keys.D) dir.x = 1;

// //     if (dir.x !== 0 || dir.y !== 0) {
// //       this.lastDirection = dir.normalize();
// //       this.vel = this.lastDirection.scale(this.speed);

// //       // 🔁 Roteer het sprite in bewegingsrichting
// //       this.rotation = this.lastDirection.toAngle();
// //     }
// //   });

// //   engine.input.keyboard.on("release", (evt) => {
// //     if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// //       this.vel = Vector.Zero;
// //     }
// //   });

// //   engine.input.keyboard.on("press", (evt) => {
// //     if (evt.key === Keys.Space) {
// //       const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
// //       engine.add(bullet);
// //     }
// //   });
// // }

// // }



// // // import { Actor, Keys, CollisionType, Vector } from "excalibur";
// // // import { Resources } from "./resources.js";
// // // import { Bullet } from "./bullet.js";

// // // export class Shooter extends Actor {
// // //   constructor() {
// // //     super({
// // //       width: 40,
// // //       height: 60,
// // //       collisionType: CollisionType.Active,
// // //       name: "shooter",
// // //     });

// // //     this.speed = 200;
// // //     this.lastDirection = new Vector(1, 0);
// // //   }

// // //   onInitialize(engine) {
// // //     this.graphics.use(Resources.Shooter.toSprite());

// // //     engine.input.keyboard.on("hold", (evt) => {
// // //       const dir = new Vector(0, 0);
// // //       if (evt.key === Keys.W) dir.y = -1;
// // //       if (evt.key === Keys.S) dir.y = 1;
// // //       if (evt.key === Keys.A) dir.x = -1;
// // //       if (evt.key === Keys.D) dir.x = 1;

// // //       if (dir.x !== 0 || dir.y !== 0) {
// // //         this.lastDirection = dir.clone().normalize();
// // //         this.vel = this.lastDirection.scale(this.speed);
// // //       }
// // //     });

// // //     engine.input.keyboard.on("release", (evt) => {
// // //       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
// // //         this.vel = Vector.Zero;
// // //       }
// // //     });

// // //     engine.input.keyboard.on("press", (evt) => {
// // //       if (evt.key === Keys.Space) {
// // //         const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
// // //         engine.add(bullet);
// // //       }
// // //     });
// // //   }
// // // }


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
//     this.lastDirection = new Vector(1, 0);
//     this.targetRotation = 0;
//   }

//   onInitialize(engine) {
//     this.graphics.use(Resources.Shooter.toSprite());
//     this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

//     // Beweging en rotatie
//     engine.input.keyboard.on("hold", (evt) => {
//       const dir = new Vector(0, 0);
//       if (evt.key === Keys.W) dir.y = -1;
//       if (evt.key === Keys.S) dir.y = 1;
//       if (evt.key === Keys.A) dir.x = -1;
//       if (evt.key === Keys.D) dir.x = 1;

//       if (dir.x !== 0 || dir.y !== 0) {
//         this.lastDirection = dir.normalize();
//         this.vel = this.lastDirection.scale(this.speed);
//         this.targetRotation = this.lastDirection.toAngle();
//       }
//     });

//     // Stoppen bij loslaten toets
//     engine.input.keyboard.on("release", (evt) => {
//       if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
//         this.vel = Vector.Zero;
//       }
//     });

//     // Schieten
//     engine.input.keyboard.on("press", (evt) => {
//       if (evt.key === Keys.Space) {
//         const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
//         engine.add(bullet);
//       }
//     });
//   }

//   // Linear interpolation for angles (in radians)
// lerpAngle(a, b, t) {
//   let diff = b - a;
//   if (diff < -Math.PI) diff += Math.PI * 2;
//   if (diff > Math.PI) diff -= Math.PI * 2;
//   return a + diff * t;
// }

//   onPreUpdate(engine, delta) {
//     const smoothing = 10; // hoe hoger, hoe sneller draaien
//     this.rotation = this.lerpAngle(this.rotation, this.targetRotation, delta / 1000 * smoothing);
//   }
// }
import { Actor, Keys, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Bullet } from "./bullet.js";

export class Shooter extends Actor {
  constructor() {
    super({
      width: 40,
      height: 60,
      collisionType: CollisionType.Active,
    });

    this.speed = 200;
    this.name = "shooter";
    this.lastDirection = new Vector(1, 0);
    this.targetRotation = 0;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Shooter.toSprite());
    this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

    // Movement
    engine.input.keyboard.on("hold", (evt) => {
      const dir = new Vector(0, 0);
      if (evt.key === Keys.W) dir.y = -1;
      if (evt.key === Keys.S) dir.y = 1;
      if (evt.key === Keys.A) dir.x = -1;
      if (evt.key === Keys.D) dir.x = 1;

      if (dir.x !== 0 || dir.y !== 0) {
        this.lastDirection = dir.normalize();
        this.vel = this.lastDirection.scale(this.speed);
        this.targetRotation = this.lastDirection.toAngle();
      }
    });

    engine.input.keyboard.on("release", (evt) => {
      if ([Keys.W, Keys.A, Keys.S, Keys.D].includes(evt.key)) {
        this.vel = Vector.Zero;
      }
    });

    // Shooting
    engine.input.keyboard.on("press", (evt) => {
      if (evt.key === Keys.Space) {
        const bullet = new Bullet(this.pos.clone(), this.lastDirection.clone());
        engine.add(bullet);
      }
    });
  }

  // Smooth rotation
  lerpAngle(a, b, t) {
    let diff = b - a;
    if (diff < -Math.PI) diff += Math.PI * 2;
    if (diff > Math.PI) diff -= Math.PI * 2;
    return a + diff * t;
  }

  onPreUpdate(engine, delta) {
    const smoothing = 10;
    this.rotation = this.lerpAngle(this.rotation, this.targetRotation, delta / 1000 * smoothing);
  }
}
