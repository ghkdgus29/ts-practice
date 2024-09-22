function func(value) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        console.log(value.getTime());
    }
    else if (value && "age" in value) {
        console.log(value.name, value.age);
    }
}
export {};
