define(["require", "exports", "../Base/Rectangle", "../Base/Clip", "../Base/Animation", "../Base/Size"], function (require, exports, Rectangle_1, Clip_1, Animation_1, Size_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Skill = void 0;
    class Skill {
        constructor(skillType, name, maxPoint, delay, image, active) {
            this.activeNow = false;
            this.skillType = "";
            this.name = "SuperClass";
            this.maxPoint = 5;
            this.point = 0;
            this.Deleay = 1;
            this.nowFlame = 0;
            this.skillType = skillType;
            this.name = name;
            this.maxPoint = maxPoint;
            this.Deleay = delay;
            this.saveImage = image;
            this.image = document.createElement("canvas");
            this.image.width = 80;
            this.image.height = 80;
            image.addEventListener("load", () => {
                this.image = Clip_1.Clip.Clip_Circle(image, 80, new Rectangle_1.Rectangle(0, 0, this.image.width, this.image.height));
            });
            if (image.complete)
                this.image = Clip_1.Clip.Clip_Circle(image, 80, new Rectangle_1.Rectangle(0, 0, this.image.width, this.image.height));
            this.activeFunction = active;
            this.animation1 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            this.animation2 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            this.animation3 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            this.animation4 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
        }
        active() {
            this.activeNow = true;
            this.point = 0;
            this.nowFlame = 1;
        }
    }
    exports.Skill = Skill;
});
//# sourceMappingURL=Skill.js.map