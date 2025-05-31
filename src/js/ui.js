
import { ScreenElement, Label, Actor, Color, Font, FontUnit, Vector, Rectangle } from 'excalibur';

export class UI extends ScreenElement {
  // Private velden voor encapsulatie van UI status
  #score;
  #highscore;
  #ammo;
  #totalAmmo;
  #healthRatio;
  #isReloading;

  constructor() {
    super({ x: 20, y: 20, z: 1000 });

    // Initialiseer privé status waarden
    this.#score = 0;
    this.#highscore = 0;
    this.#ammo = 0;
    this.#totalAmmo = 0;
    this.#healthRatio = 1;
    this.#isReloading = false;
  }

  onInitialize() {
    // Maak een font aan voor alle labels
    const font = new Font({
      family: 'Arial',
      size: 18,
      unit: FontUnit.Px,
      color: Color.Black,
    });

    // Score label bovenaan
    this.scoreLabel = new Label({
      text: `Score: ${this.#score}`,
      pos: new Vector(0, 0),
      font: font,
    });

    // Highscore label net onder de score
    this.highscoreLabel = new Label({
      text: `High Score: ${this.#highscore}`,
      pos: new Vector(0, 25),
      font: font,
    });

    // Rode achtergrond voor health bar
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

    // Groene balk voor de huidige health
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

    // Ammo label toont huidige en totale munitie
    this.ammoLabel = new Label({
      text: `Ammo: ${this.#ammo}/${this.#totalAmmo}`,
      pos: new Vector(0, 85),
      font: font,
    });

    // Reload label verschijnt alleen tijdens herladen
    this.reloadLabel = new Label({
      text: '',
      pos: new Vector(0, 115),
      font: font,
      color: Color.Red,
    });

    // Voeg alle UI onderdelen toe aan dit scherm element
    this.addChild(this.scoreLabel);
    this.addChild(this.highscoreLabel);
    this.addChild(this.healthBg);
    this.addChild(this.healthBar);
    this.addChild(this.ammoLabel);
    this.addChild(this.reloadLabel);
  }

  onPreUpdate() {
    // Update de tekst van score en highscore elke frame
    this.scoreLabel.text = `Score: ${this.#score}`;
    this.highscoreLabel.text = `High Score: ${this.#highscore}`;

    // Pas de breedte van de groene health bar aan volgens healthRatio (0-1)
    const healthWidth = 200 * this.#healthRatio;
    this.healthBar.graphics.use(new Rectangle({
      width: healthWidth,
      height: 20,
      color: Color.Green,
    }));

    // Update de ammo tekst
    this.ammoLabel.text = `Ammo: ${this.#ammo}/${this.#totalAmmo}`;

    // Laat 'Reloading...' zien als herladen bezig is
    this.reloadLabel.text = this.#isReloading ? 'Reloading...' : '';
  }

  showScore(score, highscore) {
    // Update interne score en highscore
    this.#score = score;
    this.#highscore = highscore;
  }

  showAmmo(ammo, totalAmmo) {
    // Update huidige en totale munitie waarden
    this.#ammo = ammo;
    this.#totalAmmo = totalAmmo ?? this.#totalAmmo;
  }

  showHealth(ratio) {
    // Update health ratio (0-1)
    this.#healthRatio = ratio;
  }

  setReloading(isReloading) {
    // Zet reload status aan/uit
    this.#isReloading = isReloading;
  }
}
