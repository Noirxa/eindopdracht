import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Background extends Actor {
    onInitialize(engine) {
        const sprite = Resources.Background.toSprite();

        // Bereken de schaal zodat het de breedte en hoogte van het canvas vult
        const scaleX = engine.drawWidth / sprite.width;
        const scaleY = engine.drawHeight / sprite.height;

        this.graphics.use(sprite);
        this.pos = new Vector(engine.halfDrawWidth, engine.halfDrawHeight); // center op canvas
        this.scale = new Vector(scaleX, scaleY);
    }
}


