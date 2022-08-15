define(["require", "exports", "../Base/Size", "../Base/Position", "../Base/Rectangle", "../Base/Animation", "../Base/ResourceManager", "./GlobalData", "../Scene/GameClearScene", "../Scene/SceneManager", "../Skill/Zisa", "../Skill/DamageField", "../Skill/Ball"], function (require, exports, Size_1, Position_1, Rectangle_1, Animation_1, ResourceManager_1, GlobalData_1, GameClearScene_1, SceneManager_1, Zisa_1, DamageField_1, Ball_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldFunction = exports.FieldGameEnd = void 0;
    exports.FieldGameEnd = {
        "normal": (scene) => {
            if (scene.hero.hp == 0 || scene.enemys.length == 0) {
                if (scene.hero.hp == 0) {
                    scene.loopOn = false;
                    setTimeout(() => {
                        SceneManager_1.SceneManager.Instance.AddScene(new GameClearScene_1.GameClearScene("負け", "戻る"));
                    }, 1000);
                }
                else if (scene.enemys.length == 0) {
                    scene.loopOn = false;
                    setTimeout(() => {
                        SceneManager_1.SceneManager.Instance.AddScene(new GameClearScene_1.GameClearScene("勝ち", "戻る"));
                    }, 1000);
                }
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
        "火災現場": (scene) => {
            scene.nowFlame++;
            if (scene.nowFlame == 1) {
                let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
                anime1.setInterval(20);
                let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
                anime1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
                ResourceManager_1.ResourceManager.Instance.PlusAnimation("火災", anime1);
            }
            if (scene.nowFlame % 120 == 0) {
                let x = Math.floor(Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.width);
                let y = Math.floor(Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.height);
                scene.DamageObjs.push(new DamageField_1.DamageField("any", new Size_1.Size(50, 50), 0, new Position_1.Position(x, y), -1, ResourceManager_1.ResourceManager.Instance.GetAnimation("火災")));
            }
        },
        "火球落下地帯": (scene) => {
            scene.nowFlame++;
            if (scene.nowFlame == 1) {
                //アニメーション基礎用意
                let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
                let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
                anime1.setInterval(10);
                anime2.setInterval(10);
                let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
                let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
                anime1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
                anime2.SetUp2(image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
                ResourceManager_1.ResourceManager.Instance.PlusAnimation("隕石1", anime1);
                ResourceManager_1.ResourceManager.Instance.PlusAnimation("隕石2", anime2);
            }
            if (scene.nowFlame % 60 == 0) {
                let x = Math.floor(Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.width);
                scene.DamageObjs.push(new Ball_1.DamageBall("any", 15, 25, 90, 3, new Position_1.Position(x, -100), ResourceManager_1.ResourceManager.Instance.GetAnimation("隕石1"), ResourceManager_1.ResourceManager.Instance.GetAnimation("隕石2")));
            }
        },
    };
});
//# sourceMappingURL=FieldFunction.js.map