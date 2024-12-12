export const seventhSemece=(eceafour,ecebfour)=> {
    
    // Timetable structure for ECEA
    let timetableStructure = [
        ["Monday(201)", "", "", "", ""],
        ["Tuesday(201)", "", "", "", "Free"],
        ["Wednesday(201)", "Free", "Free", "", ""],
        ["Thursday (201)", "Free", "Free", "Free", "Free"],
        ["Friday (201)", "Free", "Free", "Free", "Free"]
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
    
    
    // Assign subjects to timetable
    timetableStructure[0][2] = eceafour[0];
    timetableStructure[0][1] = eceafour[1];
    timetableStructure[2][3] = eceafour[2];
    timetableStructure[0][4] = eceafour[3];
    timetableStructure[1][1] = eceafour[0];
    timetableStructure[1][3] = eceafour[1];
    timetableStructure[0][3] = eceafour[2];
    timetableStructure[2][4] = eceafour[3];

    
    
    // For ECEB
    let timetableStructureOfeceb = [
        ["Monday(303)", "", "", "", ""],
        ["Tuesday(303)", "", "", "", "Free"],
        ["Wednesday(303)", "Free", "Free", "", ""],
        ["Thursday (303)", "Free", "Free", "Free", "Free"],
        ["Friday (303)", "Free", "Free", "Free", "Free"]
    ];
    
    // Shuffle subjects randomly
    shuffle(ecebfour);
    
    // Assign subjects to timetable
    timetableStructureOfeceb[0][2] = ecebfour[0];
    timetableStructureOfeceb[0][1] = ecebfour[1];
    timetableStructureOfeceb[2][3] = ecebfour[2];
    timetableStructureOfeceb[0][4] = ecebfour[3];
    timetableStructureOfeceb[1][1] = ecebfour[0];
    timetableStructureOfeceb[1][3] = ecebfour[1];
    timetableStructureOfeceb[1][2] = ecebfour[2];
    timetableStructureOfeceb[2][4] = ecebfour[3];


    
let totalecedepartmentseventhsem=[];
totalecedepartmentseventhsem.push(timetableStructure)
totalecedepartmentseventhsem.push(timetableStructureOfeceb)
return totalecedepartmentseventhsem;
}