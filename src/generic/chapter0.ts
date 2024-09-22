function func<T>(value: T) {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

let arr = func<[number, number, number]>([1, 2, 4]);
