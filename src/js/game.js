// // // // // // // import '../css/style.css'
// // // // // // // import { Actor, Engine, Vector, DisplayMode } from "excalibur"
// // // // // // // import { Resources, ResourceLoader } from './resources.js'
// // // // // // // import { Background } from './background.js';


// // // // // // // export class Game extends Engine {

// // // // // // //     constructor() {
// // // // // // //         super({ 
// // // // // // //             width: 1280,
// // // // // // //             height: 720,
// // // // // // //             maxFps: 60,
// // // // // // //             displayMode: DisplayMode.FitScreen
// // // // // // //          })
// // // // // // //         this.start(ResourceLoader).then(() => this.startGame())
// // // // // // //     }

// // // // // // //     startGame() {
// // // // // // //         console.log("start de game!")
// // // // // // //         this.add(new Background())
        
// // // // // // //         const fish = new Actor()
// // // // // // //         fish.graphics.use(Resources.Fish.toSprite())
// // // // // // //         fish.pos = new Vector(500, 300)
// // // // // // //         fish.vel = new Vector(-10,0)
// // // // // // //         fish.events.on("exitviewport", (e) => this.fishLeft(e))
// // // // // // //         this.add(fish)
// // // // // // //     }

// // // // // // //     fishLeft(e) {
// // // // // // //         e.target.pos = new Vector(1350, 300)
// // // // // // //     }
// // // // // // // }

// // // // // // // // new Game()
// // // // // // // import '../css/style.css'
// // // // // // // import { Engine, DisplayMode } from "excalibur"
// // // // // // // import { Resources, ResourceLoader } from './resources.js'
// // // // // // // import { Background } from './background.js'
// // // // // // // // import { Fish } from './fish.js'
// // // // // // // import { Shooter } from './shooter.js'
// // // // // // // import { Zombie } from './zombie.js'

// // // // // // // export class Game extends Engine {
// // // // // // //     constructor() {
// // // // // // //         super({ 
// // // // // // //             width: 1280,
// // // // // // //             height: 720,
// // // // // // //             maxFps: 60,
// // // // // // //             displayMode: DisplayMode.FitScreen
// // // // // // //         })
// // // // // // //         this.start(ResourceLoader).then(() => this.startGame())
// // // // // // //     }

// // // // // // //     startGame() {
// // // // // // //         const background = new Background()
// // // // // // //         // const fish = new Fish()
// // // // // // //         const shooter = new Shooter()
// // // // // // //         const zombie = new Zombie()

// // // // // // //         this.add(background)
// // // // // // //         // this.add(fish)
// // // // // // //         this.add(shooter)
// // // // // // //         this.add(zombie)
// // // // // // //     }
// // // // // // // }

// // // // // //     // // new Game()
// // // // // //     // import '../css/style.css'
// // // // // //     // import { Engine, DisplayMode } from 'excalibur'
// // // // // //     // import { Resources, ResourceLoader } from './resources.js'
// // // // // //     // import { Background } from './background.js'
// // // // // //     // import { Shooter } from './shooter.js'
// // // // // //     // import { Zombie } from './zombie.js'

// // // // // //     // export class Game extends Engine {
// // // // // //     //   constructor() {
// // // // // //     //     super({
// // // // // //     //       width: 1280,
// // // // // //     //       height: 720,
// // // // // //     //       maxFps: 60,
// // // // // //     //       displayMode: DisplayMode.FitScreen
// // // // // //     //     })

// // // // // //     //     this.start(ResourceLoader).then(() => this.startGame())
// // // // // //     //   }

// // // // // //     //   startGame() {
// // // // // //     //     const background = new Background()
// // // // // //     //     const shooter = new Shooter()
// // // // // //     //     const zombie = new Zombie(shooter) // pass shooter as target

// // // // // //     //     this.add(background)
// // // // // //     //     this.add(shooter)
// // // // // //     //     this.add(zombie)
// // // // // //     //   }
// // // // // //     // }

