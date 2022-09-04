const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();
    return arr.reduce(function(previousOldest, currentPerson) {
        let compareArray = [previousOldest, currentPerson];
        let previousOldestAge;
        let currentPersonAge;
        compareArray.forEach(function(element) {
            if (!element.yearOfDeath){
                element.yearOfDeath = currentYear;
            }
            element.age = element.yearOfDeath - element.yearOfBirth;
        });
        if (compareArray[1].age > compareArray[0].age) {
            return currentPerson;
        } else {
            return previousOldest;  
        }
    })
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ] 
  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
