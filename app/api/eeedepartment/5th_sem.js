export const fifthsemeee= (eeeafour,eeebfour,) => {

    // Timetable structure for EEE A
    let timetableStructure = [
        ["Monday(324)", "Lab", "", "", "Lab"],
        ["Tuesday(324)", "", "", "Free", "Free"],
        ["Wednesday(324)", "Lab", "", "", "Lab"],
        ["Thursday (324)", "Lab", "", "", "Lab"],
        ["Friday (324)", "ES", "Free", "Free", "Free"]    
    ];
    
    // Shuffle subjects randomly
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    shuffle(eeeafour);
    
    // Assign subjects to timetable
    timetableStructure[0][2] = eeeafour[0];
    timetableStructure[0][3] = eeeafour[1];
    timetableStructure[1][1] = eeeafour[2];
    timetableStructure[1][2] = eeeafour[3];
    timetableStructure[2][2] = eeeafour[4];
    timetableStructure[2][3] = eeeafour[0];
    timetableStructure[3][2] = eeeafour[1];
    timetableStructure[3][3] = eeeafour[2];


    // For EEE B
    let timetableStructureOfeeeb = [
        ["Monday(325)", "Free", "", "", ""],
        ["Tuesday(325)", "Lab", "", "", "Lab"],
        ["Wednesday(325)", "", "Lab", "Lab", "Free"],
        ["Thursday (325)", "Lab", "", "", "Lab"],
        ["Friday(325)", "ES", "Lab", "Lab", "Free"]
    ];
    
    // Shuffle subjects randomly
    shuffle(eeebfour);
    
    // Assign subjects to timetable
    timetableStructureOfeeeb[0][2] = eeebfour[0];
    timetableStructureOfeeeb[0][3] = eeebfour[1];
    timetableStructureOfeeeb[1][2] = eeebfour[2];
    timetableStructureOfeeeb[1][3] = eeebfour[3];
    timetableStructureOfeeeb[2][4] = eeebfour[4];
    timetableStructureOfeeeb[0][4] = eeebfour[0];
    timetableStructureOfeeeb[3][3] = eeebfour[1];
    timetableStructureOfeeeb[3][2] = eeebfour[2];
    
    
    let totaleeedepartmentfifthsem=[];
    totaleeedepartmentfifthsem.push(timetableStructure)
    totaleeedepartmentfifthsem.push(timetableStructureOfeeeb)
    return totaleeedepartmentfifthsem;
    
    }