// // // // // //     // new Game()
// // // // // //     import '../css/style.css';
// // // // // //     import { Engine, DisplayMode, Vector } from 'excalibur';
// // // // // //     import { Resources, ResourceLoader } from './resources.js';
// // // // // //     import { Background } from './background.js';
// // // // // //     import { Shooter } from './shooter.js';
// // // // // //     import { Zombie } from './zombie.js';

// // // // // //     function getRandomSpawnPosition(width, height) {
// // // // // //     const edge = Math.floor(Math.random() * 4);
// // // // // //     switch (edge) {
// // // // // //         case 0: // top
// // // // // //         return new Vector(Math.random() * width, 0);
// // // // // //         case 1: // right
// // // // // //         return new Vector(width, Math.random() * height);
// // // // // //         case 2: // bottom
// // // // // //         return new Vector(Math.random() * width, height);
// // // // // //         case 3: // left
// // // // // //         return new Vector(0, Math.random() * height);
// // // // // //     }
// // // // // //     }

// // // // // //     export class Game extends Engine {
// // // // // //     constructor() {
// // // // // //         super({
// // // // // //         width: 1280,
// // // // // //         height: 720,
// // // // // //         maxFps: 60,
// // // // // //         displayMode: DisplayMode.FitScreen,
// // // // // //         });

// // // // // //         this.start(ResourceLoader).then(() => this.startGame());
// // // // // //     }

// // // // // //     startGame() {
// // // // // //         const background = new Background();
// // // // // //         this.shooter = new Shooter();

// // // // // //         this.add(background);
// // // // // //         this.add(this.shooter);

// // // // // //         // Spawn initial zombie
// // // // // //         const spawnPos = getRandomSpawnPosition(this.drawWidth, this.drawHeight);
// // // // // //         const zombie = new Zombie(this.shooter, spawnPos);
// // // // // //         this.add(zombie);

// // // // // //         // Spawn zombies every 3 seconds
// // // // // //         this.startSpawningZombies();
// // // // // //     }

// // // // // //     startSpawningZombies() {
// // // // // //         this.spawnInterval = setInterval(() => {
// // // // // //         const spawnPos = getRandomSpawnPosition(this.drawWidth, this.drawHeight);
// // // // // //         const zombie = new Zombie(this.shooter, spawnPos);
// // // // // //         this.add(zombie);
// // // // // //         }, 3000);
// // // // // //     }
// // // // // //     }

// // // // // // // new Game();
// // // // // // // import { Engine, Scene, Vector } from "excalibur";
// // // // // // // import { Player } from "./player.js";
// // // // // // // import { Zombie } from "./zombie.js";

// // // // // // // const game = new Engine({
// // // // // // //   width: 800,
// // // // // // //   height: 600,
// // // // // // // });

// // // // // // // const mainScene = new Scene();

// // // // // // // function spawnZombie(scene, player) {
// // // // // // //   // Spawn at random edge
// // // // // // //   const spawnEdges = [
// // // // // // //     new Vector(Math.random() * scene.drawWidth, 0), // top
// // // // // // //     new Vector(Math.random() * scene.drawWidth, scene.drawHeight), // bottom
// // // // // // //     new Vector(0, Math.random() * scene.drawHeight), // left
// // // // // // //     new Vector(scene.drawWidth, Math.random() * scene.drawHeight), // right
// // // // // // //   ];

// // // // // // //   const spawnPos = spawnEdges[Math.floor(Math.random() * spawnEdges.length)];
// // // // // // //   const zombie = new Zombie(player, spawnPos);
// // // // // // //   scene.add(zombie);
// // // // // // // }

// // // // // // // mainScene.onInitialize = () => {
// // // // // // //   const player = new Player();
// // // // // // //   mainScene.add(player);

// // // // // // //   setInterval(() => {
// // // // // // //     spawnZombie(mainScene, player);
// // // // // // //   }, 3000);
// // // // // // // };

// // // // // // // game.addScene("main", mainScene);
// // // // // // // game.start();
// // // // // // //  game.goToScene("main");

