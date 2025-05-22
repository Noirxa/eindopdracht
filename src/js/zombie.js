// // // // // // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // // // // // //   constructor(player, spawnPos) {
// // // // // // // // // // // // // //     super({
// // // // // // // // // // // // // //       pos: spawnPos,
// // // // // // // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     this.player = player;
// // // // // // // // // // // // // //     this.speed = 100;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   onInitialize() {
// // // // // // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());
// // // // // // // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // // // // // // //     this.on('collisionstart', (event) => {
// // // // // // // // // // // // // //       if (event.other === this.player) {
// // // // // // // // // // // // // //         console.log('Zombie collided with player! Game Over.');
// // // // // // // // // // // // // //         this.vel = Vector.Zero;
// // // // // // // // // // // // // //         // You can trigger game over here
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   onPreUpdate() {
// // // // // // // // // // // // // //     if (!this.player || !this.player.pos) {
// // // // // // // // // // // // // //       this.vel = Vector.Zero;
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const direction = this.player.pos.sub(this.pos);

// // // // // // // // // // // // // //     if (direction.length > 0) {
// // // // // // // // // // // // // //       this.vel = direction.normalize().scale(this.speed);
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       this.vel = Vector.Zero;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // import { Actor, Vector, CollisionType } from 'excalibur';
// // // // // // // // // // // // // import { Resources } from './resources.js';

// // // // // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // // // // //   constructor(player, spawnPos = new Vector(500, 500)) {
// // // // // // // // // // // // //     super({
// // // // // // // // // // // // //       pos: spawnPos,
// // // // // // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //     this.player = player;
// // // // // // // // // // // // //     this.speed = 100;
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   onInitialize() {
// // // // // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());
// // // // // // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // // // // // //     this.on('collisionstart', (event) => {
// // // // // // // // // // // // //       if (event.other === this.player) {
// // // // // // // // // // // // //         console.log('Zombie collided with player! Game Over.');
// // // // // // // // // // // // //         this.vel = Vector.Zero;
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   onPreUpdate() {
// // // // // // // // // // // // //     if (!this.player || !this.player.pos) {
// // // // // // // // // // // // //       this.vel = Vector.Zero;
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const direction = this.player.pos.sub(this.pos);

// // // // // // // // // // // // //     if (direction.size > 0) {
// // // // // // // // // // // // //       this.vel = direction.normalize().scale(this.speed);
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       this.vel = Vector.Zero;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // }
// // // // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur"
// // // // // // // // // // // // import { Resources } from './resources.js'
// // // // // // // // // // // // import { Shooter } from './shooter.js'

// // // // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // // // //   constructor(target) {
// // // // // // // // // // // //     super({
// // // // // // // // // // // //       width: Resources.Zombie.width,
// // // // // // // // // // // //       height: Resources.Zombie.height,
// // // // // // // // // // // //       collisionType: CollisionType.Active
// // // // // // // // // // // //     })
// // // // // // // // // // // //     this.player = target
// // // // // // // // // // // //     this.speed = 100
// // // // // // // // // // // //   }

// // // // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite())
// // // // // // // // // // // //     this.scale = new Vector(1.5, 1.5)
// // // // // // // // // // // //     this.pos = new Vector(800, 300)

// // // // // // // // // // // //     this.on('collisionstart', (event) => this.hitSomething(event))
// // // // // // // // // // // //   }

// // // // // // // // // // // //   hitSomething(event) {
// // // // // // // // // // // //     if (event.other.owner instanceof Shooter) {
// // // // // // // // // // // //       console.log('💥 Zombie raakte de speler!')
// // // // // // // // // // // //       event.other.owner.kill() // Speler gaat dood (of stop game)
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }

// // // // // // // // // // // //   onPreUpdate() {
// // // // // // // // // // // //     const direction = this.player.pos.sub(this.pos)
// // // // // // // // // // // //     this.vel = direction.normalize().scale(this.speed)
// // // // // // // // // // // //   }
// // // // // // // // // // // // }
// // // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // // //   constructor(player, spawnPos) {
// // // // // // // // // // //     super({
// // // // // // // // // // //       pos: spawnPos,
// // // // // // // // // // //       width: Resources.Zombie.width,
// // // // // // // // // // //       height: Resources.Zombie.height,
// // // // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // // // //     });

// // // // // // // // // // //     this.player = player;
// // // // // // // // // // //     this.speed = 80;
// // // // // // // // // // //   }

// // // // // // // // // // //   onInitialize() {
// // // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());
// // // // // // // // // // //     this.scale = new Vector(1.5, 1.5);
// // // // // // // // // // //   }


// // // // // // // // // // // onPreUpdate() {
// // // // // // // // // // //   if (!this.player || !this.player.pos) {
// // // // // // // // // // //     this.vel = Vector.Zero;
// // // // // // // // // // //     return;
// // // // // // // // // // //   }

// // // // // // // // // // //   const direction = this.player.pos.sub(this.pos);
// // // // // // // // // // //   if (direction.length > 0) {
// // // // // // // // // // //   this.vel = direction.normalize().scale(this.speed);
// // // // // // // // // // // } else {
// // // // // // // // // // //   this.vel = Vector.Zero;
// // // // // // // // // // // }

// // // // // // // // // // // }

// // // // // // // // // // // }
// // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // //   constructor(player) {
// // // // // // // // // //     super({
// // // // // // // // // //       width: Resources.Zombie.width,
// // // // // // // // // //       height: Resources.Zombie.height,
// // // // // // // // // //       collisionType: CollisionType.Passive,
// // // // // // // // // //     });
// // // // // // // // // //     this.player = player;
// // // // // // // // // //     this.speed = 100;
// // // // // // // // // //   }

// // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());
// // // // // // // // // //     this.scale = new Vector(1.5, 1.5);

// // // // // // // // // //     // Spawn at random edge of the screen
// // // // // // // // // //     const side = Math.floor(Math.random() * 4);
// // // // // // // // // //     switch (side) {
// // // // // // // // // //       case 0: // top
// // // // // // // // // //         this.pos = new Vector(Math.random() * engine.drawWidth, -this.height);
// // // // // // // // // //         break;
// // // // // // // // // //       case 1: // bottom
// // // // // // // // // //         this.pos = new Vector(Math.random() * engine.drawWidth, engine.drawHeight + this.height);
// // // // // // // // // //         break;
// // // // // // // // // //       case 2: // left
// // // // // // // // // //         this.pos = new Vector(-this.width, Math.random() * engine.drawHeight);
// // // // // // // // // //         break;
// // // // // // // // // //       case 3: // right
// // // // // // // // // //         this.pos = new Vector(engine.drawWidth + this.width, Math.random() * engine.drawHeight);
// // // // // // // // // //         break;
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   onPreUpdate(engine, delta) {
// // // // // // // // // //     const direction = this.player.pos.sub(this.pos);
// // // // // // // // // //     if (!direction.equals(Vector.Zero)) {
// // // // // // // // // //       this.vel = direction.normalize().scale(this.speed);
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // // }


// // // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // // // function getRandomEdgePosition(width, height) {
// // // // // // // // // //   const edge = Math.floor(Math.random() * 4);
// // // // // // // // // //   switch (edge) {
// // // // // // // // // //     case 0: return new Vector(Math.random() * width, 0);
// // // // // // // // // //     case 1: return new Vector(width, Math.random() * height);
// // // // // // // // // //     case 2: return new Vector(Math.random() * width, height);
// // // // // // // // // //     case 3: return new Vector(0, Math.random() * height);
// // // // // // // // // //     default: return new Vector(0, 0); // fallback to avoid undefined
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // export class Zombie extends Actor {
// // // // // // // // // //   constructor(target) {
// // // // // // // // // //     super({
// // // // // // // // // //       width: 40,
// // // // // // // // // //       height: 60,
// // // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // // //     });

// // // // // // // // // //     this.target = target;
// // // // // // // // // //     this.speed = 100;
// // // // // // // // // //   }

// // // // // // // // // //   onInitialize(engine) {
// // // // // // // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // // // // // // //     this.on('collisionstart', (evt) => {
// // // // // // // // // //       if (evt.other === this.target) {
// // // // // // // // // //         engine.stop();
// // // // // // // // // //         alert('Game Over! Een zombie heeft je geraakt.');
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   }

// // // // // // // // // //   onPreUpdate(engine, delta) {
// // // // // // // // // //     if (this.target) {
// // // // // // // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // // // // // // //       this.vel = direction.scale(this.speed);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   kill() {
// // // // // // // // // //     this.emit("killed");
// // // // // // // // // //     super.kill();
// // // // // // // // // //   }
// // // // // // // // // // }


// // // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // // function getRandomEdgePosition(width, height) {
// // // // // // // // //   const edge = Math.floor(Math.random() * 4);
// // // // // // // // //   switch (edge) {
// // // // // // // // //     case 0: return new Vector(Math.random() * width, 0); // boven
// // // // // // // // //     case 1: return new Vector(width, Math.random() * height); // rechts
// // // // // // // // //     case 2: return new Vector(Math.random() * width, height); // onder
// // // // // // // // //     case 3: return new Vector(0, Math.random() * height); // links
// // // // // // // // //     default: return new Vector(0, 0);
// // // // // // // // //   }
// // // // // // // // // }

// // // // // // // // // export class Zombie extends Actor {
// // // // // // // // //   constructor(target) {
// // // // // // // // //     super({
// // // // // // // // //       width: 40,
// // // // // // // // //       height: 60,
// // // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // // //     });

// // // // // // // // //     this.target = target;
// // // // // // // // //     this.speed = 100;
// // // // // // // // //   }

// // // // // // // // //   onInitialize(engine) {
// // // // // // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // // // // // //     this.on('collisionstart', (evt) => {
// // // // // // // // //       if (evt.other === this.target) {
// // // // // // // // //         this.emit("gameover"); // stuur signaal naar Game
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   }

// // // // // // // // //   onPreUpdate(engine, delta) {
// // // // // // // // //     if (this.target) {
// // // // // // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // // // // // //       this.vel = direction.scale(this.speed);
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   kill() {
// // // // // // // // //     this.emit("killed");
// // // // // // // // //     super.kill();
// // // // // // // // //   }
// // // // // // // // // }


// // // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // // import { Resources } from "./resources.js";

// // // // // // // // function getRandomEdgePosition(width, height) {
// // // // // // // //   const edge = Math.floor(Math.random() * 4);
// // // // // // // //   switch (edge) {
// // // // // // // //     case 0: return new Vector(Math.random() * width, 0); // boven
// // // // // // // //     case 1: return new Vector(width, Math.random() * height); // rechts
// // // // // // // //     case 2: return new Vector(Math.random() * width, height); // onder
// // // // // // // //     case 3: return new Vector(0, Math.random() * height); // links
// // // // // // // //     default: return new Vector(0, 0);
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // export class Zombie extends Actor {
// // // // // // // //   constructor(target) {
// // // // // // // //     super({
// // // // // // // //       width: 40,
// // // // // // // //       height: 60,
// // // // // // // //       collisionType: CollisionType.Active,
// // // // // // // //     });

// // // // // // // //     this.target = target;
// // // // // // // //     this.speed = 100;
// // // // // // // //   }

// // // // // // // //   onInitialize(engine) {
// // // // // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // // // // //     this.on('collisionstart', (evt) => {
// // // // // // // //       if (evt.other === this.target) {
// // // // // // // //         this.emit("gameover"); // stuur signaal naar Game
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }

// // // // // // // //   onPreUpdate(engine, delta) {
// // // // // // // //     if (this.target) {
// // // // // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // // // // //       this.vel = direction.scale(this.speed);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   kill() {
// // // // // // // //     this.emit("killed");
// // // // // // // //     super.kill();
// // // // // // // //   }
// // // // // // // // }


// // // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // // import { Resources } from "./resources.js";

// // // // // // // function getRandomEdgePosition(width, height) {
// // // // // // //   const edge = Math.floor(Math.random() * 4);
// // // // // // //   switch (edge) {
// // // // // // //     case 0: return new Vector(Math.random() * width, 0);
// // // // // // //     case 1: return new Vector(width, Math.random() * height);
// // // // // // //     case 2: return new Vector(Math.random() * width, height);
// // // // // // //     case 3: return new Vector(0, Math.random() * height);
// // // // // // //     default: return new Vector(0, 0);
// // // // // // //   }
// // // // // // // }

// // // // // // // export class Zombie extends Actor {
// // // // // // //   constructor(target) {
// // // // // // //     super({
// // // // // // //       width: 40,
// // // // // // //       height: 60,
// // // // // // //       collisionType: CollisionType.Active,
// // // // // // //     });

// // // // // // //     this.target = target;
// // // // // // //     this.speed = 100;
// // // // // // //   }

// // // // // // //   onInitialize(engine) {
// // // // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // // // //     this.on('collisionstart', (evt) => {
// // // // // // //       if (evt.other.owner && evt.other.owner.name === "shooter") {
// // // // // // //         evt.other.owner.kill(); // Shooter verdwijnt
// // // // // // //         this.emit("gameover"); // Signaal naar game engine
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }

