define(["require", "exports", "./DamageObj", "../Base/Position", "../Data/GlobalData"], function (require, exports, DamageObj_1, Position_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DamageRect = void 0;
    class DamageRect extends DamageObj_1.DamageObj {
        constructor(user, damage, size, rotate, position, countDown, anime) {
            super(user, damage);
            this.alpha = 1;
            this.minusPer = 0.95;
            this.countdown = countDown;
            this.Size = size;
            this.position = new Position_1.Position(Math.floor(position.x), Math.floor(position.y));
            this.rotate = rotate;
            this.Animation = anime;
            this.mode = "normal";
            this.radius = Math.min(size.width, size.height) / 2;
        }
        update(scene) {
            if (this.mode == "normal" || this.mode == "end") {
                let targets = [];
                if (this.mode == "normal") {
                    if (this.user == "hero") {
                        targets = scene.enemys;
                    }
                    else if (this.user == "enemy") {
                        targets = [scene.hero];
                    }
                    else if (this.user == "any") {
                        targets = [scene.hero];
                        for (let i = 0; i < scene.enemys.length; i++) {
                            targets.push(scene.enemys[i]);
                        }
                    }
                    for (let i = 0; i < targets.length; i++) {
                        let target = targets[i];
                        if (target != null) {
                            let target_length = new Position_1.Position(target.position.x - this.position.x, target.position.y - this.position.y);
                            let radian = Math.atan2(target_length.x, target_length.y);
                            let rotate = parseInt((radian * 180 / Math.PI).toString());
                            if (rotate < 0)
                                rotate += 360;
                            let target_rotate = this.rotate - rotate;
                            let x = Math.floor(this.position.x + Math.cos(target_rotate) * target_length.x);
                            let y = Math.floor(this.position.y + Math.sin(target_rotate) * target_length.y);
                            let circle = {
                                "x": x,
                                "y": y,
                                "radius": target.Size.width / 2,
                            };
                            let sa = new Position_1.Position(Math.abs(this.position.x - circle.x), Math.abs(this.position.y - circle.y));
                            let flag = false;
                            if (sa.x <= this.Size.width / 2) {
                                if (sa.y <= this.Size.height / 2 + circle.radius)
                                    flag = true;
                            }
                            if (sa.y <= this.Size.height / 2) {
                                if (sa.y <= this.Size.height / 2 + circle.radius)
                                    flag = true;
                            }
                            let dx = sa.x - this.Size.width / 2;
                            let dy = sa.y - this.Size.height / 2;
                            if (dx * dx + dy * dy <= circle.radius * circle.radius)
                                flag = true;
                            if (flag) {
                                target.damage(this, this.damage);
                            }
                            this.mode = "end";
                        }
                        else {
                            this.mode = "delete";
                        }
                    }
                }
                this.Animation.Update();
                this.DrawImage = this.Animation.image;
                if (this.countdown > 0)
                    this.countdown--;
                else {
                    this.mode = "delete";
                }
            }
        }
        draw(ctx) {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.DrawImage, Math.floor(this.position.x - this.DrawImage.width / 2), Math.floor(this.position.y - this.DrawImage.height / 2));
            ctx.globalAlpha = 1.0;
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["デバッグモード"]) {
                ctx.fillStyle = "blue";
                ctx.fillRect(this.position.x, this.position.y, 5, 5);
                ctx.fillRect(this.position.x - this.Size.width / 2, this.position.y - this.Size.height / 2, 5, 5);
                ctx.fillRect(this.position.x - this.DrawImage.width / 2, this.position.y - this.DrawImage.height / 2, 5, 5);
            }
        }
    }
    exports.DamageRect = DamageRect;
});
//# sourceMappingURL=Rect.js.map