// // // // // // import '../css/style.css'
// // // // // // import { Engine, DisplayMode } from 'excalibur'
// // // // // // import { Resources, ResourceLoader } from './resources.js'
// // // // // // import { Background } from './background.js'
// // // // // // import { Shooter } from './shooter.js'
// // // // // // import { Zombie } from './zombie.js'

// // // // // // export class Game extends Engine {
// // // // // //   constructor() {
// // // // // //     super({
// // // // // //       width: 1280,
// // // // // //       height: 720,
// // // // // //       maxFps: 60,
// // // // // //       displayMode: DisplayMode.FitScreen
// // // // // //     })

// // // // // //     // Start loading resources, then start the game
// // // // // //     this.start(ResourceLoader).then(() => this.startGame())
// // // // // //   }

// // // // // //   startGame() {
// // // // // //     const background = new Background()
// // // // // //     const shooter = new Shooter()
// // // // // //     const zombie = new Zombie(shooter) // pass shooter (player) as target to zombie

// // // // // //     this.add(background)
// // // // // //     this.add(shooter)
// // // // // //     this.add(zombie)
// // // // // //   }
// // // // // // }

// // // // // // new Game()


// // // // // import '../css/style.css';
// // // // // import { Engine, DisplayMode } from 'excalibur';
// // // // // import { Resources, ResourceLoader } from './resources.js';
// // // // // import { Background } from './background.js';
// // // // // import { Shooter } from './shooter.js';
// // // // // import { Zombie } from './zombie.js';

// // // // // export class Game extends Engine {
// // // // //   constructor() {
// // // // //     super({
// // // // //       width: 1280,
// // // // //       height: 720,
// // // // //       maxFps: 60,
// // // // //       displayMode: DisplayMode.FitScreen,
// // // // //     });

// // // // //     this.start(ResourceLoader).then(() => this.startGame());
// // // // //   }

// // // // //   startGame() {
// // // // //     const background = new Background();
// // // // //     const shooter = new Shooter();
// // // // //     const zombie = new Zombie(shooter); // default spawn is handled

// // // // //     this.add(background);
// // // // //     this.add(shooter);
// // // // //     this.add(zombie);
// // // // //   }
// // // // // }

// // // // // new Game();


// // // // import { Engine, DisplayMode, Vector, Actor } from "excalibur";
// // // // import { Resources, ResourceLoader } from "./resources.js";
// // // // import { Shooter } from "./shooter.js";
// // // // import { Zombie } from "./zombie.js";
// // // // import { UI } from "./ui.js";


// // // // export class Game extends Engine {
// // // //   constructor() {
// // // //     super({
// // // //       width: 1280,
// // // //       height: 720,
// // // //       maxFps: 60,
// // // //       displayMode: DisplayMode.FitScreen,
// // // //     });

// // // //     this.score = 0;
// // // //     this.ui = null;

// // // //     this.start(ResourceLoader).then(() => this.startGame());
// // // //   }

// // // //   startGame() {
// // // //     const background = new Actor();
// // // //     background.graphics.use(Resources.Background.toSprite());
// // // //     background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
// // // //     background.z = -1;
// // // //     this.add(background);

// // // //     this.ui = new UI();
// // // //     this.ui.pos = new Vector(20, 20); // Keep it fixed top-left
// // // //     this.ui.z = 1000;
// // // //     this.add(this.ui);

// // // //     this.shooter = new Shooter();
// // // //     this.add(this.shooter);

// // // //     this.currentScene.camera.strategy.lockToActor(this.shooter);

// // // //     this.spawnZombie();
// // // //   }

// // // //   spawnZombie() {
// // // //     const x = Math.random() * this.drawWidth;
// // // //     const y = Math.random() * this.drawHeight;
// // // //     const zombie = new Zombie(this.shooter);
// // // //     zombie.pos = new Vector(x, y);

// // // //     zombie.on("killed", () => {
// // // //       this.score++;
// // // //       if (this.ui) {
// // // //         this.ui.showScore(this.score);
// // // //       }
// // // //       zombie.kill();
// // // //       this.spawnZombie();
// // // //     });

