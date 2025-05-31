// // // // // // // // ui.js
// // // // // // // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // // // // // export class UI extends Actor {
// // // // // // //   constructor() {
// // // // // // //     super();

// // // // // // //     this.label = new Label({
// // // // // // //       text: "Score: 0",
// // // // // // //       pos: new Vector(50, 50),
// // // // // // //       font: new Font({
// // // // // // //         family: "Arial",
// // // // // // //         size: 28,
// // // // // // //         unit: FontUnit.Px,
// // // // // // //         color: Color.White,
// // // // // // //       }),
// // // // // // //     });

// // // // // // //     this.addChild(this.label);
// // // // // // //   }

// // // // // // //   showScore(score) {
// // // // // // //     this.label.text = `Score: ${score}`;
// // // // // // //   }
// // // // // // // }

// // // // // // import { ScreenElement, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // // // // export class UI extends ScreenElement {
// // // // // //   constructor() {
// // // // // //     super();
// // // // // //     this.label = null;
// // // // // //   }

// // // // // //   onInitialize(engine) {
// // // // // //     this.label = new Label({
// // // // // //       text: "Score: 0",
// // // // // //       pos: new Vector(20, 20),
// // // // // //       font: new Font({
// // // // // //         family: "Arial",
// // // // // //         size: 28,
// // // // // //         unit: FontUnit.Px,
// // // // // //         color: Color.White,
// // // // // //       }),
// // // // // //       z: 1000,
// // // // // //     });

// // // // // //     this.label.anchor.setTo(0, 0); // top-left corner
// // // // // //     engine.add(this.label);
// // // // // //   }

// // // // // //   showScore(score) {
// // // // // //     if (this.label) {
// // // // // //       this.label.text = `Score: ${score}`;
// // // // // //     }
// // // // // //   }
// // // // // // }



// // // // // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // // // export class UI extends Actor {
// // // // //   constructor() {
// // // // //     super({
// // // // //       pos: new Vector(0, 0),
// // // // //       z: 1000, // render on top
// // // // //     });

// // // // //     this.label = new Label({
// // // // //       text: "Score: 0",
// // // // //       pos: new Vector(0, 0),
// // // // //       font: new Font({
// // // // //         family: "Arial",
// // // // //         size: 28,
// // // // //         unit: FontUnit.Px,
// // // // //         color: Color.White,
// // // // //       }),
// // // // //       anchor: new Vector(0, 0), // top-left corner of the actor
// // // // //     });

// // // // //     this.addChild(this.label);
// // // // //   }

// // // // //   showScore(score) {
// // // // //     this.label.text = `Score: ${score}`;
// // // // //   }

// // // // //   onPreUpdate(engine, delta) {
// // // // //     // Position relative to camera/player
// // // // //     const cam = engine.currentScene.camera;
// // // // //     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));
// // // // //   }
// // // // // }


// // // // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // // export class UI extends Actor {
// // // //   constructor() {
// // // //     super({
// // // //       pos: new Vector(0, 0),
// // // //       z: 1000,
// // // //     });

// // // //     this.label = new Label({
// // // //       text: "Score: 0",
// // // //       pos: new Vector(0, 0),
// // // //       font: new Font({
// // // //         family: "Arial",
// // // //         size: 28,
// // // //         unit: FontUnit.Px,
// // // //         color: Color.White,
// // // //       }),
// // // //       anchor: new Vector(0, 0),
// // // //     });

// // // //     this.ammoLabel = new Label({
// // // //       text: "Ammo: 10",
// // // //       pos: new Vector(0, 40),
// // // //       font: new Font({
// // // //         family: "Arial",
// // // //         size: 24,
// // // //         unit: FontUnit.Px,
// // // //         color: Color.Yellow,
// // // //       }),
// // // //       anchor: new Vector(0, 0),
// // // //     });

// // // //     this.addChild(this.label);
// // // //     this.addChild(this.ammoLabel);
// // // //   }

// // // //   showScore(score) {
// // // //     this.label.text = `Score: ${score}`;
// // // //   }

// // // //   showAmmo(ammo) {
// // // //     this.ammoLabel.text = `Ammo: ${ammo}`;
// // // //   }

// // // //   onPreUpdate(engine, delta) {
// // // //     const cam = engine.currentScene.camera;
// // // //     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));

// // // //     // Ammo live updaten
// // // //     const shooter = engine.currentScene.actors.find((a) => a.name === "shooter");
// // // //     if (shooter) {
// // // //       this.showAmmo(shooter.ammo);
// // // //     }
// // // //   }
// // // // }

// // // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // export class UI extends Actor {
// // //   constructor() {
// // //     super({ pos: new Vector(0, 0), z: 1000 });

