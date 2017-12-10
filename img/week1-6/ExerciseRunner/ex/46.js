'use strict';
console.log('46/45');

// 45.Write a function: multBy(nums, multiplier) that returns a modified array
// in which each item in the array is multiplied by myltiplier.
// a. Add another param: isImmutable, when true use array.slice() to work
// on a new array and leave the original array as is.

function multBy(nums, multiplier) {
    
    var multiNums =[];

    for (var i = 0; i < nums.length; i++) {
      multiNums.push(nums[i]*multiplier)    
    }
    return multiNums
}
console.log(multBy([1,2,3],2));