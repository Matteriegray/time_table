function fifthSem() {
    // Subjects
    let fourHourSubjectsAIML = ["GT", "CN", "DBMS", "DIP"];
    let oneHourSubjectsAIML = ["ES", "DAP"];
    let fourHourSubjectsCSE = ["PSP", "CN", "DBMS", "ATCD"];
    let fourHourSubjectsISE = ["DMS", "CN", "DBMS", "ATCD"];
    let oneHourSubjects = ["ES"];
    
    // Timetable structure for AIML
    let timetableStructure = [
        ["Monday(Lib)", "", "", "", "Lab"],
        ["Tuesday(Lib)", "", "", "", "Lab"],
        ["Wednesday(Lib)", "", "", "", ""],
        ["Thursday (Lib)", "", "", "", ""],
        ["Friday(Lib)", "", "", "", ""]
    ];
    
    // Shuffle subjects randomly
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    shuffle(fourHourSubjectsAIML);
    
    // Assign subjects to timetable
    timetableStructure[0][1] = fourHourSubjectsAIML[0];
    timetableStructure[0][3] = fourHourSubjectsAIML[1];
    timetableStructure[1][2] = fourHourSubjectsAIML[2];
    timetableStructure[1][3] = fourHourSubjectsAIML[3];
    timetableStructure[0][2] = oneHourSubjectsAIML[0];
    timetableStructure[1][1] = fourHourSubjectsAIML[0];
    timetableStructure[2][1] = fourHourSubjectsAIML[1];
    timetableStructure[2][2] = fourHourSubjectsAIML[2];
    timetableStructure[2][3] = fourHourSubjectsAIML[3];
    timetableStructure[2][4] = oneHourSubjectsAIML[1];
    
    // For ISE
    let timetableStructureISE = [
        ["Monday(Lib)", "", "", "Lab", ""],
        ["Tuesday(Lib)", "", "", "Lab", ""],
        ["Wednesday(LH5)", "", "", "Lab", ""],
        ["Thursday (Lib)", "", "", "", ""],
        ["Friday(Lib)", "", "", "", ""]
    ];
    
    shuffle(fourHourSubjectsISE);
    
    // Assign subjects to timetable
    timetableStructureISE[0][4] = fourHourSubjectsISE[0];
    timetableStructureISE[2][1] = fourHourSubjectsISE[1];
    timetableStructureISE[2][4] = fourHourSubjectsISE[2];
    timetableStructureISE[1][4] = fourHourSubjectsISE[3];
    timetableStructureISE[2][2] = oneHourSubjects[0];
    timetableStructureISE[3][4] = fourHourSubjectsISE[0];
    timetableStructureISE[3][3] = fourHourSubjectsISE[1];
    timetableStructureISE[3][2] = fourHourSubjectsISE[2];
    timetableStructureISE[3][1] = fourHourSubjectsISE[3];
    
    // For CSE A
    let timetableStructureCSEA = [
        ["Monday(Lib)", "", "", "", ""],
        ["Tuesday(LH5)", "", "", "", ""],
        ["Wednesday(Lib)", "", "Lab", "", ""],
        ["Thursday (LH5)", "", "Lab", "", ""],
        ["Friday(Lib)", "", "Lab", "", ""]
    ];
    
    shuffle(fourHourSubjectsCSE);
    
    // Assign subjects to timetable
    timetableStructureCSEA[4][1] = fourHourSubjectsCSE[0];
    timetableStructureCSEA[4][3] = fourHourSubjectsCSE[1];
    timetableStructureCSEA[3][1] = fourHourSubjectsCSE[2];
    timetableStructureCSEA[4][4] = fourHourSubjectsCSE[3];
    timetableStructureCSEA[3][3] = oneHourSubjects[0];
    timetableStructureCSEA[3][4] = fourHourSubjectsCSE[0];
    timetableStructureCSEA[1][4] = fourHourSubjectsCSE[1];
    timetableStructureCSEA[1][1] = fourHourSubjectsCSE[2];
    timetableStructureCSEA[1][3] = fourHourSubjectsCSE[3];
    
    // For CSE B
    let timetableStructureCSEB = [
        ["Monday (LH5)", "Lab", "", "", ""],
        ["Tuesday (LH5)", "Lab", "", "", ""],
        ["Wednesday(LH5)", "Lab", "", "", ""],
        ["Thursday (LH5)", "", "", "", ""],
        ["Friday (LH5)", "", "", "", ""]
    ];

    shuffle(fourHourSubjectsCSE);
    
    // Assign subjects to timetable
    timetableStructureCSEB[0][2] = fourHourSubjectsCSE[0];
    timetableStructureCSEB[0][3] = fourHourSubjectsCSE[1];
    timetableStructureCSEB[0][4] = fourHourSubjectsCSE[2];
    timetableStructureCSEB[4][1] = fourHourSubjectsCSE[3];
    timetableStructureCSEB[4][3] = oneHourSubjects[0];
    timetableStructureCSEB[4][2] = fourHourSubjectsCSE[0];
    timetableStructureCSEB[4][4] = fourHourSubjectsCSE[1];
    timetableStructureCSEB[1][2] = fourHourSubjectsCSE[2];
    timetableStructureCSEB[2][2] = fourHourSubjectsCSE[3];

    let totalCSEDepartmentFifthSem = [
        ["AIML", timetableStructure],
        ["ISE", timetableStructureISE],
        ["CSE A", timetableStructureCSEA],
        ["CSE B", timetableStructureCSEB]
    ];
    
    return totalCSEDepartmentFifthSem;
}

function displayTimetable2D(timetables) {
    timetables.forEach(([dept, timetable]) => {
        console.log(`\nTimetable for ${dept} (2D Array Format):`);
        timetable.forEach(row => console.log(row));
    });
}

// Generate and display timetables in 2D array format
let timetables = fifthSem();
displayTimetable2D(timetables);
