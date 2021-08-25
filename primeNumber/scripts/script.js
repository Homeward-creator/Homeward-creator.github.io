let input = Number(prompt("Enter a positive integer"));
for (;;) {
    if (Number.isInteger(input) && input >= 2) {
        showPrimes(input);
        break;
    }
    else{
        input = Number(prompt("Enter a positive integer"));
    }
}



function showPrimes(n) {

    let primeNum = []

    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        primeNum.push(i)
    }

    alert(`For n = ${input} prime numbers are ${primeNum}`)
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true
}