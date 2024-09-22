class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(this.moveSpeed);
    }
}
export {};
