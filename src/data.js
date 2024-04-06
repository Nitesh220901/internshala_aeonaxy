import student from "./assets/student.png";
import parent from "./assets/parents.png";
import professional from "./assets/professionals.png";
import other from "./assets/boy.png";
import lifelong from "./assets/lifelong-learning.png";
import teacher from "./assets/teacher.png";
    const designations = [
      {
        id: 1,
        title: "Student",
        img: student,
        description: "or soon to be enrolled",
      },
      {
        id: 2,
        title: "Professional",
        img: professional,
        description: "pursuing a career",
      },
      {
        id: 3,
        title: "Parent",
        img: parent,
        description: "of a school-age child",
      },
      {
        id: 4,
        img: lifelong,
        title: "Lifelong learner",
      },
      {
        id: 5,
        img: teacher,
        title: "Teacher",
      },
      {
        id: 6,
        img: other,
        title: "other",
      },
    ];



    export default {designations}