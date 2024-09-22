function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "hyun",
    age: 27,
};
getPropertyKey(person, "name");
function getPropertyKey2(person, key) {
    return person[key];
}
getPropertyKey2(person, "name");
export {};
