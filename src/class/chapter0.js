let studentA = {
  name: "hyun",
  grade: "A+",
  age: 27,
  study() {
    console.log("study hard");
  },
  introduce() {
    console.log("hi");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("study hard");
  }

  introduce() {
    console.log("hi");
  }
}

let studentB = new Student("hyun", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍`);
  }
}

const studentDeveloper = new StudentDeveloper("hyun", "A+", 27, "Java");
studentDeveloper.programming();
