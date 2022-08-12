define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clip = void 0;
    class Clip {
        static Clip_Circle(image, canvasSize, ClipRectangle) {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            ctx.fillStyle = "red";
            ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
            ctx === null || ctx === void 0 ? void 0 : ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, Math.PI * 2, false);
            ctx === null || ctx === void 0 ? void 0 : ctx.clip();
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, ClipRectangle.position.x, ClipRectangle.position.y, ClipRectangle.size.width, ClipRectangle.size.height);
            return canvas;
        }
    }
    exports.Clip = Clip;
});
//# sourceMappingURL=Clip.js.map