let numbers = [0, 1, 2, 3, 4, 5, 12, 123, 93, 45, 69, 420, 6969420];

function find_largest(n) {
    let length = n.length;
    let maximum = -Infinity;
    while (length--){
        if (n[length] > maximum) {
            maximum = n[length];
        }
    }
    return maximum;
}

console.log(find_largest(numbers));