// // // //     this.add(zombie);
// // // //   }
// // // // }

// // // // new Game();

// // // import { Engine, DisplayMode, Vector, Actor } from "excalibur";
// // // import { Resources, ResourceLoader } from "./resources.js";
// // // import { Shooter } from "./shooter.js";
// // // import { Zombie } from "./zombie.js";
// // // import { UI } from "./ui.js";

// // // export class Game extends Engine {
// // //   constructor() {
// // //     super({
// // //       width: 1280,
// // //       height: 720,
// // //       maxFps: 60,
// // //       displayMode: DisplayMode.FitScreen,
// // //     });

// // //     this.score = 0;
// // //     this.ui = null;
// // //     this.isGameOver = false;
// // //     this.zombieInterval = null;

// // //     this.start(ResourceLoader).then(() => this.startGame());
// // //   }

// // //   startGame() {
// // //     const background = new Actor();
// // //     background.graphics.use(Resources.Background.toSprite());
// // //     background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
// // //     background.z = -1;
// // //     this.add(background);

// // //     this.ui = new UI();
// // //     this.ui.pos = new Vector(20, 20);
// // //     this.ui.z = 1000;
// // //     this.add(this.ui);

// // //     this.shooter = new Shooter();
// // //     this.add(this.shooter);

// // //     this.currentScene.camera.strategy.lockToActor(this.shooter);

// // //     this.startSpawningZombies();
// // //   }

// // //   startSpawningZombies() {
// // //     this.spawnZombie(); // spawn meteen een eerste zombie
// // //     this.zombieInterval = setInterval(() => {
// // //       if (!this.isGameOver) {
// // //         this.spawnZombie();
// // //       }
// // //     }, 2000); // elke 2 seconden een zombie
// // //   }

// // //   spawnZombie() {
// // //     const x = Math.random() * this.drawWidth;
// // //     const y = Math.random() * this.drawHeight;
// // //     const zombie = new Zombie(this.shooter);

// // //     zombie.on("killed", () => {
// // //       this.score++;
// // //       if (this.ui) {
// // //         this.ui.showScore(this.score);
// // //       }
// // //       zombie.kill();
// // //     });

// // //     zombie.on("gameover", () => {
// // //       this.gameOver();
// // //     });

// // //     this.add(zombie);
// // //   }

// // //   gameOver() {
// // //     if (!this.isGameOver) {
// // //       this.isGameOver = true;
// // //       if (this.zombieInterval !== null) {
// // //         clearInterval(this.zombieInterval);
// // //       }
// // //       alert("Game Over! Een zombie heeft je geraakt.");
// // //     }
// // //   }
// // // }

// // // new Game();


// // import { Engine, DisplayMode, Vector, Actor } from "excalibur";
// // import { Resources, ResourceLoader } from "./resources.js";
// // import { Shooter } from "./shooter.js";
// // import { Zombie, FastZombie } from "./zombie.js"; // <-- import beide
// // import { UI } from "./ui.js";

// // export class Game extends Engine {
// //   constructor() {
// //     super({
// //       width: 1280,
// //       height: 720,
// //       maxFps: 60,
// //       displayMode: DisplayMode.FitScreen,
// //     });

// //     this.score = 0;
// //     this.ui = null;
// //     this.isGameOver = false;
// //     this.zombieInterval = null;

// //     this.start(ResourceLoader).then(() => this.startGame());
// //   }

// //   startGame() {
// //     const background = new Actor();
// //     background.graphics.use(Resources.Background.toSprite());
// //     background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
// //     background.z = -1;
// //     this.add(background);

// //     this.ui = new UI();
// //     this.ui.pos = new Vector(20, 20);
// //     this.ui.z = 1000;
// //     this.add(this.ui);

// //     this.shooter = new Shooter();
// //     this.add(this.shooter);

// //     this.currentScene.camera.strategy.lockToActor(this.shooter);

