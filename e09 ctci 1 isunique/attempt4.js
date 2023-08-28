function isUnique(str) {
    return new Set(str).size === str.length;
}

console.log(isUnique('abcde'));  // prints true
console.log(isUnique('abcdea')); // prints false

// Time: 00:24