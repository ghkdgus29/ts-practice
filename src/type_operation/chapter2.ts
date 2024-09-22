interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "hyun",
  age: 27,
};

getPropertyKey(person, "name");

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

getPropertyKey2(person, "name");
