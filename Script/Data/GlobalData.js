define(["require", "exports", "../Base/Size", "./FieldFunction", "./EnemyPattern"], function (require, exports, Size_1, FieldFunction_1, EnemyPattern_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalData = void 0;
    class GlobalData {
        constructor() {
            //---
            //ゲーム設定
            this.ScreenSize = new Size_1.Size(600, 600);
            this.UIScreen = document.getElementById("GameUI");
            //---
            //設定
            this.KeySet = {
                "Ok": " ",
                "Cansel": "Backspace",
                "Dash": "Shift",
                "Up": "ArrowUp",
                "Down": "ArrowDown",
                "Left": "ArrowLeft",
                "Right": "ArrowRight",
                "Attack": " ",
                "SuperAttack": "4",
                "Skill3": "1",
                "Skill2": "2",
                "Skill1": "3",
            };
            this.AssistSettingList = {
                "デバッグモード": false,
                "進行方向アシストアイコン": true,
                "攻撃方向アシストアイコン": true,
                "攻撃範囲表示": true,
            };
            this.FieldGameEnd = FieldFunction_1.FieldGameEnd;
            this.EnemyPattern = EnemyPattern_1.EnemyPattern;
            //---
            //進行データ
            this.averageFps = 0;
        }
        setUp() {
        }
    }
    exports.GlobalData = GlobalData;
    //
    GlobalData.Instance = new GlobalData();
});
//# sourceMappingURL=GlobalData.js.map