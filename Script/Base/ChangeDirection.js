define(["require", "exports", "./Position"], function (require, exports, Position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChangeDirection = void 0;
    function ChangeDirection(sa) {
        let direction = new Position_1.Position(0, 0);
        if (Math.abs(sa.x) > Math.abs(sa.y)) {
            direction.x = 1;
            direction.y = Math.abs(sa.y) / Math.abs(sa.x);
        }
        else if (Math.abs(sa.y) > Math.abs(sa.x)) {
            direction.x = Math.abs(sa.x) / Math.abs(sa.y);
            direction.y = 1;
        }
        if (sa.x < 0)
            direction.x *= -1;
        if (sa.y < 0)
            direction.y *= -1;
        return direction;
    }
    exports.ChangeDirection = ChangeDirection;
});
//# sourceMappingURL=ChangeDirection.js.map