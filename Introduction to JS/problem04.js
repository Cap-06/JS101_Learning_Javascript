let student = {
    name: "Kunj Pratap Singh",
    school: "Army Public School",
    grade: "10th",
    section: "D",
    rollno: "202556",
    marks: {
        math: 60,
        science: 85,
        english: 92,
    }
};


console.log("REPORT CARD");
console.log(`name: ${student.name}`);
console.log(`School: ${student.school}`);
console.log(`Grade: ${student.grade}`);
console.log(`Section: ${student.section}`);
console.log(`Roll No: ${student.rollno}`);


console.log("Subject\t\tMarks");
console.log("----------------------------------------------------");
console.log(`Math\t\t${student.marks.math}`);
console.log(`Science\t\t${student.marks.science}`);
console.log(`English\t\t${student.marks.english}`);
console.log("----------------------------------------------------");

