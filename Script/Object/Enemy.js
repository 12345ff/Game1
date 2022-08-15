define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/Rectangle", "../Base/Animation", "../Base/ResourceManager", "../Data/GlobalData", "./Character"], function (require, exports, Position_1, Size_1, Rectangle_1, Animation_1, ResourceManager_1, GlobalData_1, Character_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Enemy = void 0;
    class Enemy extends Character_1.GameCharacter {
        constructor(Lv, enemyPattern, skill1, skill2, skill3, skillSuper) {
            super(Lv, skill1, skill2, skill3, skillSuper);
            this.Type = "enemy";
            this.AtkAnimation = null;
            this.interval = [15, 15];
            this.OldRotate = 0;
            this.hp += 50 * Lv;
            this.maxHP += 50 * Lv;
            this.speed = 1 + Lv * 0.2;
            this.Status = "Stand";
            this.Size = new Size_1.Size(100, 100);
            this.delete = false;
            this.SaveAtkAnimePos = new Position_1.Position(0, 0);
            this.enemyPattern = enemyPattern;
            this.StandAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            this.WorkAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            this.AttackAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(100, 100));
            let Image1 = ResourceManager_1.ResourceManager.Instance.GetImage("img1");
            Image1.addEventListener("load", () => {
                this.StandAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(0, 0, 64, 64), new Rectangle_1.Rectangle(64, 0, 64, 64), new Rectangle_1.Rectangle(128, 0, 64, 64),]);
                this.WorkAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(192, 64, 64, 64), new Rectangle_1.Rectangle(256, 64, 64, 64)]);
                this.AttackAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(384, 0, 64, 64), new Rectangle_1.Rectangle(448, 0, 64, 64), new Rectangle_1.Rectangle(512, 0, 64, 64)]);
            });
            if (Image1.complete) {
                this.StandAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(0, 0, 64, 64), new Rectangle_1.Rectangle(64, 0, 64, 64), new Rectangle_1.Rectangle(128, 0, 64, 64),]);
                this.WorkAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(192, 64, 64, 64), new Rectangle_1.Rectangle(256, 64, 64, 64)]);
                this.AttackAnimation.SetUp2(Image1, [new Rectangle_1.Rectangle(384, 0, 64, 64), new Rectangle_1.Rectangle(448, 0, 64, 64), new Rectangle_1.Rectangle(512, 0, 64, 64)]);
            }
        }
        update(scene) {
            this.OldPosition = new Position_1.Position(this.position.x, this.position.y);
            this.OldRotate = this.rotate;
            this.enemyPattern(this, scene);
            super.fieldCollision();
            switch (this.Status) {
                case "Stand":
                    this.StandAnimation.Update();
                    this.DrawImage = this.StandAnimation.image;
                    this.WorkAnimation.Reset();
                    this.AttackAnimation.Reset();
                    break;
                case "Work":
                    this.WorkAnimation.Update();
                    this.DrawImage = this.WorkAnimation.image;
                    this.StandAnimation.Reset();
                    this.AttackAnimation.Reset();
                    break;
                case "Attack":
                    this.AttackAnimation.Update();
                    this.DrawImage = this.AttackAnimation.image;
                    this.WorkAnimation.Reset();
                    this.StandAnimation.Reset();
                    break;
            }
            if (this.AtkAnimation != null) {
                this.AtkAnimation.Update();
            }
            this.position.x += this.nowSpeed.x;
            this.position.y += this.nowSpeed.y;
        }
        damage(damage) {
            super.damage(damage);
            if (this.hp <= 0) {
                this.hp = 0;
                this.delete = true;
            }
        }
        draw(ctx) {
            if (GlobalData_1.GlobalData.Instance.AssistSettingList["攻撃範囲表示"]) {
                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.arc(this.position.x, this.position.y, this.atkRenge, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,0,0,0.2)";
                ctx.fill();
                ctx.closePath();
            }
            super.draw(ctx);
            if (this.AtkAnimation != null) {
                ctx.drawImage(this.AtkAnimation.image, this.position.x - this.AtkAnimation.size.width / 2, this.position.y - this.AtkAnimation.size.height / 2);
            }
            if (this.condition["やけど"].on) {
                ctx.fillText("やけど", this.position.x, this.position.y);
            }
        }
    }
    exports.Enemy = Enemy;
});
//# sourceMappingURL=Enemy.js.map