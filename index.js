var _a;
function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display Editable Dynamic Resume in the output div
    document.getElementById('resumeOutput').innerHTML = "\n        <p contenteditable=\"true\"><strong>Name:</strong> ".concat(name, "</p>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n        <pcontenteditable=\"true\"><strong>Experience:</strong> ").concat(experience, "</p>\n        <p contenteditable=\"true\"><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
}
// Add event listener and call the function on form submit
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing
    generateResume(); // Call the function
});
