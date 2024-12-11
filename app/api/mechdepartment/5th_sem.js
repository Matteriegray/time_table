export const fifthsemmech = (mechafour,mechaone,mechbfour,mechbone,mechcfour,mechcone) => {

    // Timetable structure for MECHA
    let timetableStructure = [
        ["Monday(101)", "", "", "Free", "MLab"],
        ["Tuesday(101)", "", "", "Free", "FMLab"],
        ["Wednesday(101)", "", "", "Free", "MATLab"],
        ["Thursday (101)", "", "", "", "Free"],
        ["Friday (101)", "Free", "Free", "Free", "Free"]
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
    timetableStructure[0][1] = mechafour[0];
    timetableStructure[0][2] = mechafour[1];
    timetableStructure[1][1] = mechafour[2];
    timetableStructure[1][2] = mechafour[3];
    timetableStructure[2][1] = mechafour[0];
    timetableStructure[3][2] = mechafour[1];
    timetableStructure[3][3] = mechafour[2];
    timetableStructure[3][1] = mechaone[0];
    timetableStructure[2][2] = mechafour[3];
    
    
    
    // For MECHB
    let timetableStructureOfmechb = [
        ["Monday(101)", "MLab", "Free", "", ""],
        ["Tuesday(101)", "FMLab", "Free", "", ""],
        ["Wednesday(101)", "MATLab", "Free", "", ""],
        ["Thursday (102)", "", "", "", "Free"],
        ["Friday(102)", "Free", "Free", "Free", "Free"]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechbfour);
    shuffle(mechbone);
    
    // Assign subjects to timetable
    timetableStructureOfmechb[0][4] = mechbfour[0];
    timetableStructureOfmechb[0][3] = mechbfour[1];
    timetableStructureOfmechb[1][4] = mechbfour[2];
    timetableStructureOfmechb[1][3] = mechbfour[3];
    timetableStructureOfmechb[2][3] = mechbfour[0];
    timetableStructureOfmechb[2][4] = mechbfour[1];
    timetableStructureOfmechb[3][2] = mechbfour[2];
    timetableStructureOfmechb[3][1] = mechbone[0];
    timetableStructureOfmechb[3][3] = mechbfour[3];

    // For MECHC
    let timetableStructureOfmechc = [
        ["Monday(102)", "Free", "Free", "Free", "Free"],
        ["Tuesday(102)", "", "", "MLab", "Free"],
        ["Wednesday(102)", "", "", "", "Free"],
        ["Thursday (102)", "Free", "MATLab1", "Free", ""],
        ["Friday(102)", "", "FMLab", "", ""]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechcfour);
    shuffle(mechcone);
    
    // Assign subjects to timetable
    timetableStructureOfmechc[4][4] = mechcfour[0];
    timetableStructureOfmechc[2][1] = mechcfour[1];
    timetableStructureOfmechc[1][2] = mechcfour[2];
    timetableStructureOfmechc[1][1] = mechcfour[3];
    timetableStructureOfmechc[2][3] = mechcfour[0];
    timetableStructureOfmechc[4][1] = mechcfour[1];
    timetableStructureOfmechc[2][2] = mechcfour[2];
    timetableStructureOfmechc[3][4] = mechcone[0];
    timetableStructureOfmechc[4][3] = mechcfour[3];

    
    let totalmechdepartmentfifthsem=[];
    totalmechdepartmentfifthsem.push(timetableStructure)
    totalmechdepartmentfifthsem.push(timetableStructureOfmechb)
    totalmechdepartmentfifthsem.push(timetableStructureOfmechc)
    return totalmechdepartmentfifthsem;
    
    }
