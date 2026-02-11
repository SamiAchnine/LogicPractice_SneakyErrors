const students = new Map();

students.set("Sami Achnine", 11);
students.set("Serena Rogers", 11);
students.set("Rahul Murgai", 12);
students.set("Gerald Robotnik", 95);

for (const x of students.values()) {
  console.log(x);
}