// // // // // // //   onPreUpdate(engine, delta) {
// // // // // // //     if (this.target && !this.target.isKilled()) {
// // // // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // // // //       this.vel = direction.scale(this.speed);
// // // // // // //     } else {
// // // // // // //       this.vel = Vector.Zero;
// // // // // // //     }
// // // // // // //   }
// // // // // // // }


// // // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // // import { Resources } from "./resources.js";

// // // // // // function getRandomEdgePosition(width, height) {
// // // // // //   const edge = Math.floor(Math.random() * 4);
// // // // // //   switch (edge) {
// // // // // //     case 0: return new Vector(Math.random() * width, 0);                 // Top
// // // // // //     case 1: return new Vector(width, Math.random() * height);           // Right
// // // // // //     case 2: return new Vector(Math.random() * width, height);           // Bottom
// // // // // //     case 3: return new Vector(0, Math.random() * height);               // Left
// // // // // //     default: return new Vector(0, 0);
// // // // // //   }
// // // // // // }

// // // // // // export class Zombie extends Actor {
// // // // // //   constructor(target) {
// // // // // //     super({
// // // // // //       width: 40,
// // // // // //       height: 60,
// // // // // //       collisionType: CollisionType.Active,
// // // // // //     });

// // // // // //     this.target = target;
// // // // // //     this.speed = 100;
// // // // // //   }

