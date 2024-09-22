interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "hyun",
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
