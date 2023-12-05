const people = [
  { name: "Max", age: 11 },
  { name: "Egor", age: 14 },
  { name: "Oleg", age: 11 },
  { name: "Goga", age: 67 },
];

const sortPeople = people.toSorted((obj1, obj2) => {
  // Примением ES2023 и воспользуемся методом toSorted.
  // Если возвращаем -1, то первый объект будет находиться перед вторым. И наоборот.
  if (obj1.age < obj2.age) {
    return -1;
  } else if (obj1.age > obj2.age) {
    return 1;
  } else {
    // Если возраста равны, то вызываем метод localeCompare для сравнения имен.
    // Этот метод возвращает отрицательное число,
    // если obj1.name предшествует obj2.name в лексикографическом порядке.
    return obj1.name.localeCompare(obj2.name);
  }
});
