define(["require", "exports", "./Size", "./Position"], function (require, exports, Size_1, Position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rectangle = void 0;
    class Rectangle {
        constructor(x, y, width, height) {
            this.position = new Position_1.Position(x, y);
            this.size = new Size_1.Size(width, height);
        }
    }
    exports.Rectangle = Rectangle;
});
//# sourceMappingURL=Rectangle.js.map