'use strict';
console.log('45/44');

// 44. Write a function: findUniques(nums) the array nums contains numbers
// in the range 0 -10 such as:
// the function returns a new array where each value appear only
// once.

function findUniques(nums) {
    var newNums = [];

    for (var i = 0; i < nums.length; i++) {
            if (newNums.indexOf(nums[i]) < 0 )
                newNums.push(nums[i])
        }
    return newNums     
}


console.log(findUniques([1,2,1,3,6,8,8,1,3]))