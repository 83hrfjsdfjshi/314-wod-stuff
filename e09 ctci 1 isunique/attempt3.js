function isUnique(str) {
    const set = new Set()
    for (let i = 0; i < str.length; i++) {
        set.add(str[i])
    }
    return str.length === set.size
}

console.log(isUnique('abcde'));  // prints true
console.log(isUnique('abcdea')); // prints false

// Time: 0:44