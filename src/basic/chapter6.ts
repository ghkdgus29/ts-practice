let anyVar: any = 10;
anyVar = "hello";
anyVar.toFixed();

let num: number = anyVar;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// unknownVar.toFixed();
// num = unknownVar;

if (typeof unknownVar === "number") {
  num = unknownVar;
}
