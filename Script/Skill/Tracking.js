define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/ChangeDirection", "./DamageObj", "../Data/GlobalData"], function (require, exports, Position_1, Size_1, ChangeDirection_1, DamageObj_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TrackingBall = void 0;
    class TrackingBall extends DamageObj_1.DamageObj {
        constructor(user, damage, radius, setRotate, setSpeed, setCount, trackSpeed, position, anime, endAnime) {
            super(user, damage);
            this.alpha = 1;
            this.minusPer = 0.95;
            this.radius = radius;
            this.SetCount = setCount;
            let cos1 = Math.cos(setRotate * Math.PI / 180);
            let sin1 = Math.sin(setRotate * Math.PI / 180);
            this.SetSpeed = new Position_1.Position(cos1 * setSpeed, sin1 * setSpeed);
            this.TrackingSpeed = new Position_1.Position(trackSpeed, trackSpeed);
            this.Size = new Size_1.Size(radius * 2, radius * 2);
            this.position = position;
            this.Animation = anime;
            this.EndAnimation = endAnime;
            this.mode = "set";
        }
        update(scene) {
            if (this.mode == "set") {
                this.position.x += this.SetSpeed.x;
                this.position.y += this.SetSpeed.y;
                this.SetSpeed.x *= this.minusPer;
                this.SetSpeed.y *= this.minusPer;
                this.SetCount--;
                if (this.SetCount <= 0) {
                    let target = null;
                    if (this.user == "hero") {
                        target = scene.hero.target;
                    }
                    else if (this.user == "enemy") {
                        target = scene.hero;
                    }
                    if (target != null) {
                        // let radian = Math.atan2(target.position.y - this.position.y, target.position.x - this.position.x);
                        // let rotate = parseInt((radian * (180 / Math.PI)).toString());
                        // let cos2 = Math.cos(rotate * Math.PI / 180);
                        // let sin2 = Math.sin(rotate * Math.PI / 180);
                        let direction = (0, ChangeDirection_1.ChangeDirection)(new Position_1.Position(target.position.x - this.position.x, target.position.y - this.position.y));
                        this.TrackingSpeed = new Position_1.Position(direction.x * this.TrackingSpeed.x, direction.y * this.TrackingSpeed.y);
                        this.mode = "tracking";
                    }
                    else {
                        this.mode = "delete";
                    }
                }
            }
            else if (this.mode == "tracking") {
                this.position.x += this.TrackingSpeed.x;
                this.position.y += this.TrackingSpeed.y;
                if (this.position.x - this.radius < -GlobalData_1.GlobalData.Instance.ScreenSize.width ||
                    this.position.x + this.radius > GlobalData_1.GlobalData.Instance.ScreenSize.width * 2 ||
                    this.position.y - this.radius < -GlobalData_1.GlobalData.Instance.ScreenSize.height ||
                    this.position.y + this.radius > GlobalData_1.GlobalData.Instance.ScreenSize.height * 2) {
                    this.mode = "end";
                }
                if (this.user == "enemy") {
                    const hero = scene.hero;
                    let saX = hero.position.x - this.position.x;
                    let saY = hero.position.y - this.position.y;
                    let saRadius = hero.Size.width / 2 + this.radius;
                    if (saX * saX + saY * saY < saRadius * saRadius) {
                        hero.damage(this.damage);
                        this.mode = "end";
                    }
                }
                else if (this.user == "hero") {
                    for (let i = 0; i < scene.enemys.length; i++) {
                        const enemy = scene.enemys[i];
                        let saX = enemy.position.x - this.position.x;
                        let saY = enemy.position.y - this.position.y;
                        let saRadius = enemy.Size.width / 2 + this.radius;
                        if (saX * saX + saY * saY < saRadius * saRadius) {
                            enemy.damage(this.damage);
                            this.mode = "end";
                        }
                    }
                }
            }
            if (this.mode == "set" || this.mode == "tracking") {
                this.Animation.Update();
                this.DrawImage = this.Animation.image;
            }
            else if (this.mode == "end") {
                this.alpha *= this.minusPer;
                this.EndAnimation.Update();
                this.DrawImage = this.EndAnimation.image;
                if (this.alpha < 0.1) {
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
    exports.TrackingBall = TrackingBall;
});
//# sourceMappingURL=Tracking.js.map