// //     this.startSpawningZombies();
// //   }

// //   startSpawningZombies() {
// //     this.spawnZombie(); // eerste zombie
// //     this.zombieInterval = setInterval(() => {
// //       if (!this.isGameOver) {
// //         this.spawnZombie();
// //       }
// //     }, 2000);
// //   }

// //   spawnZombie() {
// //     const x = Math.random() * this.drawWidth;
// //     const y = Math.random() * this.drawHeight;

// //     // 👇 Kies willekeurig tussen normaal of snel
// //     const isFast = Math.random() < 0.4; // 40% kans op snelle zombie
// //     const zombie = isFast ? new FastZombie(this.shooter) : new Zombie(this.shooter);
// //     zombie.pos = new Vector(x, y);

// //     zombie.on("killed", () => {
// //       this.score++;
// //       this.ui?.showScore(this.score);
// //     });

// //     zombie.on("gameover", () => {
// //       this.gameOver();
// //     });

// //     this.add(zombie);
// //   }

// //   gameOver() {
// //     if (!this.isGameOver) {
// //       this.isGameOver = true;
// //       clearInterval(this.zombieInterval);
// //       alert("Game Over! Een zombie heeft je geraakt.");
// //     }
// //   }
// // }

// // new Game();
// // import { Engine, DisplayMode, Vector, Actor } from "excalibur";
// // import { Resources, ResourceLoader } from "./resources.js";
// // import { Shooter } from "./shooter.js";
// // import { Zombie, FastZombie } from "./zombie.js"; // <-- import beide
// // import { UI } from "./ui.js";

// // export class Game extends Engine {
// //   constructor() {
// //     super({
// //       width: 1280,
// //       height: 720,
// //       maxFps: 60,
// //       displayMode: DisplayMode.FitScreen,
// //     });

// //     this.score = 0;
// //     this.ui = null;
// //     this.isGameOver = false;
// //     this.zombieInterval = null;

// //     this.start(ResourceLoader).then(() => this.startGame());
// //   }

// //   startGame() {
// //     const background = new Actor();
// //     background.graphics.use(Resources.Background.toSprite());
// //     background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
// //     background.z = -1;
// //     this.add(background);

// //     this.ui = new UI();
// //     this.ui.pos = new Vector(20, 20);
// //     this.ui.z = 1000;
// //     this.add(this.ui);

// //     this.shooter = new Shooter();
// //     this.add(this.shooter);

// //     this.currentScene.camera.strategy.lockToActor(this.shooter);

// //     this.startSpawningZombies();
// //   }

// //   startSpawningZombies() {
// //     this.spawnZombie(); // eerste zombie
// //     this.zombieInterval = setInterval(() => {
// //       if (!this.isGameOver) {
// //         this.spawnZombie();
// //       }
// //     }, 2000);
// //   }

// //   spawnZombie() {
// //     const x = Math.random() * this.drawWidth;
// //     const y = Math.random() * this.drawHeight;

// //     // 👇 Kies willekeurig tussen normaal of snel
// //     const isFast = Math.random() < 0.4; // 40% kans op snelle zombie
// //     const zombie = isFast ? new FastZombie(this.shooter) : new Zombie(this.shooter);
// //     zombie.pos = new Vector(x, y);

// //     zombie.on("killed", () => {
// //       this.score++;
// //       this.ui?.showScore(this.score);
// //     });

// //     zombie.on("gameover", () => {
// //       this.gameOver();
// //     });

// //     this.add(zombie);
// //   }

// //   gameOver() {
// //     if (!this.isGameOver) {
// //       this.isGameOver = true;
// //       clearInterval(this.zombieInterval);
// //       alert("Game Over! Een zombie heeft je geraakt.");
// //     }
    
// //   }
  
// // }

// // new Game();


// import { Engine, DisplayMode, Vector, Actor } from "excalibur";
// import { Resources, ResourceLoader } from "./resources.js";
// import { Shooter } from "./shooter.js";
// import { Zombie, FastZombie } from "./zombie.js"; // 👈 beide types zombies
// import { UI } from "./ui.js";

