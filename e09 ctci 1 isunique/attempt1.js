function isUnique(string) {
    let list = {};
    for (let i = 0; i < string.length; i++) {
        list[string[i]] = 0;
    }
    return Object.keys(list).length === string.length;
}

console.log(isUnique('abcde'))
console.log(isUnique('abcdeb'))

// Time: 2:47