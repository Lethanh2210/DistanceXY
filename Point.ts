export class Point{
    x : number;
    y : number;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    displayName = "Point";
    distance(point){
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        // @ts-ignore
        return Math.hypot(dx, dy);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);

console.log(p1.displayName);
console.log(p1.distance(p2));