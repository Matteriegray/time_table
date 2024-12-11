export const chemistrycycleeee= (fourHourSubject,oneHourSubject) => {

    // Subjects
    const fourHourSubjects = fourHourSubject;
    const oneHourSubjects = oneHourSubject;
    
    // Timetable structure for eeeA
    let timetableStructureOfeeeA = [
        ["Monday(326)", "", "", "", "Lab"],
        ["Tuesday(326)", "", "", "", "Lab"],
        ["Wednesday(326)", "", "Lab", "Lab", ""],
        ["Thursday (326)", "Free", "", "", "Free"],
        ["Friday (326)", "Free", "", "", "Free"]
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
    timetableStructureOfeeeA[0][1] = fourHourSubjects[0];
    timetableStructureOfeeeA[0][2] = fourHourSubjects[1];
    timetableStructureOfeeeA[1][1] = fourHourSubjects[2];
    timetableStructureOfeeeA[1][2] = fourHourSubjects[3];
    timetableStructureOfeeeA[2][1] = fourHourSubjects[4];
    timetableStructureOfeeeA[2][4] = fourHourSubjects[0];
    timetableStructureOfeeeA[3][2] = fourHourSubjects[1];
    timetableStructureOfeeeA[3][3] = fourHourSubjects[2];
    timetableStructureOfeeeA[0][3] = oneHourSubjects[0];
    timetableStructureOfeeeA[4][2] = fourHourSubjects[3];
    timetableStructureOfeeeA[4][3] = fourHourSubjects[4];
    timetableStructureOfeeeA[1][3] = oneHourSubjects[1];
    
    // For eeeB
    let timetableStructureOfeeeB = [
        ["Monday(327)", "", "", "", "Free"],
        ["Tuesday(327)", "Lab", "", "", "Free"],
        ["Wednesday(326)", "", "Lab", "Lab", "Free"],
        ["Thursday (326)", "", "", "", "Lab"],
        ["Friday(327)", "", "", "", "Free"]
    ];
    
    // Shuffle subjects for eeeB
    shuffle(fourHourSubjects);
    shuffle(oneHourSubjects);
    
    // Assign subjects to eeeB timetable
    timetableStructureOfeeeB[0][2] = fourHourSubjects[0];
    timetableStructureOfeeeB[0][3] = fourHourSubjects[1];
    timetableStructureOfeeeB[1][2] = fourHourSubjects[2];
    timetableStructureOfeeeB[1][3] = fourHourSubjects[3];
    timetableStructureOfeeeB[2][2] = fourHourSubjects[4];
    timetableStructureOfeeeB[2][3] = fourHourSubjects[0];
    timetableStructureOfeeeB[3][3] = fourHourSubjects[1];
    timetableStructureOfeeeB[3][2] = fourHourSubjects[2];
    timetableStructureOfeeeB[3][1] = oneHourSubjects[0];
    timetableStructureOfeeeB[4][3] = fourHourSubjects[3];
    timetableStructureOfeeeB[4][2] = fourHourSubjects[4];
    timetableStructureOfeeeB[4][1] = oneHourSubjects[1];
    
    
    let totaleeedepartmentpcycle=[];
    totaleeedepartmentpcycle.push(timetableStructureOfeeeA)
    totaleeedepartmentpcycle.push(timetableStructureOfeeeB)
    return totaleeedepartmentpcycle;
    
    };