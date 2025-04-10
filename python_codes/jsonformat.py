import random
import json
from collections import defaultdict

DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
TIME_SLOTS = [
    "8:10-9:00", "9:00-9:50", "9:50-10:40",
    "11:00-11:50", "11:50-12:40", "12:40-1:30",
    "2:30-3:20", "3:20-4:10", "4:10-5:00"
]
LAB_ROOMS = ["Lab1", "Lab2", "Lab3", "Lab4"]
BATCHES = ["Batch1", "Batch2", "Batch3"]


def initialize_timetable():
    return {day: {slot: None for slot in TIME_SLOTS} for day in DAYS}

def get_available_slots_for_theory(day_schedule):
    available_slots = []
    for i in range(len(TIME_SLOTS)):
        if day_schedule[TIME_SLOTS[i]] is None:
            if i >= 3 and all(day_schedule[TIME_SLOTS[j]] is not None for j in range(i-3, i+1)):
                continue  # Skip if leads to 4-hour continuous theory
            available_slots.append(TIME_SLOTS[i])
    return available_slots

def assign_theory(timetable, subjects):
    subject_hours = {subj: 0 for subj in subjects}
    max_hours_per_day = 2

    for subj in subjects:
        remaining = 200 // 50
        while remaining > 0:
            day = random.choice(DAYS[:-1])  # Exclude Saturday
            slots = get_available_slots_for_theory(timetable[day])
            random.shuffle(slots)
            count = 0
            for slot in slots:
                if timetable[day][slot] is None and subject_hours[subj] < 200:
                    timetable[day][slot] = subj
                    subject_hours[subj] += 50
                    remaining -= 1
                    count += 1
                    if count >= max_hours_per_day:
                        break
                if remaining <= 0:
                    break


def assign_1_credit(timetable, subjects):
    for subj in subjects:
        while True:
            day = random.choice(DAYS[:-1])
            slot = random.choice(TIME_SLOTS)
            if timetable[day][slot] is None:
                timetable[day][slot] = subj
                break


def assign_labs(timetable, labs, used_labs):
    for lab in labs:
        for batch in BATCHES:
            assigned = False
            random.shuffle(DAYS)
            for day in DAYS:
                if day == "Saturday":
                    continue
                for start in range(len(TIME_SLOTS) - 2):
                    slots = TIME_SLOTS[start:start+3]
                    if all(timetable[day][slot] is None for slot in slots):
                        for lab_room in LAB_ROOMS:
                            if all(lab_room not in used_labs[day].get(slot, []) for slot in slots):
                                for slot in slots:
                                    timetable[day][slot] = {
                                        "Classroom": lab_room,
                                        "Batch": batch,
                                        "Subject": lab
                                    }
                                    used_labs[day].setdefault(slot, []).append(lab_room)
                                assigned = True
                                break
                        if assigned:
                            break
                if assigned:
                    break


def record_classrooms_used(timetable, preferred):
    for day in timetable:
        used = set()
        for slot in TIME_SLOTS:
            val = timetable[day][slot]
            if isinstance(val, dict):
                used.add(val["Classroom"])
            elif val:
                used.add(preferred)
        timetable[day]["Classrooms Labs Used"] = list(used)


def generate_timetables(input_data):
    all_timetables = []
    for branch_data in input_data:
        branch = branch_data["prompt"]["Branch"]
        subjects = branch_data["prompt"]["subjects"]
        preferred = branch_data["prompt"]["subjects"]["preferable_classroom"]

        timetable = initialize_timetable()
        used_labs = defaultdict(lambda: defaultdict(list))

        assign_theory(timetable, subjects["3credits"])
        assign_1_credit(timetable, subjects["1credits"])
        assign_labs(timetable, subjects["labs"], used_labs)
        record_classrooms_used(timetable, preferred)

        all_timetables.append({
            "Branch": branch,
            "Year": "2nd",
            "Classroom": [preferred] + LAB_ROOMS,
            "TimeTable": timetable
        })
    return all_timetables


# Sample input
input_data = [
  {
    "prompt": {
      "Branch": "aiml",
      "previous_timetable": "",
      "subjects": {
        "3credits": ["AI", "OS", "DAA", "M3"],
        "1credits": ["CIPE", "UHV", "Bio"],
        "labs": ["DAALab", "Javalab", "UNIXLab"],
        "preferable_classroom": "101"
      }
    }
  },
  {
    "prompt": {
      "Branch": "cse",
      "previous_timetable": "",
      "subjects": {
        "3credits": ["AI", "OS", "DAA", "M3"],
        "1credits": ["CIPE", "UHV", "Bio"],
        "labs": ["DAALab", "Javalab", "UNIXLab"],
        "preferable_classroom": "211"
      }
    }
  },
  {
    "prompt": {
      "Branch": "ise",
      "previous_timetable": "",
      "subjects": {
        "3credits": ["AI", "OS", "DAA", "M3"],
        "1credits": ["CIPE", "UHV", "Bio"],
        "labs": ["DAALab", "Javalab", "UNIXLab"],
        "preferable_classroom": "213"
      }
    }
  }
]

# Run and print
output = generate_timetables(input_data)
print(json.dumps(output, indent=2))
