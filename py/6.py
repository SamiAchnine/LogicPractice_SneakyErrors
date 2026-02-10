# challenge 3-c: Write a function in Python that accepts a string and returns the number of vowels in the string.

def vowel_counter(word: str):
    vowel_count = 0
    for i in word:
        if i in ["a", "e", "i", "o", "u"]:
            vowel_count += 1
        else:
            continue
    return vowel_count

print(vowel_counter("super mario from mario karts"))