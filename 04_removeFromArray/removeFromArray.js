const removeFromArray = function(array, ...rest) {
    if (Array.isArray(array) === false) {
        throw "First argument is not an array!"
    }
    rest.forEach(function(element) {
        let index = array.indexOf(element)
        if (index !== -1) {
            array.splice(index, 1);
        }

    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
