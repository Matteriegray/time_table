export const chemistrycyclemech= (fourHourSubject,oneHourSubject) => {

    // Subjects
    const fourHourSubjects = fourHourSubject;
    const oneHourSubjects = oneHourSubject;
    
    // Timetable structure for mechA
    let timetableStructureOfmechA = [
        ["Monday(201)", "", "", "", "Lab"],
        ["Tuesday(201)", "", "", "", "Lab"],
        ["Wednesday(201)", "Free", "", "", "Lab"],
        ["Thursday (201)", "", "", "", ""],
        ["Friday (201)", "Free", "Free", "Free", "Free"]
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
    timetableStructureOfmechA[3][1] = fourHourSubjects[0];
    timetableStructureOfmechA[0][2] = fourHourSubjects[1];
    timetableStructureOfmechA[1][1] = fourHourSubjects[2];
    timetableStructureOfmechA[1][2] = fourHourSubjects[3];
    timetableStructureOfmechA[2][3] = fourHourSubjects[4];
    timetableStructureOfmechA[0][1] = fourHourSubjects[0];
    timetableStructureOfmechA[3][2] = fourHourSubjects[1];
    timetableStructureOfmechA[3][3] = fourHourSubjects[2];
    timetableStructureOfmechA[3][4] = oneHourSubjects[3];
    timetableStructureOfmechA[2][2] = fourHourSubjects[0];
    timetableStructureOfmechA[0][3] = fourHourSubjects[4];
    timetableStructureOfmechA[1][3] = oneHourSubjects[1];
    // For mechB
    let timetableStructureOfmechB = [
        ["Monday(202,201)", "Lab", "Free", "", ""],
        ["Tuesday(202,201)", "Lab", "Free", "", ""],
        ["Wednesday(201)", "Lab", "Free", "Free", "Free"],
        ["Thursday (202)", "", "", "", ""],
        ["Friday(201)", "", "", "", ""]
    ];
    
    // Shuffle subjects for mechB
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to mechB timetable
    timetableStructureOfmechB[3][4] = fourHourSubjects[0];
    timetableStructureOfmechB[0][3] = fourHourSubjects[1];
    timetableStructureOfmechB[0][4] = fourHourSubjects[2];
    timetableStructureOfmechB[1][3] = fourHourSubjects[3];
    timetableStructureOfmechB[1][4] = fourHourSubjects[4];
    timetableStructureOfmechB[4][4] = fourHourSubjects[0];
    timetableStructureOfmechB[3][3] = fourHourSubjects[1];
    timetableStructureOfmechB[3][2] = fourHourSubjects[2];
    timetableStructureOfmechB[3][1] = oneHourSubjects[0];
    timetableStructureOfmechB[4][3] = fourHourSubjects[3];
    timetableStructureOfmechB[4][2] = fourHourSubjects[4];
    timetableStructureOfmechB[4][1] = oneHourSubjects[1];


    // For mechC
    let timetableStructureOfmechC = [
        ["Monday(202)", "", "", "Lab", "Free"],
        ["Tuesday(202)", "", "", "Lab", "Free"],
        ["Wednesday(201)", "", "", "", ""],
        ["Thursday (201)", "Free", "Free", "Lab", "Free"],
        ["Friday(202)", "", "", "", ""]
    ];
    
    // Shuffle subjects for mechC
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to mechC timetable
    timetableStructureOfmechC[0][2] = fourHourSubjects[0];
    timetableStructureOfmechC[2][4] = fourHourSubjects[1];
    timetableStructureOfmechC[2][1] = fourHourSubjects[2];
    timetableStructureOfmechC[1][2] = fourHourSubjects[3];
    timetableStructureOfmechC[2][2] = fourHourSubjects[4];
    timetableStructureOfmechC[2][3] = fourHourSubjects[0];
    timetableStructureOfmechC[4][3] = fourHourSubjects[1];
    timetableStructureOfmechC[4][2] = fourHourSubjects[2];
    timetableStructureOfmechC[1][1] = oneHourSubjects[0];
    timetableStructureOfmechC[4][1] = fourHourSubjects[3];
    timetableStructureOfmechC[4][4] = fourHourSubjects[4];
    timetableStructureOfmechC[0][1] = oneHourSubjects[1];  
    
    
    let totalmechdepartmentccycle=[];
    totalmechdepartmentccycle.push(timetableStructureOfmechA)
    totalmechdepartmentccycle.push(timetableStructureOfmechB)
    totalmechdepartmentccycle.push(timetableStructureOfmechC)
    return totalmechdepartmentccycle;
    
    };