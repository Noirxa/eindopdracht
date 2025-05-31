

// import { ImageSource, Loader } from "excalibur";

// export const Resources = {
//   Shooter: new ImageSource("images/shooter.gif"),
//   Zombie: new ImageSource("images/zombie.gif"),
//   Bullet: new ImageSource("images/bullet.png"),
//   Background: new ImageSource("images/grassbackground.jpg"),
//   FastZombie: new ImageSource("images/fastzombie.png"),
//   AmmoPickup: new ImageSource("images/ammo.png"), // Nieuw!
// };

// export const ResourceLoader = new Loader([
//   Resources.Shooter,
//   Resources.Zombie,
//   Resources.Bullet,
//   Resources.Background,
//   Resources.FastZombie,
//   Resources.AmmoPickup, // Nieuw!
// ]);


import { ImageSource, Loader } from "excalibur";

// Alle afbeeldingsbronnen worden hier gedefinieerd en ingeladen
export const Resources = {
  Shooter: new ImageSource("images/shooter.gif"),        // Speler sprite
  Zombie: new ImageSource("images/zombie.gif"),          // Normale zombie sprite
  Bullet: new ImageSource("images/bullet.png"),          // Kogel sprite
  Background: new ImageSource("images/grassbackground.jpg"), // Achtergrond afbeelding
  FastZombie: new ImageSource("images/fastzombie.png"),  // Snellere zombie sprite
  AmmoPickup: new ImageSource("images/ammo.png"),        // Ammunition pickup sprite
};

// Loader die al deze bronnen tegelijk laadt voor de game start
export const ResourceLoader = new Loader([
  Resources.Shooter,
  Resources.Zombie,
  Resources.Bullet,
  Resources.Background,
  Resources.FastZombie,
  Resources.AmmoPickup,
]);
