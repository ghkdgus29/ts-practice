let a = () => 10;
let b = () => 10;
a = b;
let c = (value) => { };
let d = (value) => { };
// c = d;  파라미터의 경우 업캐스팅 시 호환 불가
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc;
// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color);     // 업캐스팅 시 이런 컴파일 에러 발생 가능
// }
// 파라미터 다운캐스팅 시 쌉가능
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// func2 = func1;
