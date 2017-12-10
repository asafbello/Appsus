'use strict';
console.log('52');

// 52. Students
//  Create a students array
//  Read student names until “quit” is entered and populate the
// students array with student objects
//  Read 3 grades for each student
//  Calc avg for each student

function createStudent() {
    var students = [];
    var studentName = prompt('name?')
    while ( studentName !=='quit') {
        var sumGrade = (+prompt('enter grade'))+(+prompt('enter grade'))+(+prompt('enter grade'))
        students.push({
            name: studentName,
            grade: sumGrade/3
        });
        studentName = prompt('name?')
    }
   
    return students
}

//  Write the function findWorstStudent(students)

// function findWorstStudent(students) {
//     var minGrade = 100;
//     var WorstStudent;
//     for (var i = 0; i < students.length; i++) {
//         var grade = students[i].grade;
//         if (grade < minGrade) {
//             minGrade = grade
//             WorstStudent=students[i]
//         }  
//     }
//     return WorstStudent
// }
// var students = createStudent()
// var a = findWorstStudent(students)
// console.log(a)


//  Write the function sortStudentsByGrade(students)

function sortStudentsByGrade(students) {

  return students.sort(gradeCompare);
}

function gradeCompare(a,b) {
  if (a.grade < b.grade)
    return -1;
  if (a.grade > b.gr)
    return 1;
  return 0;
}

// var a =  sortStudentsByGrade(createStudent())
// console.log(a)

//  Write the function sortStudentsByName(students)

function sortStudentsByName(students) {

    return students.sort(nameCompare);
}
function nameCompare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

var a = sortStudentsByName(createStudent())
console.log(a)
