class Shape {
  // Для расчета площади и периметра для разных фигур нужны разные параметры,
  // поэтому в конструктор базового класса добавим имя и начальную формулировку
  constructor(name) {
    this.name = name;
  }

  getAreaHeading() {
    return `${this.name} Area is: `;
  }

  getPerimeterHeading() {
    return `${this.name} Perimeter is: `;
  }
}

// И для каждой фигуры будем высчитывать их значения
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getRectangleArea() {
    return this.getPerimeterHeading() + this.width * this.height;
  }

  getPerimeterArea() {
    return this.getPerimeterHeading() + (this.width + this.height) * 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getCircleArea() {
    return `${this.getAreaHeading()} ${Math.round(
      Math.PI * this.radius * this.radius
    )}`;
  }

  getCirclePerimeter() {
    return `${this.getPerimeterHeading()} ${Math.round(
      2 * Math.PI * this.radius
    )}`;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super("Triangle");
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getTriangleArea() {
    const p = (this.side1 + this.side2 + this.side3) / 2;
    const area = Math.sqrt(
      p * (p - this.side1) * (p - this.side2) * (p - this.side3)
    );

    return `${this.getAreaHeading()} ${Math.round(area)}`;
  }

  getTrianglePerimeter() {
    return `${this.getPerimeterHeading()} ${
      this.side1 + this.side2 + this.side3
    }`;
  }
}

const rectangle = new Rectangle(40, 50);
const circle = new Circle(40);
const triangle = new Triangle(40, 50, 80);

rectangle.getRectangleArea(); // Rectangle Perimeter is: 2000
