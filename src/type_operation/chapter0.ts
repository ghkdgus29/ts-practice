interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "",
  content: "",
  author: {
    id: 1,
    name: "hyun",
    age: 27,
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[0]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post2: PostList[0] = {
  title: "",
  content: "",
  author: {
    id: 1,
    name: "hyun",
    age: 27,
  },
};

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type TupNum = Tup[number];