// // // // // //   onInitialize(engine) {
// // // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // // //     this.on('collisionstart', (evt) => {
// // // // // //       if (evt.other.owner && evt.other.owner.name === "shooter") {
// // // // // //         evt.other.owner.kill();  // Shooter disappears
// // // // // //         alert("Game Over!");
// // // // // //         engine.stop();     // Stop the game
// // // // // //       }
// // // // // //     });
// // // // // //   }

// // // // // //   onPreUpdate(engine, delta) {
// // // // // //     if (this.target && !this.target.isKilled()) {
// // // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // // //       this.vel = direction.scale(this.speed);
// // // // // //     } else {
// // // // // //       this.vel = Vector.Zero;
// // // // // //     }
// // // // // //   }
// // // // // // }


// // // // // import { Actor, Vector, CollisionType } from "excalibur";
// // // // // import { Resources } from "./resources.js";

// // // // // function getRandomEdgePosition(width, height) {
// // // // //   const edge = Math.floor(Math.random() * 4);
// // // // //   switch (edge) {
// // // // //     case 0: return new Vector(Math.random() * width, 0);       // Top
// // // // //     case 1: return new Vector(width, Math.random() * height);  // Right
// // // // //     case 2: return new Vector(Math.random() * width, height);  // Bottom
// // // // //     case 3: return new Vector(0, Math.random() * height);      // Left
// // // // //     default: return new Vector(0, 0);
// // // // //   }
// // // // // }

