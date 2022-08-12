define(["require", "exports", "./Scene", "../Data/GlobalData", "../Object/Hero", "../Object/Enemy", "./SceneManager", "../Base/Position", "../Base/ResourceManager"], function (require, exports, Scene_1, GlobalData_1, Hero_1, Enemy_1, SceneManager_1, Position_1, ResourceManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameScene = void 0;
    class GameScene extends Scene_1.Scene {
        constructor(fieldImageName, heroLevel, heroSkill1, heroSkill2, heroSkill3, heroSkillSuper, enemyLevel, enemySkill1, enemySkill2, enemySkill3, enemySkillSuper, fieldFunctionEnd, fieldFunction, enemyPattern) {
            super();
            this.enemys = [];
            this.keys = [];
            this.Objects = [];
            this.DamageObjs = [];
            this.nowFlame = 0;
            this.TouchBegin = null;
            this.TouchBeginTime = null;
            this.TouchNow = null;
            this.Circle_Begin = document.getElementById("BigCircle");
            this.Circle_Control = document.getElementById("ControlCircle");
            this.fieldImageName = fieldImageName;
            let img1 = document.createElement("img");
            let img2 = document.createElement("img");
            let img3 = document.createElement("img");
            img1.src = "./image/Chara/chara1.png";
            img2.src = "./image/AtkAnime1.png";
            img3.src = "./image/Chara/chara2.png";
            ResourceManager_1.ResourceManager.Instance.PlusImage("img1", img1);
            ResourceManager_1.ResourceManager.Instance.PlusImage("img2", img3);
            ResourceManager_1.ResourceManager.Instance.PlusImage("atkAnime1", img2);
            this.BackCanvas = document.createElement("canvas");
            this.context = this.BackCanvas.getContext("2d");
            this.context.imageSmoothingEnabled = false;
            this.BackCanvas.width = GlobalData_1.GlobalData.Instance.ScreenSize.width;
            this.BackCanvas.height = GlobalData_1.GlobalData.Instance.ScreenSize.height;
            this.fieldFunctionEnd = fieldFunctionEnd;
            this.fieldFunction = fieldFunction;
            this.hero = new Hero_1.Hero(heroLevel, heroSkill1, heroSkill2, heroSkill3, heroSkillSuper);
            this.enemys.push(new Enemy_1.Enemy(enemyLevel, enemyPattern, enemySkill1, enemySkill2, enemySkill3, enemySkillSuper));
            this.hero.position = new Position_1.Position(100, 300);
            this.hero.target = this.enemys[0];
            this.enemys[0].position = new Position_1.Position(500, 300);
        }
        update() {
            if (this.TouchBegin != null && this.TouchNow != null) {
                let saX = this.TouchNow.speed.x - this.TouchBegin.speed.x;
                let saY = this.TouchNow.speed.y - this.TouchBegin.speed.y;
                const max = 150;
                if (saX > max)
                    saX = max;
                else if (saX < -max)
                    saX = -max;
                if (saY > max)
                    saY = max;
                else if (saY < -max)
                    saY = -max;
                this.Circle_Control.style.top = `${parseInt(this.Circle_Begin.style.top) + saY}px`;
                this.Circle_Control.style.left = `${parseInt(this.Circle_Begin.style.left) + saX}px`;
                saX = saX / 300 * this.hero.speed;
                saY = saY / 300 * this.hero.speed;
                if (this.hero.Status == "Work" || this.hero.Status == "Stand")
                    this.hero.move(saX, saY);
            }
            //主人公の処理
            this.hero.CharacteUpdate(this.keys, this);
            //敵の処理
            let array = [];
            for (let i = 0; i < this.enemys.length; i++) {
                this.enemys[i].update(this);
                if (!this.enemys[i].delete)
                    array.push(this.enemys[i]);
            }
            this.enemys = array;
            //ダメージオブジェクトの処理
            let array2 = [];
            for (let i = 0; i < this.DamageObjs.length; i++) {
                this.DamageObjs[i].update(this);
                if (this.DamageObjs[i].mode != "delete") {
                    array2.push(this.DamageObjs[i]);
                }
            }
            this.DamageObjs = array2;
            //そのほかオブジェクトの処理
            for (let i = 0; i < this.Objects.length; i++) {
                let target = this.Objects[i];
                //衝突しているか
                if (this.hero.Size.width == 0 || this.hero.Size.height == 0 ||
                    target.Size.width == 0 || target.Size.height == 0 ||
                    Math.abs(this.hero.position.x - target.position.x) > this.hero.Size.width / 2 + target.Size.width / 2 ||
                    Math.abs(this.hero.position.y - target.position.y) > this.hero.Size.height / 2 + target.Size.height / 2) {
                    continue;
                }
                //衝突の応答
                let overlap = new Position_1.Position(Math.sign(this.hero.position.x - target.position.x) * ((target.Size.width / 2 + this.hero.Size.width / 2) - Math.abs(this.hero.position.x - target.position.x)), Math.sign(this.hero.position.y - target.position.y) * ((target.Size.height / 2 + this.hero.Size.height / 2) - Math.abs(this.hero.position.y - target.position.y)));
                let BeforeOverlapX = Math.abs(this.hero.OldPosition.x - target.position.x) < this.hero.Size.width / 2 + target.Size.width / 2;
                let BeforeOverlapY = Math.abs(this.hero.OldPosition.y - target.position.y) < this.hero.Size.height / 2 + target.Size.height / 2;
                if ((!BeforeOverlapX && BeforeOverlapY) || (!BeforeOverlapX && !BeforeOverlapY && Math.abs(overlap.x) <= Math.abs(overlap.y))) {
                    this.hero.position.x += overlap.x;
                    if (overlap.x < 0) {
                        this.hero.nowSpeed.x = Math.min(this.hero.nowSpeed.x, 0.0);
                    }
                    else {
                        this.hero.nowSpeed.x = Math.max(this.hero.nowSpeed.x, 0.0);
                    }
                }
                else {
                    this.hero.position.y += overlap.y;
                    if (overlap.y < 0) {
                        this.hero.nowSpeed.y = Math.min(this.hero.nowSpeed.y, 0);
                    }
                    else {
                        this.hero.nowSpeed.y = Math.max(this.hero.nowSpeed.y, 0);
                    }
                }
            }
            this.fieldFunction(this);
            this.fieldFunctionEnd(this);
        }
        draw(ctx) {
            this.context.clearRect(0, 0, this.BackCanvas.width, this.BackCanvas.height);
            ctx.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
            for (let i = 0; i < this.enemys.length; i++) {
                this.enemys[i].draw(this.context);
            }
            this.hero.draw(this.context);
            for (let i = 0; i < this.DamageObjs.length; i++) {
                this.DamageObjs[i].draw(this.context);
            }
            //スキルアイコン
            this.context.drawImage(this.hero.skill1.image, GlobalData_1.GlobalData.Instance.ScreenSize.width - 100, GlobalData_1.GlobalData.Instance.ScreenSize.height - 100);
            this.context.drawImage(this.hero.skill2.image, GlobalData_1.GlobalData.Instance.ScreenSize.width - 200, GlobalData_1.GlobalData.Instance.ScreenSize.height - 100);
            this.context.drawImage(this.hero.skill3.image, GlobalData_1.GlobalData.Instance.ScreenSize.width - 300, GlobalData_1.GlobalData.Instance.ScreenSize.height - 100);
            this.context.drawImage(this.hero.superSkill.image, GlobalData_1.GlobalData.Instance.ScreenSize.width - 100, GlobalData_1.GlobalData.Instance.ScreenSize.height - 200);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            let skillPercent1 = this.hero.skill1.point / this.hero.skill1.maxPoint;
            let skillPercent2 = this.hero.skill2.point / this.hero.skill2.maxPoint;
            let skillPercent3 = this.hero.skill3.point / this.hero.skill3.maxPoint;
            let superPercent = this.hero.superSkill.point / this.hero.superSkill.maxPoint;
            this.context.beginPath();
            this.context.arc(GlobalData_1.GlobalData.Instance.ScreenSize.width - 60, GlobalData_1.GlobalData.Instance.ScreenSize.height - 60, 45, 0, (Math.PI * 2) * skillPercent1);
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(GlobalData_1.GlobalData.Instance.ScreenSize.width - 160, GlobalData_1.GlobalData.Instance.ScreenSize.height - 60, 45, 0, (Math.PI * 2) * skillPercent2);
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(GlobalData_1.GlobalData.Instance.ScreenSize.width - 260, GlobalData_1.GlobalData.Instance.ScreenSize.height - 60, 45, 0, (Math.PI * 2) * skillPercent3);
            this.context.stroke();
            this.context.beginPath();
            this.context.arc(GlobalData_1.GlobalData.Instance.ScreenSize.width - 60, GlobalData_1.GlobalData.Instance.ScreenSize.height - 160, 45, 0, (Math.PI * 2) * superPercent);
            this.context.stroke();
            //
            ctx.drawImage(this.BackCanvas, 0, 0);
        }
        call() {
            super.call();
            this.background.src = `./image/Field/${this.fieldImageName}`;
        }
        move() {
            this.Circle_Begin.style.display = "none";
            this.Circle_Control.style.display = "none";
        }
        keydown(keyType) {
            this.keys.push(keyType);
            if (keyType == GlobalData_1.GlobalData.Instance.KeySet["Cansel"]) {
                SceneManager_1.SceneManager.Instance.RemoveScene(1);
            }
        }
        keyup(keyType) {
            let keys = [];
            for (let i = 0; i < this.keys.length; i++) {
                if (keyType != this.keys[i]) {
                    keys.push(this.keys[i]);
                }
            }
            this.keys = keys;
        }
        touchStart(Touch) {
            this.TouchBegin = Touch;
            this.TouchBeginTime = Date.now();
            this.Circle_Begin.style.top = Touch.speed.y.toString() + "px";
            this.Circle_Begin.style.left = Touch.speed.x.toString() + "px";
            this.Circle_Begin.style.display = "block";
            this.Circle_Control.style.display = "block";
        }
        touchNow(Touch) {
            this.TouchNow = Touch;
        }
        touchEnd(Touch) {
            this.TouchNow = null;
            let touchEndTime = Date.now();
            if (this.TouchBegin != null && this.TouchBeginTime != null && touchEndTime - this.TouchBeginTime < 500) {
                let saX = Touch.speed.x - this.TouchBegin.speed.x;
                let saY = Touch.speed.y - this.TouchBegin.speed.y;
                const max = 150;
                if (saX > max)
                    saX = max;
                else if (saX < -max)
                    saX = -max;
                if (saY > max)
                    saY = max;
                else if (saY < -max)
                    saY = -max;
                this.hero.dush(saX / max, saY / max);
            }
            this.TouchBegin = null;
            this.Circle_Begin.style.display = "none";
            this.Circle_Control.style.display = "none";
        }
    }
    exports.GameScene = GameScene;
});
//# sourceMappingURL=GameScene.js.map