// // //     this.label = new Label({
// // //       text: "Score: 0",
// // //       pos: new Vector(0, 0),
// // //       font: new Font({
// // //         family: "Arial",
// // //         size: 28,
// // //         unit: FontUnit.Px,
// // //         color: Color.White,
// // //       }),
// // //       anchor: new Vector(0, 0),
// // //     });

// // //     this.ammoLabel = new Label({
// // //       text: "Ammo: 10",
// // //       pos: new Vector(0, 30),
// // //       font: new Font({
// // //         family: "Arial",
// // //         size: 24,
// // //         unit: FontUnit.Px,
// // //         color: Color.Yellow,
// // //       }),
// // //       anchor: new Vector(0, 0),
// // //     });

// // //     this.addChild(this.label);
// // //     this.addChild(this.ammoLabel);
// // //   }

// // //   showScore(score) {
// // //     this.label.text = `Score: ${score}`;
// // //   }

// // //   showAmmo(ammo) {
// // //     this.ammoLabel.text = `Ammo: ${ammo}`;
// // //   }

// // //   onPreUpdate(engine, delta) {
// // //     const cam = engine.currentScene.camera;
// // //     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));
// // //   }
// // // }

// // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // export class UI extends Actor {
// //   constructor() {
// //     super({ pos: new Vector(0, 0), z: 1000 });

// //     this.label = new Label({
// //       text: "Score: 0",
// //       pos: new Vector(0, 0),
// //       font: new Font({
// //         family: "Arial",
// //         size: 28,
// //         unit: FontUnit.Px,
// //         color: Color.White,
// //       }),
// //       anchor: new Vector(0, 0),
// //     });

// //     this.ammoLabel = new Label({
// //       text: "Ammo: 10",
// //       pos: new Vector(0, 30),
// //       font: new Font({
// //         family: "Arial",
// //         size: 24,
// //         unit: FontUnit.Px,
// //         color: Color.Yellow,
// //       }),
// //       anchor: new Vector(0, 0),
// //     });

// //     this.highscoreLabel = new Label({
// //       text: "Highscore: 0",
// //       pos: new Vector(0, 60),
// //       font: new Font({
// //         family: "Arial",
// //         size: 24,
// //         unit: FontUnit.Px,
// //         color: Color.LightBlue,
// //       }),
// //       anchor: new Vector(0, 0),
// //     });

// //     this.addChild(this.label);
// //     this.addChild(this.ammoLabel);
// //     this.addChild(this.highscoreLabel);
// //   }

// //   showScore(score, highscore) {
// //     this.label.text = `Score: ${score}`;
// //     this.highscoreLabel.text = `Highscore: ${highscore}`;
// //   }

// //   showAmmo(ammo) {
// //     this.ammoLabel.text = `Ammo: ${ammo}`;
// //   }

// //   onPreUpdate(engine, delta) {
// //     const cam = engine.currentScene.camera;
// //     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));
// //   }
// // }


// import { ScreenElement, Label, Actor, Color, Font, FontUnit, Vector, Rectangle } from 'excalibur';

// export class UI extends ScreenElement {
//   constructor() {
//     super({ x: 20, y: 20, z: 1000 });

//     this.score = 0;
//     this.highscore = 0;
//     this.ammo = 0;
//     this.totalAmmo = 0;
//     this.healthRatio = 1;
//     this.isReloading = false;
//   }

//   onInitialize() {
//     const font = new Font({
//       family: 'Arial',
//       size: 18,
//       unit: FontUnit.Px,
//       color: Color.Black,
//     });

//     // Score label
//     this.scoreLabel = new Label({
//       text: `Score: ${this.score}`,
//       pos: new Vector(0, 0),
//       font: font,
//     });

//     // Highscore label
//     this.highscoreLabel = new Label({
//       text: `High Score: ${this.highscore}`,
//       pos: new Vector(0, 25),
//       font: font,
//     });

//     // Health background (red)
//     this.healthBg = new Actor({
//       pos: new Vector(0, 55),
//       anchor: Vector.Zero,
//       width: 200,
//       height: 20,
//     });
//     this.healthBg.graphics.use(new Rectangle({
//       width: 200,
//       height: 20,
//       color: Color.Red,
//     }));

//     // Health bar (green)
//     this.healthBar = new Actor({
//       pos: new Vector(0, 55),
//       anchor: Vector.Zero,
//       width: 200,
//       height: 20,
//     });
//     this.healthBar.graphics.use(new Rectangle({
//       width: 200,
//       height: 20,
//       color: Color.Green,
//     }));

//     // Ammo label
//     this.ammoLabel = new Label({
//       text: `Ammo: ${this.ammo}/${this.totalAmmo}`,
//       pos: new Vector(0, 85),
//       font: font,
//     });

