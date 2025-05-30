// // healthBar.js
// import { Actor, Vector } from "excalibur";

// export class HealthBar extends Actor {
//   constructor(player) {
//     super();
//     this.player = player;
//     this.width = 120;
//     this.height = 15;
//     this.pos = new Vector(20, 20);
//   }

//   onDraw(ctx, delta) {
//     const maxWidth = this.width;
//     const healthPercent = this.player.health / this.player.maxHealth;

//     // background
//     ctx.fillStyle = "red";
//     ctx.fillRect(this.pos.x, this.pos.y, maxWidth, this.height);

//     // health
//     ctx.fillStyle = "limegreen";
//     ctx.fillRect(this.pos.x, this.pos.y, maxWidth * healthPercent, this.height);

//     // border
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;
//     ctx.strokeRect(this.pos.x, this.pos.y, maxWidth, this.height);
//   }
// }
