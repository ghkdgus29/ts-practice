/**
 * Partial<T>
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환해주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// type Partial<T> = {
//   [key in keyof T]?: T[key];
// };

const draft: Partial<Post> = {
  title: "",
  content: "",
};

/**
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };

const withThumbnailPost: Required<Post> = {
  title: "",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://",
};

/**
 * Readonly<T>
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
// type Readonly<T> = {
//   readonly [key in keyof T]: T[key];
// };

const readonlyPost: Readonly<Post> = {
  title: "",
  tags: [],
  content: "",
};

// readonlyPost.content = ''
