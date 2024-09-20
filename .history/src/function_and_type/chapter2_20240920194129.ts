type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;  파라미터의 경우 업캐스팅 시 호환 불가
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);     // 업캐스팅 시 이런 컴파일 에러 발생 가능
// }

// 파라미터 다운캐스팅 시 쌉가능
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
