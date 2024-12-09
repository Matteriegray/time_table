export const fourthsemece= (eceafour,eceaone,ecebfour,ecebone) => {

    // Timetable structure for ECEA
    let timetableStructure = [
        ["Monday(LH2)", "", "", "", "Lab"],
        ["Tuesday(LH2)", "", "", "", "Lab"],
        ["Wednesday(LH2)", "", "Lab", "Lab", ""],
        ["Thursday (LH2)", "Free", "", "", "Free"],
        ["Friday (LH2)", "Brige maths", "", "", "B kannada"]
    ];
    
    // Shuffle subjects randomly
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    shuffle(eceafour);
    shuffle(eceaone);
    
    // Assign subjects to timetable
    timetableStructure[0][1] = eceafour[0];
    timetableStructure[0][2] = eceafour[1];
    timetableStructure[1][1] = eceafour[2];
    timetableStructure[1][2] = eceafour[3];
    timetableStructure[2][1] = eceafour[4];
    timetableStructure[2][4] = eceafour[0];
    timetableStructure[3][2] = eceafour[1];
    timetableStructure[3][3] = eceafour[2];
    timetableStructure[0][3] = eceaone[0];
    timetableStructure[4][2] = eceafour[3];
    timetableStructure[4][3] = eceafour[4];
    timetableStructure[1][3] = eceaone[1];
    
    
    // For ECEB
    let timetableStructureOfeceb = [
        ["Monday(LH1)", "Lab", "", "", "Free"],
        ["Tuesday(LH1)", "Lab", "", "", "Free"],
        ["Wednesday(LH2)", "Lab", "", "", "Free"],
        ["Thursday (LH1)", "", "", "", ""],
        ["Friday(LH1)", "Brige maths", "", "", "B kannada"]
    ];
    
    // Shuffle subjects randomly
    shuffle(ecebfour);
    shuffle(ecebone);
    
    // Assign subjects to timetable
    timetableStructureOfeceb[0][2] = ecebfour[0];
    timetableStructureOfeceb[0][3] = ecebfour[1];
    timetableStructureOfeceb[1][2] = ecebfour[2];
    timetableStructureOfeceb[1][3] = ecebfour[3];
    timetableStructureOfeceb[2][2] = ecebfour[4];
    timetableStructureOfeceb[2][3] = ecebfour[0];
    timetableStructureOfeceb[3][3] = ecebfour[1];
    timetableStructureOfeceb[3][2] = ecebfour[2];
    timetableStructureOfeceb[3][1] = ecebone[0];
    timetableStructureOfeceb[4][3] = ecebfour[3];
    timetableStructureOfeceb[4][2] = ecebfour[4];
    timetableStructureOfeceb[3][4] = ecebone[1];
    
    
    let totalecedepartmentfourthsem=[];
    totalecedepartmentfourthsem.push(timetableStructure)
    totalecedepartmentfourthsem.push(timetableStructureOfeceb)
    return totalecedepartmentfourthsem;
    
    }