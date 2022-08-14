//let array = [5, 3, 4, 2, 1, 6];

const recursiveSort = function(array) {
//if length = 1, return
    let arrLen = array.length;
    if (arrLen === 1) {
        return array;
    }
    let leftSideCutoff = parseInt(arrLen / 2);
    //console.log(leftSideCutoff)
//sort left side
    let left = recursiveSort(array.slice(0, leftSideCutoff))
//sort right side
    let right = recursiveSort(array.slice(leftSideCutoff, arrLen + 1))
//merge
    let returnarray = [];
    let rightindex = 0;
    let leftindex = 0;
    for (i = 0; i < array.length; i++) {
        if(rightindex === right.length) {
            returnarray.push(left[leftindex]);
            leftindex += 1;
        } else if (leftindex === left.length) {
            returnarray.push(right[rightindex])
            rightindex += 1;
        } else {
            if (right[rightindex] >= left[leftindex]) {
                returnarray.push(left[leftindex]);
                leftindex += 1;
            } else {
                returnarray.push(right[rightindex]);
                rightindex += 1;
            }
        }
    };
    return returnarray;

}
  
// Do not edit below this line
module.exports = recursiveSort;
/* let arr = recursiveSort(array);
console.log(arr); */