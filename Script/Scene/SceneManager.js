define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SceneManager = void 0;
    class SceneManager {
        constructor() {
            this.Scenes = [];
        }
        SetUp() {
        }
        GetTopScene() {
            if (this.Scenes.length > 0) {
                return this.Scenes[this.Scenes.length - 1];
            }
            else {
                return null;
            }
        }
        AddScene(scene) {
            var _a, _b;
            if (this.Scenes.length > 0) {
                (_a = this.GetTopScene()) === null || _a === void 0 ? void 0 : _a.move();
            }
            this.Scenes.push(scene);
            (_b = this.GetTopScene()) === null || _b === void 0 ? void 0 : _b.call();
        }
        RemoveScene(count) {
            var _a, _b;
            if (this.Scenes.length > 0) {
                (_a = this.GetTopScene()) === null || _a === void 0 ? void 0 : _a.move();
            }
            for (let i = 0; i < count; i++) {
                if (this.Scenes.length > 0) {
                    this.Scenes.pop();
                }
            }
            if (this.Scenes.length > 0) {
                (_b = this.GetTopScene()) === null || _b === void 0 ? void 0 : _b.call();
            }
        }
    }
    exports.SceneManager = SceneManager;
    //シングルトンパターン
    SceneManager.Instance = new SceneManager();
});
//# sourceMappingURL=SceneManager.js.map