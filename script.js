document.getElementById('timetable-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const timetableOutput = document.getElementById('timetable-output');

    // Sample timetable data (You can replace this with actual logic)
    const sampleTimetable = {
        CSE: {
            1: 'Math, Physics, Chemistry, Programming',
            2: 'Data Structures, Algorithms, Discrete Mathematics',
        },
        ECE: {
            1: 'Circuit Theory, Electronics, Mathematics',
            2: 'Signals and Systems, Digital Logic Design',
        },
        ME: {
            1: 'Engineering Mechanics, Mathematics',
            2: 'Thermodynamics, Fluid Mechanics',
        },
        CE: {
            1: 'Engineering Drawing, Mathematics',
            2: 'Surveying, Structural Analysis',
        },
    };

    const timetable = sampleTimetable[branch][semester];

    if (timetable) {
        timetableOutput.innerHTML = `<h2>Timetable for ${branch} - Semester ${semester}</h2><p>${timetable}</p>`;
        timetableOutput.style.display = 'block'; // Show the output
    } else {
        timetableOutput.innerHTML = '<p>No timetable available for the selected branch and semester.</p>';
        timetableOutput.style.display = 'block'; // Show the output
    }
});
