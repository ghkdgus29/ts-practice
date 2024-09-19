let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "hyun",
};

user.id;

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};

// config.apiKey = "dds";
