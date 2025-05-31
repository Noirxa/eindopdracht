// // // // // ui.js
// // // // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // // export class UI extends Actor {
// // // //   constructor() {
// // // //     super();

// // // //     this.label = new Label({
// // // //       text: "Score: 0",
// // // //       pos: new Vector(50, 50),
// // // //       font: new Font({
// // // //         family: "Arial",
// // // //         size: 28,
// // // //         unit: FontUnit.Px,
// // // //         color: Color.White,
// // // //       }),
// // // //     });

// // // //     this.addChild(this.label);
// // // //   }

// // // //   showScore(score) {
// // // //     this.label.text = `Score: ${score}`;
// // // //   }
// // // // }

// // // import { ScreenElement, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // // export class UI extends ScreenElement {
// // //   constructor() {
// // //     super();
// // //     this.label = null;
// // //   }

// // //   onInitialize(engine) {
// // //     this.label = new Label({
// // //       text: "Score: 0",
// // //       pos: new Vector(20, 20),
// // //       font: new Font({
// // //         family: "Arial",
// // //         size: 28,
// // //         unit: FontUnit.Px,
// // //         color: Color.White,
// // //       }),
// // //       z: 1000,
// // //     });

// // //     this.label.anchor.setTo(0, 0); // top-left corner
// // //     engine.add(this.label);
// // //   }

// // //   showScore(score) {
// // //     if (this.label) {
// // //       this.label.text = `Score: ${score}`;
// // //     }
// // //   }
// // // }



// // import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// // export class UI extends Actor {
// //   constructor() {
// //     super({
// //       pos: new Vector(0, 0),
// //       z: 1000, // render on top
// //     });

// //     this.label = new Label({
// //       text: "Score: 0",
// //       pos: new Vector(0, 0),
// //       font: new Font({
// //         family: "Arial",
// //         size: 28,
// //         unit: FontUnit.Px,
// //         color: Color.White,
// //       }),
// //       anchor: new Vector(0, 0), // top-left corner of the actor
// //     });

// //     this.addChild(this.label);
// //   }

// //   showScore(score) {
// //     this.label.text = `Score: ${score}`;
// //   }

// //   onPreUpdate(engine, delta) {
// //     // Position relative to camera/player
// //     const cam = engine.currentScene.camera;
// //     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));
// //   }
// // }


// import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

// export class UI extends Actor {
//   constructor() {
//     super({
//       pos: new Vector(0, 0),
//       z: 1000,
//     });

//     this.label = new Label({
//       text: "Score: 0",
//       pos: new Vector(0, 0),
//       font: new Font({
//         family: "Arial",
//         size: 28,
//         unit: FontUnit.Px,
//         color: Color.White,
//       }),
//       anchor: new Vector(0, 0),
//     });

//     this.ammoLabel = new Label({
//       text: "Ammo: 10",
//       pos: new Vector(0, 40),
//       font: new Font({
//         family: "Arial",
//         size: 24,
//         unit: FontUnit.Px,
//         color: Color.Yellow,
//       }),
//       anchor: new Vector(0, 0),
//     });

//     this.addChild(this.label);
//     this.addChild(this.ammoLabel);
//   }

//   showScore(score) {
//     this.label.text = `Score: ${score}`;
//   }

//   showAmmo(ammo) {
//     this.ammoLabel.text = `Ammo: ${ammo}`;
//   }

//   onPreUpdate(engine, delta) {
//     const cam = engine.currentScene.camera;
//     this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));

//     // Ammo live updaten
//     const shooter = engine.currentScene.actors.find((a) => a.name === "shooter");
//     if (shooter) {
//       this.showAmmo(shooter.ammo);
//     }
//   }
// }

import { Actor, Label, Font, FontUnit, Vector, Color } from "excalibur";

export class UI extends Actor {
  constructor() {
    super({ pos: new Vector(0, 0), z: 1000 });

    this.label = new Label({
      text: "Score: 0",
      pos: new Vector(0, 0),
      font: new Font({
        family: "Arial",
        size: 28,
        unit: FontUnit.Px,
        color: Color.White,
      }),
      anchor: new Vector(0, 0),
    });

    this.ammoLabel = new Label({
      text: "Ammo: 10",
      pos: new Vector(0, 30),
      font: new Font({
        family: "Arial",
        size: 24,
        unit: FontUnit.Px,
        color: Color.Yellow,
      }),
      anchor: new Vector(0, 0),
    });

    this.addChild(this.label);
    this.addChild(this.ammoLabel);
  }

  showScore(score) {
    this.label.text = `Score: ${score}`;
  }

  showAmmo(ammo) {
    this.ammoLabel.text = `Ammo: ${ammo}`;
  }

  onPreUpdate(engine, delta) {
    const cam = engine.currentScene.camera;
    this.pos = cam.pos.sub(new Vector(engine.halfDrawWidth - 20, engine.halfDrawHeight - 20));
  }
}
