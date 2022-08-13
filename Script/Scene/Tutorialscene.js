define(["require", "exports", "../Data/GlobalData", "./GameScene", "../Object/Enemy", "../Base/Position", "../Skill/Skills"], function (require, exports, GlobalData_1, GameScene_1, Enemy_1, Position_1, Skills_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TutorialScene = void 0;
    class TutorialScene extends GameScene_1.GameScene {
        constructor(tutorialType) {
            super("Field1.png", 10, Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], 1, Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], (scene) => { }, (scene) => { }, (self, scene) => { });
            this.tutorialType = "";
            this.process = 0;
            this.maxProcess = 11;
            this.enemys = [];
            this.hero.target = null;
            this.tutorialText = document.createElement("p");
            this.tutorialText.style.position = "absolute";
            this.tutorialText.style.top = "10px";
            this.tutorialText.style.left = "10px";
            this.tutorialText.style.fontSize = "25px";
            this.tutorialText.style.fontWeight = "10px";
            this.tutorialText.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
            this.UIs.push(this.tutorialText);
            this.tutorialType = tutorialType;
            this.deley = true;
            if (tutorialType == "mobile") {
                this.maxProcess = 0;
            }
            else if (tutorialType == "pc") {
                this.maxProcess = 12;
            }
        }
        update() {
            //通常
            if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) || (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
                //タッチ中のイベント
                if (this.TouchBegin != null && this.TouchNow != null) {
                    const max = 150;
                    //長押しか移動押しか
                    let touchSaX = this.TouchBegin.speed.x - this.TouchNow.speed.x;
                    let touchSaY = this.TouchBegin.speed.y - this.TouchNow.speed.y;
                    if (this.longTouch[0] <= 0 &&
                        ((-max / 4 < touchSaX && touchSaX < 0) || (0 <= touchSaX && touchSaX < max / 4)) &&
                        ((-max / 4 < touchSaY && touchSaY < 0) || (0 <= touchSaY && touchSaY < max / 4))) {
                        //長押し
                        this.longTouch[0] = this.longTouch[1];
                        this.keydown(GlobalData_1.GlobalData.Instance.KeySet["Attack"]);
                    }
                    else {
                        this.longTouch[0]--;
                        this.keyup(GlobalData_1.GlobalData.Instance.KeySet["Attack"]);
                        let saX = this.TouchNow.speed.x - this.TouchBegin.speed.x;
                        let saY = this.TouchNow.speed.y - this.TouchBegin.speed.y;
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
                        saX = saX / max * this.hero.speed;
                        saY = saY / max * this.hero.speed;
                        if (this.hero.Status == "Work" || this.hero.Status == "Stand")
                            this.hero.move(saX, saY);
                    }
                }
                else {
                    this.keyup(GlobalData_1.GlobalData.Instance.KeySet["Attack"]);
                    this.longTouch[0] = this.longTouch[1];
                }
            }
            //---
            if (this.deley) {
                switch (this.process) {
                    case 0:
                        this.deley = false;
                        setTimeout(() => {
                            this.deley = true;
                            this.process = 1;
                            if (this.tutorialType == "mobile")
                                this.tutorialText.innerHTML = `進行方向アイコン：<br>青い目のアイコンは進行方向を示すものです<br>ダッシュの目印にしましょう<br>(X)ボタンを押してください`;
                            else if (this.tutorialType == "pc") {
                                if (GlobalData_1.GlobalData.Instance.KeySet["Ok"] == " ")
                                    this.tutorialText.innerHTML = `進行方向アイコン：<br>青い目のアイコンは進行方向を示すものです<br>ダッシュの目印にしましょう<br>[Space]ボタンを押してください`;
                                else
                                    this.tutorialText.innerHTML = `進行方向アイコン：<br>青い目のアイコンは進行方向を示すものです<br>ダッシュの目印にしましょう<br>[${GlobalData_1.GlobalData.Instance.KeySet["Ok"]}]ボタンを押してください`;
                            }
                        }, 300);
                        break;
                    case 1:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Ok"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 2;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = "移動：<br>アナログパッド機能を使ってキャラクターを動かしましょう<br>"
                                        + "ボタン周辺のグレーの部分を長押しするとアナログパッドが出現します<br>それを長押ししながら移動させることで移動します";
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = "移動：<br>移動キーを押して分身を動かしましょう"
                                        + `<br>key:[上/${GlobalData_1.GlobalData.Instance.KeySet["Up"]}][下/${GlobalData_1.GlobalData.Instance.KeySet["Down"]}][左/${GlobalData_1.GlobalData.Instance.KeySet["Left"]}][右/${GlobalData_1.GlobalData.Instance.KeySet["Right"]}]`;
                            }, 300);
                        }
                        break;
                    case 2:
                        if (Math.abs(this.hero.nowSpeed.x) >= this.hero.speed || Math.abs(this.hero.nowSpeed.y) >= this.hero.speed) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 3;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `ダッシュ：<br>進行方向にダッシュする<br>敵から距離をとるのに効果的<br>素早くアナログパッドをフリック!`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `ダッシュ：<br>進行方向にダッシュする<br>敵から距離をとるのに効果的<br>ダッシュ:${GlobalData_1.GlobalData.Instance.KeySet["Dash"]}`;
                            }, 300);
                        }
                        break;
                    case 3:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Dash"]) || Math.abs(this.hero.nowSpeed.x) >= this.hero.speed * 3 || Math.abs(this.hero.nowSpeed.y) >= this.hero.speed * 3) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 4;
                                this.enemys.push(new Enemy_1.Enemy(0.2, (scene) => { }, Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"]));
                                this.enemys[0].position = new Position_1.Position(300, 300);
                                this.enemys[0].hp = 100;
                                this.hero.target = this.enemys[0];
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `敵：<br>敵は普段直感的な行動をし<br>単純なパターンを見せます<br>ダッシュなどで距離をとり、様々な攻撃を活用して倒しましょう<br>(X)`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `敵：<br>敵は普段直感的な行動をし<br>単純なパターンを見せます<br>ダッシュなどで距離をとり、様々な攻撃を活用して倒しましょう<br>${GlobalData_1.GlobalData.Instance.KeySet["Ok"]}`;
                            }, 300);
                        }
                        break;
                    case 4:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Ok"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 5;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `視点アイコン：<br>黒いアイコンは敵の方向を示すものです<br>スキルを打つ方向でもあります<br>...<br>->(X)`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `視点アイコン：<br>黒いアイコンは敵の方向を示すものです<br>スキルを打つ方向でもあります<br>...<br>->${GlobalData_1.GlobalData.Instance.KeySet["Ok"]}`;
                            }, 300);
                        }
                        break;
                    case 5:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Ok"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 6;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `攻撃：<br>敵に近づき赤い半円の中に入ったら<br>アナログパッド長押しで攻撃！`;
                                else if (this.tutorialType == "pc") {
                                    if (GlobalData_1.GlobalData.Instance.KeySet["Attack"] == " ")
                                        this.tutorialText.innerHTML = `攻撃：<br>敵に近づき赤い半円の中に入ったら<br>Spaceボタンで攻撃！`;
                                    else
                                        this.tutorialText.innerHTML = `攻撃：<br>敵に近づき赤い半円の中に入ったら<br>${GlobalData_1.GlobalData.Instance.KeySet["Attack"]}ボタンで攻撃！`;
                                }
                            }, 300);
                        }
                        break;
                    case 6:
                        if (this.enemys.length == 0) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 7;
                                this.hero.target = null;
                                this.enemys.push(new Enemy_1.Enemy(0.2, (scene) => { }, Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"]));
                                this.enemys[0].position = new Position_1.Position(300, 300);
                                this.hero.target = this.enemys[0];
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `スキル：<br>下の4つのボタンからスキルを発動することができる<br>スキルは通常攻撃をあてる<br>必殺技はスキルを打つごとにゲージがたまる<br>スキルアイコンの周りの輪が満タンになるとスキル/必殺技を打てる`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `スキル：<br>[${GlobalData_1.GlobalData.Instance.KeySet["Skill1"]}/${GlobalData_1.GlobalData.Instance.KeySet["Skill2"]}/${GlobalData_1.GlobalData.Instance.KeySet["Skill3"]}/${GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"]}]ボタンからスキルを発動することができる<br>スキルは通常攻撃をあてる<br>必殺技はスキルを打つごとにゲージがたまる<br>スキルアイコンの周りの輪が満タンになるとスキル/必殺技を打てる`;
                            }, 300);
                        }
                        break;
                    case 7:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill1"]) || this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill2"]) || this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Skill3"]) || this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 8;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `必殺技:<br>必殺技を打つ:[Super]`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `必殺技:<br>必殺技を打つ:[${GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"]}]`;
                            }, 300);
                        }
                        break;
                    case 8:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 8;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `実践:実際に戦闘してみましょう<br>->(X)`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `実践：<br>実際に戦闘してみましょう<br>->${GlobalData_1.GlobalData.Instance.KeySet["Ok"]}`;
                            }, 300);
                        }
                    case 9:
                        if (this.keys.includes(GlobalData_1.GlobalData.Instance.KeySet["Ok"])) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 10;
                                this.enemys = [];
                                this.enemys.push(new Enemy_1.Enemy(1, GlobalData_1.GlobalData.Instance.EnemyPattern["normal"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"], Skills_1.SkillList["skill1"]));
                                this.hero.target = this.enemys[0];
                                this.tutorialText.innerHTML = "実践";
                            }, 300);
                        }
                    case 10:
                        if (this.enemys.length == 0) {
                            this.deley = false;
                            setTimeout(() => {
                                this.deley = true;
                                this.process = 11;
                                if (this.tutorialType == "mobile")
                                    this.tutorialText.innerHTML = `離脱:<br>戦闘画面を離脱したい場合基本(O)ボタンで離脱できる`;
                                else if (this.tutorialType == "pc")
                                    this.tutorialText.innerHTML = `離脱：<br>戦闘画面を終了したい場合${GlobalData_1.GlobalData.Instance.KeySet["Cansel"]}ボタンで終了できる`;
                            }, 300);
                        }
                        break;
                }
            }
            //通常処理
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
            //通常処理
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
            if (this.process >= 7) {
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
            }
            ctx.drawImage(this.BackCanvas, 0, 0);
        }
    }
    exports.TutorialScene = TutorialScene;
});
//# sourceMappingURL=Tutorialscene.js.map