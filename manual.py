import random

# Define the subject distribution across periods
sub = [
    [['M3', 'DS', 'COA', 'DSD'], ['SK', 'PT', 'UHV']],
    [['M3', 'DS', 'COA', 'DSD'], ['SK', 'JT', 'UHV']],
    [['M3', 'DS', 'COA', 'DSD'], ['SK', 'JT', 'UHV']],
    [['M3', 'DS', 'COA', 'DSD'], ['SK', 'JT', 'UHV']]
]

# Define room and branch details
room = ['LH3', 'LH2', 'LH1', 'LH6']
branches = ['AI', 'ISE', 'CSA', 'CSB']

# Loop through each branch and create a timetable for each
for d in range(len(branches)):
    # Initialize the timetable array for 50 slots (5 days x 10 periods)
    tt1 = [None] * 50
    j = 0  # Subject index for general subjects
    k = 0  # Subject index for core subjects
    lab_count = 0  # Counter for labs assigned

    i = 0  # Start index for timetable

    while i < 50:
        # Assign lab sessions at specified indices if lab count is under limit
        if (i % 10 == 0 or i % 10 == 4 or i % 10 == 7) and lab_count < 9:
            tt1[i] = 'Lab'
            tt1[i + 1] = 'Lab'
            tt1[i + 2] = 'Lab'
            lab_count += 3
            i += 3
        # Assign core subjects at specific slots
        elif i % 10 == 3 or i % 10 == 5:
            tt1[i] = sub[d][0][k]
            tt1[i + 1] = sub[d][0][k]
            i += 2
        # Assign general subjects in the remaining slots
        else:
            tt1[i] = sub[d][1][j]
            i += 1

        # Cycle through subject indices within bounds
        j = (j + 1) % 3  # General subjects have 3 elements
        k = (k + 1) % 4  # Core subjects have 4 elements

    # Display timetable
    print(f"\nBranch: {branches[d]}, Room: {room[d]}")
    print("------------------------------------------------------------------")
    print(f"{'Day':<10} {'P1':<10} {'P2':<10} {'P3':<10} {'P4':<10} {'P5':<10} {'P6':<10} {'P7':<10} {'P8':<10} {'P9':<10} {'P10':<10}")
    print("------------------------------------------------------------------")

    # Days of the week
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    # Print timetable rows for each day
    for day in range(5):
        row = [days[day]]
        for period in range(10):
            row.append(tt1[day * 10 + period])
        print(f"{row[0]:<10} {row[1]:<10} {row[2]:<10} {row[3]:<10} {row[4]:<10} {row[5]:<10} {row[6]:<10} {row[7]:<10} {row[8]:<10} {row[9]:<10} {row[10]:<10}")

    print("------------------------------------------------------------------")