// // // // // export class Zombie extends Actor {
// // // // //   constructor(target) {
// // // // //     super({
// // // // //       width: 40,
// // // // //       height: 60,
// // // // //       collisionType: CollisionType.Active,
// // // // //     });

// // // // //     this.target = target;
// // // // //     this.speed = 100;
// // // // //   }

// // // // //   onInitialize(engine) {
// // // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // // //     this.graphics.use(Resources.Zombie.toSprite());

// // // // //     this.on('collisionstart', (evt) => {
// // // // //       // evt.other.owner is the actor collided with (your shooter)
// // // // //       if (evt.other.owner && evt.other.owner.name === "shooter") {
// // // // //         evt.other.owner.kill();  // shooter disappears
// // // // //         alert("Game Over!");
// // // // //         engine.stop();           // stop game engine
// // // // //       }
// // // // //     });
// // // // //   }

// // // // //   onPreUpdate(engine, delta) {
// // // // //     if (this.target && !this.target.isKilled()) {
// // // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // // //       this.vel = direction.scale(this.speed);
// // // // //     } else {
// // // // //       this.vel = Vector.Zero;
// // // // //     }
// // // // //   }
// // // // // }

// // // // import { Actor, Vector, CollisionType, Shape } from "excalibur";
// // // // import { Resources } from "./resources.js";

