class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...
  static calculate(figura) {
    let area = 0;
    if (figura instanceof Circle) {
      area = Math.pow(figura.radius, 2) * Math.PI;
    }
    else if (figura instanceof Rectangle) {
      area = figura.width * figura.height;
    }
    else if (figura instanceof Square) {
      area = Math.pow(figura.side, 2)
    }
    return area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));