export const sixthSem=(eeeafour,eeeaone,eeebfour,eeebone)=> {
    
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
    shuffle(eeeafour);

    // Assign subjects to AIML timetable
    timetable_structure[0][2] = eeeafour[0];
    timetable_structure[0][3] = eeeafour[1];
    timetable_structure[1][2] = eeeafour[2];
    timetable_structure[1][3] = eeeafour[3];
    timetable_structure[2][2] = eeeafour[4];
    timetable_structure[2][3] = eeeafour[1];
    timetable_structure[3][2] = eeeafour[2];
    timetable_structure[3][3] = eeeafour[3];
    timetable_structure[4][2] = eeeafour[4];
    timetable_structure[4][3] = eeeafour[0];

    // For ISE
    const timetable_structure_of_eeeb = [
        ["Monday(LH4)", "", "", "", ""],
        ["Tuesday(LH6)", "", "", "Lab", ""],
        ["Wednesday(LH6)", "", "", "Lab", ""],
        ["Thursday(LH4)", "", "", "Lab", ""],
        ["Friday(LH6)", "", "", "Lab", ""]
    ];

    // Shuffle ISE subjects
    shuffle(eeebfour);

    // Assign subjects to ISE timetable
    timetable_structure_of_eeeb[0][1] = eeebfour[0];
    timetable_structure_of_eeeb[0][2] = eeebfour[1];
    timetable_structure_of_eeeb[0][3] = eeebfour[2];
    timetable_structure_of_eeeb[1][4] = eeebfour[3];
    timetable_structure_of_eeeb[1][2] = eeebfour[4];
    timetable_structure_of_eeeb[3][4] = eeebfour[0];
    timetable_structure_of_eeeb[2][4] = eeebfour[1];
    timetable_structure_of_eeeb[4][1] = eeebfour[4];
    timetable_structure_of_eeeb[3][2] = eeebfour[2];
    timetable_structure_of_eeeb[0][4] = eeebfour[3];


    
let totalcsedepartmentsixthsem=[];
totalcsedepartmentsixthsem.push(timetable_structure)
totalcsedepartmentsixthsem.push(timetable_structure_of_eeeb)
return totalcsedepartmentsixthsem;
}
