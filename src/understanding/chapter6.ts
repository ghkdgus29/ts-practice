type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "doldol2",
  color: "brown",
  breed: "jindo",
} as Dog;

console.log(dog);

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

let num4 = 10 as const;

let cat = {
  name: "yaong",
  color: "yellow",
} as const;

// cat.name = "dd";

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "hyun",
};

const len: number = post.author!.length;
