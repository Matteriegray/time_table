export const chemistrycycleece= (fourHourSubject,oneHourSubject) => {

    // Subjects
    const fourHourSubjects = fourHourSubject;
    const oneHourSubjects = oneHourSubject;
    
    // Timetable structure for eceA
    let timetableStructureOfeceA = [
        ["Monday(101)", "", "", "", "Lab"],
        ["Tuesday(101)", "", "", "", "Lab"],
        ["Wednesday(101)", "", "Lab", "Lab", ""],
        ["Thursday (101)", "Free", "", "", "Free"],
        ["Friday (101)", "Free", "", "", "Free"]
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
    timetableStructureOfeceA[0][1] = fourHourSubjects[0];
    timetableStructureOfeceA[0][2] = fourHourSubjects[1];
    timetableStructureOfeceA[1][1] = fourHourSubjects[2];
    timetableStructureOfeceA[1][2] = fourHourSubjects[3];
    timetableStructureOfeceA[2][1] = fourHourSubjects[4];
    timetableStructureOfeceA[2][4] = fourHourSubjects[0];
    timetableStructureOfeceA[3][2] = fourHourSubjects[1];
    timetableStructureOfeceA[3][3] = fourHourSubjects[2];
    timetableStructureOfeceA[0][3] = oneHourSubjects[0];
    timetableStructureOfeceA[4][2] = fourHourSubjects[3];
    timetableStructureOfeceA[4][3] = fourHourSubjects[4];
    timetableStructureOfeceA[1][3] = oneHourSubjects[1];
    // For eceB
    let timetableStructureOfeceB = [
        ["Monday(201)", "Lab", "", "", "Free"],
        ["Tuesday(201)", "Lab", "", "", "Free"],
        ["Wednesday(101)", "Lab", "", "", "Free"],
        ["Thursday (201)", "", "", "", "Free"],
        ["Friday(201)", "", "", "", "Free"]
    ];
    
    // Shuffle subjects for eceB
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to eceB timetable
    timetableStructureOfeceB[0][2] = fourHourSubjects[0];
    timetableStructureOfeceB[0][3] = fourHourSubjects[1];
    timetableStructureOfeceB[1][2] = fourHourSubjects[2];
    timetableStructureOfeceB[1][3] = fourHourSubjects[3];
    timetableStructureOfeceB[2][2] = fourHourSubjects[4];
    timetableStructureOfeceB[2][3] = fourHourSubjects[0];
    timetableStructureOfeceB[3][3] = fourHourSubjects[1];
    timetableStructureOfeceB[3][2] = fourHourSubjects[2];
    timetableStructureOfeceB[3][1] = oneHourSubjects[0];
    timetableStructureOfeceB[4][3] = fourHourSubjects[3];
    timetableStructureOfeceB[4][2] = fourHourSubjects[4];
    timetableStructureOfeceB[4][1] = oneHourSubjects[1];
    
    
    let totaleeedepartmentpcycle=[];
    totaleeedepartmentpcycle.push(timetableStructureOfeceA)
    totaleeedepartmentpcycle.push(timetableStructureOfeceB)
    return totaleeedepartmentpcycle;
    
    };