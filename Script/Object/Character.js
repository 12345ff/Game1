define(["require", "exports", "../Base/Position", "../Data/GlobalData", "./Object", "../Skill/Skill"], function (require, exports, Position_1, GlobalData_1, Object_1, Skill_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameCharacter = void 0;
    class GameCharacter extends Object_1.GameObject {
        constructor(Lv, skill1, skill2, skill3, superSkill) {
            super();
            this.condition = {
                "やけど": new condition(),
                "麻痺": new condition(),
            };
            this.maxHP = 100 + 5 * Lv;
            this.hp = this.maxHP;
            this.atk = Math.floor(10 + 0.5 * Lv);
            this.def = 20 + Lv / 2;
            this.speed = Math.floor(3 + 0.05 * Lv);
            this.friction = 0.8;
            this.acceleration = 0.1;
            this.rotate = 1;
            this.direction = 1;
            this.delay = 0;
            this.atkRenge = 80 + 0.5 * Lv;
            this.atkDelay = 30;
            this.nowSpeed = new Position_1.Position(0, 0);
            this.OldPosition = this.position;
            this.rotateGoal = 0;
            this.rotateDirection = 0;
            this.targetPos = null;
            this.skill1 = new Skill_1.Skill(skill1.skillType, skill1.name, skill1.maxPoint, skill1.Deleay, skill1.saveImage, skill1.activeFunction);
            this.skill2 = new Skill_1.Skill(skill2.skillType, skill2.name, skill2.maxPoint, skill2.Deleay, skill2.saveImage, skill2.activeFunction);
            this.skill3 = new Skill_1.Skill(skill3.skillType, skill3.name, skill3.maxPoint, skill3.Deleay, skill3.saveImage, skill3.activeFunction);
            this.superSkill = superSkill;
        }
        update(scene) {
            //視点のターゲット追尾
            if (this.rotate != this.rotateGoal) {
                this.rotate += this.rotateDirection * 3;
                if (this.rotateGoal + 3 >= this.rotate && this.rotateGoal - 3 <= this.rotate) {
                    this.rotate = this.rotateGoal;
                }
                this.rotate %= 360;
                if (this.rotate < 0) {
                    this.rotate = 360 - Math.abs(this.rotate);
                }
            }
        }
        draw(ctx) {
            //基本描画
            super.draw(ctx);
            //hpバー
            let BarPos = new Position_1.Position(this.position.x, this.position.y - this.Size.height / 2 - 30);
            if (BarPos.y < 0)
                BarPos.y = 0;
            let BarWidth = Math.floor(this.Size.width * 0.8);
            ctx.strokeStyle = "green";
            ctx.strokeRect(BarPos.x - BarWidth / 2, BarPos.y, BarWidth, 20);
            ctx.fillStyle = "green";
            let percent = this.hp / this.maxHP;
            if (percent < 0)
                percent = 0;
            let BarWidth2 = BarWidth * percent - 4;
            if (BarWidth2 < 1)
                BarWidth2 = 1;
            ctx.fillRect(BarPos.x - BarWidth / 2 + 2, BarPos.y + 2, BarWidth2, 16);
        }
        fieldCollision() {
            //フィールドを超えないようにする
            if (this.position.x - this.Size.width / 2 < 0) {
                this.position.x = this.Size.width / 2;
            }
            else if (this.position.x + this.Size.width / 2 > GlobalData_1.GlobalData.Instance.ScreenSize.width) {
                this.position.x = GlobalData_1.GlobalData.Instance.ScreenSize.width - this.Size.width / 2;
            }
            if (this.position.y - this.Size.height / 2 < 0) {
                this.position.y = this.Size.height / 2;
            }
            else if (this.position.y + this.Size.height / 2 > GlobalData_1.GlobalData.Instance.ScreenSize.height) {
                this.position.y = GlobalData_1.GlobalData.Instance.ScreenSize.height - this.Size.height / 2;
            }
        }
        damage(damage) {
            //ダメージを食らった時の処理
            this.hp -= damage;
            if (this.hp < 0) {
                this.hp = 0;
            }
        }
    }
    exports.GameCharacter = GameCharacter;
    class condition {
        constructor() {
            this.on = false;
            this.count = 0;
            this.deley = [0, 0];
        }
        countdown() {
            if (this.on) {
                if (this.count > 0)
                    this.count--;
                else if (this.count == 0) {
                    this.on = false;
                    this.deley[0] = 0;
                    this.deley[1] = 0;
                }
                if (this.deley[0] > 0) {
                    this.deley[0]--;
                    return false;
                }
                else {
                    this.deley[0] = this.deley[1];
                    return true;
                }
            }
            return false;
        }
        ON(count, deley) {
            this.on = true;
            this.count = count;
            this.deley[1] = deley;
        }
    }
});
//# sourceMappingURL=Character.js.map