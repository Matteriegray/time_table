import itertools
import random

def generate_timetable():
    """Generates a timetable with balanced theory and lab sessions."""

    # User Inputs 
    classes = input("Enter class names (comma-separated): ").split(",")
    rooms = input("Enter room names (comma-separated): ").split(",")
    labs = input("Enter lab names (comma-separated): ").split(",")
    lab_duration = 3
    theory_duration = 1

    subjects = {}
    lab_subjects = {}
    batches_per_class = {}

    for cls in classes:
        theory_subjects = input(f"Enter theory subjects for {cls} (comma-separated): ").split(",")
        lab_subjects[cls] = input(f"Enter lab subjects for {cls} (comma-separated): ").split(",")
        subjects[cls] = theory_subjects
        batches_per_class[cls] = int(input(f"Enter number of batches for {cls}: "))

    theory_hours = {}
    for cls, subj_list in subjects.items():
        theory_hours[cls] = {}
        for subject in subj_list:
            hours = int(input(f"Enter hours per week for {subject} in {cls}: "))
            theory_hours[cls][subject] = hours

    # Time slots and days 
    time_slots = [
        "8:00-9:00", "9:00-10:00", "10:00-10:40", "11:00-12:00", "12:00-1:00", "1:00-1:30",
        "2:30-3:30", "3:30-4:30", "4:30-5:30", "5:30-5:50"
    ]
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    # Initialize timetables 
    timetables = {cls: {day: [""] * len(time_slots) for day in days} for cls in classes}

    # Helper functions 
    def find_empty_theory_slot(timetable, day, subject, class_name):
        for i, slot in enumerate(timetable[day]):
            if slot == "":
                lab_running = False
                for other_day in days:
                    for other_slot in timetable[other_day]:
                        if class_name in other_slot and "L" in other_slot:
                            lab_running = True
                            break
                    if lab_running:
                        break;
                if lab_running:
                    continue;

                return i
        return -1
        

    def find_empty_lab_slot(timetable, day, start_index, class_name):
        for i in range(start_index, start_index + lab_duration):
            if i >= len(time_slots) or timetable[day][i] != "":
                return -1
        return start_index

        

    # Assign theory subjects with balanced distribution
    for cls in classes:
        subject_assignments = []
        for subject, hours in theory_hours[cls].items():
            subject_assignments.extend([(subject, rooms[i % len(rooms)]) for i in range(hours)])
        random.shuffle(subject_assignments)

        day_index = 0
        slot_index = 0
        assigned_count = 0
        while assigned_count < len(subject_assignments):
            day = days[day_index % len(days)]
            slot_index = find_empty_theory_slot(timetables[cls], day, subject_assignments[assigned_count][0], cls)

            if slot_index != -1:
                timetables[cls][day][slot_index] = f"{subject_assignments[assigned_count][0]}({subject_assignments[assigned_count][1]})"
                assigned_count += 1
            day_index += 1

    # Assign lab subjects 
    for cls in classes:
        lab_list = lab_subjects[cls]
        batches = [f"B{i+1}" for i in range(batches_per_class[cls])]
        lab_assignments = list(itertools.product(batches, labs))
        random.shuffle(lab_assignments)

        lab_index = 0
        for day in days:
            for batch, lab in lab_assignments[lab_index::len(labs)*len(batches)]:
                start_index = 3
                lab_slot_index = find_empty_lab_slot(timetables[cls], day, start_index, cls)
                if lab_slot_index != -1:
                    for i in range(lab_duration):
                        timetables[cls][day][lab_slot_index + i] = f"{batch}-{lab}({lab.split('L')[0]})"
                lab_index = (lab_index+1)%(len(labs)*len(batches))

    # Print timetables 
    for cls, timetable in timetables.items():
        print(f"\nTimetable for {cls}:")
        header = " | ".join(["Day"] + time_slots)
        print("-" * len(header))
        print(header)
        print("-" * len(header))
        for day, slots in timetable.items():
            row = " | ".join([day] + slots)
            print(row)
        print("-" * len(header))

if __name__ == "__main__":
    generate_timetable()