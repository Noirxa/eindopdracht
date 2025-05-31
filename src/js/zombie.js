

// // // import { Actor, Vector, CollisionType } from "excalibur";
// // // import { Resources } from "./resources.js";

// // // function getRandomEdgePosition(width, height) {
// // //   const edge = Math.floor(Math.random() * 4);
// // //   switch (edge) {
// // //     case 0: return new Vector(Math.random() * width, 0); // top
// // //     case 1: return new Vector(width, Math.random() * height); // right
// // //     case 2: return new Vector(Math.random() * width, height); // bottom
// // //     case 3: return new Vector(0, Math.random() * height); // left
// // //     default: return new Vector(0, 0);
// // //   }
// // // }

// // // export class Zombie extends Actor {
// // //   constructor(target, speed = 100) {
// // //     super({
// // //       width: 40,
// // //       height: 60,
// // //       collisionType: CollisionType.Active,
// // //     });

// // //     this.target = target;
// // //     this.speed = speed;
// // //     this.name = "zombie";
// // //   }

// // //   onInitialize(engine) {
// // //     // Choose appropriate sprite
// // //     const sprite = this.name === "fastzombie"
// // //       ? Resources.FastZombie.toSprite()
// // //       : Resources.Zombie.toSprite();
// // //     this.graphics.use(sprite);

// // //     // Random edge spawn
// // //     if (this.pos.equals(Vector.Zero)) {
// // //       this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // //     }

