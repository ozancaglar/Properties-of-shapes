// maths.js

export class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    area() {
        let p = (this.side1 + this.side2 + this.side3)/2
        return (p*(p-this.side1)*(p-this.side2)*(p-this.side3))**0.5
    }

    perimeter() {
        return (this.side1 + this.side2 + this.side3)
    }
}

export class Rectangle {
    constructor(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }

    area() {
        return (this.side1 * this.side2)
    }

    perimeter() {
        return (this.side1*2 + this.side2*2)
    }

    isSquare () {
        return (this.side1 == this.side2)
    }
}