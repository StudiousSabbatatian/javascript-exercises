const palindromes = function (string) {
    string = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const arr  = string.split("");
    let arrMiddle = arr.length / 2;
    let firstHalf = arr.slice(0, Math.floor(arrMiddle));
    let secondHalf = arr.slice(Math.ceil(arrMiddle));
    secondHalf = secondHalf.reverse();
    return firstHalf.length === secondHalf.length &&
    firstHalf.every((val, index) => val === secondHalf[index]);
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
