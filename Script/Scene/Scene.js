define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scene = void 0;
    class Scene {
        constructor() {
            this.name = "";
            this.UIs = [];
            this.background = document.getElementById("background");
            this.background.src = "./image/none.png";
        }
        call() {
            var _a;
            for (var i = 0; i < this.UIs.length; i++) {
                (_a = document.getElementById("GameUI")) === null || _a === void 0 ? void 0 : _a.appendChild(this.UIs[i]);
            }
            this.background.src = "./image/none.png";
        }
        move() {
            var _a;
            for (var i = 0; i < this.UIs.length; i++) {
                (_a = document.getElementById("GameUI")) === null || _a === void 0 ? void 0 : _a.removeChild(this.UIs[i]);
            }
        }
        update() {
        }
        draw(ctx) {
        }
        keydown(keyType) {
        }
        keyup(keyType) {
        }
        touchStart(Touch) {
        }
        touchNow(Touch) {
        }
        touchEnd(Touch) {
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map