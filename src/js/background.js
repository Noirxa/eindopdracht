// // // // // // import { Actor, Vector } from "excalibur";
// // // // // // import { Resources } from './resources.js';

// // // // // // export class Background extends Actor {
// // // // // //     onInitialize(engine) {
// // // // // //         const sprite = Resources.Background.toSprite();

// // // // // //         // Bereken de schaal zodat het de breedte en hoogte van het canvas vult
// // // // // //         const scaleX = engine.drawWidth / sprite.width;
// // // // // //         const scaleY = engine.drawHeight / sprite.height;

// // // // // //         this.graphics.use(sprite);
// // // // // //         this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight); // center op canvas
// // // // // //         this.scale = new Vector(scaleX, scaleY);
// // // // // //     }
// // // // // // }


// // // // // import { Actor, Vector, Sprite } from "excalibur";
// // // // // import { Resources } from "./resources.js";

// // // // // export class Background extends Actor {
// // // // //   onInitialize(engine) {
// // // // //     this.anchor = Vector.Zero; // Zet de anchor linksboven

// // // // //     // Maak een sprite met een sourceView die even groot is als het scherm (viewport)
// // // // //     this.sprite = new Sprite({
// // // // //       image: Resources.Background,
// // // // //       sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
// // // // //     });

// // // // //     this.graphics.use(this.sprite);
// // // // //   }

// // // // //   onPostUpdate(engine, delta) {
// // // // //     // Laat de achtergrond meebewegen met de camera, door sourceView.x en .y aan te passen
// // // // //     // Zo ontstaat een infinite scrolling effect door herhaling van de texture

// // // // //     const cam = engine.currentScene.camera;
// // // // //     this.sprite.sourceView.x = cam.pos.x - engine.drawWidth / 2;
// // // // //     this.sprite.sourceView.y = cam.pos.y - engine.drawHeight / 2;
// // // // //   }
// // // // // }

// // // // import { Actor, Sprite, Vector } from "excalibur";
// // // // import { Resources } from "./resources.js";

// // // // export class Background extends Actor {
// // // //   sprite;

// // // //   onInitialize(engine) {
// // // //     this.sprite = Resources.Background.toSprite();

// // // //     // Stel anchor op (0,0) zodat de sprite uit de linkerbovenhoek getekend wordt
// // // //     this.anchor = Vector.Zero;

// // // //     // Gebruik de sprite
// // // //     this.graphics.use(this.sprite);
// // // //   }

// // // //   onPostUpdate(engine, delta) {
// // // //     // Check of camera bestaat om errors te voorkomen
// // // //     if (!engine.camera) return;

// // // //     // Verplaats het sourceView om een tile effect te maken,
// // // //     // laat de achtergrond 'meebewegen' met de camera, maar schaal groter zodat het herhaald kan worden
// // // //     this.sprite.sourceView.x = engine.camera.pos.x - engine.drawWidth * 2.5;
// // // //     this.sprite.sourceView.y = engine.camera.pos.y - engine.drawHeight * 2.5;
// // // //   }
// // // // }
// // // import { Actor, Vector } from "excalibur";
// // // import { Resources } from "./resources.js";

// // // export class Background extends Actor {
// // //   onInitialize(engine) {
// // //     // Maak een sprite met de achtergrond image en zet anchor op linkerbovenhoek
// // //     this.graphics.use(Resources.Background.toSprite());
// // //     this.anchor = Vector.Zero;

// // //     // Begin positie op (0,0) of camera positie
// // //     this.pos = Vector.Zero;
// // //   }

// // //   onPostUpdate(engine, delta) {
// // //     if (!engine.camera) return;

// // //     // Zorg dat de achtergrond meebeweegt met de camera
// // //     this.pos = engine.camera.pos.clone();

// // //     // Scroll de bron (sourceView) om de achtergrond te laten wrappen
// // //     const sprite = this.graphics.sprites[0];

// // //     // Bereken offsets als modulo van de sprite grootte (voor eindeloos herhalen)
// // //     sprite.sourceView.x = engine.camera.pos.x % sprite.width;
// // //     sprite.sourceView.y = engine.camera.pos.y % sprite.height;
// // //   }
// // // }


// // import { Actor, Vector } from "excalibur";
// // import { Resources } from "./resources.js";

// // export class Background extends Actor {
// //   onInitialize(engine) {
// //     this.sprite = Resources.Background.toSprite();

// //     // Maak de sprite groter dan het scherm (voor tile effect)
// //     this.sprite.sourceView.width = engine.drawWidth * 2;
// //     this.sprite.sourceView.height = engine.drawHeight * 2;

// //     this.anchor = Vector.Zero; // anchor linksboven
// //     this.graphics.use(this.sprite);

// //     // Zet positie op 0,0
// //     this.pos = Vector.Zero;
// //   }

// //   onPostUpdate(engine, delta) {
// //     if (!engine.camera) return;

// //     // Laat achtergrond positie meebewegen met camera
// //     this.pos = engine.camera.pos.clone();

// //     // Scroll de sourceView (offset binnen de texture) modulo de image dimensies
// //     this.sprite.sourceView.x = engine.camera.pos.x % Resources.Background.width;
// //     this.sprite.sourceView.y = engine.camera.pos.y % Resources.Background.height;
// //   }
// // }
import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Background extends Actor {
  onInitialize(engine) {
    // Gebruik toSprite() ipv zelf een Sprite maken
    this.sprite = Resources.Background.toSprite();

    this.anchor = Vector.Zero;
    this.graphics.use(this.sprite);
    this.pos = Vector.Zero;
  }

  onPostUpdate(engine, delta) {
    if (!engine.camera) return;

    this.pos = engine.camera.pos.clone();

    // Zorg dat je sourceView aanpast voor tile-effect
    this.sprite.sourceView.x = engine.camera.pos.x % Resources.Background.image.width;
    this.sprite.sourceView.y = engine.camera.pos.y % Resources.Background.image.height;
  }
}


