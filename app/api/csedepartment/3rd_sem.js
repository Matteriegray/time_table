export const thirdsem= (aimlfour,aimlone,iseone,isefour,cseone,csefour) => {

// Timetable structure for AIML
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

shuffle(aimlfour);
shuffle(aimlone);

// Assign subjects to timetable
timetableStructure[0][1] = aimlfour[0];
timetableStructure[0][2] = aimlfour[1];
timetableStructure[1][1] = aimlfour[2];
timetableStructure[1][2] = aimlfour[3];
timetableStructure[2][1] = aimlfour[4];
timetableStructure[2][4] = aimlfour[0];
timetableStructure[3][2] = aimlfour[1];
timetableStructure[3][3] = aimlfour[2];
timetableStructure[0][3] = aimlone[0];
timetableStructure[4][2] = aimlfour[3];
timetableStructure[4][3] = aimlfour[4];
timetableStructure[1][3] = aimlone[1];


// For ISE
let timetableStructureOfISE = [
    ["Monday(LH1)", "Lab", "", "", "Free"],
    ["Tuesday(LH1)", "Lab", "", "", "Free"],
    ["Wednesday(LH2)", "Lab", "", "", "Free"],
    ["Thursday (LH1)", "", "", "", ""],
    ["Friday(LH1)", "Brige maths", "", "", "B kannada"]
];

// Shuffle subjects randomly
shuffle(csefour);
shuffle(cseone);

// Assign subjects to timetable
timetableStructureOfISE[0][2] = isefour[0];
timetableStructureOfISE[0][3] = isefour[1];
timetableStructureOfISE[1][2] = isefour[2];
timetableStructureOfISE[1][3] = isefour[3];
timetableStructureOfISE[2][2] = isefour[4];
timetableStructureOfISE[2][3] = isefour[0];
timetableStructureOfISE[3][3] = isefour[1];
timetableStructureOfISE[3][2] = isefour[2];
timetableStructureOfISE[3][1] = iseone[0];
timetableStructureOfISE[4][3] = isefour[3];
timetableStructureOfISE[4][2] = isefour[4];
timetableStructureOfISE[3][4] = iseone[1];

// For CSE A
let timetableStructureOfCSEA = [
    ["Monday(LH1)", "", "Lab", "Lab", ""],
    ["Tuesday(LH1)", "", "Lab", "Lab", ""],
    ["Wednesday(LH1)", "Free", "", "", "Lab"],
    ["Thursday (LH3)", "", "", "", ""],
    ["Friday(LH3)", "Brige maths", "", "", "B kannada"]
];

// Shuffle subjects randomly
shuffle(csefour);
shuffle(cseone);

// Assign subjects to timetable
timetableStructureOfCSEA[0][1] = csefour[0];
timetableStructureOfCSEA[0][4] = csefour[1];
timetableStructureOfCSEA[1][1] = csefour[2];
timetableStructureOfCSEA[1][4] = csefour[3];
timetableStructureOfCSEA[2][2] = csefour[4];
timetableStructureOfCSEA[2][3] = csefour[0];
timetableStructureOfCSEA[3][2] = csefour[1];
timetableStructureOfCSEA[3][1] = csefour[2];
timetableStructureOfCSEA[3][3] = cseone[0];
timetableStructureOfCSEA[3][4] = csefour[3];
timetableStructureOfCSEA[4][2] = csefour[4];
timetableStructureOfCSEA[4][3] = cseone[1];

// For CSE B
let timetableStructureOfCSEB = [
    ["Monday (LH1)", "", "", "", "Free"],
    ["Tuesday (LH1)", "", "", "", "Free"],
    ["Wednesday(LH1)", "", "", "", ""],
    ["Thursday (LH1)", "Lab", "", "", "Lab"],
    ["Friday (LH2)", "Brige maths", "Lab", "Lab", "B Kannada"]
];

// Shuffle subjects randomly
shuffle(csefour);
shuffle(cseone);

// Assign subjects to timetable
timetableStructureOfCSEB[3][2] = csefour[0];
timetableStructureOfCSEB[3][3] = csefour[1];
timetableStructureOfCSEB[2][4] = csefour[2];
timetableStructureOfCSEB[2][1] = csefour[3];
timetableStructureOfCSEB[2][2] = csefour[4];
timetableStructureOfCSEB[2][3] = csefour[0];
timetableStructureOfCSEB[0][3] = csefour[1];
timetableStructureOfCSEB[0][2] = csefour[2];
timetableStructureOfCSEB[0][1] = cseone[0];
timetableStructureOfCSEB[1][3] = csefour[3];
timetableStructureOfCSEB[1][2] = csefour[4];
timetableStructureOfCSEB[1][1] = cseone[1];

let totalcsedepartmentthirdsem=[];
totalcsedepartmentthirdsem.push(timetableStructure)
totalcsedepartmentthirdsem.push(timetableStructureOfISE)
totalcsedepartmentthirdsem.push(timetableStructureOfCSEA)
totalcsedepartmentthirdsem.push(timetableStructureOfCSEB)
return totalcsedepartmentthirdsem;

}