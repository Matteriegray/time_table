export const fourthsemeee= (eeeafour,eeeaone,eeebfour,eeebone) => {

    // Timetable structure for EEE A
    let timetableStructure = [
        ["Monday(330)", "", "Lab", "Lab", "Free"],
        ["Tuesday(330)", "", "", "", "Lab"],
        ["Wednesday(330)", "Free", "", "", ""],
        ["Thursday (330)", "Lab", "", "", "Free"],
        ["Friday (330)", "", "", "Free", "Free"]
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
    shuffle(eeeaone);
    
    // Assign subjects to timetable
    timetableStructure[0][1] = eeeafour[0];
    timetableStructure[1][3] = eeeafour[1];
    timetableStructure[1][1] = eeeafour[2];
    timetableStructure[1][2] = eeeafour[3];
    timetableStructure[2][2] = eeeafour[4];
    timetableStructure[4][1] = eeeafour[0];
    timetableStructure[3][2] = eeeafour[1];
    timetableStructure[3][3] = eeeafour[2];
    timetableStructure[2][4] = eeeaone[0];
    timetableStructure[4][2] = eeeaone[4];
    timetableStructure[2][3] = eeeaone[1];
    
    
    // For EEE B
    let timetableStructureOfeeeb = [
        ["Monday(330)", "Lab", "", "", "Free"],
        ["Tuesday(330)", "Free", "Lab", "Lab", ""],
        ["Wednesday(327)", "", "", "", "Lab"],
        ["Thursday (327)", "", "", "", "Free"],
        ["Friday(330)", "Free", "Free", "", ""]
    ];
    
    // Shuffle subjects randomly
    shuffle(eeebfour);
    shuffle(eeebone);
    
    // Assign subjects to timetable
    timetableStructureOfeeeb[0][2] = eeebfour[0];
    timetableStructureOfeeeb[0][3] = eeebfour[1];
    timetableStructureOfeeeb[1][4] = eeebfour[2];
    timetableStructureOfeeeb[2][2] = eeebfour[3];
    timetableStructureOfeeeb[2][3] = eeebfour[4];
    timetableStructureOfeeeb[3][1] = eeebfour[0];
    timetableStructureOfeeeb[3][3] = eeebfour[1];
    timetableStructureOfeeeb[3][2] = eeebfour[2];
    timetableStructureOfeeeb[2][1] = eeebone[0];
    timetableStructureOfeeeb[4][3] = eeebone[4];
    timetableStructureOfeeeb[3][4] = eeebone[1];
    
    
    let totaleeedepartmentfourthsem=[];
    totaleeedepartmentfourthsem.push(timetableStructure)
    totaleeedepartmentfourthsem.push(timetableStructureOfeeeb)
    return totaleeedepartmentfourthsem;
    
    }