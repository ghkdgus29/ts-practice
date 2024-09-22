function func(a, b) {
    return a + b;
}
const add = (a, b) => a + b;
function introduce(name = "hyun", age, tall) {
    console.log(name);
    if (typeof tall === "number")
        console.log(tall + 10);
}
introduce("hyun", 175);
introduce("hyun", 28);
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
export {};
