class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static displayName = 'Point';
    static distance(a, b){
        let dx = a.x -b.x;
        let dy = a.y -b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 10);
const p2 = new Point(7, 11);

Point.distance(p1, p2); // static methods can only be called 
p1.distance // undefined
p2.displayName // undefined

/* 
    ***    ****
    Static members (properties and methods) are called without instantiating their
    class and cannot be called through a class instance.
    Static methods are often used to create utility functions for an application, whereas static properties
    are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

*/
