
import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources.js";

// Helper functie om een random positie te genereren op de randen van het scherm
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
  // Private velden voor encapsulatie
  #target;
  #speed;

  constructor(target, speed = 100) {
    super({
      width: 50,
      height: 70,
      collisionType: CollisionType.Active,
    });

    this.#target = target;  // doelwit waar zombie naar toe beweegt
    this.#speed = speed;    // bewegingssnelheid van zombie
    this.name = "zombie";  // naam voor herkenning in collisions
  }

  onInitialize(engine) {
    // Laad en schaal het zombie sprite
    const sprite = Resources.Zombie.toSprite();
    sprite.scale = new Vector(0.50, 0.50);
    this.graphics.use(sprite);

    // Als positie nog op 0,0 staat, spawn dan op een random rand
    if (this.pos.equals(Vector.Zero)) {
      this.pos = getRandomEdgePosition(engine.drawWidth, engine.drawHeight);
    }

    // Collision event: schade toebrengen aan shooter bij botsing
    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (other?.name === "shooter") {
        // Check of takeDamage functie beschikbaar is en roep deze aan
        if (typeof other.takeDamage === "function") {
          other.takeDamage(10, engine);
        }
      }
    });
  }

  onPreUpdate(engine, delta) {
    // Beweeg naar target zolang die bestaat en niet dood is
    if (this.#target && !this.#target.isKilled()) {
      const direction = this.#target.pos.sub(this.pos).normalize();
      this.vel = direction.scale(this.#speed);
      this.rotation = direction.toAngle();
    } else {
      // Stop met bewegen als target weg is
      this.vel = Vector.Zero;
    }
  }

  // Methode om zombie te doden en 'killed' event te triggeren
  killZombie() {
    this.emit("killed");
    this.kill();
  }
}

export class FastZombie extends Zombie {
  // Geen private velden nodig, want alleen constructor en onInitialize aangepast
  constructor(target) {
    super(target, 200); // hogere snelheid voor fast zombie
    this.name = "fastzombie";
  }

  onInitialize(engine) {
    super.onInitialize(engine);

    // Vervang sprite door fast zombie sprite
    const fastSprite = Resources.FastZombie.toSprite();
    fastSprite.scale = new Vector(0.50, 0.50);
    this.graphics.use(fastSprite);
  }
}

export { getRandomEdgePosition };
