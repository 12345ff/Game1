define(["require", "exports", "../Base/Position", "../Base/Size", "../Base/Rectangle", "../Base/Animation", "../Base/ResourceManager"], function (require, exports, Position_1, Size_1, Rectangle_1, Animation_1, ResourceManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnemyPattern = void 0;
    exports.EnemyPattern = {
        "normal": (self, scene) => {
            if (self.condition["やけど"].countdown()) {
                self.damage(5);
            }
            self.condition["麻痺"].countdown();
            if (self.interval[0] > 0) {
                self.interval[0]--;
            }
            else {
                self.interval[0] = self.interval[1];
                //位置関係計算
                let sa = new Position_1.Position(scene.hero.position.x - self.position.x, scene.hero.position.y - self.position.y);
                let sax = 0;
                let say = 0;
                if (!self.condition["麻痺"].on) {
                    if (self.Status == "Attack") {
                        //アニメーション用意
                        self.AtkAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(self.Size.width + self.atkRenge, self.Size.height + self.atkRenge));
                        self.AtkAnimation.setInterval(6);
                        self.AtkAnimation.limit = 1;
                        self.AtkAnimation.SetUp2(ResourceManager_1.ResourceManager.Instance.GetImage("10"), [
                            new Rectangle_1.Rectangle(0, 0, 210, 210), new Rectangle_1.Rectangle(210, 0, 210, 210), new Rectangle_1.Rectangle(420, 0, 210, 210),
                            new Rectangle_1.Rectangle(630, 0, 210, 210), new Rectangle_1.Rectangle(840, 0, 210, 210), new Rectangle_1.Rectangle(1050, 0, 210, 210),
                            new Rectangle_1.Rectangle(1260, 0, 210, 210), new Rectangle_1.Rectangle(1470, 0, 210, 210), new Rectangle_1.Rectangle(1680, 0, 210, 210),
                            new Rectangle_1.Rectangle(1890, 0, 210, 210), new Rectangle_1.Rectangle(2100, 0, 210, 210), new Rectangle_1.Rectangle(2310, 0, 210, 210),
                        ]);
                        //差を計算
                        if (sa.x * sa.x + sa.y * sa.y < self.atkRenge * self.atkRenge) {
                            scene.hero.damage(self.atk);
                        }
                        self.interval[0] = 30;
                        self.Status = "Stand";
                    }
                    else if (self.Status == "Stand" || self.Status == "Work") {
                        self.AtkAnimation = null;
                        if (sa.x * sa.x + sa.y * sa.y < self.atkRenge * self.atkRenge) {
                            //攻撃態勢
                            self.Status = "Attack";
                            self.nowSpeed = new Position_1.Position(0, 0);
                        }
                        else {
                            //差を求める
                            if (Math.abs(sa.x) > Math.abs(sa.y)) {
                                sax = 1;
                                say = Math.abs(sa.y) / Math.abs(sa.x);
                            }
                            else if (Math.abs(sa.y) > Math.abs(sa.x)) {
                                sax = Math.abs(sa.x) / Math.abs(sa.y);
                                say = 1;
                            }
                            if (sa.x < 0)
                                sax *= -1;
                            if (sa.y < 0)
                                say *= -1;
                        }
                        //状態設定
                        if (self.Status != "Attack") {
                            if (sa.x == 0 && sa.y == 0) {
                                self.Status = "Stand";
                            }
                            else {
                                self.Status = "Work";
                            }
                        }
                        //速度設定
                        self.nowSpeed = new Position_1.Position(sax * self.speed, say * self.speed);
                    }
                }
            }
        },
        "突進系": (self, scene) => {
            if (self.condition["やけど"].countdown()) {
                self.damage(5);
            }
            self.condition["麻痺"].countdown();
            self.nowSpeed.x *= 0.95;
            self.nowSpeed.y *= 0.95;
            if (self.interval[0] > 0) {
                self.interval[0]--;
            }
            else {
                self.interval[0] = 60;
                //位置関係計算
                let sa = new Position_1.Position(scene.hero.position.x - self.position.x, scene.hero.position.y - self.position.y);
                let sax = 0;
                let say = 0;
                if (!self.condition["麻痺"].on) {
                    if (self.Status == "Attack") {
                        //アニメーション用意
                        self.AtkAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(self.Size.width + self.atkRenge, self.Size.height + self.atkRenge));
                        self.AtkAnimation.setInterval(6);
                        self.AtkAnimation.limit = 1;
                        self.AtkAnimation.SetUp2(ResourceManager_1.ResourceManager.Instance.GetImage("10"), [
                            new Rectangle_1.Rectangle(0, 0, 210, 210), new Rectangle_1.Rectangle(210, 0, 210, 210), new Rectangle_1.Rectangle(420, 0, 210, 210),
                            new Rectangle_1.Rectangle(630, 0, 210, 210), new Rectangle_1.Rectangle(840, 0, 210, 210), new Rectangle_1.Rectangle(1050, 0, 210, 210),
                            new Rectangle_1.Rectangle(1260, 0, 210, 210), new Rectangle_1.Rectangle(1470, 0, 210, 210), new Rectangle_1.Rectangle(1680, 0, 210, 210),
                            new Rectangle_1.Rectangle(1890, 0, 210, 210), new Rectangle_1.Rectangle(2100, 0, 210, 210), new Rectangle_1.Rectangle(2310, 0, 210, 210),
                        ]);
                        //差を計算
                        if (sa.x * sa.x + sa.y * sa.y < self.atkRenge * self.atkRenge) {
                            scene.hero.damage(self.atk);
                        }
                        self.Status = "Stand";
                    }
                    else if (self.Status == "Stand" || self.Status == "Work") {
                        self.AtkAnimation = null;
                        //攻撃態勢
                        self.Status = "Attack";
                        self.nowSpeed = new Position_1.Position(0, 0);
                        //差を求める
                        if (Math.abs(sa.x) > Math.abs(sa.y)) {
                            sax = 1;
                            say = Math.abs(sa.y) / Math.abs(sa.x);
                        }
                        else if (Math.abs(sa.y) > Math.abs(sa.x)) {
                            sax = Math.abs(sa.x) / Math.abs(sa.y);
                            say = 1;
                        }
                        if (sa.x < 0)
                            sax *= -1;
                        if (sa.y < 0)
                            say *= -1;
                        //速度設定
                        self.nowSpeed = new Position_1.Position(sax * 10, say * 10);
                    }
                }
            }
        },
        "ランダム": (self, scene) => {
            if (self.condition["やけど"].countdown()) {
                self.damage(5);
            }
            self.condition["麻痺"].countdown();
            self.nowSpeed.x *= 0.95;
            self.nowSpeed.y *= 0.95;
            if (self.interval[0] > 0) {
                self.interval[0]--;
            }
            else {
                self.interval[0] = 30;
                //位置関係計算
                let sa = new Position_1.Position(scene.hero.position.x - self.position.x, scene.hero.position.y - self.position.y);
                if (!self.condition["麻痺"].on) {
                    if (self.Status == "Attack") {
                        //アニメーション用意
                        self.AtkAnimation = new Animation_1.GameAnimation(0, new Size_1.Size(self.Size.width + self.atkRenge, self.Size.height + self.atkRenge));
                        self.AtkAnimation.setInterval(6);
                        self.AtkAnimation.limit = 1;
                        self.AtkAnimation.SetUp2(ResourceManager_1.ResourceManager.Instance.GetImage("10"), [
                            new Rectangle_1.Rectangle(0, 0, 210, 210), new Rectangle_1.Rectangle(210, 0, 210, 210), new Rectangle_1.Rectangle(420, 0, 210, 210),
                            new Rectangle_1.Rectangle(630, 0, 210, 210), new Rectangle_1.Rectangle(840, 0, 210, 210), new Rectangle_1.Rectangle(1050, 0, 210, 210),
                            new Rectangle_1.Rectangle(1260, 0, 210, 210), new Rectangle_1.Rectangle(1470, 0, 210, 210), new Rectangle_1.Rectangle(1680, 0, 210, 210),
                            new Rectangle_1.Rectangle(1890, 0, 210, 210), new Rectangle_1.Rectangle(2100, 0, 210, 210), new Rectangle_1.Rectangle(2310, 0, 210, 210),
                        ]);
                        //差を計算
                        if (sa.x * sa.x + sa.y * sa.y < self.atkRenge * self.atkRenge) {
                            scene.hero.damage(self.atk);
                        }
                        self.Status = "Stand";
                    }
                    else if (self.Status == "Stand" || self.Status == "Work") {
                        if (Math.floor(Math.random() * 5) == 3) {
                            //攻撃態勢
                            self.Status = "Attack";
                            self.nowSpeed = new Position_1.Position(0, 0);
                        }
                        //速度設定
                        let directionx = Math.random() * 2 - 1;
                        let directiony = Math.random() * 2 - 1;
                        self.nowSpeed = new Position_1.Position(directionx * 10, directiony * 10);
                    }
                }
            }
        },
        "test": (self, scene) => {
            if (self.condition["やけど"].countdown()) {
                self.damage(5);
            }
        },
    };
});
//# sourceMappingURL=EnemyPattern.js.map