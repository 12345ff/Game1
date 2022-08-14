define(["require", "exports", "./DamageObj", "../Base/Position", "../Data/GlobalData"], function (require, exports, DamageObj_1, Position_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DamageEffect = void 0;
    class DamageEffect extends DamageObj_1.DamageObj {
        constructor(user, limit, size, rotate, position, anime) {
            super(user, 0);
            this.limit = limit;
            this.Size = size;
            this.position = new Position_1.Position(Math.floor(position.x), Math.floor(position.y));
            this.rotate = rotate;
            this.Animation = anime;
            this.mode = "normal";
            this.radius = Math.min(size.width, size.height) / 2;
        }
        update(scene) {
            this.limit--;
            if (this.limit <= 0)
                this.mode = "delete";
            this.Animation.Update();
            this.DrawImage = this.Animation.image;
        }
        draw(ctx) {
            ctx.drawImage(this.DrawImage, Math.floor(this.position.x - this.DrawImage.width / 2), Math.floor(this.position.y - this.DrawImage.height / 2));
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["デバッグモード"]) {
                ctx.fillStyle = "blue";
                ctx.fillRect(this.position.x, this.position.y, 5, 5);
                ctx.fillRect(this.position.x - this.Size.width / 2, this.position.y - this.Size.height / 2, 5, 5);
                ctx.fillRect(this.position.x - this.DrawImage.width / 2, this.position.y - this.DrawImage.height / 2, 5, 5);
            }
        }
    }
    exports.DamageEffect = DamageEffect;
});
//# sourceMappingURL=Effect.js.map