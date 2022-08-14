define(["require", "exports", "./Scene/SceneManager", "./Scene/TitleScene", "./loop", "./Data/GlobalData", "./Base/Position"], function (require, exports, SceneManager_1, TitleScene_1, loop_1, GlobalData_1, Position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //!Start!
    (window.onload = () => {
        var _a, _b;
        //タッチその他
        let html = document.getElementById("touchZone");
        html.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            let touche = e.touches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchStart(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: false });
        html.addEventListener("touchmove", (e) => {
            var _a;
            e.preventDefault();
            let touche = e.changedTouches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchNow(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: false });
        html.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            let touche = e.changedTouches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchEnd(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: false });
        let gamecanvas = document.getElementById("GameUI");
        gamecanvas === null || gamecanvas === void 0 ? void 0 : gamecanvas.addEventListener("touchstart", (e) => {
            var _a;
            let touche = e.touches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchStart(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: true });
        gamecanvas === null || gamecanvas === void 0 ? void 0 : gamecanvas.addEventListener("touchmove", (e) => {
            var _a;
            let touche = e.changedTouches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchNow(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: true });
        gamecanvas === null || gamecanvas === void 0 ? void 0 : gamecanvas.addEventListener("touchend", (e) => {
            var _a;
            let touche = e.changedTouches[0];
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.touchEnd(new GlobalData_1.GameTouch(html, new Position_1.Position(touche.clientX, touche.clientY)));
        }, { passive: true });
        //タッチボタン
        let ok = document.getElementById("OkButton");
        let cansel = document.getElementById("CanselButton");
        ok === null || ok === void 0 ? void 0 : ok.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["Ok"]);
        }, { passive: false });
        cansel === null || cansel === void 0 ? void 0 : cansel.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["Cansel"]);
        }, { passive: false });
        ok === null || ok === void 0 ? void 0 : ok.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["Ok"]);
        }, { passive: false });
        cansel === null || cansel === void 0 ? void 0 : cansel.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["Cansel"]);
        }, { passive: false });
        let skillBtn1 = document.getElementById("skill_1");
        let skillBtn2 = document.getElementById("skill_2");
        let skillBtn3 = document.getElementById("skill_3");
        let skillBtnsuper = document.getElementById("skill_super");
        skillBtn1 === null || skillBtn1 === void 0 ? void 0 : skillBtn1.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["Skill1"]);
        }, { passive: false });
        skillBtn1 === null || skillBtn1 === void 0 ? void 0 : skillBtn1.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["Skill1"]);
        }, { passive: false });
        skillBtn2 === null || skillBtn2 === void 0 ? void 0 : skillBtn2.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["Skill2"]);
        }, { passive: false });
        skillBtn2 === null || skillBtn2 === void 0 ? void 0 : skillBtn2.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["Skill2"]);
        }, { passive: false });
        skillBtn3 === null || skillBtn3 === void 0 ? void 0 : skillBtn3.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["Skill3"]);
        }, { passive: false });
        skillBtn3 === null || skillBtn3 === void 0 ? void 0 : skillBtn3.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["Skill3"]);
        }, { passive: false });
        skillBtnsuper === null || skillBtnsuper === void 0 ? void 0 : skillBtnsuper.addEventListener("touchstart", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"]);
        }, { passive: false });
        skillBtnsuper === null || skillBtnsuper === void 0 ? void 0 : skillBtnsuper.addEventListener("touchend", (e) => {
            var _a;
            e.preventDefault();
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(GlobalData_1.GlobalData.Instance.KeySet["SuperAttack"]);
        }, { passive: false });
        //ゲーム起動処理 
        const canvas = document.getElementById("GameCanvas");
        let ctx = canvas.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        if (ctx == null) {
            alert("Error:キャンバス要素のコンテキストの取得に失敗した");
            return;
        }
        let gameLoop = new loop_1.GameLoop(ctx);
        SceneManager_1.SceneManager.Instance.AddScene(new TitleScene_1.TitleScene());
        (_a = document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", (e) => {
            var _a;
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keydown(e.key);
        });
        (_b = document.querySelector("html")) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", (e) => {
            var _a;
            (_a = SceneManager_1.SceneManager.Instance.GetTopScene()) === null || _a === void 0 ? void 0 : _a.keyup(e.key);
        });
        gameLoop.StartLoop();
        if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
            //Iphone/Android
        }
        else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
            //IPad/...
        }
        else {
            //PC/other
            let mobileUIs = document.getElementsByClassName("mobileUI");
            for (let i = 0; i < mobileUIs.length; i++) {
                let mobileUI = mobileUIs[i];
                mobileUI.style.display = "none";
            }
            let GameScreens = document.getElementsByClassName("GameScreen");
            for (let i = 0; i < GameScreens.length; i++) {
                let GameScreen = GameScreens[i];
                GameScreen.style.width = "95%";
                GameScreen.style.maxWidth = "800px";
                GameScreen.style.maxHeight = "none";
            }
        }
        console.log("起動完了");
    })();
});
//!Start!
//# sourceMappingURL=main.js.map