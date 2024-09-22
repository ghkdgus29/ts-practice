interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "hyun",
    age: 27,
  };
}

function updateUser(user: PartialUser) {}

updateUser({
  // id: 1,
  // name: "hyun",
  age: 25,
});

const user = fetchUser();
// user.id = 12;
