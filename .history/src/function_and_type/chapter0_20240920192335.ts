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

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
