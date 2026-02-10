# challenge 2-c: calculate the factorial of a given number using a loop

def factorial(num):
    if num == 0 or num == 1:
        return 1
    else:
        return num * factorial(num-1)
    
print(f"example: {factorial(5)}")