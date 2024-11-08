export const chemistrycycle= (fourHourSubject,oneHourSubject) => {
// Subjects
const fourHourSubjects = fourHourSubject;
const oneHourSubjects = oneHourSubject;

// Timetable structure for AIML
let timetableStructure = [
    ["Monday(101)", "", "", "", "Lab"],
    ["Tuesday(101)", "", "", "", "Lab"],
    ["Wednesday(101)", "", "Lab", "Lab", ""],
    ["Thursday (101)", "Free", "", "", "Free"],
    ["Friday (101)", "Free", "", "", "Free"]
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle subjects
shuffle(fourHourSubjects);
shuffle(oneHourSubjects);

// Assign subjects to timetable
timetableStructure[0][1] = fourHourSubjects[0];
timetableStructure[0][2] = fourHourSubjects[1];
timetableStructure[1][1] = fourHourSubjects[2];
timetableStructure[1][2] = fourHourSubjects[3];
timetableStructure[2][1] = fourHourSubjects[4];
timetableStructure[2][4] = fourHourSubjects[0];
timetableStructure[3][2] = fourHourSubjects[1];
timetableStructure[3][3] = fourHourSubjects[2];
timetableStructure[0][3] = oneHourSubjects[0];
timetableStructure[4][2] = fourHourSubjects[3];
timetableStructure[4][3] = fourHourSubjects[4];
timetableStructure[1][3] = oneHourSubjects[1];
// For ISE
let timetableStructureOfISE = [
    ["Monday(201)", "Lab", "", "", "Free"],
    ["Tuesday(201)", "Lab", "", "", "Free"],
    ["Wednesday(101)", "Lab", "", "", "Free"],
    ["Thursday (201)", "", "", "", "Free"],
    ["Friday(201)", "", "", "", "Free"]
];

// Shuffle subjects again for ISE
shuffle(fourHourSubjects);
shuffle(oneHourSubjects);

// Assign subjects to ISE timetable
timetableStructureOfISE[0][2] = fourHourSubjects[0];
timetableStructureOfISE[0][3] = fourHourSubjects[1];
timetableStructureOfISE[1][2] = fourHourSubjects[2];
timetableStructureOfISE[1][3] = fourHourSubjects[3];
timetableStructureOfISE[2][2] = fourHourSubjects[4];
timetableStructureOfISE[2][3] = fourHourSubjects[0];
timetableStructureOfISE[3][3] = fourHourSubjects[1];
timetableStructureOfISE[3][2] = fourHourSubjects[2];
timetableStructureOfISE[3][1] = oneHourSubjects[0];
timetableStructureOfISE[4][3] = fourHourSubjects[3];
timetableStructureOfISE[4][2] = fourHourSubjects[4];
timetableStructureOfISE[4][1] = oneHourSubjects[1];

// For CSE A
let timetableStructureOfCSEA = [
    ["Monday(201)", "", "Lab", "lab", ""],
    ["Tuesday(201)", "", "Lab", "lab", ""],
    ["Wednesday(201)", "Free", "", "", "Lab"],
    ["Thursday (202)", "", "", "", "Free"],
    ["Friday(202)", "", "", "", "Free"]
];

// Shuffle subjects for CSE A
shuffle(fourHourSubjects);
shuffle(oneHourSubjects);

// Assign subjects to CSE A timetable
timetableStructureOfCSEA[0][1] = fourHourSubjects[0];
timetableStructureOfCSEA[0][4] = fourHourSubjects[1];
timetableStructureOfCSEA[1][1] = fourHourSubjects[2];
timetableStructureOfCSEA[1][4] = fourHourSubjects[3];
timetableStructureOfCSEA[2][2] = fourHourSubjects[4];
timetableStructureOfCSEA[2][3] = fourHourSubjects[0];
timetableStructureOfCSEA[3][2] = fourHourSubjects[1];
timetableStructureOfCSEA[3][1] = fourHourSubjects[2];
timetableStructureOfCSEA[3][3] = oneHourSubjects[0];
timetableStructureOfCSEA[4][1] = fourHourSubjects[3];
timetableStructureOfCSEA[4][2] = fourHourSubjects[4];
timetableStructureOfCSEA[4][3] = oneHourSubjects[1];

// For CSE B
let timetableStructureOfCSEB = [
    ["Monday (202)", "", "", "", "Free"],
    ["Tuesday (202)", "", "", "", "Free"],
    ["Wednesday(202)", "", "", "", "Free"],
    ["Thursday (202)", "lab", "", "Free", "lab"],
    ["Friday (101)", "", "lab", "lab", ""]
];

// Shuffle subjects for CSE B
shuffle(fourHourSubjects);
shuffle(oneHourSubjects);

// Assign subjects to CSE B timetable
timetableStructureOfCSEB[3][2] = fourHourSubjects[0];
timetableStructureOfCSEB[4][4] = fourHourSubjects[1];
timetableStructureOfCSEB[4][1] = fourHourSubjects[2];
timetableStructureOfCSEB[2][1] = fourHourSubjects[3];
timetableStructureOfCSEB[2][2] = fourHourSubjects[4];
timetableStructureOfCSEB[2][3] = fourHourSubjects[0];
timetableStructureOfCSEB[0][3] = fourHourSubjects[1];
timetableStructureOfCSEB[0][2] = fourHourSubjects[2];
timetableStructureOfCSEB[0][1] = oneHourSubjects[0];
timetableStructureOfCSEB[1][3] = fourHourSubjects[3];
timetableStructureOfCSEB[1][2] = fourHourSubjects[4];
timetableStructureOfCSEB[1][1] = oneHourSubjects[1];

let totalcsedepartmentccycle=[];
totalcsedepartmentccycle.push(timetableStructure)
totalcsedepartmentccycle.push(timetableStructureOfISE)
totalcsedepartmentccycle.push(timetableStructureOfCSEA)
totalcsedepartmentccycle.push(timetableStructureOfCSEB)
return totalcsedepartmentccycle;

};