
import { Actor, Keys, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources.js";
import { Bullet } from "./bullet.js";

export class Shooter extends Actor {
  // Privé velden voor encapsulatie
  #speed;
  #targetRotation;
  #currentRotation;
  #ammo;       // current ammo in clip
  #totalAmmo;  // total reserve ammo
  #maxHealth;
  #health;
  #isReloading;
  #reloadTime;

  constructor() {
    super({
      width: 80,
      height: 100,
      collisionType: CollisionType.Active,
    });

    // Snelheid van de speler
    this.#speed = 200;
    this.name = "shooter";

    // Rotaties voor richting van schieten
    this.#targetRotation = 0;
    this.#currentRotation = 0;

    // Munitie beheer
    this.#ammo = 10;
    this.#totalAmmo = 200;

    // Gezondheid van de speler
    this.#maxHealth = 100;
    this.#health = this.#maxHealth;

    // Reload status
    this.#isReloading = false;

    // Schaal van het plaatje
    this.scale = new Vector(0.6, 0.6);

    // Tijd in milliseconden om te herladen
    this.#reloadTime = 2000;
  }

  onInitialize(engine) {
    // Stel het plaatje in van de speler
    this.graphics.use(Resources.Shooter.toSprite());

    // Startpositie in het midden van het scherm
    this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight);

    // Mouse move event: bereken de nieuwe doelrotatie op basis van muispositie
    engine.input.pointers.primary.on("move", (evt) => {
      const mousePos = evt.worldPos;
      const direction = mousePos.sub(this.pos);
      if (direction.magnitude > 0) {
        this.#targetRotation = direction.toAngle();
      }
    });

    // Mouse click event: schiet een kogel als er munitie is, anders reload
    engine.input.pointers.primary.on("down", (evt) => {
      if (this.#ammo > 0 && !this.#isReloading) {
        const direction = Vector.fromAngle(this.#targetRotation);
        const bullet = new Bullet(this.pos.clone(), direction);
        engine.add(bullet);
        this.#ammo--;
        engine.ui?.showAmmo(this.#ammo, this.#totalAmmo);
      } else if (this.#ammo === 0 && !this.#isReloading) {
        this.reload(engine);
      }
    });

    // Keyboard event: herladen bij indrukken van R
    engine.input.keyboard.on("press", (evt) => {
      if (evt.key === Keys.R && !this.#isReloading) {
        this.reload(engine);
      }
    });

    // Botsing met zombies zorgt voor schade
    this.on("collisionstart", (evt) => {
      const other = evt.other?.owner;
      if (other && (other.name === "zombie" || other.name === "fastzombie")) {
        this.takeDamage(10, engine);
      }
    });

    // Initialiseer UI met gezondheid en munitie
    engine.ui?.showHealth(this.#health / this.#maxHealth);
    engine.ui?.showAmmo(this.#ammo, this.#totalAmmo);
    engine.ui?.setReloading(this.#isReloading);
  }

  reload(engine) {
    // Start reload alleen als niet al bezig en clip niet vol en reserve ammo beschikbaar
    if (this.#isReloading) return;
    if (this.#ammo === 10 || this.#totalAmmo === 0) return;

    this.#isReloading = true;
    engine.ui?.setReloading(true);

    // Na reloadtijd wordt munitie aangevuld
    setTimeout(() => {
      const neededAmmo = 10 - this.#ammo;
      const ammoToLoad = Math.min(neededAmmo, this.#totalAmmo);

      this.#ammo += ammoToLoad;
      this.#totalAmmo -= ammoToLoad;

      this.#isReloading = false;
      engine.ui?.showAmmo(this.#ammo, this.#totalAmmo);
      engine.ui?.setReloading(false);
    }, this.#reloadTime);
  }

  addAmmo(amount, engine) {
    // Voeg reserve munitie toe en cap op max 200
    this.#totalAmmo += amount;
    if (this.#totalAmmo > 200) this.#totalAmmo = 200;

    // Auto reload indien clip niet vol en niet aan het herladen
    if (this.#ammo < 10 && !this.#isReloading) {
      const neededAmmo = 10 - this.#ammo;
      const ammoToLoad = Math.min(neededAmmo, this.#totalAmmo);
      this.#ammo += ammoToLoad;
      this.#totalAmmo -= ammoToLoad;
    }

    // Update UI direct
    if (engine?.ui) {
      engine.ui.showAmmo(this.#ammo, this.#totalAmmo);
    }
  }

  takeDamage(amount, engine) {
    // Verminder gezondheid en update UI
    this.#health -= amount;
    if (this.#health < 0) this.#health = 0;

    engine.ui?.showHealth(this.#health / this.#maxHealth);

    // Check dood
    if (this.#health <= 0) {
      this.kill();
      engine.gameOver?.();
    }
  }

  lerpAngle(a, b, t) {
    // Lineaire interpolatie tussen hoeken, houdt rekening met wrap-around
    let diff = b - a;
    if (diff < -Math.PI) diff += Math.PI * 2;
    if (diff > Math.PI) diff -= Math.PI * 2;
    return a + diff * t;
  }

  onPreUpdate(engine, delta) {
    // Beweeg speler op basis van WASD input
    const moveDir = new Vector(0, 0);
    if (engine.input.keyboard.isHeld(Keys.W)) moveDir.y -= 1;
    if (engine.input.keyboard.isHeld(Keys.S)) moveDir.y += 1;
    if (engine.input.keyboard.isHeld(Keys.A)) moveDir.x -= 1;
    if (engine.input.keyboard.isHeld(Keys.D)) moveDir.x += 1;

    if (moveDir.magnitude > 0) {
      this.vel = moveDir.normalize().scale(this.#speed);
    } else {
      this.vel = Vector.Zero;
    }

    // Smooth rotatie richting muis
    const smoothing = 10;
    this.#currentRotation = this.lerpAngle(this.#currentRotation, this.#targetRotation, delta / 1000 * smoothing);
    this.rotation = this.#currentRotation;
  }

  onPostUpdate(engine, delta) {
    // Houd speler binnen bounds van level
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
