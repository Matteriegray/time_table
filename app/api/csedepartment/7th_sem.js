export const seventhSem=(aimlfour,aimlone,iseone,isefour,cseone,csefour)=> {
// Shuffle function to randomize subjects
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate a class timetable structure
function createTimetable() {
    return [
        ["Monday", "", "", "", ""],
        ["Tuesday", "", "", "", ""],
        ["Wednesday", "", "", "", ""],
        ["Thursday", "", "", "", ""],
        ["Friday", "", "", "", ""]
    ];
}

// Assign subjects to AIML timetable
const timetableStructureAIML = createTimetable();
shuffle(aimlfour);
timetableStructureAIML[0][3] = aimlfour[2];
timetableStructureAIML[0][4] = aimlfour[4];
timetableStructureAIML[1][3] = aimlfour[3];
timetableStructureAIML[1][4] = aimlfour[0];
timetableStructureAIML[2][3] = aimlfour[3];
timetableStructureAIML[2][4] = aimlfour[2];
timetableStructureAIML[3][3] = aimlfour[0];
timetableStructureAIML[3][4] = aimlfour[1];
timetableStructureAIML[4][3] = aimlfour[4];
timetableStructureAIML[4][4] = aimlfour[1];

// Assign subjects to ISE timetable
const timetableStructureISE = createTimetable();
shuffle(isefour);
timetableStructureISE[0][1] = isefour[3];
timetableStructureISE[0][2] = isefour[1];
timetableStructureISE[1][1] = isefour[4];
timetableStructureISE[1][2] = isefour[0];
timetableStructureISE[2][1] = isefour[3];
timetableStructureISE[2][2] = isefour[0];
timetableStructureISE[3][1] = isefour[1];
timetableStructureISE[3][2] = isefour[2];
timetableStructureISE[4][1] = isefour[4];
timetableStructureISE[4][2] = isefour[2];

// Assign subjects to CSE timetable
const timetableStructureCSE = createTimetable();
shuffle(csefour);
timetableStructureCSE[0][2] = csefour[0];
timetableStructureCSE[1][1] = csefour[4];
timetableStructureCSE[1][2] = csefour[1];
timetableStructureCSE[2][1] = csefour[2];
timetableStructureCSE[3][1] = csefour[2];
timetableStructureCSE[3][2] = csefour[0];
timetableStructureCSE[4][1] = csefour[3];
timetableStructureCSE[4][2] = csefour[1];
timetableStructureCSE[2][3] = csefour[3];
timetableStructureCSE[2][2] = csefour[4];
let totalcsedepartmentseventhsem=[];
totalcsedepartmentseventhsem.push(timetableStructureAIML)
totalcsedepartmentseventhsem.push(timetableStructureISE)
totalcsedepartmentseventhsem.push(timetableStructureCSE)
return totalcsedepartmentseventhsem;

}