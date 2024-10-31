import random

# Define subject distribution by categories
four_hour_subjects = ['M3', 'DS', 'COA', 'DSD']
one_hour_subjects = ['SK', 'PT', 'JT', 'UHV']
labs = ['Lab']

# Define room and branch details
room = ['LH3', 'LH2', 'LH1', 'LH6']
branches = ['AI', 'ISE', 'CSA', 'CSB']

# Initialize timetables dictionary
timetables = {branch: {day: {slot: None for slot in range(1, 5)} for day in range(5)} for branch in branches}

# Generate a list of all possible time slots
days = range(5)  # Monday to Friday represented as 0-4
slots = range(1, 5)  # Slot numbers representing the timetable slots
time_slots = [(day, slot) for day in days for slot in slots]

# Function to assign subjects to all classes without overlap
def assign_subjects_to_all_classes():
    print("Assigning subjects to all classes...")
    for class_name, timetable in timetables.items():
        used_slots = set()
        
        # Place each four-hour subject twice in each class timetable
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

        # Place each one-hour subject once per class timetable
        for subject in one_hour_subjects:
            count = 0
            while count < 1:
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

        # Place each lab once per class timetable
        for subject in labs:
            count = 0
            while count < 3:
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

# Display the final timetables
days_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

for branch, timetable in timetables.items():
    print(f"\nBranch: {branch}, Room: {room[branches.index(branch)]}")
    print("----------------------------------------------------------")
    print(f"{'Day':<10} {'Slot 1':<10} {'Slot 2':<10} {'Slot 3':<10} {'Slot 4':<10}")
    print("----------------------------------------------------------")
    
    for day in range(5):
        row = [days_names[day]]
        for slot in range(1, 5):
            row.append(timetable[day][slot] or "Free")
        print(f"{row[0]:<10} {row[1]:<10} {row[2]:<10} {row[3]:<10} {row[4]:<10}")
    
    print("----------------------------------------------------------")

