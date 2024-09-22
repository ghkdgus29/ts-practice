let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "doldol2",
    color: "brown",
    breed: "jindo",
};
animal = dog;
let book;
let programmingBook = {
    name: "book",
    price: 3000,
    skill: "react js",
};
book = programmingBook;
// programmingBook = book;
let book2 = {
    name: "book",
    price: 3000,
    //   skill: "reaaaa",
};
let book3 = programmingBook;
function func(book) { }
func({
    name: "book",
    price: 3000,
    //   skill: "reaaaa",
});
func(programmingBook);
export {};
