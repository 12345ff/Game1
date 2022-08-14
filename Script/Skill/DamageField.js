define(["require", "exports", "./DamageObj", "../Base/Position", "../Data/GlobalData"], function (require, exports, DamageObj_1, Position_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DamageField = void 0;
    class DamageField extends DamageObj_1.DamageObj {
        constructor(user, size, rotate, position, limit, anime) {
            super(user, 0);
            this.alpha = 1;
            this.limit = limit;
            this.Size = size;
            this.position = new Position_1.Position(Math.floor(position.x), Math.floor(position.y));
            this.rotate = rotate;
            this.Animation = anime;
            this.mode = "normal";
            this.radius = Math.min(size.width, size.height) / 2;
        }
        update(scene) {
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
                        let saX = target.position.x - this.position.x;
                        let saY = target.position.y - this.position.y;
                        let sa = target.Size.width / 2 + this.Size.width / 2;
                        if (saX * saX + saY * saY < sa * sa) {
                            target.condition["やけど"].ON(120, 30);
                        }
                        this.Animation.Update();
                        this.DrawImage = this.Animation.image;
                        if (this.limit > 0)
                            this.limit--;
                        if (this.limit == 0) {
                            this.mode = "delete";
                        }
                    }
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
    exports.DamageField = DamageField;
});
//# sourceMappingURL=DamageField.js.map