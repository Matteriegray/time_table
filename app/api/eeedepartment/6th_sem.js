export const sixthSemeee=(eeeafour,eeebfour)=> {
    
    // Timetable structure for EEE A
    const timetable_structure = [
        ["Monday(324)", "Lab", "", "", "Lab"],
        ["Tuesday(324)", "", "", "Free", "Free"],
        ["Wednesday(324)", "Lab", "", "", "Lab"],
        ["Thursday (324)", "Lab", "", "", "Lab"],
        ["Friday (324)", "Free", "Free", "Free", "Free"]
    ];
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // Swap elements
        }
        return array;
    }

    // Shuffle EEE A subjects
    shuffle(eeeafour);

    // Assign subjects to EEEA timetable
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

    // For EEE B
    const timetable_structure_of_eeeb = [
        ["Monday(325)", "Free", "", "", ""],
        ["Tuesday(325)", "Lab", "", "", "Lab"],
        ["Wednesday(325)", "", "Lab", "Lab", "Free"],
        ["Thursday (325)", "Lab", "", "", "Lab"],
        ["Friday(325)", "Free", "Lab", "Lab", "Free"]
    ];

    // Shuffle EEEB subjects
    shuffle(eeebfour);

    // Assign subjects to EEEB timetable
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


    
let totaleeedepartmentsixthsem=[];
totaleeedepartmentsixthsem.push(timetable_structure)
totaleeedepartmentsixthsem.push(timetable_structure_of_eeeb)
return totaleeedepartmentsixthsem;
}