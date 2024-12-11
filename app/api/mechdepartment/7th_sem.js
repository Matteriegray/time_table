export const seventhSemmech=(mechafour,mechbfour,mechcfour)=> {
    
    // Timetable structure for MECHA
    const timetable_structure = [
        ["Monday(103)", "Free", "Free", "Free", "Free"],
        ["Tuesday(103)", "Free", "Free", "Free", "Free"],
        ["Wednesday(103)", "", "", "Free", "Free"],
        ["Thursday(103)", "Free", "", "", ""],
        ["Friday(103)", "ALab", "", "", ""]
    ];
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // Swap elements
        }
        return array;
    }

    // Shuffle MECHA subjects
    shuffle(mechafour);

    // Assign subjects to MECHA timetable
    timetable_structure[2][2] = mechafour[0];
    timetable_structure[2][1] = mechafour[1];
    timetable_structure[3][2] = mechafour[2];
    timetable_structure[4][4] = mechafour[3];
    timetable_structure[3][4] = mechafour[1];
    timetable_structure[4][2] = mechafour[2];
    timetable_structure[3][3] = mechafour[3];
    timetable_structure[4][3] = mechafour[0];

    // For MECHB
    const timetable_structure_of_mechb = [
        ["Monday(103)", "Free", "Free", "Free", "Free"],
        ["Tuesday(103)", "Free", "", "", ""],
        ["Wednesday(103)", "Free", "Free", "", ""],
        ["Thursday(104)", "", "", "ALab", ""],
        ["Friday(103)", "Free", "Free", "Free", "Free"]
    ];

    // Shuffle MECHB subjects
    shuffle(mechbfour);

    // Assign subjects to MECHB timetable
    timetable_structure_of_mechb[1][4] = mechbfour[0];
    timetable_structure_of_mechb[1][2] = mechbfour[1];
    timetable_structure_of_mechb[1][3] = mechbfour[2];
    timetable_structure_of_mechb[2][4] = mechbfour[3];
    timetable_structure_of_mechb[2][3] = mechbfour[0];
    timetable_structure_of_mechb[3][4] = mechbfour[1];
    timetable_structure_of_mechb[3][2] = mechbfour[2];
    timetable_structure_of_mechb[3][1] = mechbfour[3];

    // For MECHC
    const timetable_structure_of_mechc = [
        ["Monday(104)", "Free", "", "", ""],
        ["Tuesday(104)", "Free", "", "", "Free"],
        ["Wednesday(104)", "", "", "ALab", ""],
        ["Thursday(104)", "Free", "Free", "Free", "Free"],
        ["Friday(103)", "Free", "Free", "Free", "Free"]
    ];

    // Shuffle MECHC subjects
    shuffle(mechcfour);

    // Assign subjects to MECHC timetable
    timetable_structure_of_mechc[0][4] = mechcfour[0];
    timetable_structure_of_mechc[0][2] = mechcfour[1];
    timetable_structure_of_mechc[0][3] = mechcfour[2];
    timetable_structure_of_mechc[1][3] = mechcfour[3];
    timetable_structure_of_mechc[2][2] = mechcfour[0];
    timetable_structure_of_mechc[2][4] = mechcfour[1];
    timetable_structure_of_mechc[1][2] = mechcfour[2];
    timetable_structure_of_mechc[2][1] = mechcfour[3];


    
let totalmechdepartmentseventhsem=[];
totalmechdepartmentseventhsem.push(timetable_structure)
totalmechdepartmentseventhsem.push(timetable_structure_of_mechb)
totalmechdepartmentseventhsem.push(timetable_structure_of_mechc)
return totalmechdepartmentseventhsem;
}