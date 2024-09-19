function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

function func3(): never {
  //   while (true) {}
  throw new Error();
}

let a: never;
// a = undefined;

let anyVar: any;
// a = anyVar;
