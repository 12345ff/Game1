define(["require", "exports", "../Base/Size", "../Base/Position", "../Data/GlobalData"], function (require, exports, Size_1, Position_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    class GameObject {
        constructor() {
            this.Type = "---";
            this.Size = new Size_1.Size(50, 50);
            this.position = new Position_1.Position(0, 0);
            this.DrawImage = document.createElement("canvas");
            this.Passable = false;
            this.Kinematic = false;
        }
        update(scene) {
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
    exports.GameObject = GameObject;
});
//# sourceMappingURL=Object.js.map