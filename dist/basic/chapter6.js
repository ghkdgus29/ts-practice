let anyVar = 10;
anyVar = "hello";
anyVar.toFixed();
let num = anyVar;
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// unknownVar.toFixed();
// num = unknownVar;
if (typeof unknownVar === "number") {
    num = unknownVar;
}
export {};
