function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

   // Display Editable Dynamic Resume in the output div
    (document.getElementById('resumeOutput') as HTMLElement).innerHTML = `
        <p contenteditable="true><strong>Name:</strong> ${name}</p>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
        <p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
        <p contenteditable="true"><strong>Experience:</strong> ${experience}</p>
        <p contenteditable="true"><strong>Skills:</strong> ${skills}</p>
    `;
}

// Add event listener and call the function on form submit
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing
    generateResume(); // Call the function
})
