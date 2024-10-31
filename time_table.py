import random

# Subjects
four_hour_subjects = ["Maths", "POE", "PPS", "Chemistry", "Mechanical"]
one_hour_subjects = ["DTI", "Workshop Theory"]

# Initialize empty timetables for each class
timetables = {
    "AIML": [["Monday", "", "", "", "l1"],
             ["Tuesday", "", "", "l2", ""],
             ["Wednesday", "", "", "l3", ""],
             ["Thursday", "", "", "", ""],
             ["Friday", "", "", "", ""]],
    
    "ISE": [["Monday", "", "", "", ""],
            ["Tuesday", "", "", "", ""],
            ["Wednesday", "", "", "", ""],
            ["Thursday", "", "", "", ""],
            ["Friday", "", "", "", ""]],
    
    "CSE A": [["Monday", "", "", "", ""],
              ["Tuesday", "", "", "", ""],
              ["Wednesday", "", "", "", ""],
              ["Thursday", "", "", "", ""],
              ["Friday", "", "", "", ""]],
    
    "CSE B": [["Monday", "", "", "", ""],
              ["Tuesday", "", "", "", ""],
              ["Wednesday", "", "", "", ""],
              ["Thursday", "", "", "", ""],
              ["Friday", "", "", "", ""]]
}

# Generate a list of all possible time slots
days = range(5)  # Monday to Friday represented as 0-4
slots = range(1, 5)  # 8:00 - 10:30, 11:00 - 12:40, etc.
time_slots = [(day, slot) for day in days for slot in slots]

# Function to assign subjects without overlap between classes
def assign_subjects_to_all_classes():
    print("Assigning subjects to all classes...")
    for class_name, timetable in timetables.items():
        used_slots = set()
        
        # Place each four-hour subject exactly twice per class timetable
        for subject in four_hour_subjects:
            count = 0
            while count < 2:
                day, slot = random.choice(time_slots)
                attempts = 0
                while (day, slot) in used_slots and attempts < 10:
                    day, slot = random.choice(time_slots)
                    attempts += 1
                
                if attempts < 10:
                    timetable[day][slot] = subject
                    used_slots.add((day, slot))
                    count += 1
                else:
                    print(f"Could not assign {subject} after 10 attempts.")

        # Place each one-hour subject exactly once per class timetable
        for subject in one_hour_subjects:
            count = 0
            while count < 1:  # One time per subject
                day, slot = random.choice(time_slots)
                attempts = 0
                while (day, slot) in used_slots and attempts < 10:
                    day, slot = random.choice(time_slots)
                    attempts += 1
                
                if attempts < 10:
                    timetable[day][slot] = subject
                    used_slots.add((day, slot))
                    count += 1
                else:
                    print(f"Could not assign {subject} after 10 attempts.")

# Assign subjects to each class timetable
assign_subjects_to_all_classes()

# Function to print the timetable
def print_timetable(timetable, class_name):
    header = ["Day", "8:00 - 10:30", "11:00 - 12:40", "12:40 - 2:20", "2:45 - 5:15"]
    print(f"\n{class_name} Timetable")
    print("{:<10} {:<24} {:<24} {:<24} {:<30}".format(*header))
    print("-" * 120)
    
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    for i, row in enumerate(timetable):
        print("{:<10} {:<24} {:<24} {:<24} {:<30}".format(days[i], *[slot if slot else "Empty" for slot in row[1:]]))

# Print timetables for each class
for class_name, timetable in timetables.items():
    print_timetable(timetable, class_name)
