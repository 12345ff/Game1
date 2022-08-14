define(["require", "exports", "./DamageObj", "../Base/Position", "../Base/Size", "../Data/GlobalData"], function (require, exports, DamageObj_1, Position_1, Size_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DamageBall = void 0;
    class DamageBall extends DamageObj_1.DamageObj {
        constructor(user, damage, radius, rotate, speed, position, anime, endanime) {
            super(user, damage);
            this.alpha = 1;
            this.minusPer = 0.95;
            this.deleteTime = 60;
            this.radius = radius;
            let cos = Math.cos(rotate * Math.PI / 180);
            let sin = Math.sin(rotate * Math.PI / 180);
            this.Speed = new Position_1.Position(cos * speed, sin * speed);
            this.Size = new Size_1.Size(radius * 2, radius * 2);
            this.position = position;
            this.Animation = anime;
            this.EndAnimation = endanime;
        }
        update(scene) {
            if (this.mode == "normal") {
                this.position.x += this.Speed.x;
                this.position.y += this.Speed.y;
                if (this.position.x - this.radius < -GlobalData_1.GlobalData.Instance.ScreenSize.width ||
                    this.position.x + this.radius > GlobalData_1.GlobalData.Instance.ScreenSize.width * 2 ||
                    this.position.y - this.radius < -GlobalData_1.GlobalData.Instance.ScreenSize ||
                    this.position.y + this.radius > GlobalData_1.GlobalData.Instance.ScreenSize.height * 2) {
                    this.mode = "end";
                }
                let targets = [];
                if (this.user == "enemy") {
                    targets = [scene.hero];
                }
                else if (this.user == "hero") {
                    for (let i = 0; i < scene.enemys.length; i++) {
                        targets.push(scene.enemys[i]);
                    }
                }
                else if (this.user == "any") {
                    targets = [scene.hero];
                    for (let i = 0; i < scene.enemys.length; i++) {
                        targets.push(scene.enemys[i]);
                    }
                }
                for (let i = 0; i < targets.length; i++) {
                    let target = targets[i];
                    let saX = target.position.x - this.position.x;
                    let saY = target.position.y - this.position.y;
                    let saRadius = target.Size.width / 2 + this.radius;
                    if (saX * saX + saY * saY < saRadius * saRadius) {
                        target.damage(this, this.damage);
                        this.mode = "end";
                    }
                }
                this.Animation.Update();
                this.DrawImage = this.Animation.image;
            }
            else if (this.mode == "end") {
                this.alpha *= this.minusPer;
                this.EndAnimation.Update();
                this.DrawImage = this.EndAnimation.image;
                this.deleteTime--;
                if (this.deleteTime <= 0) {
                    this.mode = "delete";
                }
            }
        }
        draw(ctx) {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.DrawImage, Math.floor(this.position.x - this.Size.width / 2), Math.floor(this.position.y - this.Size.height / 2));
            ctx.globalAlpha = 1.0;
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["デバッグモード"]) {
                ctx.fillStyle = "blue";
                ctx.fillRect(this.position.x, this.position.y, 5, 5);
                ctx.fillRect(this.position.x - this.Size.width / 2, this.position.y - this.Size.height / 2, 5, 5);
                ctx.fillRect(this.position.x - this.DrawImage.width / 2, this.position.y - this.DrawImage.height / 2, 5, 5);
            }
        }
    }
    exports.DamageBall = DamageBall;
});
//# sourceMappingURL=Ball.js.map