export const seventhSemeee=(eeeafour,eeebfour)=> {
    
    // Timetable structure for EEE A
    const timetable_structure = [
        ["Monday(324)", "", "Free", "Free", ""],
        ["Tuesday(324)", "Free", "Free", "", ""],
        ["Wednesday(324)", "", "Free", "Free", "Free"],
        ["Thursday(324)", "Free", "", "", "Free"],
        ["Friday(324)", "Free", "", "Free", "Free"]
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
    timetable_structure[0][1] = eeeafour[0];
    timetable_structure[0][4] = eeeafour[1];
    timetable_structure[1][3] = eeeafour[2];
    timetable_structure[1][4] = eeeafour[3];
    timetable_structure[2][1] = eeeafour[4];
    timetable_structure[4][2] = eeeafour[1];
    timetable_structure[3][2] = eeeafour[2];
    timetable_structure[3][3] = eeeafour[3];


    // For EEE B
    const timetable_structure_of_eeeb = [
        ["Monday(326)", "Free", "Free", "Free", ""],
        ["Tuesday(325)", "Free", "", "", "Free"],
        ["Wednesday(325)", "Free", "", "", "Free"],
        ["Thursday(325)", "Free", "Free", "Free", ""],
        ["Friday(325)", "Free", "", "", "Free"]
    ];

    // Shuffle EEE B subjects
    shuffle(eeebfour);

    // Assign subjects to EEE B timetable
    timetable_structure_of_eeeb[0][4] = eeebfour[0];
    timetable_structure_of_eeeb[1][2] = eeebfour[1];
    timetable_structure_of_eeeb[1][3] = eeebfour[2];
    timetable_structure_of_eeeb[2][2] = eeebfour[3];
    timetable_structure_of_eeeb[2][3] = eeebfour[4];
    timetable_structure_of_eeeb[3][4] = eeebfour[0];
    timetable_structure_of_eeeb[4][2] = eeebfour[1];
    timetable_structure_of_eeeb[4][3] = eeebfour[4];

    
let totaleeedepartmentseventhsem=[];
totaleeedepartmentseventhsem.push(timetable_structure)
totaleeedepartmentseventhsem.push(timetable_structure_of_eeeb)
return totaleeedepartmentseventhsem;
}