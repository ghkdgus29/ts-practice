function fetchUser() {
    return {
        id: 1,
        name: "hyun",
        age: 27,
    };
}
function updateUser(user) { }
updateUser({
    // id: 1,
    // name: "hyun",
    age: 25,
});
const user = fetchUser();
export {};
// user.id = 12;
