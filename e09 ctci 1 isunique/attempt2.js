function isUnique(str){
    const arr = str.split("")
    const reduce = arr.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = 0;
        return previousValue;
    }, {})
    return arr.length === Object.keys(reduce).length
}

console.log(isUnique('abcde'));  // prints true
console.log(isUnique('abcdea')); // prints false

// Time: 1:50