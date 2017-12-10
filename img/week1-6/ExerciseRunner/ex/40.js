'use strict';
console.log('40/39');

// 39.Write a function countVotes(votes, candidateName) that counts how
// many votes this candidate got.
// i.e.: if the votes array looks like this: ['c1', 'c1', 'c2', 'c1']
// And the candidateName is : 'c2', the function returns 1.

function countVotes(votes, candidateName) {
    var sumVote = 0;
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] === candidateName) sumVote++
    }
    return sumVote
}
console.log(countVotes(['a','a','b','a','c','b','b'] , 'c'))