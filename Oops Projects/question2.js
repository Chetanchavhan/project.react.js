
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}


class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
}


class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor()); 
console.log(coloredCircle.getRadius()); 


// The Shape class has a color property and a getColor method.
// The Circle class extends Shape, adding a radius property and a getRadius method.
// The ColoredCircle class extends Circle without adding any new properties or methods but inherits everything from its parent classes.
// When we create an instance of ColoredCircle with the color 'blue' and radius 5, we can access both the getColor and getRadius methods to retrieve the respective properties.