function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number) {
  return a * 20;
}

function func(a: number, b: number, c: number) {
  return a + b + c;
}

// func();
func(1);
// func(1, 2);
func(1, 2, 3);
