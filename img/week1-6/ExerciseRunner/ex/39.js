'use strict';
console.log('39/38');

// 38.Write a function biggerThan100 that gets an array of nums and returns
// an array of items that are bigger than 100.


function biggerThan100(nums) {
    var biggests = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) biggests.push(nums[i])
    }
    return biggests
}
console.log(biggerThan100([123,456,89,101]))