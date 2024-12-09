export const sixthSemmech=(mechafour,mechbfour,mechcfou)=> {
    
    // Timetable structure for MECHA
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

    // Shuffle MECHA subjects
    shuffle(mechafour);

    // Assign subjects to MECHA timetable
    timetable_structure[0][2] = mechafour[0];
    timetable_structure[0][3] = mechafour[1];
    timetable_structure[1][2] = mechafour[2];
    timetable_structure[1][3] = mechafour[3];
    timetable_structure[2][2] = mechafour[4];
    timetable_structure[2][3] = mechafour[1];
    timetable_structure[3][2] = mechafour[2];
    timetable_structure[3][3] = mechafour[3];
    timetable_structure[4][2] = mechafour[4];
    timetable_structure[4][3] = mechafour[0];

    // For MECHB
    const timetable_structure_of_mechb = [
        ["Monday(LH4)", "", "", "", ""],
        ["Tuesday(LH6)", "", "", "Lab", ""],
        ["Wednesday(LH6)", "", "", "Lab", ""],
        ["Thursday(LH4)", "", "", "Lab", ""],
        ["Friday(LH6)", "", "", "Lab", ""]
    ];

    // Shuffle MECHB subjects
    shuffle(mechbfour);

    // Assign subjects to MECHB timetable
    timetable_structure_of_mechb[0][1] = mechbfour[0];
    timetable_structure_of_mechb[0][2] = mechbfour[1];
    timetable_structure_of_mechb[0][3] = mechbfour[2];
    timetable_structure_of_mechb[1][4] = mechbfour[3];
    timetable_structure_of_mechb[1][2] = mechbfour[4];
    timetable_structure_of_mechb[3][4] = mechbfour[0];
    timetable_structure_of_mechb[2][4] = mechbfour[1];
    timetable_structure_of_mechb[4][1] = mechbfour[4];
    timetable_structure_of_mechb[3][2] = mechbfour[2];
    timetable_structure_of_mechb[0][4] = mechbfour[3];

    // For MECHC
    const timetable_structure_of_mechc = [
        ["Monday(LH4)", "", "", "", ""],
        ["Tuesday(LH6)", "", "", "Lab", ""],
        ["Wednesday(LH6)", "", "", "Lab", ""],
        ["Thursday(LH4)", "", "", "Lab", ""],
        ["Friday(LH6)", "", "", "Lab", ""]
    ];

    // Shuffle MECHC subjects
    shuffle(mechcfour);

    // Assign subjects to MECHC timetable
    timetable_structure_of_mechc[0][1] = mechcfour[0];
    timetable_structure_of_mechc[0][2] = mechcfour[1];
    timetable_structure_of_mechc[0][3] = mechcfour[2];
    timetable_structure_of_mechc[1][4] = mechcfour[3];
    timetable_structure_of_mechc[1][2] = mechcfour[4];
    timetable_structure_of_mechc[3][4] = mechcfour[0];
    timetable_structure_of_mechc[2][4] = mechcfour[1];
    timetable_structure_of_mechc[4][1] = mechcfour[4];
    timetable_structure_of_mechc[3][2] = mechcfour[2];
    timetable_structure_of_mechc[0][4] = mechcfour[3];


    
let totalmechdepartmentsixthsem=[];
totalmechdepartmentsixthsem.push(timetable_structure)
totalmechdepartmentsixthsem.push(timetable_structure_of_mechb)
totalmechdepartmentsixthsem.push(timetable_structure_of_mechc)
return totalmechdepartmentsixthsem;
}