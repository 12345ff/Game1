define(["require", "exports", "./Scene/SceneManager", "./Data/GlobalData"], function (require, exports, SceneManager_1, GlobalData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameLoop = void 0;
    class GameLoop {
        constructor(context) {
            //average
            this.beforeTime = 0;
            //Time
            this.NextShowCount = [30, 30];
            this.nextTime = 0;
            this.FpsArray = [];
            this.fps = 60;
            this.ctx = context;
            this.flag = false;
            this.DebugTextElement = document.getElementById("DebugTexts");
        }
        StartLoop() {
            if (this.flag == false) {
                const loop = () => {
                    var _a, _b;
                    var beginTime = Date.now();
                    if (Date.now() >= this.nextTime) {
                        (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.update();
                        (_b = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _b === void 0 ? void 0 : _b.draw(this.ctx);
                        GlobalData_1.GlobalData.Instance.averageFps = 1000 / (beginTime - this.beforeTime);
                        this.FpsArray.push(GlobalData_1.GlobalData.Instance.averageFps);
                        this.beforeTime = Date.now();
                        if (this.NextShowCount[0] <= 0) {
                            let FpsAverage = 0;
                            for (var i = 0; i < this.FpsArray.length; i++) {
                                FpsAverage += this.FpsArray[i];
                            }
                            FpsAverage /= this.FpsArray.length;
                            this.NextShowCount[0] = this.NextShowCount[1];
                            this.DebugTextElement.textContent = `fps:${Math.floor(FpsAverage)}\n`;
                            this.FpsArray = [];
                        }
                        else {
                            this.NextShowCount[0]--;
                        }
                        this.nextTime = beginTime + Math.floor(1000 / this.fps) - (Date.now() - beginTime);
                    }
                    window.requestAnimationFrame(loop);
                };
                loop();
                this.flag = true;
            }
        }
    }
    exports.GameLoop = GameLoop;
});
//# sourceMappingURL=loop.js.map