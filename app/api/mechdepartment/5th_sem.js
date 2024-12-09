export const fifthsemmech = (mechafour,mechaone,mechbfour,mechbone,mechcfour,mechcone) => {

    // Timetable structure for MECHA
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
    
    shuffle(mechafour);
    shuffle(mechaone);
    
    // Assign subjects to timetable
    timetableStructure[0][1] = mechafour[0];
    timetableStructure[0][2] = mechafour[1];
    timetableStructure[1][1] = mechafour[2];
    timetableStructure[1][2] = mechafour[3];
    timetableStructure[2][1] = mechafour[4];
    timetableStructure[2][4] = mechafour[0];
    timetableStructure[3][2] = mechafour[1];
    timetableStructure[3][3] = mechafour[2];
    timetableStructure[0][3] = mechaone[0];
    timetableStructure[4][2] = mechafour[3];
    timetableStructure[4][3] = mechafour[4];
    timetableStructure[1][3] = mechaone[1];
    
    
    // For MECHB
    let timetableStructureOfmechb = [
        ["Monday(LH1)", "Lab", "", "", "Free"],
        ["Tuesday(LH1)", "Lab", "", "", "Free"],
        ["Wednesday(LH2)", "Lab", "", "", "Free"],
        ["Thursday (LH1)", "", "", "", ""],
        ["Friday(LH1)", "Brige maths", "", "", "B kannada"]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechbfour);
    shuffle(mechbone);
    
    // Assign subjects to timetable
    timetableStructureOfmechb[0][2] = mechbfour[0];
    timetableStructureOfmechb[0][3] = mechbfour[1];
    timetableStructureOfmechb[1][2] = mechbfour[2];
    timetableStructureOfmechb[1][3] = mechbfour[3];
    timetableStructureOfmechb[2][2] = mechbfour[4];
    timetableStructureOfmechb[2][3] = mechbfour[0];
    timetableStructureOfmechb[3][3] = mechbfour[1];
    timetableStructureOfmechb[3][2] = mechbfour[2];
    timetableStructureOfmechb[3][1] = mechbone[0];
    timetableStructureOfmechb[4][3] = mechbfour[3];
    timetableStructureOfmechb[4][2] = mechbfour[4];
    timetableStructureOfmechb[3][4] = mechbone[1];

    // For MECHC
    let timetableStructureOfmechc = [
        ["Monday(LH1)", "Lab", "", "", "Free"],
        ["Tuesday(LH1)", "Lab", "", "", "Free"],
        ["Wednesday(LH2)", "Lab", "", "", "Free"],
        ["Thursday (LH1)", "", "", "", ""],
        ["Friday(LH1)", "Brige maths", "", "", "B kannada"]
    ];
    
    // Shuffle subjects randomly
    shuffle(mechcfour);
    shuffle(mechcone);
    
    // Assign subjects to timetable
    timetableStructureOfmechc[0][2] = mechcfour[0];
    timetableStructureOfmechc[0][3] = mechcfour[1];
    timetableStructureOfmechc[1][2] = mechcfour[2];
    timetableStructureOfmechc[1][3] = mechcfour[3];
    timetableStructureOfmechc[2][2] = mechcfour[4];
    timetableStructureOfmechc[2][3] = mechcfour[0];
    timetableStructureOfmechc[3][3] = mechcfour[1];
    timetableStructureOfmechc[3][2] = mechcfour[2];
    timetableStructureOfmechc[3][1] = mechcone[0];
    timetableStructureOfmechc[4][3] = mechcfour[3];
    timetableStructureOfmechc[4][2] = mechcfour[4];
    timetableStructureOfmechc[3][4] = mechcone[1];
    
    
    let totalmechdepartmentfifthsem=[];
    totalmechdepartmentfifthsem.push(timetableStructure)
    totalmechdepartmentfifthsem.push(timetableStructureOfmechb)
    totalmechdepartmentfifthsem.push(timetableStructureOfmechc)
    return totalmechdepartmentfifthsem;
    
    }
