function func(a: number, b: number) {
  return a + b;
}

const add = (a: number, b: number) => a + b;

function introduce(name = "hyun", age: number, tall?: number) {
  console.log(name);
  if (typeof tall === "number") console.log(tall + 10);
}

introduce("hyun", 175);
introduce("hyun", 28);

function getSum(...rest: any[]) {}
