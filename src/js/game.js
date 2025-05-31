

import { Engine, DisplayMode, Vector, SolverStrategy } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Shooter } from "./shooter.js";
import { Zombie, FastZombie } from "./zombie.js";
import { AmmoPickup } from "./pickup.js";
import { UI } from "./ui.js";
import { Background } from "./background.js";

export class Game extends Engine {
  // Private velden waar mogelijk
  #score;
  #highscore;
  #ui;
  #isGameOver;
  #zombieInterval;
  #ammoInterval;

  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
      physics: {
        solver: SolverStrategy.Arcade,
        gravity: Vector.Zero, // Geen zwaartekracht voor top-down game
      },
    });

    this.#score = 0;
    this.#highscore = this.loadHighscore();
    this.#ui = null;
    this.#isGameOver = false;
    this.#zombieInterval = null;
    this.#ammoInterval = null;

    this.start(ResourceLoader).then(() => this.startGame());
  }

  // Getters om bij private velden te kunnen vanuit buiten deze class indien nodig
  get score() {
    return this.#score;
  }
  get highscore() {
    return this.#highscore;
  }
  get ui() {
    return this.#ui;
  }
  get isGameOver() {
    return this.#isGameOver;
  }

  loadHighscore() {
    const saved = localStorage.getItem("highscore");
    return saved ? parseInt(saved) : 0;
  }

  saveHighscore() {
    if (this.#score > this.#highscore) {
      this.#highscore = this.#score;
      localStorage.setItem("highscore", this.#highscore.toString());
    }
  }

  startGame() {
    // Voeg achtergrond toe
    const background = new Background();
    this.add(background);

    // UI setup
    this.#ui = new UI();
    this.#ui.pos = new Vector(20, 20);
    this.#ui.z = 1000;
    this.add(this.#ui);

    // Shooter toevoegen
    this.shooter = new Shooter();
    this.add(this.shooter);

    // Camera volgen shooter met elastic effect
    this.currentScene.camera.strategy.elasticToActor(this.shooter, 0.1, 0.05);

    // Initialiseer UI met startwaarden
    this.#ui.showScore(this.#score, this.#highscore);
    this.#ui.showAmmo(this.shooter.ammo, this.shooter.totalAmmo);
    this.#ui.showHealth(this.shooter.health / this.shooter.maxHealth);

    // Start zombies en ammo pickups spawnen
    this.startSpawningZombies();
    this.startSpawningAmmo();
  }

  startSpawningZombies() {
    this.spawnZombie();
    this.#zombieInterval = setInterval(() => {
      if (!this.#isGameOver) this.spawnZombie();
    }, 2000);
  }

  startSpawningAmmo() {
    this.#ammoInterval = setInterval(() => {
      if (!this.#isGameOver) {
        const x = Math.random() * this.drawWidth;
        const y = Math.random() * this.drawHeight;
        const pickup = new AmmoPickup(new Vector(x, y));
        this.add(pickup);
      }
    }, 8000);
  }

  spawnZombie() {
    // Bepaal random spawnlocatie aan een kant van het scherm
    const margin = 100;
    const sides = ["top", "bottom", "left", "right"];
    const side = sides[Math.floor(Math.random() * sides.length)];
    let x, y;

    if (side === "top") {
      x = Math.random() * this.drawWidth;
      y = -margin;
    } else if (side === "bottom") {
      x = Math.random() * this.drawWidth;
      y = this.drawHeight + margin;
    } else if (side === "left") {
      x = -margin;
      y = Math.random() * this.drawHeight;
    } else {
      x = this.drawWidth + margin;
      y = Math.random() * this.drawHeight;
    }

    // 40% kans op snelle zombie
    const isFast = Math.random() < 0.4;
    const zombie = isFast ? new FastZombie(this.shooter) : new Zombie(this.shooter);
    zombie.pos = new Vector(x, y);

    // Luister naar "killed" event om score te verhogen en UI bij te werken
    zombie.on("killed", () => {
      this.#score++;
      this.#ui?.showScore(this.#score, this.#highscore);
    });

    // Game over event
    zombie.on("gameover", () => {
      this.gameOver();
    });

    this.add(zombie);
  }

  gameOver() {
    if (!this.#isGameOver) {
      this.#isGameOver = true;
      clearInterval(this.#zombieInterval);
      clearInterval(this.#ammoInterval);
      this.saveHighscore();
      alert(`Game Over! Je score: ${this.#score}\nHighscore: ${this.#highscore}`);
    }
  }
}

// Start het spel
new Game();
