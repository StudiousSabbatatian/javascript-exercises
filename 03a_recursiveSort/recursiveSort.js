let array = [5, 3, 4, 2, 1, 6];

const recursiveSort = function(array) {
//if length = 1, return
    let arrLen = array.length;
    if (arrLen === 1) {
        return array;
    }
    let leftSideCutoff = parseInt(arrLen / 2);
    //console.log(leftSideCutoff)
//sort left side
    let left = recursiveSort(array.slice(1, leftSideCutoff + 1))
//sort right side
    let right = recursiveSort(array.slice(leftSideCutoff + 1, arrLen + 1))
//swap if needed
    if (left[left.length - 1] > right[0]) {
        return right.concat(left);
    } else {
        return left.concat(right);
    }
};
// Do not edit below this line
module.exports = recursiveSort;
let arr = recursiveSort(array);
console.log(arr);