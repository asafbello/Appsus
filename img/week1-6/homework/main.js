let emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 1,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 11,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];

function allExperiencePar(arrays) {
    var expirance = {};
    arrays.forEach(function (object) {
        if (expirance[object.department]) {
            expirance[object.department] += object.yearsExperience;
        } else {
            expirance[object.department] = object.yearsExperience;
        }
    });

    console.log(expirance)

}

allExperiencePar(emps)





// function allExperienceSum(arrays) {
//     var result = arrays.reduce(function (accumulator, currentValue) {
//         accumulator += currentValue.yearsExperience;
//         return accumulator
//     }, 0);

//     console.log(result)

// }

// var rez = allExperienceSum(emps);

// console.log()


// var vals = [7, 9, 6, 18, 4, 7, 8, 9, 6, 7, 4, 4, 4, 4, 8, 8];

// function findModes(values) {

//     var result = values.reduce(function (accumulator, currentValue) {
//         if (!accumulator[currentValue]) {
//             accumulator[currentValue] = 1;
//         } else {
//             accumulator[currentValue]++
//         }
//         return accumulator
//     }, {});

//     console.log(result)

// }

// findModes(vals)














// var vals = ["Hello", [9, 6], 18, [4, 7, 8]];


// function flatten(values) {

//     var result = values.reduce(function (accumulator, currentValue) {
//         if (typeof currentValue === 'object') {
//             currentValue.forEach(function (element) {
//                 accumulator.push(element)
//             });
//         } else {
//             accumulator.push(currentValue);
//         }
//         console.log(accumulator)
//         return accumulator

//     }, []);
//     return result
// }
// console.log(flatten(vals))






// var arrays = [
//     [2,3],[3,4],[3,4,4]
// ]


// function isMatrix(arr2d) {
//    var is = arr2d.every(function(currentValue){
//       return  (currentValue.length === arr2d[0].length)
//     })
//    return is
// }
// console.log(isMatrix(arrays))


// function isWide(arr2d) {

//  var is = arr2d.some(function (isBiggerThan5) {
//     return (isBiggerThan5.length >= 3)
//  })
// return is
// }
// console.log(isWide(arrays))

