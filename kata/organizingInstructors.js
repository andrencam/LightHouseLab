/**
 * Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:
 * {
  CourseName: [instructors]
} 
Expected Output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
} *
 */

const organizeInstructors = function (instructors) {
  let deltaCourseName = [];
  let courseName = {};

  instructors.forEach((instructor) => {

    if (!deltaCourseName.includes(instructor.course)) {

      deltaCourseName.push(instructor.course);
      courseName[instructor.course] = [];
    }

    for (course in courseName) {

      if (course == instructor.course) {
        courseName[instructor.course].push(instructor.name);
      }
    }


  });
  return courseName
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" },

]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));