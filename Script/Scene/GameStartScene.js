define(["require", "exports", "./Scene", "./SceneManager", "../Skill/Skills", "./GameScene", "../Data/FieldFunction", "../Data/EnemyPattern", "../Data/GlobalData"], function (require, exports, Scene_1, SceneManager_1, Skills_1, GameScene_1, FieldFunction_1, EnemyPattern_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameSettingScene = void 0;
    class GameSettingScene extends Scene_1.Scene {
        constructor() {
            super();
            this.heroLevel = 1;
            this.HeroSkill1 = Skills_1.SkillList["skill1"];
            this.HeroSkill2 = Skills_1.SkillList["skill1"];
            this.HeroSkill3 = Skills_1.SkillList["skill1"];
            this.HeroSkillSuper = Skills_1.SkillList["連続火炎弾"];
            this.enemyLevel = 1;
            this.EnemySkill1 = Skills_1.SkillList["skill1"];
            this.EnemySkill2 = Skills_1.SkillList["skill1"];
            this.EnemySkill3 = Skills_1.SkillList["skill1"];
            this.EnemySkillSuper = Skills_1.SkillList["skill1"];
            this.fieldImage = "Field1.png";
            this.fieldFunction_End = FieldFunction_1.FieldGameEnd["normal"];
            this.fieldFunction = FieldFunction_1.FieldFunction["normal"];
            this.EnemyPattern = EnemyPattern_1.EnemyPattern["normal"];
            let BackBtn = document.createElement("button");
            BackBtn.style.width = "250px";
            BackBtn.style.height = "150px";
            BackBtn.style.fontSize = "50px";
            BackBtn.textContent = "back";
            BackBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.RemoveScene(1);
            });
            let CharacterSettingBtn = document.createElement("button");
            let EnemySettingBtn = document.createElement("button");
            let FieldSettingBtn = document.createElement("button");
            CharacterSettingBtn.className = "SettingBtn";
            EnemySettingBtn.className = "SettingBtn";
            FieldSettingBtn.className = "SettingBtn";
            CharacterSettingBtn.textContent = "キャラクター設定";
            EnemySettingBtn.textContent = "敵設定";
            FieldSettingBtn.textContent = "フィールド設定";
            CharacterSettingBtn.style.top = "150px";
            EnemySettingBtn.style.top = "calc(150px + 10%)";
            FieldSettingBtn.style.top = "calc(150px + 20%)";
            CharacterSettingBtn.addEventListener("click", () => {
                CharacterSettingBtn.style.backgroundColor = "#A3ABD9";
                EnemySettingBtn.style.backgroundColor = "#7E8BD9";
                FieldSettingBtn.style.backgroundColor = "#7E8BD9";
                CharacterSettingDiv.style.display = "block";
                EnemySettingDiv.style.display = "none";
                FieldSettingDiv.style.display = "none";
            });
            EnemySettingBtn.addEventListener("click", () => {
                CharacterSettingBtn.style.backgroundColor = "#7E8BD9";
                EnemySettingBtn.style.backgroundColor = "#A3ABD9";
                FieldSettingBtn.style.backgroundColor = "#7E8BD9";
                CharacterSettingDiv.style.display = "none";
                EnemySettingDiv.style.display = "block";
                FieldSettingDiv.style.display = "none";
            });
            FieldSettingBtn.addEventListener("click", () => {
                CharacterSettingBtn.style.backgroundColor = "#7E8BD9";
                EnemySettingBtn.style.backgroundColor = "#7E8BD9";
                FieldSettingBtn.style.backgroundColor = "#A3ABD9";
                CharacterSettingDiv.style.display = "none";
                EnemySettingDiv.style.display = "none";
                FieldSettingDiv.style.display = "block";
            });
            let CharacterSettingDiv = document.createElement("div");
            let EnemySettingDiv = document.createElement("div");
            let FieldSettingDiv = document.createElement("div");
            CharacterSettingDiv.className = "SettingDiv";
            EnemySettingDiv.className = "SettingDiv";
            FieldSettingDiv.className = "SettingDiv";
            //CharacterSettings
            let CharTxt_Lv = document.createElement("p");
            let CharSet_Lv = document.createElement("input");
            CharTxt_Lv.className = "SetText";
            CharSet_Lv.className = "SetInput";
            CharTxt_Lv.textContent = "レベル";
            CharTxt_Lv.style.top = "50px";
            CharSet_Lv.style.top = "50px";
            CharSet_Lv.type = "number";
            CharSet_Lv.min = "1";
            CharSet_Lv.max = "100";
            CharSet_Lv.step = "1";
            CharSet_Lv.value = "1";
            CharSet_Lv.addEventListener("input", () => {
                const value = CharSet_Lv.value;
                if (value != null && 0 < value && value < 101) {
                    this.heroLevel = value;
                }
                else {
                    if (value > 100) {
                        CharSet_Lv.value = "100";
                    }
                    else {
                        CharSet_Lv.value = "0";
                    }
                }
            });
            CharacterSettingDiv.appendChild(CharTxt_Lv);
            CharacterSettingDiv.appendChild(CharSet_Lv);
            let Skills = {
                "skill1": "スキル1", "skill2": "スキル2",
                "skill3": "スキル3", "superSkill": "必殺技"
            };
            let i = 0;
            for (let key in Skills) {
                let SkillSet_Text = document.createElement("p");
                let SkillSet_Input = document.createElement("select");
                SkillSet_Text.className = "SetText";
                SkillSet_Input.className = "SetInput";
                SkillSet_Text.textContent = Skills[key];
                SkillSet_Text.style.top = `${140 + 90 * i}px`;
                SkillSet_Input.style.top = `${140 + 90 * i}px`;
                i++;
                const i2 = i;
                for (let key2 in Skills_1.SkillList) {
                    if (Skills[key] == "必殺技") {
                        if (Skills_1.SkillList[key2].skillType == "normal")
                            continue;
                    }
                    else {
                        if (Skills_1.SkillList[key2].skillType == "super")
                            continue;
                    }
                    let opt = document.createElement("option");
                    opt.value = key2;
                    opt.textContent = key2;
                    SkillSet_Input.appendChild(opt);
                }
                SkillSet_Input.addEventListener("input", () => {
                    if (i2 == 1)
                        this.HeroSkill1 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 2)
                        this.HeroSkill2 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 3)
                        this.HeroSkill3 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 4)
                        this.HeroSkillSuper = Skills_1.SkillList[SkillSet_Input.value];
                });
                CharacterSettingDiv.appendChild(SkillSet_Text);
                CharacterSettingDiv.appendChild(SkillSet_Input);
            }
            //EnemySettings
            let EnemyTxt_Lv = document.createElement("p");
            let EnemySet_Lv = document.createElement("input");
            EnemyTxt_Lv.className = "SetText";
            EnemySet_Lv.className = "SetInput";
            EnemyTxt_Lv.textContent = "レベル";
            EnemyTxt_Lv.style.top = "50px";
            EnemySet_Lv.style.top = "50px";
            EnemySet_Lv.type = "number";
            EnemySet_Lv.min = "1";
            EnemySet_Lv.max = "100";
            EnemySet_Lv.step = "1";
            EnemySet_Lv.value = "1";
            EnemySet_Lv.addEventListener("input", () => {
                const value = EnemySet_Lv.value;
                if (value != null && 0 < value && value < 101) {
                    this.enemyLevel = value;
                }
                else {
                    if (value > 100) {
                        EnemySet_Lv.value = "100";
                    }
                    else if (value < 0) {
                        EnemySet_Lv.value = "0";
                    }
                }
            });
            EnemySettingDiv.appendChild(EnemyTxt_Lv);
            EnemySettingDiv.appendChild(EnemySet_Lv);
            let e = 0;
            for (let key in Skills) {
                let SkillSet_Text = document.createElement("p");
                let SkillSet_Input = document.createElement("select");
                SkillSet_Text.className = "SetText";
                SkillSet_Input.className = "SetInput";
                SkillSet_Text.textContent = Skills[key];
                SkillSet_Text.style.top = `${230 + 90 * e}px`;
                SkillSet_Input.style.top = `${230 + 90 * e}px`;
                e++;
                const i2 = e;
                for (let key2 in Skills_1.SkillList) {
                    if (Skills[key] == "必殺技") {
                        if (Skills_1.SkillList[key2].skillType == "normal")
                            continue;
                    }
                    else {
                        if (Skills_1.SkillList[key2].skillType == "super")
                            continue;
                    }
                    let opt = document.createElement("option");
                    opt.value = key2;
                    opt.textContent = key2;
                    SkillSet_Input.appendChild(opt);
                }
                SkillSet_Input.addEventListener("input", () => {
                    if (i2 == 1)
                        this.EnemySkill1 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 2)
                        this.EnemySkill2 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 3)
                        this.EnemySkill3 = Skills_1.SkillList[SkillSet_Input.value];
                    else if (i2 == 4)
                        this.EnemySkillSuper = Skills_1.SkillList[SkillSet_Input.value];
                });
                EnemySettingDiv.appendChild(SkillSet_Text);
                EnemySettingDiv.appendChild(SkillSet_Input);
            }
            let Pattern_Text = document.createElement("p");
            let Pattern_Input = document.createElement("select");
            Pattern_Text.className = "SetText";
            Pattern_Input.className = "SetInput";
            Pattern_Text.textContent = "行動パターン";
            Pattern_Text.style.top = "140px";
            Pattern_Input.style.top = "140px";
            for (let key in EnemyPattern_1.EnemyPattern) {
                let opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                Pattern_Input.appendChild(opt);
            }
            Pattern_Input.addEventListener("input", () => {
                this.EnemyPattern = EnemyPattern_1.EnemyPattern[Pattern_Input.value];
            });
            EnemySettingDiv.appendChild(Pattern_Text);
            EnemySettingDiv.appendChild(Pattern_Input);
            //FieldSettings
            let FieldTxt_Type = document.createElement("p");
            let FieldSet_Type = document.createElement("select");
            FieldTxt_Type.className = "SetText";
            FieldSet_Type.className = "SetInput";
            FieldTxt_Type.textContent = "クリア条件";
            FieldTxt_Type.style.top = "50px";
            FieldSet_Type.style.top = "50px";
            for (let key in FieldFunction_1.FieldGameEnd) {
                let opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                FieldSet_Type.appendChild(opt);
            }
            FieldSet_Type.addEventListener("input", () => {
                this.fieldFunction_End = FieldFunction_1.FieldGameEnd[FieldSet_Type.value];
            });
            FieldSettingDiv.appendChild(FieldTxt_Type);
            FieldSettingDiv.appendChild(FieldSet_Type);
            let FieldText_Image = document.createElement("p");
            let FieldSet_Image = document.createElement("select");
            FieldText_Image.className = "SetText";
            FieldSet_Image.className = "SetInput";
            FieldText_Image.textContent = "フィールド画像";
            FieldText_Image.style.top = "130px";
            FieldSet_Image.style.top = "130px";
            const imageNames = { "林": "Field1.png" };
            for (let key in imageNames) {
                let opt = document.createElement("option");
                opt.value = imageNames[key];
                opt.textContent = key;
                FieldSet_Image.appendChild(opt);
            }
            FieldSet_Image.addEventListener("input", () => {
                this.fieldImage = FieldSet_Image.value;
            });
            FieldSettingDiv.appendChild(FieldText_Image);
            FieldSettingDiv.appendChild(FieldSet_Image);
            let FieldText_Func = document.createElement("p");
            let FieldSet_Func = document.createElement("select");
            FieldText_Func.className = "SetText";
            FieldSet_Func.className = "SetInput";
            FieldText_Func.textContent = "フィールドギミック";
            FieldText_Func.style.top = "210px";
            FieldSet_Func.style.top = "210px";
            for (let key in FieldFunction_1.FieldFunction) {
                let opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                FieldSet_Func.appendChild(opt);
            }
            FieldSet_Func.addEventListener("input", () => {
                this.fieldFunction = FieldFunction_1.FieldFunction[FieldSet_Func.value];
            });
            FieldSettingDiv.appendChild(FieldText_Func);
            FieldSettingDiv.appendChild(FieldSet_Func);
            //StartBtn
            let StartBtn = document.createElement("button");
            StartBtn.textContent = "開始";
            StartBtn.style.position = "absolute";
            StartBtn.style.width = "250px";
            StartBtn.style.height = "20%px";
            StartBtn.style.bottom = "0px";
            StartBtn.style.left = "0px";
            StartBtn.style.fontSize = "50px";
            StartBtn.style.backgroundColor = "#0A0D40";
            StartBtn.style.color = "#F2F2F2";
            StartBtn.addEventListener("click", () => {
                SceneManager_1.SceneManager.Instance.AddScene(new GameScene_1.GameScene(this.fieldImage, this.heroLevel, this.HeroSkill1, this.HeroSkill2, this.HeroSkill3, this.HeroSkillSuper, this.enemyLevel, this.EnemySkill1, this.EnemySkill2, this.EnemySkill3, this.EnemySkill3, this.fieldFunction_End, this.fieldFunction, this.EnemyPattern));
            });
            this.UIs.push(CharacterSettingBtn);
            this.UIs.push(EnemySettingBtn);
            this.UIs.push(FieldSettingBtn);
            this.UIs.push(CharacterSettingDiv);
            this.UIs.push(EnemySettingDiv);
            this.UIs.push(FieldSettingDiv);
            this.UIs.push(BackBtn);
            this.UIs.push(StartBtn);
        }
        draw(ctx) {
            ctx.clearRect(0, 0, GlobalData_1.GlobalData.Instance.ScreenSize.width, GlobalData_1.GlobalData.Instance.ScreenSize.height);
            super.draw(ctx);
        }
    }
    exports.GameSettingScene = GameSettingScene;
});
//# sourceMappingURL=GameStartScene.js.map