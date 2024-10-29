import random

# Subjects
four_hour_subjects = ["Maths", "POE", "PPS", "Chemistry", "Mechanical"]
one_hour_subjects = ["DTI", "Workshop Theory"]
labs = ["l1", "l2", "l3"]

# Define timetable structure (no predefined slots)
timetable_structure = [
    ["Monday", "", "", "", ""],
    ["Tuesday", "", "", "", ""],
    ["Wednesday", "", "", "", ""],
    ["Thursday", "", "", "", ""],
    ["Friday", "", "", "", ""]
]

# Function to generate timetable with random slots
def generate_timetable(timetable, four_hour_subjects, one_hour_subjects, labs):
    # Flatten timetable structure for easy assignment
    slots = [(day, time) for day in range(len(timetable)) for time in range(1, len(timetable[0]))]
    random.shuffle(slots)  # Shuffle all slots for random placement

    # Assign each four-hour subject exactly twice
    subject_slots = []
    for subject in four_hour_subjects:
        for _ in range(2):
            subject_slots.append(subject)
    
    # Assign each one-hour subject exactly once
    for subject in one_hour_subjects:
        subject_slots.append(subject)
    
    for subject in labs:
        subject_slots.append(subject)

    # Shuffle the subject slots for random placement
    random.shuffle(subject_slots)
    
    # Fill timetable with subjects in randomized slots
    for slot, subject in zip(slots, subject_slots):
        day, time = slot
        timetable[day][time] = subject

    # All remaining slots will automatically stay as "Empty"
    return timetable

# Function to print the timetable
def print_timetable(timetable):
    header = ["Day", "8:00 - 10:30", "11:00 - 12:40", "12.40 - 2.20", "2:45 - 5:15"]
    
    # Print the header
    print("{:<10} {:<24} {:<24} {:<24} {:<24}".format(*header))
    print("-" * 100)
    
    # Print each row of the timetable, marking empty slots explicitly
    for row in timetable:
        print("{:<10} {:<24} {:<24} {:<24} {:<24}".format(
            row[0],
            row[1] if row[1] else "Empty",
            row[2] if row[2] else "Empty",
            row[3] if row[3] else "Empty",
            row[4] if row[4] else "Empty"
        ))

# Generate and print the timetable for aiml
print("For aiml")
timetable_structure = generate_timetable(timetable_structure, four_hour_subjects, one_hour_subjects,labs)
print_timetable(timetable_structure)
