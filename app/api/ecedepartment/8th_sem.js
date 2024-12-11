export const eigthSemece=(eceafour,ecebfour)=> {
    
     // Timetable structure for ECEA
     let timetableStructure = [
        ["Monday(328)", "", "Free", "Free", "Free"],
        ["Tuesday(328)", "", "Free", "Free", "Free"],
        ["Wednesday(328)", "Free", "Free", "Free", "Free"],
        ["Thursday (328)", "Free", "Free", "Free", "Free"],
        ["Friday (328)", "Free", "Free", "Free", "Free"]
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
    timetableStructure[1][1] = eceafour[0];
    // timetableStructure[2][3] = eceafour[2];
    // timetableStructure[0][4] = eceafour[3];
    // timetableStructure[1][1] = eceafour[0];
    // timetableStructure[1][3] = eceafour[1];
    // timetableStructure[1][2] = eceaone[0];
    // timetableStructure[0][3] = eceafour[2];
    // timetableStructure[2][4] = eceafour[3];

    
    
    // For ECEB
    let timetableStructureOfeceb = [
        ["Monday(328)", "Free", "", "Free", "Free"],
        ["Tuesday(328)", "Free", "", "Free", "Free"],
        ["Wednesday(328)", "Free", "Free", "Free", "Free"],
        ["Thursday (328)", "Free", "Free", "Free", "Free"],
        ["Friday (328)", "Free", "Free", "Free", "Free"]
    ];
    
    // Shuffle subjects randomly
    shuffle(ecebfour);
    shuffle(ecebone);
    
    // Assign subjects to timetable
    timetableStructureOfeceb[0][2] = ecebfour[0];
    timetableStructureOfeceb[1][2] = ecebfour[0];
    // timetableStructureOfeceb[2][3] = ecebfour[2];
    // timetableStructureOfeceb[0][4] = ecebfour[3];
    // timetableStructureOfeceb[1][1] = ecebfour[0];
    // timetableStructureOfeceb[1][3] = ecebfour[1];
    // timetableStructureOfeceb[1][2] = ecebfour[2];
    // timetableStructureOfeceb[0][3] = ecebone[0];
    // timetableStructureOfeceb[2][4] = ecebfour[3];


    
let totalecedepartmenteigthsem=[];
totalecedepartmenteigthsem.push(timetable_structure)
totalecedepartmenteigthsem.push(timetable_structure_of_eceb)
return totalecedepartmenteigthsem;
}