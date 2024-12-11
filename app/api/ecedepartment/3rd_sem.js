export const thirdsemece= (eceafour,eceaone,ecebfour,ecebone) => {

    // Timetable structure for ECEA
    let timetableStructure = [
        ["Monday(308)", "", "", "Lab", "Free"],
        ["Tuesday(308)", "", "", "Lab", "Free"],
        ["Wednesday(308)", "", "", "Lab", "Free"],
        ["Thursday (201)", "B kannada", "", "", ""],
        ["Friday (308,201)", "Brige maths", "", "", ""]
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
    timetableStructure[2][2] = eceafour[0];
    timetableStructure[3][2] = eceafour[1];
    timetableStructure[3][3] = eceafour[2];
    timetableStructure[3][4] = eceaone[0];
    timetableStructure[4][2] = eceafour[3];
    timetableStructure[4][3] = eceafour[4];
    timetableStructure[4][4] = eceaone[1];
    
    
    // For ECEB
    let timetableStructureOfeceb = [
        ["Monday(308)", "Free", "", "", ""],
        ["Tuesday(308)", "Free", "", "", ""],
        ["Wednesday(308)", "Lab", "Free", "", ""],
        ["Thursday (303)", "B kannada", "", "", "Lab"],
        ["Friday(308,303)", "Brige maths", "", "", "Lab"]
    ];

    
    // Shuffle subjects randomly
    shuffle(ecebfour);
    shuffle(ecebone);
    
    // Assign subjects to timetable
    timetableStructureOfeceb[0][2] = ecebfour[0];
    timetableStructureOfeceb[0][3] = ecebfour[1];
    timetableStructureOfeceb[0][4] = ecebfour[2];
    timetableStructureOfeceb[1][3] = ecebfour[3];
    timetableStructureOfeceb[1][2] = ecebfour[4];
    timetableStructureOfeceb[1][4] = ecebfour[0];
    timetableStructureOfeceb[2][3] = ecebfour[1];
    timetableStructureOfeceb[2][4] = ecebfour[2];
    timetableStructureOfeceb[3][2] = ecebone[0];
    timetableStructureOfeceb[3][3] = ecebfour[3];
    timetableStructureOfeceb[4][2] = ecebfour[4];
    timetableStructureOfeceb[4][3] = ecebone[1];
    
    
    let totalecedepartmentthirdsem=[];
    totalecedepartmentthirdsem.push(timetableStructure)
    totalecedepartmentthirdsem.push(timetableStructureOfeceb)
    return totalecedepartmentthirdsem;
    
    }