export const eigthSemeee=(eeeafour,eeebfour)=> {
    
    // Timetable structure for EEE A
    const timetable_structure = [
        ["Monday(324)", "", "Free", "Free", "Free"],
        ["Tuesday(324)", "Free", "Free", "Free", "Free"],
        ["Wednesday(324)", "Free", "Free", "Free", ""],
        ["Thursday(324)", "Free", "Free", "Free", ""],
        ["Friday(324)", "Free", "Free", "Free", "Free"]
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

    // Assign subjects to EEE A timetable
    timetable_structure[2][4] = eeeafour[0];
    timetable_structure[3][4] = eeeafour[1];

    // For EEE B
    const timetable_structure_of_eeeb = [
        ["Monday(326)", "Free", "Free", "Free", "Free"],
        ["Tuesday(325)", "Free", "Free", "Free", "Free"],
        ["Wednesday(325)", "Free", "Free", "Free", "Free"],
        ["Thursday(325)", "Free", "Free", "", "Free"],
        ["Friday(325)", "Free", "Free", "", "Free"]
    ];

    // Shuffle EEE B subjects
    shuffle(eeebfour);

    // Assign subjects to EEE B timetable
    timetable_structure_of_eeeb[3][3] = eeebfour[0];
    timetable_structure_of_eeeb[4][3] = eeebfour[1];

    
let totaleeedepartmenteigthsem=[];
totaleeedepartmenteigthsem.push(timetable_structure)
totaleeedepartmenteigthsem.push(timetable_structure_of_eeeb)
return totaleeedepartmenteigthsem;
}