export const fifthsemeee= (eeeafour,eeeaone,eeebfour,eeebone) => {

    // Timetable structure for EEEA
    let timetableStructure = [
        ["Monday(LH2)", "", "", "", "Lab"],
        ["Tuesday(LH2)", "", "", "", "Lab"],
        ["Wednesday(LH2)", "", "Lab", "Lab", ""],
        ["Thursday (LH2)", "Free", "", "", "Free"],
        ["Friday (LH2)", "Brige maths", "", "", "B kannada"]
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
    timetableStructure[0][2] = eeeafour[1];
    timetableStructure[1][1] = eeeafour[2];
    timetableStructure[1][2] = eeeafour[3];
    timetableStructure[2][1] = eeeafour[4];
    timetableStructure[2][4] = eeeafour[0];
    timetableStructure[3][2] = eeeafour[1];
    timetableStructure[3][3] = eeeafour[2];
    timetableStructure[0][3] = eeeaone[0];
    timetableStructure[4][2] = eeeafour[3];
    timetableStructure[4][3] = eeeafour[4];
    timetableStructure[1][3] = eeeaone[1];
    
    
    // For EEEB
    let timetableStructureOfeeeb = [
        ["Monday(LH1)", "Lab", "", "", "Free"],
        ["Tuesday(LH1)", "Lab", "", "", "Free"],
        ["Wednesday(LH2)", "Lab", "", "", "Free"],
        ["Thursday (LH1)", "", "", "", ""],
        ["Friday(LH1)", "Brige maths", "", "", "B kannada"]
    ];
    
    // Shuffle subjects randomly
    shuffle(eeebfour);
    shuffle(eeebone);
    
    // Assign subjects to timetable
    timetableStructureOfeeeb[0][2] = eeebfour[0];
    timetableStructureOfeeeb[0][3] = eeebfour[1];
    timetableStructureOfeeeb[1][2] = eeebfour[2];
    timetableStructureOfeeeb[1][3] = eeebfour[3];
    timetableStructureOfeeeb[2][2] = eeebfour[4];
    timetableStructureOfeeeb[2][3] = eeebfour[0];
    timetableStructureOfeeeb[3][3] = eeebfour[1];
    timetableStructureOfeeeb[3][2] = eeebfour[2];
    timetableStructureOfeeeb[3][1] = eeebone[0];
    timetableStructureOfeeeb[4][3] = eeebfour[3];
    timetableStructureOfeeeb[4][2] = eeebfour[4];
    timetableStructureOfeeeb[3][4] = eeebone[1];
    
    
    let totaleeedepartmentfifthsem=[];
    totaleeedepartmentfifthsem.push(timetableStructure)
    totaleeedepartmentfifthsem.push(timetableStructureOfeeeb)
    return totaleeedepartmentfifthsem;
    
    }
