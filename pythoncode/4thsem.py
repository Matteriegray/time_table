import random

# Subjects
four_hour_subjectsofaiml = ["M-4", "DA", "AI", "OS"]
one_hour_subjectsofaiml = ["CONSITUTION","BIO", "UHV-2"]
four_hour_subjects = ["M-4", "DA", "MAM", "OS"]
one_hour_subjects = ["CONSITUTION","BIO", "UHV-2"]

# Timetable for aiml structure
timetable_structure = [
    ["Monday(LH2)", "", "","", "Lab"],
    ["Tuesday(LH2)", "", "","", "Lab"],
    ["Wednesday(LH2)", "", "Lab","Lab", ""],
    ["Thursday (LH2)", "", "lab","lab", ""],
    ["Friday (LH2)", "Brige maths-2", "","Free", "Free"]
]
# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structure[0][1] = f"{four_hour_subjectsofaiml[0]}"
timetable_structure[0][2] = f"{four_hour_subjectsofaiml[1]}"
timetable_structure[1][1] = f"{ one_hour_subjectsofaiml[0]}"
timetable_structure[0][3] = f"{four_hour_subjectsofaiml[2]}"
timetable_structure[1][2] = f"{four_hour_subjectsofaiml[3]}"
timetable_structure[1][3] = f"{ one_hour_subjectsofaiml[1]}"
timetable_structure[2][1] = f"{four_hour_subjectsofaiml[1]}"
timetable_structure[2][4] = f"{four_hour_subjectsofaiml[0]}"
timetable_structure[3][1] = f"{four_hour_subjectsofaiml[2]}"
timetable_structure[4][2] = f"{four_hour_subjectsofaiml[3]}"
timetable_structure[3][4] = f"{one_hour_subjectsofaiml[2]}"

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
    ["Monday(LH1)", "Lab", "","", "Free"],
    ["Tuesday(LH1)", "Lab", "","", "Free"],
    ["Wednesday(LH2)", "Lab", "","", "Free"],
    ["Thursday (LH1)", "lab", "","", ""],
    ["Friday(LH1)", "Brige maths-2", "","", "Free"]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofise[0][2] = f"{four_hour_subjects[0]}"
timetable_structureofise[0][3] = f"{four_hour_subjects[1]}"
timetable_structureofise[1][2] = f"{four_hour_subjects[2]}"
timetable_structureofise[1][3] = f"{four_hour_subjects[3]}"
timetable_structureofise[2][2] = f"{four_hour_subjects[1]}"
timetable_structureofise[2][3] = f"{four_hour_subjects[0]}"
timetable_structureofise[3][3] = f"{four_hour_subjects[2]}"
timetable_structureofise[3][2] = f"{one_hour_subjects[0]}"
timetable_structureofise[4][3] = f"{four_hour_subjects[3]}"
timetable_structureofise[4][2] = f"{one_hour_subjects[2]}"
timetable_structureofise[3][4] = f"{one_hour_subjects[1]}"

#For cse
timetable_structureofcsea = [
    ["Monday(LH1)", "", "Lab","lab", ""],
    ["Tuesday(LH1)", "", "Lab","lab", ""],
    ["Wednesday(LH1)", "Free", "","", "Lab"],
    ["Thursday (LH3/LH2)", "", "","", "lab"],
    ["Friday(LH3)", "Brige maths-2", "","", ""]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofcsea[0][1] = f"{four_hour_subjects[0]}"
timetable_structureofcsea[0][4] = f"{four_hour_subjects[1]}"
timetable_structureofcsea[1][1] = f"{one_hour_subjects[2]}"
timetable_structureofcsea[1][4] = f"{four_hour_subjects[2]}"
timetable_structureofcsea[2][2] = f"{four_hour_subjects[3]}"
timetable_structureofcsea[2][3] = f"{four_hour_subjects[0]}"
timetable_structureofcsea[3][1] = f"{four_hour_subjects[1]}"
timetable_structureofcsea[4][2] = f"{four_hour_subjects[2]}"
timetable_structureofcsea[3][2] = f"{four_hour_subjects[3]}"
timetable_structureofcsea[3][3] = f"{one_hour_subjects[0]}"
timetable_structureofcsea[4][3] = f"{one_hour_subjects[1]}"

#For cseb
timetable_structureofcseb = [
    ["Monday (LH3)", "", "","", "Free"],
    ["Tuesday (LH3)", "", "","", "Free"],
    ["Wednesday(LH3)", "", "","", "lab"],
    ["Thursday (LH3)", "lab", "","", "lab"],
    ["Friday (LH5)", "Brige maths-2", "lab","lab", "Free"]
]

# Shuffle subjects randomly
random.shuffle(four_hour_subjects)
random.shuffle(one_hour_subjects)

# Assign subjects to timetable
timetable_structureofcseb[0][1] = f"{four_hour_subjects[0]}"
timetable_structureofcseb[0][2] = f"{four_hour_subjects[1]}"
timetable_structureofcseb[0][3] = f"{one_hour_subjects[2]}"
timetable_structureofcseb[1][1] = f"{four_hour_subjects[2]}"
timetable_structureofcseb[1][3] = f"{four_hour_subjects[3]}"
timetable_structureofcseb[1][2] = f"{four_hour_subjects[0]}"
timetable_structureofcseb[2][1] = f"{four_hour_subjects[1]}"
timetable_structureofcseb[2][2] = f"{four_hour_subjects[2]}"
timetable_structureofcseb[2][3] = f"{four_hour_subjects[3]}"
timetable_structureofcseb[3][3] = f"{one_hour_subjects[0]}"
timetable_structureofcseb[3][2] = f"{one_hour_subjects[1]}"
# Call the function to print the timetable
print(" " * 60,"!!!!!4th SEM!!!!!","\n")
print(" " * 60,"****For AIML****","\n")
print_timetable(timetable_structure)
print("\n"," " * 60,"****For ISE****","\n")
print_timetable(timetable_structureofise)
print("\n"," " * 60,"****For CSE A****","\n")
print_timetable(timetable_structureofcsea)
print("\n"," " * 60,"****For CSE B****","\n")
print_timetable(timetable_structureofcseb)