// export class Game extends Engine {
//   constructor() {
//     super({
//       width: 1280,
//       height: 720,
//       maxFps: 60,
//       displayMode: DisplayMode.FitScreen,
//     });

//     this.score = 0;
//     this.ui = null;
//     this.isGameOver = false;
//     this.zombieInterval = null;

//     this.start(ResourceLoader).then(() => this.startGame());
//   }

//   startGame() {
//     // Achtergrond
//     const background = new Actor();
//     background.graphics.use(Resources.Background.toSprite());
//     background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
//     background.z = -1;
//     this.add(background);

//     // UI
//     this.ui = new UI();
//     this.ui.pos = new Vector(20, 20);
//     this.ui.z = 1000;
//     this.add(this.ui);

//     // Speler
//     this.shooter = new Shooter();
//     this.add(this.shooter);

//     // Camera volgt speler
//     this.currentScene.camera.strategy.lockToActor(this.shooter);

//     // Zombies laten spawnen
//     this.startSpawningZombies();
//   }

//   startSpawningZombies() {
//     this.spawnZombie(); // eerste zombie direct
//     this.zombieInterval = setInterval(() => {
//       if (!this.isGameOver) {
//         this.spawnZombie();
//       }
//     }, 2000); // elke 2 seconden
//   }

//   spawnZombie() {
//     const x = Math.random() * this.drawWidth;
//     const y = Math.random() * this.drawHeight;

//     const isFast = Math.random() < 0.4; // 40% kans op FastZombie
//     const zombie = isFast
//       ? new FastZombie(this.shooter)
//       : new Zombie(this.shooter);

//     zombie.pos = new Vector(x, y);

//     zombie.on("killed", () => {
//       this.score++;
//       this.ui?.showScore(this.score);
//     });

//     zombie.on("gameover", () => {
//       this.gameOver();
//     });

//     this.add(zombie);
//   }

//   gameOver() {
//     if (!this.isGameOver) {
//       this.isGameOver = true;
//       clearInterval(this.zombieInterval);
//       alert("Game Over! Een zombie heeft je geraakt.");
//     }
//   }
// }

// new Game();

import { Engine, DisplayMode, Vector, Actor } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Shooter } from "./shooter.js";
import { Zombie, FastZombie, getRandomEdgePosition } from "./zombie.js";
import { UI } from "./ui.js";

export class Game extends Engine {
  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
    });

    this.score = 0;
    this.ui = null;
    this.isGameOver = false;
    this.zombieInterval = null;

    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const background = new Actor();
    background.graphics.use(Resources.Background.toSprite());
    background.pos = new Vector(this.halfDrawWidth, this.halfDrawHeight);
    background.z = -1;
    this.add(background);

    this.ui = new UI();
    this.ui.pos = new Vector(20, 20);
    this.ui.z = 1000;
    this.add(this.ui);

    this.shooter = new Shooter();
    this.add(this.shooter);

    this.currentScene.camera.strategy.lockToActor(this.shooter);

    this.startSpawningZombies();
  }

  startSpawningZombies() {
    this.spawnZombie();
    this.zombieInterval = setInterval(() => {
      if (!this.isGameOver) {
        this.spawnZombie();
      }
    }, 2000);
  }

  spawnZombie() {
    const pos = getRandomEdgePosition(this.drawWidth, this.drawHeight);
    const zombie = Math.random() < 0.4
      ? new FastZombie(this.shooter)
      : new Zombie(this.shooter);

    zombie.pos = pos;

    zombie.on("killed", () => {
      this.score++;
      this.ui?.showScore(this.score);
    });

    zombie.on("gameover", () => {
      this.gameOver();
    });

    this.add(zombie);
  }

  gameOver() {
    if (!this.isGameOver) {
      this.isGameOver = true;
      clearInterval(this.zombieInterval);
      alert("Game Over! Een zombie heeft je geraakt.");
    }
  }
}

new Game();
