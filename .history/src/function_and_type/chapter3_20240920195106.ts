function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") console.log(a + b + c);
  else console.log(a * 20);
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);
