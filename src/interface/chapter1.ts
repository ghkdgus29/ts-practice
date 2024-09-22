interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  //   name: "hello";
  isBark: boolean;
}

const dog: Dog = {
  name: "hello",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
