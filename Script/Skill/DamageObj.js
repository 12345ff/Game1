define(["require", "exports", "../Object/Object", "../Data/GlobalData"], function (require, exports, Object_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DamageObj = void 0;
    class DamageObj extends Object_1.GameObject {
        constructor(user, damage) {
            super();
            this.user = user;
            this.damage = damage;
            this.mode = "normal";
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
    exports.DamageObj = DamageObj;
});
//# sourceMappingURL=DamageObj.js.map