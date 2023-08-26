function projectEulerOne() {
    const multiples = [3, 5];
    const findBelow = 1000;
    let sum = 0;
    for (let i = 0; i < findBelow; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

console.log(projectEulerOne());

// Time: 1:29