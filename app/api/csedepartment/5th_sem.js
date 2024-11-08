function fifthSem(aimlfour,aimlone,iseone,isefour,cseone,csefour) {
    
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
    
    shuffle(aimlfour);
    
    // Assign subjects to timetable
    timetableStructure[0][1] = aimlfour[0];
    timetableStructure[0][3] = aimlfour[1];
    timetableStructure[1][2] = aimlfour[2];
    timetableStructure[1][3] = aimlfour[3];
    timetableStructure[0][2] = aimlone[0];
    timetableStructure[1][1] = aimlfour[0];
    timetableStructure[2][1] = aimlfour[1];
    timetableStructure[2][2] = aimlfour[2];
    timetableStructure[2][3] = aimlfour[3];
    timetableStructure[2][4] = aimlone[1];
    
    // For ISE
    let timetableStructureISE = [
        ["Monday(Lib)", "", "", "Lab", ""],
        ["Tuesday(Lib)", "", "", "Lab", ""],
        ["Wednesday(LH5)", "", "", "Lab", ""],
        ["Thursday (Lib)", "", "", "", ""],
        ["Friday(Lib)", "", "", "", ""]
    ];
    
    shuffle(isefour);
    
    // Assign subjects to timetable
    timetableStructureISE[0][4] = isefour[0];
    timetableStructureISE[2][1] = isefour[1];
    timetableStructureISE[2][4] = isefour[2];
    timetableStructureISE[1][4] = isefour[3];
    timetableStructureISE[2][2] = iseone[0];
    timetableStructureISE[3][4] = isefour[0];
    timetableStructureISE[3][3] = isefour[1];
    timetableStructureISE[3][2] = isefour[2];
    timetableStructureISE[3][1] = isefour[3];
    
    // For CSE A
    let timetableStructureCSEA = [
        ["Monday(Lib)", "", "", "", ""],
        ["Tuesday(LH5)", "", "", "", ""],
        ["Wednesday(Lib)", "", "Lab", "", ""],
        ["Thursday (LH5)", "", "Lab", "", ""],
        ["Friday(Lib)", "", "Lab", "", ""]
    ];
    
    shuffle(csefour);
    
    // Assign subjects to timetable
    timetableStructureCSEA[4][1] = csefour[0];
    timetableStructureCSEA[4][3] = csefour[1];
    timetableStructureCSEA[3][1] = csefour[2];
    timetableStructureCSEA[4][4] = csefour[3];
    timetableStructureCSEA[3][3] = cseone[0];
    timetableStructureCSEA[3][4] = csefour[0];
    timetableStructureCSEA[1][4] = csefour[1];
    timetableStructureCSEA[1][1] = csefour[2];
    timetableStructureCSEA[1][3] = csefour[3];
    
    // For CSE B
    let timetableStructureCSEB = [
        ["Monday (LH5)", "Lab", "", "", ""],
        ["Tuesday (LH5)", "Lab", "", "", ""],
        ["Wednesday(LH5)", "Lab", "", "", ""],
        ["Thursday (LH5)", "", "", "", ""],
        ["Friday (LH5)", "", "", "", ""]
    ];

    shuffle(csefour);
    
    // Assign subjects to timetable
    timetableStructureCSEB[0][2] = csefour[0];
    timetableStructureCSEB[0][3] = csefour[1];
    timetableStructureCSEB[0][4] = csefour[2];
    timetableStructureCSEB[4][1] = csefour[3];
    timetableStructureCSEB[4][3] = cseone[0];
    timetableStructureCSEB[4][2] = csefour[0];
    timetableStructureCSEB[4][4] = csefour[1];
    timetableStructureCSEB[1][2] = csefour[2];
    timetableStructureCSEB[2][2] = csefour[3];

    let totalcsedepartmentfifthsem=[];
    totalcsedepartmentfifthsem.push(timetableStructure)
    totalcsedepartmentfifthsem.push(timetableStructureISE)
    totalcsedepartmentfifthsem.push(timetableStructureCSEA)
    totalcsedepartmentfifthsem.push(timetableStructureCSEB)
    return totalcsedepartmentfifthsem;
}
