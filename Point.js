"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.displayName = "Point";
        this.x = x;
        this.y = y;
    }
    Point.prototype.distance = function (point) {
        var dx = this.x - point.x;
        var dy = this.y - point.y;
        // @ts-ignore
        return Math.hypot(dx, dy);
    };
    return Point;
}());
exports.Point = Point;
var p1 = new Point(5, 5);
var p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance(p2));
