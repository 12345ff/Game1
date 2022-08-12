define(["require", "exports", "./Scene/SceneManager", "./Scene/TitleScene", "./loop"], function (require, exports, SceneManager_1, TitleScene_1, loop_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //!Start!
    (window.onload = () => {
        var _a, _b;
        const canvas = document.getElementById("GameCanvas");
        let ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        if (ctx == null) {
            alert("Error:キャンバス要素のコンテキストの取得に失敗した");
            return;
        }
        let gameLoop = new loop_1.GameLoop(ctx);
        SceneManager_1.SceneManager.Instance.AddScene(new TitleScene_1.TitleScene());
        (_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", (e) => {
            var _a;
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(e.key);
        });
        (_b = document.querySelector("html")) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", (e) => {
            var _a;
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(e.key);
        });
        gameLoop.StartLoop();
    })();
});
//!Start!
//# sourceMappingURL=main.js.map