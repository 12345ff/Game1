define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Vector = void 0;
    class Vector {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        addVector(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
        removeVector(vector) {
            this.x -= vector.x;
            this.y -= vector.y;
        }
        multiplyVector(number) {
            this.x *= number;
        }
    }
    exports.Vector = Vector;
});
//# sourceMappingURL=Vector.js.map