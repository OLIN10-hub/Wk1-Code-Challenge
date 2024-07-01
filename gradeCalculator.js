//get student grade;
let marks = parseFloat(prompt("enter grade"));
function getStudentGrade(){
    let grade; 
    if (marks < 0 && marks >100) {
        console.log("Enter valid Numbers 0-100")
    }
    if (marks > 79){
    grade = 'A';
    } else if (marks >= 60 && marks <=79) {
    grade = 'B';
} else if (marks >= 59 && marks <=49) {
    grade = 'C';
} else if (marks >=40 && marks >= 49) {
    grade = 'D';
} else {
    grade = 'E'


}
console.log(`Marks: ${marks}, Grade: ${grade}`);
}
getStudentGrade()



