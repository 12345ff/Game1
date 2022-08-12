define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Position = void 0;
    class Position {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        addVector(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
    }
    exports.Position = Position;
});
//# sourceMappingURL=Position.js.map