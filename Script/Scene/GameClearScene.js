define(["require", "exports", "./Scene", "./SceneManager", "../Data/GlobalData"], function (require, exports, Scene_1, SceneManager_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameClearScene = void 0;
    class GameClearScene extends Scene_1.Scene {
        constructor(text1, text2) {
            super();
            let Text = document.createElement("p");
            let BackBtn = document.createElement("button");
            Text.style.position = "absolute";
            Text.style.top = "20px";
            Text.style.left = "50%";
            Text.style.transform = "translateX(-50%)";
            Text.style.fontSize = "45px";
            Text.style.fontFamily = "fantasy";
            Text.textContent = text1;
            BackBtn.className = "TitleBtn";
            BackBtn.style.top = "400px";
            BackBtn.style.left = "50%";
            BackBtn.style.transform = "translateX(-50%)";
            BackBtn.textContent = text2;
            BackBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.RemoveScene(2);
            });
            this.UIs.push(Text);
            this.UIs.push(BackBtn);
        }
        draw(canvas) {
            canvas.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
            super.draw(canvas);
        }
    }
    exports.GameClearScene = GameClearScene;
});
//# sourceMappingURL=GameClearScene.js.map