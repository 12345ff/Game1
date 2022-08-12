define(["require", "exports", "./Scene", "./SceneManager", "./GameStartScene", "./SettingScene", "../Data/GlobalData"], function (require, exports, Scene_1, SceneManager_1, GameStartScene_1, SettingScene_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TitleScene = void 0;
    class TitleScene extends Scene_1.Scene {
        constructor() {
            super();
            let textResource = document.createElement("p");
            let TitleText = document.createElement("p");
            let StartBtn = document.createElement("button");
            let SettingBtn = document.createElement("button");
            TitleText.style.position = "absolute";
            TitleText.style.top = "20px";
            TitleText.style.right = "20px";
            TitleText.style.fontSize = "45px";
            TitleText.style.fontFamily = "fantasy";
            TitleText.textContent = "BattleGame!";
            StartBtn.className = "TitleBtn";
            StartBtn.style.top = "400px";
            StartBtn.style.left = "20px";
            StartBtn.textContent = "ゲーム開始";
            StartBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.AddScene(new GameStartScene_1.GameSettingScene());
            });
            SettingBtn.className = "TitleBtn";
            SettingBtn.style.top = "470px";
            SettingBtn.style.left = "20px";
            SettingBtn.textContent = "設定";
            SettingBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.AddScene(new SettingScene_1.SettingScene());
            });
            textResource.innerHTML = "素材元一覧:<br>ひみつ:http://uros.web.fc2.com/<br>ゆるドラシル:https://yurudora.com/tkool/";
            textResource.style.position = "absolute";
            textResource.style.top = "0";
            textResource.style.left = "0";
            this.UIs.push(textResource);
            this.UIs.push(TitleText);
            this.UIs.push(StartBtn);
            this.UIs.push(SettingBtn);
        }
        call() {
            super.call();
            this.background.src = "./image/img.bmp";
        }
        update() {
        }
        draw(canvas) {
            canvas.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
        }
    }
    exports.TitleScene = TitleScene;
});
//# sourceMappingURL=TitleScene.js.map