export const fifthsemece= (eceafour,eceaone,ecebfour,ecebone) => {

    // Timetable structure for ECEA
    let timetableStructure = [
        ["Monday(323)", "Lab", "", "", ""],
        ["Tuesday(323)", "Lab", "", "Free", "Free"],
        ["Wednesday(323)", "", "", "Free", "Free"],
        ["Thursday (323)", "Free", "Free", "", ""],
        ["Friday (323)", "Free", "", "", "Free"]
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
    timetableStructure[0][2] = eceafour[0];
    timetableStructure[0][3] = eceafour[1];
    timetableStructure[4][3] = eceafour[3];
    timetableStructure[3][4] = eceafour[2];
    timetableStructure[2][1] = eceafour[0];
    timetableStructure[3][3] = eceafour[1];
    timetableStructure[1][2] = eceaone[0];
    timetableStructure[2][2] = eceaone[1];
    timetableStructure[4][2] = eceafour[2];
    timetableStructure[0][4] = eceafour[3];
    
    
    // For ECEB
    let timetableStructureOfeceb = [
        ["Monday(323)", "Free", "Free", "Free", "Free"],
        ["Tuesday(323)", "Free", "Free", "", ""],
        ["Wednesday(323)", "Free", "Free", "", ""],
        ["Thursday (328)", "Lab", "", "", ""],
        ["Friday(328)", "Lab", "", "", ""]
    ];
    
    // Shuffle subjects randomly
    shuffle(ecebfour);
    shuffle(ecebone);
    
    // Assign subjects to timetable
    timetableStructureOfeceb[2][2] = ecebfour[0];
    timetableStructureOfeceb[2][3] = ecebfour[1];
    timetableStructureOfeceb[1][2] = ecebfour[2];
    timetableStructureOfeceb[1][3] = ecebfour[3];
    timetableStructureOfeceb[4][2] = ecebfour[3];
    timetableStructureOfeceb[4][3] = ecebfour[0];
    timetableStructureOfeceb[3][3] = ecebfour[1];
    timetableStructureOfeceb[3][2] = ecebfour[2];
    timetableStructureOfeceb[4][4] = ecebone[0];
    timetableStructureOfeceb[3][4] = ecebone[1];
    
    
    let totalecedepartmentfifthsem=[];
    totalecedepartmentfifthsem.push(timetableStructure)
    totalecedepartmentfifthsem.push(timetableStructureOfeceb)
    return totalecedepartmentfifthsem;
    
    }
