function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        animal;
    }
    else if (isCat(animal)) {
        animal;
    }
}
export {};
