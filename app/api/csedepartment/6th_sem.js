export const sixthSem=(aimlfour,aimlone,iseone,isefour,cseone,csefour)=> {
    
    // Timetable structure for AIML
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

    // Shuffle AIML subjects
    shuffle(aimlfour);

    // Assign subjects to AIML timetable
    timetable_structure[0][2] = aimlfour[0];
    timetable_structure[0][3] = aimlfour[1];
    timetable_structure[1][2] = aimlfour[2];
    timetable_structure[1][3] = aimlfour[3];
    timetable_structure[2][2] = aimlfour[0];
    timetable_structure[2][3] = aimlfour[1];
    timetable_structure[3][2] = aimlfour[2];
    timetable_structure[3][3] = aimlfour[3];

    // For ISE
    const timetable_structure_of_ise = [
        ["Monday(LH4)", "", "", "", ""],
        ["Tuesday(LH6)", "", "", "Lab", ""],
        ["Wednesday(LH6)", "", "", "Lab", ""],
        ["Thursday(LH4)", "", "", "Lab", ""],
        ["Friday(LH6)", "", "", "Lab", ""]
    ];

    // Shuffle ISE subjects
    shuffle(isefour);

    // Assign subjects to ISE timetable
    timetable_structure_of_ise[0][1] = isefour[0];
    timetable_structure_of_ise[0][2] = isefour[1];
    timetable_structure_of_ise[0][3] = isefour[2];
    timetable_structure_of_ise[1][4] = isefour[3];
    timetable_structure_of_ise[3][4] = isefour[0];
    timetable_structure_of_ise[2][4] = isefour[1];
    timetable_structure_of_ise[3][2] = isefour[2];
    timetable_structure_of_ise[0][4] = isefour[3];

    // For CSE A
    const timetable_structure_of_csea = [
        ["Monday(LH6)", "", "Lab", "", ""],
        ["Tuesday(LH6)", "", "Lab", "", ""],
        ["Wednesday(LH6)", "", "Lab", "", ""],
        ["Thursday(LH6)", "", "Lab", "", ""],
        ["Friday(LH6)", "", "", "", ""]
    ];

    // Shuffle CSE subjects
    shuffle(csefour);

    // Assign subjects to CSE A timetable
    timetable_structure_of_csea[0][1] = csefour[0];
    timetable_structure_of_csea[4][1] = csefour[1];
    timetable_structure_of_csea[1][1] = csefour[2];
    timetable_structure_of_csea[4][2] = csefour[3];
    timetable_structure_of_csea[2][1] = csefour[0];
    timetable_structure_of_csea[4][3] = csefour[1];
    timetable_structure_of_csea[3][1] = csefour[2];
    timetable_structure_of_csea[4][4] = csefour[3];

    // For CSE B
    const timetable_structure_of_cseb = [
        ["Monday(LH4)", "Lab", "", "", ""],
        ["Tuesday(LH4)", "Lab", "", "", ""],
        ["Wednesday(LH4)", "Lab", "", "", ""],
        ["Thursday(LH4)", "Lab", "", "", ""],
        ["Friday(LH4)", "", "", "", ""]
    ];

    // Shuffle CSE subjects
    shuffle(csefour);

    // Assign subjects to CSE B timetable
    timetable_structure_of_cseb[4][2] = csefour[0];
    timetable_structure_of_cseb[4][3] = csefour[1];
    timetable_structure_of_cseb[4][4] = csefour[2];
    timetable_structure_of_cseb[4][1] = csefour[3];
    timetable_structure_of_cseb[1][2] = csefour[0];
    timetable_structure_of_cseb[2][2] = csefour[1];
    timetable_structure_of_cseb[1][3] = csefour[2];
    timetable_structure_of_cseb[2][3] = csefour[3];

    
let totalcsedepartmentsixthsem=[];
totalcsedepartmentsixthsem.push(timetable_structure)
totalcsedepartmentsixthsem.push(timetable_structure_of_ise)
totalcsedepartmentsixthsem.push(timetable_structure_of_csea)
totalcsedepartmentsixthsem.push(timetable_structure_of_cseb)
return totalcsedepartmentsixthsem;
}
