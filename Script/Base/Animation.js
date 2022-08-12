define(["require", "exports", "./Size", "../Data/GlobalData"], function (require, exports, Size_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameAnimation = void 0;
    class GameAnimation {
        constructor(rotate, size) {
            this.images = [];
            this.nextFlameInterval = [30, 30];
            this.rotate = rotate;
            this.drawSize = size;
            this.nowFlame = 1;
            this.limit = -1;
            let canvas = document.createElement("canvas");
            let canvasSize = Math.sqrt(size.width * size.width + size.height * size.height);
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            this.size = new Size_1.Size(canvasSize, canvasSize);
            this.images.push(canvas);
            this.image = this.images[0];
        }
        SetUp1(images) {
            this.images = [];
            for (let i = 0; i < images.length; i++) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = this.size.width;
                canvas.height = this.size.height;
                ctx === null || ctx === void 0 ? void 0 : ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx === null || ctx === void 0 ? void 0 : ctx.rotate(this.rotate * Math.PI / 180);
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(images[i], canvas.width / 2 - this.drawSize.height / 2, canvas.height / 2 - this.drawSize.height / 2, this.drawSize.width, this.drawSize.height);
                ctx === null || ctx === void 0 ? void 0 : ctx.rotate(-this.rotate * Math.PI / 180);
                ctx === null || ctx === void 0 ? void 0 : ctx.translate(-canvas.width / 2, -canvas.height / 2);
                ;
                this.images.push(canvas);
            }
            this.image = this.images[0];
        }
        SetUp2(image, clippingRect) {
            this.images = [];
            for (let i = 0; i < clippingRect.length; i++) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = this.size.width;
                canvas.height = this.size.height;
                if (GlobalData_1.GlobalData.Instance.AssistSettingList["デバッグモード"]) {
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(0, 0, canvas.width, canvas.height);
                }
                ctx === null || ctx === void 0 ? void 0 : ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx === null || ctx === void 0 ? void 0 : ctx.rotate(this.rotate * Math.PI / 180);
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, clippingRect[i].position.x, clippingRect[i].position.y, clippingRect[i].size.width, clippingRect[i].size.height, -this.drawSize.width / 2, -this.drawSize.height / 2, this.drawSize.width, this.drawSize.height);
                ctx === null || ctx === void 0 ? void 0 : ctx.rotate(-this.rotate * Math.PI / 180);
                ctx === null || ctx === void 0 ? void 0 : ctx.translate(-canvas.width / 2, -canvas.height / 2);
                this.images.push(canvas);
            }
            this.image = this.images[0];
        }
        Reset() {
            if (this.nowFlame != 0) {
                this.nowFlame = 0;
                this.image = this.images[0];
                this.nextFlameInterval[0] = this.nextFlameInterval[1];
            }
        }
        Update() {
            if (this.limit != 0) {
                if (this.nextFlameInterval[0] > 0) {
                    this.nextFlameInterval[0]--;
                }
                else {
                    this.nextFlameInterval[0] = this.nextFlameInterval[1];
                    this.nowFlame++;
                    if (this.nowFlame >= this.images.length) {
                        this.nowFlame = 0;
                        if (this.limit > 0)
                            this.limit--;
                    }
                    this.image = this.images[this.nowFlame];
                }
            }
            else {
                if (this.image.id != "notImage") {
                    this.image = document.createElement("canvas");
                    this.image.id = "notImage";
                }
            }
        }
        setInterval(interval) {
            this.nextFlameInterval[0] = interval;
            this.nextFlameInterval[1] = interval;
        }
    }
    exports.GameAnimation = GameAnimation;
});
//# sourceMappingURL=Animation.js.map