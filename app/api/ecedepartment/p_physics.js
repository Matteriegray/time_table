export const physicscycleece= (fourHourSubject,oneHourSubject) => {

    // Subjects
    const fourHourSubjects = fourHourSubject;
    const oneHourSubjects = oneHourSubject;
    
    // Timetable structure for eceA
    let timetableStructureOfeceA = [
        ["Monday(307)", "Free", "", "", "Lab"],
        ["Tuesday(307)", "Free", "", "", "Lab"],
        ["Wednesday(307)", "Free", "", "", "EGD"],
        ["Thursday (307)", "Free", "", "", ""],
        ["Friday (307)", "Free", "", "", ""]
    ];
    
    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Shuffle subjects
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to timetable
    timetableStructureOfeceA[4][2] = fourHourSubjects[0];
    timetableStructureOfeceA[0][2] = fourHourSubjects[1];
    timetableStructureOfeceA[4][3] = fourHourSubjects[2];
    timetableStructureOfeceA[1][2] = fourHourSubjects[3];
    timetableStructureOfeceA[4][4] = fourHourSubjects[4];
    timetableStructureOfeceA[2][2] = fourHourSubjects[0];
    timetableStructureOfeceA[3][2] = fourHourSubjects[1];
    timetableStructureOfeceA[3][3] = fourHourSubjects[2];
    timetableStructureOfeceA[0][3] = oneHourSubjects[0];
    timetableStructureOfeceA[3][4] = fourHourSubjects[3];
    timetableStructureOfeceA[2][3] = fourHourSubjects[4];
    timetableStructureOfeceA[1][3] = oneHourSubjects[1];
    // For eceB
    let timetableStructureOfeceB = [
        ["Monday(307)", "", "Free", "Lab", ""],
        ["Tuesday(307)", "", "Free", "Lab", ""],
        ["Wednesday(307)", "", "Free", "EGD", ""],
        ["Thursday (308)", "", "", "", ""],
        ["Friday(308)", "Free", "", "", "Free"]
    ];
    
    // Shuffle subjects for eceB
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to eceB timetable
    timetableStructureOfeceB[4][2] = fourHourSubjects[0];
    timetableStructureOfeceB[0][4] = fourHourSubjects[1];
    timetableStructureOfeceB[1][1] = fourHourSubjects[2];
    timetableStructureOfeceB[1][4] = fourHourSubjects[3];
    timetableStructureOfeceB[2][1] = fourHourSubjects[4];
    timetableStructureOfeceB[2][4] = fourHourSubjects[0];
    timetableStructureOfeceB[3][3] = fourHourSubjects[1];
    timetableStructureOfeceB[3][2] = fourHourSubjects[2];
    timetableStructureOfeceB[3][1] = oneHourSubjects[0];
    timetableStructureOfeceB[3][4] = fourHourSubjects[3];
    timetableStructureOfeceB[4][2] = fourHourSubjects[4];
    timetableStructureOfeceB[0][1] = oneHourSubjects[1];
    
    
    let totalecedepartmentpcycle=[];
    totalecedepartmentpcycle.push(timetableStructureOfeceA)
    totalecedepartmentpcycle.push(timetableStructureOfeceB)
    return totalecedepartmentpcycle;
    
    };