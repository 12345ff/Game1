define(["require", "exports", "./Scene", "./SceneManager", "./GameStartScene", "./SettingScene", "../Data/GlobalData", "./Tutorialscene"], function (require, exports, Scene_1, SceneManager_1, GameStartScene_1, SettingScene_1, GlobalData_1, Tutorialscene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TitleScene = void 0;
    class TitleScene extends Scene_1.Scene {
        constructor() {
            super();
            let textResource = document.createElement("p");
            let TitleText = document.createElement("p");
            let StartBtn = document.createElement("button");
            let TutorialBtn = document.createElement("button");
            let SettingBtn = document.createElement("button");
            TitleText.style.position = "absolute";
            TitleText.style.top = "20px";
            TitleText.style.right = "20px";
            TitleText.style.fontSize = "80px";
            TitleText.style.fontFamily = "fantasy";
            TitleText.style.color = "white";
            TitleText.textContent = "BattleGame!";
            StartBtn.className = "TitleBtn";
            StartBtn.style.bottom = "220px";
            StartBtn.style.left = "20px";
            StartBtn.textContent = "フリーバトル";
            StartBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.AddScene(new GameStartScene_1.GameSettingScene());
            });
            TutorialBtn.className = "TitleBtn";
            TutorialBtn.style.bottom = "120px";
            TutorialBtn.style.left = "20px";
            TutorialBtn.textContent = "チュートリアル";
            TutorialBtn.addEventListener("click", () => {
                if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)
                    || (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
                    //Mobile
                    SceneManager_1.SceneManager.Instance.AddScene(new Tutorialscene_1.TutorialScene("mobile"));
                }
                else {
                    //PC/other
                    SceneManager_1.SceneManager.Instance.AddScene(new Tutorialscene_1.TutorialScene("pc"));
                }
            });
            SettingBtn.className = "TitleBtn";
            SettingBtn.style.bottom = "10px";
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
            this.UIs.push(TutorialBtn);
            this.UIs.push(StartBtn);
            this.UIs.push(SettingBtn);
        }
        call() {
            super.call();
            this.background.src = "./image/Title.png";
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