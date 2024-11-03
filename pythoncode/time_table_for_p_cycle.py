import random

# Subjects
four_hour_subjects = ["Maths", "Electrical", "Graphics", "Physics", "Mechanics"]
one_hour_subjects = ["Media Presentaion", "English"]

# Timetable for aiml structure
timetable_structure = [
    ["Monday(101)", "", "","", "Lab"],
    ["Tuesday(101)", "", "","", "Lab"],
    ["Wednesday(101)", "", "Lab","Lab", ""],
    ["Thursday (101)", "Free", "","", "Free"],
    ["Friday (101)", "Free", "","", "Free"]
]
# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structure[0][1] = f"{four_hour_subjects[0]}"
timetable_structure[0][2] = f"{four_hour_subjects[1]}"

timetable_structure[1][1] = f"{four_hour_subjects[2]}"
timetable_structure[1][2] = f"{four_hour_subjects[3]}"

timetable_structure[2][1] = f"{four_hour_subjects[4]}"
timetable_structure[2][4] = f"{four_hour_subjects[0]}"

timetable_structure[3][2] = f"{four_hour_subjects[1]}"
timetable_structure[3][3] = f"{four_hour_subjects[2]}"
timetable_structure[0][3] = f"{one_hour_subjects[0]}"

timetable_structure[4][2] = f"{four_hour_subjects[3]}"
timetable_structure[4][3] = f"{four_hour_subjects[4]}"
timetable_structure[1][3] = f"{one_hour_subjects[1]}"

# Function to print the timetable
def print_timetable(timetable):
    header = ["Day", "8:00 - 10:30", "11:00 - 12:40","12:40 - 2:20", "2:45 - 5:15"]
    
    # Print the header
    print("{:<30} {:<20} {:<20} {:<20} {:<10}".format(*header))
    print("-" * 120)
    
    # Print each row of the timetable
    for row in timetable:
        print("{:<30} {:<20} {:<20} {:<20} {:<10}".format(*row))


#For ise
timetable_structureofise = [
    ["Monday(201)", "Lab", "","", "Free"],
    ["Tuesday(201)", "Lab", "","", "Free"],
    ["Wednesday(101)", "Lab", "","", "Free"],
    ["Thursday (201)", "", "","", "Free"],
    ["Friday(201)", "", "","", "Free"]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofise[0][2] = f"{four_hour_subjects[0]}"
timetable_structureofise[0][3] = f"{four_hour_subjects[1]}"
timetable_structureofise[1][2] = f"{four_hour_subjects[2]}"
timetable_structureofise[1][3] = f"{four_hour_subjects[3]}"

timetable_structureofise[2][2] = f"{four_hour_subjects[4]}"
timetable_structureofise[2][3] = f"{four_hour_subjects[0]}"

timetable_structureofise[3][3] = f"{four_hour_subjects[1]}"
timetable_structureofise[3][2] = f"{four_hour_subjects[2]}"
timetable_structureofise[3][1] = f"{one_hour_subjects[0]}"

timetable_structureofise[4][3] = f"{four_hour_subjects[3]}"
timetable_structureofise[4][2] = f"{four_hour_subjects[4]}"
timetable_structureofise[4][1] = f"{one_hour_subjects[1]}"

#For cse
timetable_structureofcsea = [
    ["Monday(201)", "", "Lab","lab", ""],
    ["Tuesday(201)", "", "Lab","lab", ""],
    ["Wednesday(201)", "Free", "","", "Lab"],
    ["Thursday (202)", "", "","", "Free"],
    ["Friday(202)", "", "","", "Free"]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofcsea[0][1] = f"{four_hour_subjects[0]}"
timetable_structureofcsea[0][4] = f"{four_hour_subjects[1]}"
timetable_structureofcsea[1][1] = f"{four_hour_subjects[2]}"
timetable_structureofcsea[1][4] = f"{four_hour_subjects[3]}"
timetable_structureofcsea[2][2] = f"{four_hour_subjects[4]}"
timetable_structureofcsea[2][3] = f"{four_hour_subjects[0]}"
timetable_structureofcsea[3][2] = f"{four_hour_subjects[1]}"
timetable_structureofcsea[3][1] = f"{four_hour_subjects[2]}"
timetable_structureofcsea[3][3] = f"{one_hour_subjects[0]}"
timetable_structureofcsea[4][1] = f"{four_hour_subjects[3]}"
timetable_structureofcsea[4][2] = f"{four_hour_subjects[4]}"
timetable_structureofcsea[4][3] = f"{one_hour_subjects[1]}"

#For cseb
timetable_structureofcseb = [
    ["Monday (202)", "", "","", "Free"],
    ["Tuesday (202)", "", "","", "Free"],
    ["Wednesday(202)", "", "","", "Free"],
    ["Thursday (202)", "lab", "","Free", "lab"],
    ["Friday (101)", "", "lab","lab", ""]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofcseb[3][2] = f"{four_hour_subjects[0]}"
timetable_structureofcseb[4][4] = f"{four_hour_subjects[1]}"
timetable_structureofcseb[4][1] = f"{four_hour_subjects[2]}"
timetable_structureofcseb[2][1] = f"{four_hour_subjects[3]}"
timetable_structureofcseb[2][2] = f"{four_hour_subjects[4]}"
timetable_structureofcseb[2][3] = f"{four_hour_subjects[0]}"
timetable_structureofcseb[0][3] = f"{four_hour_subjects[1]}"
timetable_structureofcseb[0][2] = f"{four_hour_subjects[2]}"
timetable_structureofcseb[0][1] = f"{one_hour_subjects[0]}"
timetable_structureofcseb[1][3] = f"{four_hour_subjects[3]}"
timetable_structureofcseb[1][2] = f"{four_hour_subjects[4]}"
timetable_structureofcseb[1][1] = f"{one_hour_subjects[1]}"
# Call the function to print the timetable
print(" " * 60,"!!!!!PHYSICS CYCLE!!!!!","\n")
print(" " * 60,"****For AIML****","\n")
print_timetable(timetable_structure)
print("\n"," " * 60,"****For ISE****","\n")
print_timetable(timetable_structureofise)
print("\n"," " * 60,"****For CSE A****","\n")
print_timetable(timetable_structureofcsea)
print("\n"," " * 60,"****For CSE B****","\n")
print_timetable(timetable_structureofcseb)