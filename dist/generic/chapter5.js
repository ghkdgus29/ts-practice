const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
promise.then((response) => {
    console.log(response * 10);
});
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
});
function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "title",
                content: "content",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    post.id;
});
export {};
