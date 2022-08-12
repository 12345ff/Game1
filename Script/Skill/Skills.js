define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/Rectangle", "./Skill", "./Ball", "./Tracking", "./Rect", "../Base/ResourceManager", "../Base/Animation", "./Zisa"], function (require, exports, Position_1, Size_1, Rectangle_1, Skill_1, Ball_1, Tracking_1, Rect_1, ResourceManager_1, Animation_1, Zisa_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkillList = exports.Skills = void 0;
    let icon1 = document.createElement("img");
    let icon2 = document.createElement("img");
    icon1.src = "./image/Icon/Icon2.png";
    icon2.src = "./image/Icon/Icon3.png";
    ResourceManager_1.ResourceManager.Instance.PlusImage("i1", icon1);
    ResourceManager_1.ResourceManager.Instance.PlusImage("i2", icon2);
    let image1 = document.createElement("img");
    image1.src = "./image/Effect/effect1.png";
    let image2 = document.createElement("img");
    image2.src = "./image/Effect/effect2.png";
    let image3 = document.createElement("img");
    image3.src = "./image/Effect/effect3.png";
    let image4 = document.createElement("img");
    image4.src = "./image/Effect/effect4.png";
    let image5 = document.createElement("img");
    image5.src = "./image/Effect/effect5.png";
    let image6 = document.createElement("img");
    image6.src = "./image/Effect/effect6.png";
    let image7 = document.createElement("img");
    image7.src = "./image/Effect/effect7.png";
    let image8 = document.createElement("img");
    image8.src = "./image/Effect/effect8.png";
    let image9 = document.createElement("img");
    image9.src = "./image/Effect/effect9.png";
    let image10 = document.createElement("img");
    image10.src = "./image/Effect/effect10.png";
    let image11 = document.createElement("img");
    image11.src = "./image/Effect/effect11.png";
    let image12 = document.createElement("img");
    image12.src = "./image/Effect/effect12.png";
    ResourceManager_1.ResourceManager.Instance.PlusImage("1", image1);
    ResourceManager_1.ResourceManager.Instance.PlusImage("2", image2);
    ResourceManager_1.ResourceManager.Instance.PlusImage("3", image3);
    ResourceManager_1.ResourceManager.Instance.PlusImage("4", image4);
    ResourceManager_1.ResourceManager.Instance.PlusImage("5", image5);
    ResourceManager_1.ResourceManager.Instance.PlusImage("6", image6);
    ResourceManager_1.ResourceManager.Instance.PlusImage("7", image7);
    ResourceManager_1.ResourceManager.Instance.PlusImage("8", image8);
    ResourceManager_1.ResourceManager.Instance.PlusImage("9", image9);
    ResourceManager_1.ResourceManager.Instance.PlusImage("10", image10);
    ResourceManager_1.ResourceManager.Instance.PlusImage("11", image11);
    ResourceManager_1.ResourceManager.Instance.PlusImage("12", image12);
    class Skills {
    }
    exports.Skills = Skills;
    Skills.skill1 = new Skill_1.Skill("normal", "skill1", 5, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            //アニメーション基礎用意
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
            let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(100, 100));
            skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(100, 100));
            skill.animation1.setInterval(10);
            skill.animation2.setInterval(10);
            //アニメーション用意
            if (image1.complete) {
                skill.animation1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
            }
            else {
                image1.addEventListener("load", () => {
                    skill.animation1.SetUp2(image1, [
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                        new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                    ]);
                });
            }
            if (image2.complete) {
                skill.animation2.SetUp2(image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
            }
            else {
                image2.addEventListener("load", () => {
                    skill.animation2.SetUp2(image2, [
                        new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                        new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                        new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                    ]);
                });
            }
        }
        scene.DamageObjs.push(new Ball_1.DamageBall(executor.Type, 15, 50, executor.rotate, 3, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
    });
    Skills.skill2 = new Skill_1.Skill("normal", "skill1", 5, 3, ResourceManager_1.ResourceManager.Instance.GetImage("i2"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            //アニメーション基礎用意
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
            let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation1.setInterval(10);
            skill.animation2.setInterval(10);
            //アニメーション用意
            if (image1.complete) {
                skill.animation1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
            }
            else {
                image1.addEventListener("load", () => {
                    skill.animation1.SetUp2(image1, [
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                        new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                    ]);
                });
            }
            if (image2.complete) {
                skill.animation2.SetUp2(image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
            }
            else {
                image2.addEventListener("load", () => {
                    skill.animation2.SetUp2(image2, [
                        new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                        new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                        new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                    ]);
                });
            }
        }
        //スキル用意
        if (skill.nowFlame == 1) {
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 25, 25, 0, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
        else if (skill.nowFlame == 3) {
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 25, 25, 180, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
        skill.nowFlame++;
    });
    Skills.skill3 = new Skill_1.Skill("normal", "skill1", 1, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1 && executor.targetPos != null) {
            if (skill.nowFlame == 1) {
                //アニメーション基礎用意
                let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
                let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
                skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(200, 40));
                skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(200, 40));
                skill.animation1.setInterval(10);
                skill.animation2.setInterval(10);
                //アニメーション用意
                if (image1.complete) {
                    skill.animation1.SetUp2(image1, [
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                        new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                    ]);
                }
                else {
                    image1.addEventListener("load", () => {
                        skill.animation1.SetUp2(image1, [
                            new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                            new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                        ]);
                    });
                }
                if (image2.complete) {
                    skill.animation2.SetUp2(image2, [
                        new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                        new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                        new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                    ]);
                }
                else {
                    image2.addEventListener("load", () => {
                        skill.animation2.SetUp2(image2, [
                            new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                            new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                            new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                        ]);
                    });
                }
            }
            let sin = Math.sin(executor.rotate * Math.PI / 180);
            let cos = Math.cos(executor.rotate * Math.PI / 180);
            scene.DamageObjs.push(new Rect_1.DamageRect(executor.Type, 10, new Size_1.Size(200, 40), executor.rotate, new Position_1.Position(executor.position.x + cos * (50 + executor.Size.width), executor.position.y + sin * (50 + executor.Size.height)), skill.animation1));
        }
        skill.nowFlame++;
    });
    Skills.skill4 = new Skill_1.Skill("normal", "skill1", 1, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1 && executor.targetPos != null) {
            if (skill.nowFlame == 1) {
                //アニメーション基礎用意
                let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("2");
                let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
                skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
                skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
                skill.animation1.setInterval(10);
                skill.animation2.setInterval(10);
                //アニメーション用意
                if (image1.complete) {
                    skill.animation1.SetUp2(image1, [
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                        new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                    ]);
                }
                else {
                    image1.addEventListener("load", () => {
                        skill.animation1.SetUp2(image1, [
                            new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                            new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                        ]);
                    });
                }
                if (image2.complete) {
                    skill.animation2.SetUp2(image2, [
                        new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                        new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                        new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                    ]);
                }
                else {
                    image2.addEventListener("load", () => {
                        skill.animation2.SetUp2(image2, [
                            new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                            new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                            new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                        ]);
                    });
                }
            }
            let sin = Math.sin(executor.rotate * Math.PI / 180);
            let cos = Math.cos(executor.rotate * Math.PI / 180);
            scene.DamageObjs.push(new Zisa_1.DamageZisa(executor.Type, 20, 120, 60, new Size_1.Size(50, 50), 0, new Position_1.Position(executor.position.x + cos, executor.position.y + sin), skill.animation1, skill.animation2));
        }
        skill.nowFlame++;
    });
    Skills.super1 = new Skill_1.Skill("super", "skill2", 6, 300, ResourceManager_1.ResourceManager.Instance.GetImage("1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            //アニメーション基礎用意
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
            let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation1.setInterval(10);
            skill.animation2.setInterval(10);
            //アニメーション用意
            if (image1.complete) {
                skill.animation1.SetUp2(image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
            }
            else {
                image1.addEventListener("load", () => {
                    skill.animation1.SetUp2(image1, [
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                        new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                    ]);
                });
            }
            if (image2.complete) {
                skill.animation2.SetUp2(image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
            }
            else {
                image2.addEventListener("load", () => {
                    skill.animation2.SetUp2(image2, [
                        new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                        new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                        new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                    ]);
                });
            }
        }
        if (skill.nowFlame % 20 == 0) {
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 10, 25, executor.rotate + skill.nowFlame, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
        skill.nowFlame++;
    });
    exports.SkillList = {
        "skill1": Skills.skill1,
        "skill2": Skills.skill2,
        "skill3": Skills.skill3,
        "skill4": Skills.skill4,
        "super1": Skills.super1,
    };
});
//# sourceMappingURL=Skills.js.map