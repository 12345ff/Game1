define(["require", "exports", "../Scene/SceneManager", "../Scene/GameClearScene", "../Base/ResourceManager", "../Base/Animation", "../Base/Size", "../Base/Rectangle", "./GlobalData", "../Base/Position", "../Skill/Zisa"], function (require, exports, SceneManager_1, GameClearScene_1, ResourceManager_1, Animation_1, Size_1, Rectangle_1, GlobalData_1, Position_1, Zisa_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldFunction = exports.FieldGameEnd = void 0;
    exports.FieldGameEnd = {
        "normal": (scene) => {
            if (scene.hero.hp == 0 || scene.enemys.length == 0) {
                if (scene.hero.hp == 0)
                    SceneManager_1.SceneManager.Instance.AddScene(new GameClearScene_1.GameClearScene("負け", "戻る"));
                else if (scene.enemys.length == 0)
                    SceneManager_1.SceneManager.Instance.AddScene(new GameClearScene_1.GameClearScene("勝ち", "戻る"));
            }
        },
    };
    exports.FieldFunction = {
        "normal": (scene) => {
        },
        "消失地帯": (scene) => {
            scene.nowFlame++;
            if (scene.nowFlame == 1) {
                let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
                let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
                anime1.setInterval(10);
                anime2.setInterval(10);
                let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("2");
                let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("11");
                anime1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
                anime2.SetUp2(image2, [
                    new Rectangle_1.Rectangle(0, 0, 240, 240), new Rectangle_1.Rectangle(240, 0, 240, 240), new Rectangle_1.Rectangle(480, 0, 240, 240),
                    new Rectangle_1.Rectangle(720, 0, 240, 240), new Rectangle_1.Rectangle(960, 0, 240, 240), new Rectangle_1.Rectangle(1200, 0, 240, 240),
                    new Rectangle_1.Rectangle(1440, 0, 240, 240), new Rectangle_1.Rectangle(1680, 0, 240, 240), new Rectangle_1.Rectangle(1920, 0, 240, 240),
                    new Rectangle_1.Rectangle(2160, 0, 240, 240), new Rectangle_1.Rectangle(2400, 0, 240, 240), new Rectangle_1.Rectangle(2640, 0, 240, 240),
                ]);
                ResourceManager_1.ResourceManager.Instance.PlusAnimation("消失Start", anime1);
                ResourceManager_1.ResourceManager.Instance.PlusAnimation("消失End", anime2);
            }
            if (scene.nowFlame % 60 == 0) {
                let x = Math.floor(Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.width);
                let y = Math.floor(Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.height);
                scene.DamageObjs.push(new Zisa_1.DamageZisa("any", 10, 120, 60, new Size_1.Size(25, 25), 0, new Position_1.Position(x, y), ResourceManager_1.ResourceManager.Instance.GetAnimation("消失Start"), ResourceManager_1.ResourceManager.Instance.GetAnimation("消失End")));
            }
        },
    };
});
//# sourceMappingURL=FieldFunction.js.map