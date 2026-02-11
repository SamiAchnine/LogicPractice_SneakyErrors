function factorial(num){
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num-1);
    }
}

console.log("example: 5! = " + factorial(5))