// // //     // Collision with shooter = game over
// // //     this.on("collisionstart", (evt) => {
// // //       const other = evt.other?.owner;
// // //       if (other?.name === "shooter" && !other.isKilled()) {
// // //         other.kill();
// // //         this.emit("gameover");
// // //       }
// // //     });
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     if (this.target && !this.target.isKilled()) {
// // //       const direction = this.target.pos.sub(this.pos).normalize();
// // //       this.vel = direction.scale(this.speed);
// // //       this.rotation = direction.toAngle();
// // //     } else {
// // //       this.vel = Vector.Zero;
// // //     }
// // //   }

// // //   killZombie() {
// // //     this.emit("killed");
// // //     this.kill();
// // //   }
// // // }

// // // export class FastZombie extends Zombie {
// // //   constructor(target) {
// // //     super(target, 200);
// // //     this.name = "fastzombie";
// // //   }
// // // }

// // // export { getRandomEdgePosition };
// // // import { Actor, Vector, CollisionType } from "excalibur";
// // // import { Resources } from "./resources.js";

// // // function getRandomEdgePosition(width, height) {
// // //   const edge = Math.floor(Math.random() * 4);
// // //   switch (edge) {
// // //     case 0: return new Vector(Math.random() * width, 0); // top
// // //     case 1: return new Vector(width, Math.random() * height); // right
// // //     case 2: return new Vector(Math.random() * width, height); // bottom
// // //     case 3: return new Vector(0, Math.random() * height); // left
// // //     default: return new Vector(0, 0);
// // //   }
// // // }

// // // export class Zombie extends Actor {
// // //   constructor(target, speed = 100) {
// // //     super({
// // //       width: 30,       // smaller width
// // //       height: 45,      // smaller height
// // //       collisionType: CollisionType.Active,
// // //     });

// // //     this.target = target;
// // //     this.speed = speed;
// // //     this.name = "zombie";


// // //   }

// // //   onInitialize(engine) {
// // //     // Choose appropriate sprite
// // //     const sprite = this.name === "fastzombie"
// // //       ? Resources.FastZombie.toSprite()
// // //       : Resources.Zombie.toSprite();

// // //     this.graphics.use(sprite);

// // //     // Scale sprite down to match smaller size
// // //     this.scale.setTo(0.75, 0.75);

// // //     // Random edge spawn
// // //     if (this.pos.equals(Vector.Zero)) {
// // //       this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// // //     }

// // //     // Collision with shooter = game over
// // //     this.on("collisionstart", (evt) => {
// // //       const other = evt.other?.owner;
// // //       if (other?.name === "shooter" && !other.isKilled()) {
// // //         other.kill();
// // //         this.emit("gameover");
// // //       }
// // //     });
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     if (this.target && !this.target.isKilled()) {
// // //       const direction = this.target.pos.sub(this.pos).normalize();
// // //       this.vel = direction.scale(this.speed);
// // //       this.rotation = direction.toAngle();
// // //     } else {
// // //       this.vel = Vector.Zero;
// // //     }
// // //   }

// // //   killZombie() {
// // //     this.emit("killed");
// // //     this.kill();
// // //   }
// // // }

// // // export class FastZombie extends Zombie {
// // //   constructor(target) {
// // //     super(target, 200);
// // //     this.name = "fastzombie";
// // //   }
// // // }

// // // export { getRandomEdgePosition };


// // import { Actor, Vector, CollisionType } from "excalibur";
// // import { Resources } from "./resources.js";

// // // Helper function to spawn at random screen edge
// // function getRandomEdgePosition(width, height) {
// //   const edge = Math.floor(Math.random() * 4);
// //   switch (edge) {
// //     case 0: return new Vector(Math.random() * width, 0); // top
// //     case 1: return new Vector(width, Math.random() * height); // right
// //     case 2: return new Vector(Math.random() * width, height); // bottom
// //     case 3: return new Vector(0, Math.random() * height); // left
// //     default: return new Vector(0, 0);
// //   }
// // }

// // export class Zombie extends Actor {
// //   constructor(target, speed = 100) {
// //     super({
// //       width: 50,  // collision box width (larger if needed)
// //       height: 70, // collision box height (larger if needed)
// //       collisionType: CollisionType.Active,
// //     });

// //     this.target = target;
// //     this.speed = speed;
// //     this.name = "zombie";
// //   }

// //   onInitialize(engine) {
// //     // Choose appropriate sprite
// //     const sprite = this.name === "fastzombie"
// //       ? Resources.FastZombie.toSprite()
// //       : Resources.Zombie.toSprite();

// //     // Scale down only the visual sprite
// //     sprite.scale = new Vector(0.50, 0.50);
// //     this.graphics.use(sprite);

// //     // Random edge spawn
// //     if (this.pos.equals(Vector.Zero)) {
// //       this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
// //     }

// //     // Collision with shooter = game over
// //     this.on("collisionstart", (evt) => {
// //       const other = evt.other?.owner;
// //       if (other?.name === "shooter" && !other.isKilled()) {
// //         other.kill();
// //         this.emit("gameover");
// //       }
// //     });
// //   }

// //   onPreUpdate(engine, delta) {
// //     if (this.target && !this.target.isKilled()) {
// //       const direction = this.target.pos.sub(this.pos).normalize();
// //       this.vel = direction.scale(this.speed);
// //       this.rotation = direction.toAngle();
// //     } else {
// //       this.vel = Vector.Zero;
// //     }
// //   }

// //   killZombie() {
// //     this.emit("killed");
// //     this.kill();
// //   }
// // }

// // export class FastZombie extends Zombie {
// //   constructor(target) {
// //     super(target, 200);
// //     this.name = "fastzombie";
// //   }
// // }

// // export { getRandomEdgePosition };


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
//       width: 50,
//       height: 70,
//       collisionType: CollisionType.Active,
//     });

//     this.target = target;
//     this.speed = speed;
//     this.name = "zombie";

//     this.maxHealth = 100;
//     this.health = this.maxHealth;
//   }

//   onInitialize(engine) {
//     const sprite = Resources.Zombie.toSprite();
//     sprite.scale = new Vector(0.5, 0.5);
//     this.graphics.use(sprite);

//     if (this.pos.equals(Vector.Zero)) {
//       this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
//     }
//   }

//   onPreUpdate(engine, delta) {
//     if (this.target && !this.target.isKilled()) {
//       const direction = this.target.pos.sub(this.pos).normalize();
//       this.vel = direction.scale(this.speed);
//       this.rotation = direction.toAngle();
//     } else {
//       this.vel = Vector.Zero;
//     }
//   }

//   takeDamage(amount) {
//     this.health -= amount;
//     if (this.health <= 0) {
//       this.killZombie();
//     }
//   }

//   killZombie() {
//     this.emit("killed");
//     this.kill();
//   }
// }

// export class FastZombie extends Zombie {
//   constructor(target) {
//     super(target, 200);
//     this.name = "fastzombie";
//   }
// }

// export { getRandomEdgePosition };

import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

// Helper to spawn at random edge
function getRandomEdgePosition(width, height) {
  const edge = Math.floor(Math.random() * 4);
  switch (edge) {
    case 0: return new Vector(Math.random() * width, 0); // top
    case 1: return new Vector(width, Math.random() * height); // right
    case 2: return new Vector(Math.random() * width, height); // bottom
    case 3: return new Vector(0, Math.random() * height); // left
    default: return new Vector(0, 0);
  }
}

export class Zombie extends Actor {
  constructor(target, speed = 100) {
    super({
      width: 50,
      height: 70,
      collisionType: CollisionType.Active,
    });

    this.target = target;
    this.speed = speed;
    this.name = "zombie";
  }

  onInitialize(engine) {
    const sprite = Resources.Zombie.toSprite();
    sprite.scale = new Vector(0.50, 0.50);
    this.graphics.use(sprite);

    if (this.pos.equals(Vector.Zero)) {
      this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
    }

    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (other?.name === "shooter") {
        // Damage shooter by 10 health per collision
        if (typeof other.takeDamage === "function") {
          other.takeDamage(10, engine);
        }
      }
    });
  }

  onPreUpdate(engine, delta) {
    if (this.target && !this.target.isKilled()) {
      const direction = this.target.pos.sub(this.pos).normalize();
      this.vel = direction.scale(this.speed);
      this.rotation = direction.toAngle();
    } else {
      this.vel = Vector.Zero;
    }
  }

  killZombie() {
    this.emit("killed");
    this.kill();
  }
}

export class FastZombie extends Zombie {
  constructor(target) {
    super(target, 200); // faster speed for fast zombie
    this.name = "fastzombie";
  }

  onInitialize(engine) {
    super.onInitialize(engine);

    // Override sprite for fast zombie
    const fastSprite = Resources.FastZombie.toSprite();
    fastSprite.scale = new Vector(0.50, 0.50);
    this.graphics.use(fastSprite);
  }
}

export { getRandomEdgePosition };

