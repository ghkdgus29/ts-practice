function login(user) {
    if (user.tag === "ADMIN") {
        console.log(user.name, user.kickCount);
    }
    else if (user.tag === "MEMBER") {
        console.log(user.name, user.point);
    }
    else {
        console.log(user.name, user.visitCount);
    }
}
export {};