//     // Reloading label (hidden unless reloading)
//     this.reloadLabel = new Label({
//       text: '',
//       pos: new Vector(0, 115),
//       font: font,
//       color: Color.Red,
//     });

//     // Add all UI elements as children of this ScreenElement
//     this.addChild(this.scoreLabel);
//     this.addChild(this.highscoreLabel);
//     this.addChild(this.healthBg);
//     this.addChild(this.healthBar);
//     this.addChild(this.ammoLabel);
//     this.addChild(this.reloadLabel);
//   }

//   onPreUpdate() {
//     // Update texts dynamically each frame
//     this.scoreLabel.text = `Score: ${this.score}`;
//     this.highscoreLabel.text = `High Score: ${this.highscore}`;

//     // Update health bar width based on health ratio (0-1)
//     const healthWidth = 200 * this.healthRatio;
//     this.healthBar.graphics.use(new Rectangle({
//       width: healthWidth,
//       height: 20,
//       color: Color.Green,
//     }));

//     this.ammoLabel.text = `Ammo: ${this.ammo}/${this.totalAmmo}`;
//     this.reloadLabel.text = this.isReloading ? 'Reloading...' : '';
//   }

//   showScore(score, highscore) {
//     this.score = score;
//     this.highscore = highscore;
//   }

//   showAmmo(ammo, totalAmmo) {
//     this.ammo = ammo;
//     this.totalAmmo = totalAmmo ?? this.totalAmmo;
//   }

//   showHealth(ratio) {
//     this.healthRatio = ratio;
//   }

//   setReloading(isReloading) {
//     this.isReloading = isReloading;
//   }
// }


import { ScreenElement, Label, Actor, Color, Font, FontUnit, Vector, Rectangle } from 'excalibur';

export class UI extends ScreenElement {
  constructor() {
    super({ x: 20, y: 20, z: 1000 });

    this.score = 0;
    this.highscore = 0;
    this.ammo = 0;
    this.totalAmmo = 0;
    this.healthRatio = 1;
    this.isReloading = false;
  }

  onInitialize() {
    const font = new Font({
      family: 'Arial',
      size: 18,
      unit: FontUnit.Px,
      color: Color.Black,
    });

    // Score label
    this.scoreLabel = new Label({
      text: `Score: ${this.score}`,
      pos: new Vector(0, 0),
      font: font,
    });

    // Highscore label
    this.highscoreLabel = new Label({
      text: `High Score: ${this.highscore}`,
      pos: new Vector(0, 25),
      font: font,
    });

    // Health background (red)
    this.healthBg = new Actor({
      pos: new Vector(0, 55),
      anchor: Vector.Zero,
      width: 200,
      height: 20,
    });
    this.healthBg.graphics.use(new Rectangle({
      width: 200,
      height: 20,
      color: Color.Red,
    }));

    // Health bar (green)
    this.healthBar = new Actor({
      pos: new Vector(0, 55),
      anchor: Vector.Zero,
      width: 200,
      height: 20,
    });
    this.healthBar.graphics.use(new Rectangle({
      width: 200,
      height: 20,
      color: Color.Green,
    }));

    // Ammo label
    this.ammoLabel = new Label({
      text: `Ammo: ${this.ammo}/${this.totalAmmo}`,
      pos: new Vector(0, 85),
      font: font,
    });

    // Reloading label (hidden unless reloading)
    this.reloadLabel = new Label({
      text: '',
      pos: new Vector(0, 115),
      font: font,
      color: Color.Red,
    });

    // Add all UI elements as children of this ScreenElement
    this.addChild(this.scoreLabel);
    this.addChild(this.highscoreLabel);
    this.addChild(this.healthBg);
    this.addChild(this.healthBar);
    this.addChild(this.ammoLabel);
    this.addChild(this.reloadLabel);
  }

  onPreUpdate() {
    // Update texts dynamically each frame
    this.scoreLabel.text = `Score: ${this.score}`;
    this.highscoreLabel.text = `High Score: ${this.highscore}`;

    // Update health bar width based on health ratio (0-1)
    const healthWidth = 200 * this.healthRatio;
    this.healthBar.graphics.use(new Rectangle({
      width: healthWidth,
      height: 20,
      color: Color.Green,
    }));

    this.ammoLabel.text = `Ammo: ${this.ammo}/${this.totalAmmo}`;
    this.reloadLabel.text = this.isReloading ? 'Reloading...' : '';
  }

  showScore(score, highscore) {
    this.score = score;
    this.highscore = highscore;
  }

  showAmmo(ammo, totalAmmo) {
    this.ammo = ammo;
    this.totalAmmo = totalAmmo ?? this.totalAmmo;
  }

  showHealth(ratio) {
    this.healthRatio = ratio;
  }

  setReloading(isReloading) {
    this.isReloading = isReloading;
  }
}
