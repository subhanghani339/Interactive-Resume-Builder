// Get the form and resume display elements
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
var toast = document.getElementById("toast");
// Personal Info elements
var nameDisplay = document.getElementById("name-display");
var emailDisplay = document.getElementById("email-display");
var phoneDisplay = document.getElementById("phone-display");
var profilePicDisplay = document.getElementById("profile-pic-display");
// Education, Skills, Work Experience lists
var educationList = document.getElementById("education-list");
var skillsList = document.getElementById("skills-list");
var workList = document.getElementById("work-list");
// Add More Education and Skills functionality
var addEducationBtn = document.getElementById("add-education");
var educationSection = document.getElementById("education-section");
var addSkillBtn = document.getElementById("add-skill");
var skillsSection = document.getElementById("skills-section");
// Helper function to show toast messages
function showToast(message, isError) {
    if (isError === void 0) { isError = false; }
    toast.textContent = message;
    toast.style.backgroundColor = isError ? "red" : "green";
    toast.className = "toast show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
// Helper function to create a remove button
function createRemoveButton() {
    var removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.style.marginLeft = "10px";
    return removeBtn;
}
// Event listener for adding more education fields with a remove button
addEducationBtn.addEventListener("click", function () {
    var newEducationItem = document.createElement("div");
    newEducationItem.classList.add("education-item");
    newEducationItem.innerHTML = "\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" class=\"degree\" placeholder=\"e.g., BSc in Computer Science\" required />\n\n        <label for=\"institution\">Institution:</label>\n        <input type=\"text\" class=\"institution\" placeholder=\"e.g., ABC University\" required />\n\n        <label for=\"year\">Year:</label>\n        <input type=\"text\" class=\"year\" placeholder=\"e.g., 2018-2022\" required />\n    ";
    // Add remove button to the newly added education item
    var removeBtn = createRemoveButton();
    newEducationItem.appendChild(removeBtn);
    // Remove the education item on click of the remove button
    removeBtn.addEventListener("click", function () {
        newEducationItem.remove();
    });
    educationSection.appendChild(newEducationItem);
});
// Event listener for adding more skills fields with a remove button
addSkillBtn.addEventListener("click", function () {
    var newSkillItem = document.createElement("div");
    newSkillItem.classList.add("skill-item");
    var newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.classList.add("skill");
    newSkillInput.placeholder = "Enter a skill";
    newSkillInput.required = true;
    // Add remove button to the skill item
    var removeBtn = createRemoveButton();
    newSkillItem.appendChild(newSkillInput);
    newSkillItem.appendChild(removeBtn);
    // Remove the skill item on click of the remove button
    removeBtn.addEventListener("click", function () {
        newSkillItem.remove();
    });
    skillsSection.appendChild(newSkillItem);
});
// Validate form fields to ensure they are not empty or just spaces
function validateForm() {
    var fields = form.querySelectorAll("input[required]");
    var isValid = true;
    fields.forEach(function (field) {
        var input = field;
        if (!input.value.trim()) {
            isValid = false;
        }
    });
    return isValid;
}
// Helper function to check image validity
function loadImageWithFallback(imgElement, src) {
    imgElement.src = src;
    imgElement.onerror = function () {
        imgElement.src = "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";
    };
}
// Form submit event listener
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Check if the form is valid
    if (!validateForm()) {
        showToast("Please fill in all required fields.", true);
        return;
    }
    // Get personal info
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var profilePic = document.getElementById("profile-pic").value.trim() || "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";
    // Update personal info in resume
    nameDisplay.textContent = name;
    emailDisplay.textContent = "Email: ".concat(email);
    phoneDisplay.textContent = "Phone: ".concat(phone);
    loadImageWithFallback(profilePicDisplay, profilePic);
    // Update education
    var educationItems = educationSection.querySelectorAll(".education-item");
    educationList.innerHTML = ""; // Clear current list
    educationItems.forEach(function (item) {
        var degree = item.querySelector(".degree").value.trim();
        var institution = item.querySelector(".institution").value.trim();
        var year = item.querySelector(".year").value.trim();
        var educationEntry = document.createElement("li");
        educationEntry.innerHTML = "<strong>".concat(degree, "</strong> - ").concat(institution, " (").concat(year, ")");
        educationList.appendChild(educationEntry);
    });
    // Update skills
    var skillInputs = skillsSection.querySelectorAll(".skill");
    skillsList.innerHTML = ""; // Clear current list
    skillInputs.forEach(function (input) {
        var skill = input.value.trim();
        if (skill) {
            var skillEntry = document.createElement("li");
            skillEntry.textContent = skill;
            skillsList.appendChild(skillEntry);
        }
    });
    // Get and update work experience
    var jobTitle = document.getElementById("job-title").value.trim();
    var company = document.getElementById("company").value.trim();
    var workYear = document.getElementById("work-year").value.trim();
    workList.innerHTML = "<li><strong>".concat(jobTitle, "</strong> - ").concat(company, " (").concat(workYear, ")</li>");
    // Hide the form and show the resume
    form.style.display = "none";
    resumeDisplay.style.display = "block";
    // Show success toast
    showToast("Resume generated successfully!");
});
