// import { ImageSource, Loader } from "excalibur";

// export const Resources = {
//   Shooter: new ImageSource("images/shooter.gif"),
//   Zombie: new ImageSource("images/zombie.gif"),
//   Bullet: new ImageSource("images/bullet.png"),
//   Background: new ImageSource("images/grassbackground.jpg"),
//   FastZombie: new ImageSource("images/fastzombie.png"),

// };

// export const ResourceLoader = new Loader([
//   Resources.Shooter,
//   Resources.Zombie,
//   Resources.Bullet,
//   Resources.Background,
//   Resources.FastZombie,
// ]);

import { ImageSource, Loader } from "excalibur";

export const Resources = {
  Shooter: new ImageSource("images/shooter.gif"),
  Zombie: new ImageSource("images/zombie.gif"),
  Bullet: new ImageSource("images/bullet.png"),
  Background: new ImageSource("images/grassbackground.jpg"),
  FastZombie: new ImageSource("images/fastzombie.png"),
  AmmoPickup: new ImageSource("images/ammo.png"), // Nieuw!
};

export const ResourceLoader = new Loader([
  Resources.Shooter,
  Resources.Zombie,
  Resources.Bullet,
  Resources.Background,
  Resources.FastZombie,
  Resources.AmmoPickup, // Nieuw!
]);
