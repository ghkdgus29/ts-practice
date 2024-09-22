const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it));
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (it) => {
    console.log(it.toFixed());
});
export {};