// // // // function getRandomEdgePosition(width, height) {
// // // //   const edge = Math.floor(Math.random() * 4);
// // // //   switch (edge) {
// // // //     case 0: return new Vector(Math.random() * width, 0);
// // // //     case 1: return new Vector(width, Math.random() * height);
// // // //     case 2: return new Vector(Math.random() * width, height);
// // // //     case 3: return new Vector(0, Math.random() * height);
// // // //     default: return new Vector(0, 0);
// // // //   }
// // // // }

// // // // export class Zombie extends Actor {
// // // //   constructor(target) {
// // // //     super({
// // // //       width: 40,
// // // //       height: 60,
// // // //       collisionType: CollisionType.Active,
// // // //     });

// // // //     this.target = target;
// // // //     this.speed = 100;
// // // //     this.name = "zombie";
// // // //   }

// // // //   onInitialize(engine) {
// // // //     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // // //     this.graphics.use(Resources.Zombie.toSprite());

   

// // // //     this.on('collisionstart', (evt) => {
// // // //       console.log("Collision detected between", this.name, "and", evt.other.owner?.name);
// // // //       if (evt.other.owner && evt.other.owner.name === "shooter") {
// // // //         evt.other.owner.kill();
// // // //         alert("Game Over!");
// // // //         engine.stop();
// // // //       }
// // // //     });
// // // //   }

// // // //   onPreUpdate(engine, delta) {
// // // //     if (this.target && !this.target.isKilled()) {
// // // //       const direction = this.target.pos.sub(this.pos).normalize();
// // // //       this.vel = direction.scale(this.speed);
// // // //     } else {
// // // //       this.vel = Vector.Zero;
// // // //     }
// // // //   }
// // // // }


// // here works the game over
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

// export class Zombie extends Actor {
//   constructor(target, speed = 100) {
//     super({
//       width: 40,
//       height: 60,
//       collisionType: CollisionType.Active,
//     });

//     this.target = target;
//     this.speed = speed;
//     this.name = "zombie";
//   }

//   onInitialize(engine) {
//     this.graphics.use(Resources.Zombie.toSprite());
//     this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);

//     this.on("collisionstart", (evt) => {
//       if (evt.other.owner && evt.other.owner.name === "shooter" && !evt.other.owner.isKilled()) {
//         evt.other.owner.kill();
//         alert("Game Over!");
//         engine.stop();
//       }
//     });
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
//     this.emit("killed");
//     this.kill();
//   }
// }



import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

// Hulpfunctie om zombies op een willekeurige rand te laten verschijnen
function getRandomEdgePosition(width, height) {
  const edge = Math.floor(Math.random() * 4);
  switch (edge) {
    case 0: return new Vector(Math.random() * width, 0); // boven
    case 1: return new Vector(width, Math.random() * height); // rechts
    case 2: return new Vector(Math.random() * width, height); // onder
    case 3: return new Vector(0, Math.random() * height); // links
    default: return new Vector(0, 0);
  }
}

export class Zombie extends Actor {
  constructor(target, speed = 100) {
    super({
      width: 40,
      height: 60,
      collisionType: CollisionType.Active,
    });

    this.target = target;
    this.speed = speed;
    this.name = "zombie";
  }

  onInitialize(engine) {
    // Alleen instellen als geen sprite of positie is gezet
    if (!this.graphics.current) {
      this.graphics.use(Resources.Zombie.toSprite());
    }

    if (this.pos.equals(Vector.Zero)) {
      this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
    }

    // Botsing met speler = game over
    this.on("collisionstart", (evt) => {
      if (evt.other.owner && evt.other.owner.name === "shooter" && !evt.other.owner.isKilled()) {
        evt.other.owner.kill();
        this.emit("gameover");
      }
    });
  }

  onPreUpdate(engine, delta) {
    if (this.target && !this.target.isKilled()) {
      const direction = this.target.pos.sub(this.pos).normalize();
      this.vel = direction.scale(this.speed);
    } else {
      this.vel = Vector.Zero;
    }
  }

  killZombie() {
    this.emit("killed");
    this.kill();
  }
}

// 🧟‍♂️ FastZombie: subclass met hogere snelheid en andere sprite
export class FastZombie extends Zombie {
  constructor(target) {
    super(target, 200); // snellere snelheid
    this.name = "fastzombie";
  }

  onInitialize(engine) {
    this.graphics.use(Resources.FastZombie.toSprite());
    this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
    super.onInitialize(engine);
  }
}
