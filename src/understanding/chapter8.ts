type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(user.name, user.kickCount);
  } else if (user.tag === "MEMBER") {
    console.log(user.name, user.point);
  } else {
    console.log(user.name, user.visitCount);
  }
}
