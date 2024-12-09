export const eigthSemece=(eceafour,ecebfour)=> {
    
    // Timetable structure for ECE
    const timetable_structure = [
        ["Monday(LH6)", "", "", "", "Lab"],
        ["Tuesday(LH6)", "", "", "", "Lab"],
        ["Wednesday(LH6)", "", "", "", "Lab"],
        ["Thursday(LH6)", "", "", "", "Lab"],
        ["Friday(LH6)", "", "", "", ""]
    ];
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // Swap elements
        }
        return array;
    }

    // Shuffle ECE A subjects
    shuffle(eceafour);

    // Assign subjects to ECE A timetable
    timetable_structure[0][2] = eceafour[0];
    timetable_structure[0][3] = eceafour[1];
    timetable_structure[1][2] = eceafour[2];
    timetable_structure[1][3] = eceafour[3];
    timetable_structure[2][2] = eceafour[4];
    timetable_structure[2][3] = eceafour[1];
    timetable_structure[3][2] = eceafour[2];
    timetable_structure[3][3] = eceafour[3];
    timetable_structure[4][2] = eceafour[4];
    timetable_structure[4][3] = eceafour[0];

    // For ECE B
    const timetable_structure_of_eceb = [
        ["Monday(LH4)", "", "", "", ""],
        ["Tuesday(LH6)", "", "", "Lab", ""],
        ["Wednesday(LH6)", "", "", "Lab", ""],
        ["Thursday(LH4)", "", "", "Lab", ""],
        ["Friday(LH6)", "", "", "Lab", ""]
    ];

    // Shuffle ECE B subjects
    shuffle(ecebfour);

    // Assign subjects to ECE B timetable
    timetable_structure_of_eceb[0][1] = ecebfour[0];
    timetable_structure_of_eceb[0][2] = ecebfour[1];
    timetable_structure_of_eceb[0][3] = ecebfour[2];
    timetable_structure_of_eceb[1][4] = ecebfour[3];
    timetable_structure_of_eceb[1][2] = ecebfour[4];
    timetable_structure_of_eceb[3][4] = ecebfour[0];
    timetable_structure_of_eceb[2][4] = ecebfour[1];
    timetable_structure_of_eceb[4][1] = ecebfour[4];
    timetable_structure_of_eceb[3][2] = ecebfour[2];
    timetable_structure_of_eceb[0][4] = ecebfour[3];


    
let totalecedepartmenteigthsem=[];
totalecedepartmenteigthsem.push(timetable_structure)
totalecedepartmenteigthsem.push(timetable_structure_of_eceb)
return totalecedepartmenteigthsem;
}