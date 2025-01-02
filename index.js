document.getElementById('registrationForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); 

    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const semester = document.getElementById('semester').value;
    const selectedCourses = Array.from(document.querySelectorAll('input[name="courses"]:checked'))
                                 .map(course => course.value);

    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    if (selectedCourses.length > 0) {
        confirmation.innerHTML = `
            <h3>Registration Successful!</h3>
            <p>Student Name: ${studentName}</p>
            <p>Student ID: ${studentId}</p>
            <p>Semester: ${semester}</p>
            <p>Registered Courses: ${selectedCourses.join(', ')}</p>
        `;
    } else {
        confirmation.innerHTML = `<p style="color: red;">Please select at least one course to register.</p>`;
    }
});
