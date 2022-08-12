define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResourceManager = void 0;
    class ResourceManager {
        constructor() {
            //---
            this.Animations = {};
            this.Images = {};
        }
        SetUp() { }
        PlusAnimation(key, animation) {
            this.Animations[key] = animation;
        }
        GetAnimation(key) {
            return this.Animations[key];
        }
        PlusImage(key, image) {
            this.Images[key] = image;
        }
        GetImage(key) {
            return this.Images[key];
        }
    }
    exports.ResourceManager = ResourceManager;
    //シングルトン
    ResourceManager.Instance = new ResourceManager();
});
//# sourceMappingURL=ResourceManager.js.map