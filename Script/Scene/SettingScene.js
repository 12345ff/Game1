define(["require", "exports", "./Scene", "./SceneManager", "../Data/GlobalData"], function (require, exports, Scene_1, SceneManager_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SettingScene = void 0;
    class SettingScene extends Scene_1.Scene {
        constructor() {
            super();
            let SettingField = document.createElement("div");
            SettingField.className = "settingField";
            //戻るボタン
            let BackBtn = document.createElement("button");
            BackBtn.style.float = "left";
            BackBtn.textContent = "back";
            BackBtn.style.width = "200px";
            BackBtn.style.height = "100px";
            BackBtn.style.fontSize = "50px";
            BackBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.RemoveScene(1);
            });
            SettingField.appendChild(BackBtn);
            //キー設定
            let KeySettings = document.createElement("ul");
            KeySettings.style.marginTop = "100px";
            KeySettings.classList.add("SettingList");
            KeySettings.classList.add("OptionClose");
            let KeySettingText = document.createElement("p");
            KeySettingText.textContent = "キー設定";
            KeySettingText.className = "SettingText";
            KeySettingText.addEventListener("click", () => {
                if (KeySettings.classList.contains("OptionClose")) {
                    KeySettings.classList.remove("OptionClose");
                }
                else {
                    KeySettings.classList.add("OptionClose");
                }
            });
            SettingField.appendChild(KeySettings);
            KeySettings.appendChild(KeySettingText);
            //キー設定:キー一覧
            for (let key in GlobalData_1.GlobalData.Instance.KeySet) {
                let Li = document.createElement("li");
                let Label = document.createElement("p");
                let Input = document.createElement("input");
                Li.className = "SettingLi";
                Label.className = "Setting_Label";
                if (GlobalData_1.GlobalData.Instance.KeySet[key] == " ") {
                    Label.textContent = `${key}:[Space]`;
                }
                else {
                    Label.textContent = `${key}:[${GlobalData_1.GlobalData.Instance.KeySet[key]}]`;
                }
                Input.className = "Setting_Input";
                Input.type = "textBox";
                Input.style.width = "50px";
                Input.addEventListener("keydown", (e) => {
                    Input.value = "";
                    GlobalData_1.GlobalData.Instance.KeySet[key] = e.key;
                    if (e.key == " ") {
                        Label.textContent = `${key}:[Space]`;
                    }
                    else {
                        Label.textContent = `${key}:[${e.key}]`;
                    }
                });
                Li.appendChild(Label);
                Li.appendChild(Input);
                KeySettings.appendChild(Li);
            }
            //ナビゲーション設定
            let NaviSettings = document.createElement("ul");
            NaviSettings.style.marginTop = "0";
            NaviSettings.classList.add("SettingList");
            NaviSettings.classList.add("OptionClose");
            let NaviSettingText = document.createElement("p");
            NaviSettingText.textContent = "アシスト設定";
            NaviSettingText.className = "SettingText";
            NaviSettingText.addEventListener("click", () => {
                if (NaviSettings.classList.contains("OptionClose")) {
                    NaviSettings.classList.remove("OptionClose");
                }
                else {
                    NaviSettings.classList.add("OptionClose");
                }
            });
            SettingField.appendChild(NaviSettings);
            NaviSettings.appendChild(NaviSettingText);
            //ナビゲーション設定:各項目
            for (let key in GlobalData_1.GlobalData.Instance.AssistSettingList) {
                let Li = document.createElement("li");
                let Label = document.createElement("p");
                let Input = document.createElement("input");
                Li.className = "SettingLi";
                Label.className = "Setting_Label";
                Label.textContent = `${key}:[${GlobalData_1.GlobalData.Instance.AssistSettingList[key]}]`;
                Input.className = "Setting_Input";
                Input.type = "checkbox";
                Input.style.width = "50px";
                if (GlobalData_1.GlobalData.Instance.AssistSettingList[key])
                    Input.checked = true;
                Input.addEventListener("input", (e) => {
                    GlobalData_1.GlobalData.Instance.AssistSettingList[key] = Input.checked;
                    Label.textContent = `${key}:[${GlobalData_1.GlobalData.Instance.AssistSettingList[key]}]`;
                });
                Li.appendChild(Label);
                Li.appendChild(Input);
                NaviSettings.appendChild(Li);
            }
            this.UIs.push(SettingField);
        }
        draw(ctx) {
            ctx.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
        }
    }
    exports.SettingScene = SettingScene;
});
//# sourceMappingURL=SettingScene.js.map