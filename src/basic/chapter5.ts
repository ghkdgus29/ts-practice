enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "hyun",
  role: Role.ADMIN,
  Language: Language.korean,
};

const user2 = {
  name: "yeon",
  role: Role.USER,
};

const user3 = {
  name: "sully",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
