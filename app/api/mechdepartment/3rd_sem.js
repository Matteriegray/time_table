export const thirdsemmech= (mechafour,mechaone,mechbfour,mechbone,mechcfour,mechcone) => {

    // Timetable structure for MECHA
    let timetableStructure = [
        ["Monday(203)", "Wshop2", "Free", "", ""],
        ["Tuesday(203)", "", "", "", ""],
        ["Wednesday(203)", "MD1", "Free", "", ""],
        ["Thursday (203)", "Lab", "", "", "B kannada"],
        ["Friday (203)", "Bridge maths", "", "", "Free"]
    ];
    
    // Shuffle subjects randomly
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    shuffle(mechafour);
    shuffle(mechaone);
    
    // Assign subjects to timetable
    timetableStructure[0][4] = mechafour[0];
    timetableStructure[0][3] = mechafour[1];
    timetableStructure[1][1] = mechafour[2];
    timetableStructure[1][2] = mechafour[3];
    timetableStructure[2][3] = mechafour[4];
    timetableStructure[1][4] = mechafour[0];
    timetableStructure[3][2] = mechafour[1];
    timetableStructure[3][3] = mechafour[2];
    timetableStructure[2][4] = mechaone[0];
    timetableStructure[4][2] = mechafour[3];
    timetableStructure[4][3] = mechafour[4];
    timetableStructure[1][3] = mechaone[1];
    
    
    // For MECHB
    let timetableStructureOfmechb = [
        ["Monday(203)", "", "", "Free", "Wshop2"],
        ["Tuesday(204)", "MD1", "", "", ""],
        ["Wednesday(203)", "", "", "Free", "Free"],
        ["Thursday (204)", "", "", "Lab", "B kannada"],
        ["Friday(204)", "Bridge maths", "", "", ""]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechbfour);
    shuffle(mechbone);
    
    // Assign subjects to timetable
    timetableStructureOfmechb[0][2] = mechbfour[0];
    timetableStructureOfmechb[0][1] = mechbfour[1];
    timetableStructureOfmechb[1][2] = mechbfour[2];
    timetableStructureOfmechb[1][3] = mechbfour[3];
    timetableStructureOfmechb[2][2] = mechbfour[4];
    timetableStructureOfmechb[2][1] = mechbfour[0];
    timetableStructureOfmechb[4][3] = mechbfour[1];
    timetableStructureOfmechb[3][2] = mechbfour[2];
    timetableStructureOfmechb[3][1] = mechbone[0];
    timetableStructureOfmechb[4][4] = mechbfour[3];
    timetableStructureOfmechb[4][2] = mechbfour[4];
    timetableStructureOfmechb[1][4] = mechbone[1];

    // For MECHC
    let timetableStructureOfmechc = [
        ["Monday(204)", "Lab", "", "", ""],
        ["Tuesday(204)", "", "", "MD1", "Free"],
        ["Wednesday(204)", "", "", "", ""],
        ["Thursday (203,204)", "", "Free", "", "B kannada"],
        ["Friday(203)", "Bridge maths", "Wshop2", "Free", ""]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechcfour);
    shuffle(mechcone);
    
    // Assign subjects to timetable
    timetableStructureOfmechc[0][2] = mechcfour[0];
    timetableStructureOfmechc[0][3] = mechcfour[1];
    timetableStructureOfmechc[1][2] = mechcfour[2];
    timetableStructureOfmechc[1][1] = mechcfour[3];
    timetableStructureOfmechc[2][2] = mechcfour[4];
    timetableStructureOfmechc[2][3] = mechcfour[0];
    timetableStructureOfmechc[2][1] = mechcfour[1];
    timetableStructureOfmechc[2][4] = mechcfour[2];
    timetableStructureOfmechc[3][1] = mechcone[0];
    timetableStructureOfmechc[3][3] = mechcfour[3];
    timetableStructureOfmechc[4][4] = mechcfour[4];
    timetableStructureOfmechc[0][4] = mechcone[1];
    
    
    let totalmechdepartmentthirdsem=[];
    totalmechdepartmentthirdsem.push(timetableStructure)
    totalmechdepartmentthirdsem.push(timetableStructureOfmechb)
    totalmechdepartmentthirdsem.push(timetableStructureOfmechc)
    return totalmechdepartmentthirdsem;
    
    }