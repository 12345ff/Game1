define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/Rectangle", "../Base/Animation", "../Data/GlobalData", "./Character", "../Base/ResourceManager"], function (require, exports, Position_1, Size_1, Rectangle_1, Animation_1, GlobalData_1, Character_1, ResourceManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero = void 0;
    class Hero extends Character_1.GameCharacter {
        constructor(Lv, skill1, skill2, skill3, skillSuper) {
            super(Lv, skill1, skill2, skill3, skillSuper);
            this.Type = "hero";
            this.target = null;
            this.AtkAnimation = null;
            this.PrivateCanvas = document.createElement("canvas");
            this.PrivateCanvas.width = GlobalData_1.GlobalData.Instance.ScreenSize.width;
            this.PrivateCanvas.height = GlobalData_1.GlobalData.Instance.ScreenSize.height;
            this.PrivateCtx = this.PrivateCanvas.getContext("2d");
            this.Status = "Stand";
            this.WorkAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
            this.StandAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
            this.AttackAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(50, 50));
            this.OldRotate = 270;
            this.OldDirection = 270;
            this.SaveEyeIconPos = new Position_1.Position(0, 0);
            this.SaveEyeIconPos2 = new Position_1.Position(0, 0);
            let Image1 = ResourceManager_1.ResourceManager.Instance.GetImage("img2");
            Image1.addEventListener("load", () => {
                this.StandAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(0, 0, 64, 64), new Rectangle_1.Rectangle(64, 0, 64, 64), new Rectangle_1.Rectangle(128, 0, 64, 64),]);
                this.WorkAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(192, 64, 64, 64), new Rectangle_1.Rectangle(256, 64, 64, 64)]);
                this.AttackAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(384, 0, 64, 64), new Rectangle_1.Rectangle(448, 0, 64, 64), new Rectangle_1.Rectangle(512, 0, 64, 64)]);
            });
            let eyeimage = document.createElement("img");
            this.EyeIcon_Rotate = document.createElement("canvas");
            eyeimage.src = "./image/Eye.png";
            eyeimage.onload = () => {
                let canvas = document.createElement("canvas");
                canvas.width = 25;
                canvas.height = 25;
                let ctx = canvas.getContext("2d");
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(eyeimage, 0, 0, 25, 25);
                this.EyeIcon_Rotate = canvas;
            };
            let eyeimage2 = document.createElement("img");
            this.EyeIcon_Direction = document.createElement("canvas");
            eyeimage2.src = "./image/Eye_Blue.png";
            eyeimage2.onload = () => {
                let canvas = document.createElement("canvas");
                canvas.width = 25;
                canvas.height = 25;
                let ctx = canvas.getContext("2d");
                ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(eyeimage2, 0, 0, 25, 25);
                this.EyeIcon_Direction = canvas;
            };
        }
        CharacteUpdate(keys, scene) {
            var _a, _b, _c;
            this.OldRotate = this.rotate;
            this.OldDirection = this.direction;
            if (this.target != null) {
                this.targetPos = new Position_1.Position(this.target.position.x, this.target.position.y);
            }
            if (this.delay > 0) {
                this.delay--;
            }
            const up = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Up"]);
            const down = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Down"]);
            const left = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Left"]);
            const right = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Right"]);
            const dash = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Dash"]);
            const atk = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Attack"]);
            const skill1 = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill1"]);
            const skill2 = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill2"]);
            const skill3 = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill3"]);
            const superskill = keys.includes(GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"]);
            if (this.condition["やけど"].countdown()) {
                if (scene.enemys.length > 0)
                    this.damage(scene.enemys[0], 10);
                else
                    this.damage(this, 3);
            }
            if (!this.condition["麻痺"].on) {
                //ボタン操作
                if (atk) {
                    //攻撃
                    if (this.delay <= 0) {
                        //攻撃中状態にする
                        this.delay = this.atkDelay;
                        this.Status = "Attack";
                        this.nowSpeed = new Position_1.Position(0, 0);
                        //攻撃アニメーション用意
                        this.AtkAnimation = new Animation_1.GameAnimation(this.rotate - 270, new Size_1.Size(this.Size.width * 2, this.Size.height * 3));
                        this.AtkAnimation.setInterval(10);
                        this.AtkAnimation.limit = 1;
                        this.AtkAnimation.SetUp2(ResourceManager_1.ResourceManager.Instance.GetImage("atkAnime1"), [new Rectangle_1.Rectangle(0, 0, 50, 50), new Rectangle_1.Rectangle(0, 50, 50, 50), new Rectangle_1.Rectangle(0, 100, 50, 50), new Rectangle_1.Rectangle(0, 150, 50, 50), new Rectangle_1.Rectangle(0, 200, 50, 50),]);
                        //当たり判定
                        for (let i = 0; i < scene.enemys.length; i++) {
                            const target = scene.enemys[i];
                            const saX = target.position.x - this.position.x;
                            const saY = target.position.y - this.position.y;
                            const saWidth = target.Size.width + this.atkRenge;
                            const saHeight = target.Size.height + this.atkRenge;
                            const sa = saX * saX + saY * saY;
                            if (sa > saWidth * saWidth || sa > saHeight * saHeight) {
                                continue;
                            }
                            //↑範囲内か
                            const radian = Math.floor(Math.atan2(target.position.y - this.position.y, target.position.x - this.position.x) * (180 / Math.PI));
                            let atkRengePlus = radian + 90;
                            let atkRengeMinus = radian - 90;
                            let degree = parseInt((Math.atan2(saY, saX) * 180 / Math.PI).toString());
                            if (degree < 0)
                                degree += 360;
                            if (atkRengePlus >= 360)
                                atkRengePlus -= 360;
                            if (atkRengeMinus < 0)
                                atkRengeMinus += 360;
                            let atkFlag = false;
                            if (atkRengeMinus < atkRengeMinus) {
                                if (atkRengeMinus <= degree && degree <= atkRengePlus)
                                    atkFlag = true;
                            }
                            else {
                                if (atkRengeMinus <= degree && degree <= 360)
                                    atkFlag = true;
                                else if (atkRengePlus >= degree && degree >= 0)
                                    atkFlag = true;
                            }
                            if (atkFlag) {
                                //↑角度内か
                                target.damage(this, this.atk);
                                if (this.skill1.point < this.skill1.maxPoint)
                                    this.skill1.point++;
                                if (this.skill2.point < this.skill2.maxPoint)
                                    this.skill2.point++;
                                if (this.skill3.point < this.skill3.maxPoint)
                                    this.skill3.point++;
                            }
                        }
                    }
                }
                else if ((skill1 && this.skill1.point == this.skill1.maxPoint) ||
                    (skill2 && this.skill2.point == this.skill2.maxPoint) ||
                    (skill3 && this.skill3.point == this.skill3.maxPoint) ||
                    (superskill && this.superSkill.point == this.superSkill.maxPoint)) {
                    //スキル
                    if (this.delay <= 0) {
                        this.skill1.notActive();
                        this.skill2.notActive();
                        this.skill3.notActive();
                        this.superSkill.notActive();
                        if (this.superSkill.point < this.superSkill.maxPoint) {
                            this.superSkill.point++;
                        }
                        if (skill1 && this.skill1.point == this.skill1.maxPoint) {
                            this.delay = this.skill1.Deleay;
                            this.skill1.active();
                        }
                        else if (skill2 && this.skill2.point == this.skill2.maxPoint) {
                            this.delay = this.skill2.Deleay;
                            this.skill2.active();
                        }
                        else if (skill3 && this.skill3.point == this.skill3.maxPoint) {
                            this.delay = this.skill3.Deleay;
                            this.skill3.active();
                        }
                        else if (superskill || this.superSkill.point == this.superSkill.maxPoint) {
                            this.delay = this.superSkill.Deleay;
                            this.superSkill.active();
                        }
                        this.nowSpeed = new Position_1.Position(0, 0);
                        this.Status = "Skill";
                    }
                }
                else if (dash) {
                    //ダッシュ
                    if (this.delay <= 0) {
                        if (this.Status == "Stand" || this.Status == "Work") {
                            let cos = Math.cos(Math.PI * this.direction / 180);
                            let sin = Math.sin(Math.PI * this.direction / 180);
                            this.nowSpeed = new Position_1.Position(cos * this.speed * 8, sin * this.speed * 8);
                            this.Status = "Dash";
                        }
                    }
                }
                else if (this.Status == "Stand" || this.Status == "Work" || this.Status == "Skill") {
                    //通常移動
                    //上下キー
                    this.Status = "Stand";
                    if (!up || !down) {
                        if (up) {
                            //上キー
                            if (this.nowSpeed.y > -2) {
                                this.nowSpeed.y = -2;
                            }
                            else {
                                if (this.nowSpeed.y > -this.speed) {
                                    this.nowSpeed.y *= 1.1;
                                    if (this.nowSpeed.y < -this.speed)
                                        this.nowSpeed.y = -this.speed;
                                }
                            }
                            this.Status = "Work";
                        }
                        else if (down) {
                            //下キー
                            if (this.nowSpeed.y < 2) {
                                this.nowSpeed.y = 2;
                            }
                            else {
                                if (this.nowSpeed.y < this.speed) {
                                    this.nowSpeed.y *= 1.1;
                                    if (this.nowSpeed.y > this.speed)
                                        this.nowSpeed.y = this.speed;
                                }
                            }
                            this.Status = "Work";
                        }
                        if (!up && !down) {
                            //両方押されてない
                            if (this.nowSpeed.y != 0) {
                                this.nowSpeed.y *= 0.8;
                                if ((this.nowSpeed.y < 0 && this.nowSpeed.y > -1) ||
                                    (this.nowSpeed.y > 0 && this.nowSpeed.y < 1)) {
                                    this.nowSpeed.y = 0;
                                }
                            }
                        }
                    }
                    else {
                        this.nowSpeed.y = 0;
                    }
                    //左右キー
                    if (!left || !right) {
                        if (left) {
                            //左キー
                            if (this.nowSpeed.x > -2) {
                                this.nowSpeed.x = -2;
                            }
                            else {
                                if (this.nowSpeed.x > -this.speed) {
                                    this.nowSpeed.x *= 1.1;
                                    if (this.nowSpeed.x < -this.speed)
                                        this.nowSpeed.x = -this.speed;
                                }
                            }
                            this.Status = "Work";
                        }
                        else if (right) {
                            //右キー
                            if (this.nowSpeed.x < 2) {
                                this.nowSpeed.x = 2;
                            }
                            else {
                                if (this.nowSpeed.x < this.speed) {
                                    this.nowSpeed.x *= 1.1;
                                    if (this.nowSpeed.x > this.speed)
                                        this.nowSpeed.x = this.speed;
                                }
                            }
                            this.Status = "Work";
                        }
                        if (!left && !right) {
                            //両方押されてない
                            if (this.nowSpeed.x != 0) {
                                this.nowSpeed.x *= 0.8;
                                if ((this.nowSpeed.x < 0 && this.nowSpeed.x > -1) ||
                                    (this.nowSpeed.x > 0 && this.nowSpeed.x < 1)) {
                                    this.nowSpeed.x = 0;
                                }
                            }
                        }
                    }
                    else {
                        this.nowSpeed.y = 0;
                    }
                }
            }
            //向きを進行方向に合わせる
            if (right && !down && !up) {
                this.direction = 0;
            }
            else if (left && !down && !up) {
                this.direction = 180;
            }
            else if (!left && !right && down) {
                this.direction = 90;
            }
            else if (!left && !right && up) {
                this.direction = 270;
            }
            else if (right && down) {
                this.direction = 45;
            }
            else if (right && up) {
                this.direction = 315;
            }
            else if (left && down) {
                this.direction = 135;
            }
            else if (left && up) {
                this.direction = 225;
            }
            //ターゲットに照準を合わせる
            if ((_a = this.target) === null || _a === void 0 ? void 0 : _a.delete) {
                this.target = null;
            }
            if (this.target != null) {
                let radian = Math.atan2(this.target.position.y - this.position.y, this.target.position.x - this.position.x);
                this.rotateGoal = parseInt((radian * (180 / Math.PI)).toString());
                if (this.rotateGoal < 0)
                    this.rotateGoal += 360;
            }
            else {
                this.rotateGoal = this.direction;
            }
            //照準を連続的に合わせる
            if (this.rotate != this.rotateGoal) {
                let direction = Math.sign(this.rotate - this.rotateGoal);
                let width;
                if (this.rotateGoal > this.rotate)
                    width = this.rotateGoal - this.rotate;
                else
                    width = this.rotate - this.rotateGoal;
                if (width < 180)
                    direction *= -1;
                this.rotateDirection = direction;
            }
            super.update(scene);
            //ステータスによった挙動
            switch (this.Status) {
                case "Stand":
                    //静止時
                    this.AtkAnimation = null;
                    this.StandAnimation.Update();
                    this.DrawImage = this.StandAnimation.image;
                    this.WorkAnimation.Reset();
                    this.AttackAnimation.Reset();
                    break;
                case "Work":
                    //歩行時
                    this.AtkAnimation = null;
                    this.WorkAnimation.Update();
                    this.DrawImage = this.WorkAnimation.image;
                    this.StandAnimation.Reset();
                    this.AttackAnimation.Reset();
                    break;
                case "Dash":
                    //ダッシュ時
                    this.AtkAnimation = null;
                    this.nowSpeed.x *= 0.9;
                    this.nowSpeed.y *= 0.9;
                    if (this.nowSpeed.x > 0 && this.nowSpeed.x < 1)
                        this.nowSpeed.x = 0;
                    else if (this.nowSpeed.x < 0 && this.nowSpeed.x > -1)
                        this.nowSpeed.x = 0;
                    if (this.nowSpeed.y > 0 && this.nowSpeed.y < 1)
                        this.nowSpeed.y = 0;
                    else if (this.nowSpeed.y < 0 && this.nowSpeed.y > -1)
                        this.nowSpeed.y = 0;
                    if (this.nowSpeed.x == 0 && this.nowSpeed.y == 0)
                        this.Status = "Stand";
                    break;
                case "Attack":
                    //攻撃時
                    if (this.delay == 1) {
                        this.AtkAnimation = null;
                        this.Status = "Stand";
                    }
                    (_b = this.AtkAnimation) === null || _b === void 0 ? void 0 : _b.Update();
                    this.AttackAnimation.Update();
                    this.DrawImage = this.AttackAnimation.image;
                    this.StandAnimation.Reset();
                    this.WorkAnimation.Reset();
                    break;
                case "Skill":
                    (_c = this.AtkAnimation) === null || _c === void 0 ? void 0 : _c.Update();
                    this.AttackAnimation.Update();
                    this.DrawImage = this.AttackAnimation.image;
                    this.StandAnimation.Reset();
                    this.WorkAnimation.Reset();
                    break;
            }
            //位置更新
            this.OldPosition = new Position_1.Position(this.position.x, this.position.y);
            if (this.skill1.activeNow)
                this.skill1.activeFunction(scene, this, this.skill1);
            if (this.skill2.activeNow)
                this.skill2.activeFunction(scene, this, this.skill2);
            if (this.skill3.activeNow)
                this.skill3.activeFunction(scene, this, this.skill3);
            if (this.superSkill.activeNow)
                this.superSkill.activeFunction(scene, this, this.superSkill);
            if (this.delay == 1 || this.delay == 0) {
                this.Status = "Stand";
                this.skill1.activeNow = false;
                this.skill2.activeNow = false;
                this.skill3.activeNow = false;
                this.superSkill.activeNow = false;
            }
            this.position.x += this.nowSpeed.x;
            this.position.y += this.nowSpeed.y;
            super.fieldCollision();
        }
        draw(ctx) {
            this.PrivateCtx.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["攻撃範囲表示"]) {
                this.PrivateCtx.beginPath();
                this.PrivateCtx.moveTo(this.position.x, this.position.y);
                this.PrivateCtx.arc(this.position.x, this.position.y, this.atkRenge, (this.rotate - 90) * (Math.PI / 180), (this.rotate + 90) * (Math.PI / 180));
                this.PrivateCtx.fillStyle = "rgba(255,0,0,0.2)";
                this.PrivateCtx.fill();
                this.PrivateCtx.closePath();
            }
            super.draw(this.PrivateCtx);
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["進行方向アシストアイコン"]) {
                //アイコン位置計算
                if (this.direction != this.OldDirection) {
                    let sin = Math.sin(Math.PI * this.direction / 180);
                    let cos = Math.cos(Math.PI * this.direction / 180);
                    this.SaveEyeIconPos2 = new Position_1.Position(Math.floor(cos * 90), Math.floor(sin * 90));
                }
                let eye2x = this.position.x + this.SaveEyeIconPos2.x;
                let eye2y = this.position.y + this.SaveEyeIconPos2.y;
                //端を超えないようにする
                if (eye2x < 0)
                    eye2x = 0;
                else if (eye2x > GlobalData_1.GlobalData.Instance.ScreenSize.width)
                    eye2x = GlobalData_1.GlobalData.Instance.ScreenSize.width;
                if (eye2y < 0)
                    eye2y = 0;
                else if (eye2y > GlobalData_1.GlobalData.Instance.ScreenSize.height)
                    eye2y = GlobalData_1.GlobalData.Instance.ScreenSize.height;
                //目アイコン描画
                this.PrivateCtx.drawImage(this.EyeIcon_Direction, eye2x - 12, eye2y - 12);
            }
            //アイコン/エフェクト位置計算
            if (this.rotate != this.OldRotate) {
                let sin = Math.sin(Math.PI * this.rotate / 180);
                let cos = Math.cos(Math.PI * this.rotate / 180);
                this.SaveEyeIconPos = new Position_1.Position(Math.floor(cos * 60), Math.floor(sin * 60));
            }
            let eye1x = this.position.x + this.SaveEyeIconPos.x;
            let eye1y = this.position.y + this.SaveEyeIconPos.y;
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["攻撃方向アシストアイコン"]) {
                //端を超えないようにする
                if (eye1x < 0)
                    eye1x = 0;
                else if (eye1x > GlobalData_1.GlobalData.Instance.ScreenSize.width)
                    eye1x = GlobalData_1.GlobalData.Instance.ScreenSize.width;
                if (eye1y < 0)
                    eye1y = 0;
                else if (eye1y + 12 > GlobalData_1.GlobalData.Instance.ScreenSize.height)
                    eye1y = GlobalData_1.GlobalData.Instance.ScreenSize.height;
                //描画
                this.PrivateCtx.drawImage(this.EyeIcon_Rotate, eye1x - 12, eye1y - 12);
            }
            //攻撃アイコン描画
            if (this.AtkAnimation != null) {
                this.PrivateCtx.drawImage(this.AtkAnimation.image, eye1x - this.AtkAnimation.size.width / 2, eye1y - this.AtkAnimation.size.height / 2);
            }
            //エフェクト
            if (this.condition["やけど"].on) {
                this.PrivateCtx.fillStyle = "red";
                this.PrivateCtx.fillText("やけど", this.position.x, this.position.y);
            }
            //描画
            ctx.drawImage(this.PrivateCanvas, 0, 0);
        }
        move(speedX, speedY) {
            this.nowSpeed = new Position_1.Position(speedX, speedY);
            this.Status = "Work";
        }
        dush(directionx, directiony) {
            this.Status = "Dash";
            this.nowSpeed = new Position_1.Position(Math.floor(directionx * this.speed * 8), Math.floor(directiony * this.speed * 8));
        }
    }
    exports.Hero = Hero;
});
//# sourceMappingURL=Hero.js.map