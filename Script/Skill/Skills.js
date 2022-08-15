define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/Rectangle", "./Skill", "./Ball", "./Tracking", "./Rect", "../Base/ResourceManager", "../Base/Animation", "./Zisa", "./DamageField", "./Effect", "../Data/GlobalData"], function (require, exports, Position_1, Size_1, Rectangle_1, Skill_1, Ball_1, Tracking_1, Rect_1, ResourceManager_1, Animation_1, Zisa_1, DamageField_1, Effect_1, GlobalData_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkillList = exports.Skills = void 0;
    let icon1 = document.createElement("img");
    let icon2 = document.createElement("img");
    icon1.src = "./image/Icon/Icon2.png";
    icon2.src = "./image/Icon/Icon3.png";
    ResourceManager_1.ResourceManager.Instance.PlusImage("i1", icon1);
    ResourceManager_1.ResourceManager.Instance.PlusImage("i2", icon2);
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");
    let image4 = document.createElement("img");
    let image5 = document.createElement("img");
    let image6 = document.createElement("img");
    let image7 = document.createElement("img");
    let image8 = document.createElement("img");
    let image9 = document.createElement("img");
    let image10 = document.createElement("img");
    let image11 = document.createElement("img");
    let image12 = document.createElement("img");
    let image13 = document.createElement("img");
    let image14 = document.createElement("img");
    let image15 = document.createElement("img");
    image1.src = "./image/Effect/effect1.png";
    image2.src = "./image/Effect/effect2.png";
    image3.src = "./image/Effect/effect3.png";
    image4.src = "./image/Effect/effect4.png";
    image5.src = "./image/Effect/effect5.png";
    image6.src = "./image/Effect/effect6.png";
    image7.src = "./image/Effect/effect7.png";
    image9.src = "./image/Effect/effect9.png";
    image8.src = "./image/Effect/effect8.png";
    image10.src = "./image/Effect/effect10.png";
    image11.src = "./image/Effect/effect11.png";
    image12.src = "./image/Effect/effect12.png";
    image13.src = "./image/Effect/effect13.png";
    image14.src = "./image/Effect/effect14.png";
    image15.src = "./image/Effect/effect15.png";
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
    ResourceManager_1.ResourceManager.Instance.PlusImage("13", image13);
    ResourceManager_1.ResourceManager.Instance.PlusImage("14", image14);
    ResourceManager_1.ResourceManager.Instance.PlusImage("15", image15);
    class Skills {
        //画像読み込み
        static loadImage(animation, image, rects) {
            if (image.complete) {
                animation.SetUp2(image, rects);
            }
            else {
                image.addEventListener("load", () => {
                    animation.SetUp2(image, rects);
                });
            }
        }
    }
    exports.Skills = Skills;
    _a = Skills;
    //通常火の玉
    Skills.skill1 = new Skill_1.Skill("normal", "skill1", 3, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            //アニメーション基礎用意
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
            let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation1.setInterval(10);
            skill.animation2.setInterval(10);
            //アニメーション用意
            _a.loadImage(skill.animation1, image1, [
                new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
            ]);
            _a.loadImage(skill.animation2, image2, [
                new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
            ]);
            scene.DamageObjs.push(new Ball_1.DamageBall(executor.Type, 15, 25, executor.rotate, 3, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
    });
    //追尾火の玉
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
            _a.loadImage(skill.animation1, image1, [
                new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
            ]);
            _a.loadImage(skill.animation2, image2, [
                new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
            ]);
        }
        //スキル用意
        if (skill.nowFlame == 1) {
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 25, 25, 0, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 25, 25, 180, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
        skill.nowFlame++;
    });
    //火炎砲
    Skills.skill3 = new Skill_1.Skill("normal", "skill1", 3, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
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
                _a.loadImage(skill.animation1, image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
                _a.loadImage(skill.animation2, image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
            }
            let sin = Math.sin(executor.rotate * Math.PI / 180);
            let cos = Math.cos(executor.rotate * Math.PI / 180);
            scene.DamageObjs.push(new Rect_1.DamageRect(executor.Type, 10, new Size_1.Size(200, 40), executor.rotate, new Position_1.Position(executor.position.x + cos * (50 + executor.Size.width), executor.position.y + sin * (50 + executor.Size.height)), 30, skill.animation1));
        }
        skill.nowFlame++;
    });
    //時限爆弾
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
                _a.loadImage(skill.animation1, image1, [
                    new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                    new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
                ]);
                _a.loadImage(skill.animation2, image2, [
                    new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                    new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                    new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
                ]);
                let sin = Math.sin(executor.rotate * Math.PI / 180);
                let cos = Math.cos(executor.rotate * Math.PI / 180);
                scene.DamageObjs.push(new Zisa_1.DamageZisa(executor.Type, 20, 120, 60, new Size_1.Size(50, 50), 0, new Position_1.Position(executor.position.x + cos, executor.position.y + sin), skill.animation1, skill.animation2));
            }
        }
        skill.nowFlame++;
    });
    //放火
    Skills.skill5 = new Skill_1.Skill("normal", "skill1", 1, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        //アニメーション基礎用意
        let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation1.setInterval(10);
        _a.loadImage(skill.animation1, image1, [
            new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
            new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
        ]);
        let sin = Math.sin(executor.rotate * Math.PI / 180);
        let cos = Math.cos(executor.rotate * Math.PI / 180);
        scene.DamageObjs.push(new DamageField_1.DamageField(executor.Type, new Size_1.Size(50, 50), 0, new Position_1.Position(executor.position.x + cos * 60, executor.position.y + sin * 60), 300, skill.animation1));
    });
    //三連火の玉
    Skills.skill6 = new Skill_1.Skill("normal", "skill1", 5, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i2"), (scene, executor, skill) => {
        //アニメーション基礎用意
        let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
        let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation1.setInterval(10);
        skill.animation2.setInterval(10);
        skill.animation2.limit = 1;
        //アニメーション用意
        _a.loadImage(skill.animation1, image1, [
            new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
            new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
        ]);
        _a.loadImage(skill.animation2, image2, [
            new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
            new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
            new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
        ]);
        //技発動
        let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime3 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        scene.DamageObjs.push(new Ball_1.DamageBall(executor.Type, 15, 25, executor.rotate, 3, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, Object.assign(anime1, skill.animation2)));
        scene.DamageObjs.push(new Ball_1.DamageBall(executor.Type, 15, 25, executor.rotate - 30, 3, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, Object.assign(anime2, skill.animation2)));
        scene.DamageObjs.push(new Ball_1.DamageBall(executor.Type, 15, 25, executor.rotate + 30, 3, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, Object.assign(anime3, skill.animation2)));
    });
    //超追撃
    Skills.skill7 = new Skill_1.Skill("normal", "skill1", 8, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("11");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation1.setInterval(5);
        _a.loadImage(skill.animation1, image1, [
            new Rectangle_1.Rectangle(0, 0, 240, 240), new Rectangle_1.Rectangle(240, 0, 240, 240), new Rectangle_1.Rectangle(480, 0, 240, 240),
            new Rectangle_1.Rectangle(720, 0, 240, 240), new Rectangle_1.Rectangle(960, 0, 240, 240), new Rectangle_1.Rectangle(1200, 0, 240, 240),
            new Rectangle_1.Rectangle(1440, 0, 240, 240), new Rectangle_1.Rectangle(1680, 0, 240, 240), new Rectangle_1.Rectangle(1920, 0, 240, 240),
            new Rectangle_1.Rectangle(2160, 0, 240, 240), new Rectangle_1.Rectangle(2400, 0, 240, 240), new Rectangle_1.Rectangle(2640, 0, 240, 240),
        ]);
        let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime3 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime4 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime5 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate - 90, 15, 60, 10, new Position_1.Position(executor.position.x, executor.position.y), Object.assign(anime1, skill.animation1), anime1));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate - 45, 15, 60, 10, new Position_1.Position(executor.position.x, executor.position.y), Object.assign(anime2, skill.animation1), anime2));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 15, 60, 10, new Position_1.Position(executor.position.x, executor.position.y), Object.assign(anime3, skill.animation1), anime3));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate + 45, 15, 60, 10, new Position_1.Position(executor.position.x, executor.position.y), Object.assign(anime4, skill.animation1), anime4));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate + 90, 15, 60, 10, new Position_1.Position(executor.position.x, executor.position.y), Object.assign(anime5, skill.animation1), anime5));
    });
    //光撃追撃(輪)
    Skills.skill8 = new Skill_1.Skill("normal", "skill1", 8, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i2"), (scene, executor, skill) => {
        let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("11");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation1.setInterval(5);
        _a.loadImage(skill.animation1, image1, [
            new Rectangle_1.Rectangle(0, 0, 240, 240), new Rectangle_1.Rectangle(240, 0, 240, 240), new Rectangle_1.Rectangle(480, 0, 240, 240),
            new Rectangle_1.Rectangle(720, 0, 240, 240), new Rectangle_1.Rectangle(960, 0, 240, 240), new Rectangle_1.Rectangle(1200, 0, 240, 240),
            new Rectangle_1.Rectangle(1440, 0, 240, 240), new Rectangle_1.Rectangle(1680, 0, 240, 240), new Rectangle_1.Rectangle(1920, 0, 240, 240),
            new Rectangle_1.Rectangle(2160, 0, 240, 240), new Rectangle_1.Rectangle(2400, 0, 240, 240), new Rectangle_1.Rectangle(2640, 0, 240, 240),
        ]);
        let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime3 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime4 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime5 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime6 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime7 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime8 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x + 30, executor.position.y), Object.assign(anime1, skill.animation1), anime1));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x + 30, executor.position.y + 30), Object.assign(anime2, skill.animation1), anime2));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x, executor.position.y + 30), Object.assign(anime3, skill.animation1), anime3));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x - 30, executor.position.y - 30), Object.assign(anime4, skill.animation1), anime4));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x - 30, executor.position.y), Object.assign(anime5, skill.animation1), anime5));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x - 30, executor.position.y + 30), Object.assign(anime6, skill.animation1), anime6));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x, executor.position.y - 30), Object.assign(anime7, skill.animation1), anime7));
        scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate, 10, 60, 10, new Position_1.Position(executor.position.x + 30, executor.position.y - 30), Object.assign(anime8, skill.animation1), anime8));
    });
    //光撃追撃(乱発)
    Skills.skill9 = new Skill_1.Skill("normal", "skill1", 8, 180, ResourceManager_1.ResourceManager.Instance.GetImage("i2"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("11");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation1.setInterval(5);
            _a.loadImage(skill.animation1, image1, [
                new Rectangle_1.Rectangle(0, 0, 240, 240), new Rectangle_1.Rectangle(240, 0, 240, 240), new Rectangle_1.Rectangle(480, 0, 240, 240),
                new Rectangle_1.Rectangle(720, 0, 240, 240), new Rectangle_1.Rectangle(960, 0, 240, 240), new Rectangle_1.Rectangle(1200, 0, 240, 240),
                new Rectangle_1.Rectangle(1440, 0, 240, 240), new Rectangle_1.Rectangle(1680, 0, 240, 240), new Rectangle_1.Rectangle(1920, 0, 240, 240),
                new Rectangle_1.Rectangle(2160, 0, 240, 240), new Rectangle_1.Rectangle(2400, 0, 240, 240), new Rectangle_1.Rectangle(2640, 0, 240, 240),
            ]);
        }
        if (skill.nowFlame % 20 == 0) {
            let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 15, 25, executor.rotate + skill.nowFlame % 30, 10, 60, 10, new Position_1.Position(executor.position.x + 30, executor.position.y), Object.assign(anime1, skill.animation1), anime1));
        }
        skill.nowFlame++;
    });
    //自爆
    Skills.skill10 = new Skill_1.Skill("normal", "skill1", 10, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        //アニメーション基礎用意
        let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
        let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
        skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(100, 100));
        skill.animation1.setInterval(10);
        skill.animation2.setInterval(10);
        skill.animation2.limit = 1;
        //アニメーション用意
        _a.loadImage(skill.animation1, image1, [
            new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
            new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
        ]);
        _a.loadImage(skill.animation2, image2, [
            new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
            new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
            new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
        ]);
        let anime1 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        let anime2 = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
        scene.DamageObjs.push(new Rect_1.DamageRect("any", 50, new Size_1.Size(100, 100), 0, new Position_1.Position(executor.position.x, executor.position.y + 1), 60, Object.assign(anime1, skill.animation2)));
        scene.DamageObjs.push(new DamageField_1.DamageField(executor.Type, new Size_1.Size(100, 100), 0, new Position_1.Position(executor.position.x, executor.position.y), 600, Object.assign(anime2, skill.animation1)));
    });
    //ワープ
    Skills.skill11 = new Skill_1.Skill("normal", "skill1", 1, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        //アニメーション用意
        let image = ResourceManager_1.ResourceManager.Instance.GetImage("7");
        skill.animation1 = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
        skill.animation1.limit = 1;
        skill.animation1.setInterval(5);
        _a.loadImage(skill.animation1, image, [
            new Rectangle_1.Rectangle(0, 0, 94, 150), new Rectangle_1.Rectangle(94, 0, 94, 150), new Rectangle_1.Rectangle(188, 0, 94, 150),
            new Rectangle_1.Rectangle(282, 0, 94, 150), new Rectangle_1.Rectangle(376, 0, 94, 150), new Rectangle_1.Rectangle(470, 0, 94, 150),
            new Rectangle_1.Rectangle(560, 0, 94, 150), new Rectangle_1.Rectangle(658, 0, 94, 150), new Rectangle_1.Rectangle(752, 0, 94, 150),
            new Rectangle_1.Rectangle(846, 0, 94, 150), new Rectangle_1.Rectangle(940, 0, 94, 150), new Rectangle_1.Rectangle(1034, 0, 94, 150),
        ]);
        scene.DamageObjs.push(new Effect_1.DamageEffect(executor.Type, 60, new Size_1.Size(50, 50), 0, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1));
        executor.position.x = Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.width;
        executor.position.y = Math.random() * GlobalData_1.GlobalData.Instance.ScreenSize.height;
    });
    //火の玉連撃
    Skills.super1 = new Skill_1.Skill("super", "skill1", 6, 150, ResourceManager_1.ResourceManager.Instance.GetImage("1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            //アニメーション基礎用意
            let image1 = ResourceManager_1.ResourceManager.Instance.GetImage("1");
            let image2 = ResourceManager_1.ResourceManager.Instance.GetImage("8");
            skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation2 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(50, 50));
            skill.animation1.setInterval(10);
            skill.animation2.setInterval(10);
            skill.animation2.limit = 1;
            //アニメーション用意
            _a.loadImage(skill.animation1, image1, [
                new Rectangle_1.Rectangle(0, 0, 192, 192), new Rectangle_1.Rectangle(192, 0, 192, 192), new Rectangle_1.Rectangle(384, 0, 192, 192), new Rectangle_1.Rectangle(576, 0, 192, 192), new Rectangle_1.Rectangle(768, 0, 192, 192),
                new Rectangle_1.Rectangle(0, 192, 192, 192), new Rectangle_1.Rectangle(192, 192, 192, 192), new Rectangle_1.Rectangle(384, 192, 192, 192), new Rectangle_1.Rectangle(576, 192, 192, 192), new Rectangle_1.Rectangle(768, 192, 192, 192)
            ]);
            _a.loadImage(skill.animation2, image2, [
                new Rectangle_1.Rectangle(0, 0, 180, 180), new Rectangle_1.Rectangle(180, 0, 180, 180), new Rectangle_1.Rectangle(360, 0, 180, 180), new Rectangle_1.Rectangle(540, 0, 180, 180),
                new Rectangle_1.Rectangle(720, 0, 180, 180), new Rectangle_1.Rectangle(900, 0, 180, 180), new Rectangle_1.Rectangle(1080, 0, 180, 180), new Rectangle_1.Rectangle(1260, 0, 180, 180),
                new Rectangle_1.Rectangle(1440, 0, 180, 180), new Rectangle_1.Rectangle(1620, 0, 180, 180),
            ]);
        }
        if (skill.nowFlame % 10 == 0) {
            let anime = new Animation_1.GameAnimation(0, new Size_1.Size(10, 10));
            scene.DamageObjs.push(new Tracking_1.TrackingBall(executor.Type, 10, 25, executor.rotate + skill.nowFlame, 3, 30, 5, new Position_1.Position(executor.position.x, executor.position.y), skill.animation1, skill.animation2));
        }
        skill.nowFlame++;
    });
    //強撃
    Skills.super2 = new Skill_1.Skill("super", "super2", 9, 1, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        let image = ResourceManager_1.ResourceManager.Instance.GetImage("15");
        skill.animation1 = new Animation_1.GameAnimation(executor.rotate, new Size_1.Size(150, 150));
        skill.animation1.setInterval(5);
        skill.animation1.limit = 1;
        _a.loadImage(skill.animation1, image, [
            new Rectangle_1.Rectangle(0, 0, 320, 240), new Rectangle_1.Rectangle(0, 240, 320, 240), new Rectangle_1.Rectangle(0, 480, 320, 240),
            new Rectangle_1.Rectangle(0, 720, 320, 240), new Rectangle_1.Rectangle(0, 960, 320, 240), new Rectangle_1.Rectangle(0, 1200, 320, 240),
            new Rectangle_1.Rectangle(0, 1440, 320, 240), new Rectangle_1.Rectangle(0, 1680, 320, 240), new Rectangle_1.Rectangle(1920, 0, 320, 240),
            new Rectangle_1.Rectangle(2160, 0, 320, 240)
        ]);
        let sin = Math.sin(executor.rotate * Math.PI / 180);
        let cos = Math.cos(executor.rotate * Math.PI / 180);
        scene.DamageObjs.push(new Rect_1.DamageRect(executor.Type, 150, new Size_1.Size(150, 150), executor.rotate, new Position_1.Position(cos * 50 + executor.position.x, sin * 50 + executor.position.y), 60, skill.animation1));
    });
    //強撃2
    Skills.super3 = new Skill_1.Skill("super", "super3", 12, 120, ResourceManager_1.ResourceManager.Instance.GetImage("i1"), (scene, executor, skill) => {
        if (skill.nowFlame == 1) {
            let image = ResourceManager_1.ResourceManager.Instance.GetImage("13");
            skill.animation1 = new Animation_1.GameAnimation(0, new Size_1.Size(200, 200));
            skill.animation1.setInterval(5);
            skill.animation1.limit = 1;
            _a.loadImage(skill.animation1, image, [
                new Rectangle_1.Rectangle(0, 0, 480, 480), new Rectangle_1.Rectangle(480, 0, 480, 480), new Rectangle_1.Rectangle(960, 0, 480, 480), new Rectangle_1.Rectangle(1440, 0, 480, 480), new Rectangle_1.Rectangle(1920, 0, 480, 480),
                new Rectangle_1.Rectangle(0, 480, 480, 480), new Rectangle_1.Rectangle(480, 480, 480, 480), new Rectangle_1.Rectangle(960, 480, 480, 480), new Rectangle_1.Rectangle(1440, 480, 480, 480), new Rectangle_1.Rectangle(1920, 480, 480, 480),
                new Rectangle_1.Rectangle(0, 960, 480, 480), new Rectangle_1.Rectangle(480, 960, 480, 480), new Rectangle_1.Rectangle(960, 960, 480, 480), new Rectangle_1.Rectangle(1440, 960, 480, 480), new Rectangle_1.Rectangle(1920, 960, 480, 480),
            ]);
            let sin = Math.sin(executor.rotate * Math.PI / 180);
            let cos = Math.cos(executor.rotate * Math.PI / 180);
            scene.DamageObjs.push(new Rect_1.DamageRect(executor.Type, 150, new Size_1.Size(200, 200), executor.rotate, new Position_1.Position(cos * 50 + executor.position.x, sin * 50 + executor.position.y), 60, skill.animation1));
        }
        skill.nowFlame++;
    });
    exports.SkillList = {
        "skill1": Skills.skill1,
        "火の玉": Skills.skill1,
        "3連火の玉": Skills.skill6,
        "火の玉(追尾)": Skills.skill2,
        "火炎砲": Skills.skill3,
        "放火": Skills.skill5,
        "時限式爆弾": Skills.skill4,
        "光撃追撃": Skills.skill7,
        "光撃追撃(輪)": Skills.skill8,
        "光撃追撃(乱発)": Skills.skill9,
        "自爆": Skills.skill10,
        "ワープ": Skills.skill11,
        "連続火炎弾": Skills.super1,
        "強撃": Skills.super2,
        "超攻撃": Skills.super3,
    };
});
//lv1:3
//lv2:5
//lv3:8
//lv4:10
//必要ゲージは消費税方式
//# sourceMappingURL=Skills.js.map