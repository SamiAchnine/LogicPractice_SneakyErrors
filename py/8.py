# challenge 4-b: Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

students = {
    "Sami Achnine": 11,
    "Serena Rogers": 11,
    "Rahul Murgai": 12,
    "Gerald Robotnik": 95,
}

for student in students:
    print(student + "\ngrade: " + str(students[student]))