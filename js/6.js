function vowel_counter(word) {
    let vowel_count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowel_count++;
        }
        else {
            continue;
        }
    }
    return vowel_count;
}

console.log(vowel_counter("fortnite"));