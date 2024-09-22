function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, "hello", "mynameis"]);
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
export {};
// let var4 = getLength(10);
