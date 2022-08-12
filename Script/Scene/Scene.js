define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scene = void 0;
    class Scene {
        constructor() {
            this.name = "";
            this.UIs = [];
            this.background = document.getElementById("background");
            this.background.src = "";
        }
        call() {
            var _a;
            for (var i = 0; i < this.UIs.length; i++) {
                (_a = document.getElementById("GameUI")) === null || _a === void 0 ? void 0 : _a.appendChild(this.UIs[i]);
            }
            this.background.src = "";
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
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map