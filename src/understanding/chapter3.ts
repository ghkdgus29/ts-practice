type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "doldol2",
  color: "brown",
  breed: "jindo",
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "book",
  price: 3000,
  skill: "react js",
};

book = programmingBook;
// programmingBook = book;

let book2: Book = {
  name: "book",
  price: 3000,
  //   skill: "reaaaa",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "book",
  price: 3000,
  //   skill: "reaaaa",
});
func(programmingBook);
