let array = [5, 3, 4, 2, 1, 6];

const recursiveSort = function(array) {
//if length = 1, return
    let arrLen = array.length;
    if (arrLen === 1) {
        return array;
    }
    let leftSideCutoff = parseInt(arrLen / 2);
    console.log(leftSideCutoff)
//sort left side
//sort right side
//swap if needed

};
// Do not edit below this line
module.exports = recursiveSort;
recursiveSort(array);