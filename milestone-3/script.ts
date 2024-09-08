// Get the form and resume display elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
const toast = document.getElementById("toast") as HTMLElement;

// Personal Info elements
const nameDisplay = document.getElementById("name-display") as HTMLElement;
const emailDisplay = document.getElementById("email-display") as HTMLElement;
const phoneDisplay = document.getElementById("phone-display") as HTMLElement;
const profilePicDisplay = document.getElementById("profile-pic-display") as HTMLImageElement;

// Education, Skills, Work Experience lists
const educationList = document.getElementById("education-list") as HTMLElement;
const skillsList = document.getElementById("skills-list") as HTMLElement;
const workList = document.getElementById("work-list") as HTMLElement;

// Add More Education and Skills functionality
const addEducationBtn = document.getElementById("add-education") as HTMLButtonElement;
const educationSection = document.getElementById("education-section") as HTMLElement;
const addSkillBtn = document.getElementById("add-skill") as HTMLButtonElement;
const skillsSection = document.getElementById("skills-section") as HTMLElement;

// Helper function to show toast messages
function showToast(message: string, isError: boolean = false) {
    toast.textContent = message;
    toast.style.backgroundColor = isError ? "red" : "green";
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Helper function to create a remove button
function createRemoveButton(): HTMLButtonElement {
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.style.marginLeft = "10px";
    return removeBtn;
}

// Event listener for adding more education fields with a remove button
addEducationBtn.addEventListener("click", () => {
    const newEducationItem = document.createElement("div");
    newEducationItem.classList.add("education-item");

    newEducationItem.innerHTML = `
        <label for="degree">Degree:</label>
        <input type="text" class="degree" placeholder="e.g., BSc in Computer Science" required />

        <label for="institution">Institution:</label>
        <input type="text" class="institution" placeholder="e.g., ABC University" required />

        <label for="year">Year:</label>
        <input type="text" class="year" placeholder="e.g., 2018-2022" required />
    `;

    // Add remove button to the newly added education item
    const removeBtn = createRemoveButton();
    newEducationItem.appendChild(removeBtn);

    // Remove the education item on click of the remove button
    removeBtn.addEventListener("click", () => {
        newEducationItem.remove();
    });

    educationSection.appendChild(newEducationItem);
});

// Event listener for adding more skills fields with a remove button
addSkillBtn.addEventListener("click", () => {
    const newSkillItem = document.createElement("div");
    newSkillItem.classList.add("skill-item");

    const newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    newSkillInput.classList.add("skill");
    newSkillInput.placeholder = "Enter a skill";
    newSkillInput.required = true;

    // Add remove button to the skill item
    const removeBtn = createRemoveButton();
    newSkillItem.appendChild(newSkillInput);
    newSkillItem.appendChild(removeBtn);

    // Remove the skill item on click of the remove button
    removeBtn.addEventListener("click", () => {
        newSkillItem.remove();
    });

    skillsSection.appendChild(newSkillItem);
});

// Validate form fields to ensure they are not empty or just spaces
function validateForm(): boolean {
    const fields = form.querySelectorAll("input[required]");
    let isValid = true;

    fields.forEach((field) => {
        const input = field as HTMLInputElement;
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    return isValid;
}

// Helper function to check image validity
function loadImageWithFallback(imgElement: HTMLImageElement, src: string) {
    imgElement.src = src;
    imgElement.onerror = () => {
        imgElement.src = "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";
    };
}

// Form submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check if the form is valid
    if (!validateForm()) {
        showToast("Please fill in all required fields.", true);
        return;
    }

    // Get personal info
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).value.trim() || "https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png";

    // Update personal info in resume
    nameDisplay.textContent = name;
    emailDisplay.textContent = `Email: ${email}`;
    phoneDisplay.textContent = `Phone: ${phone}`;
    loadImageWithFallback(profilePicDisplay, profilePic);

    // Update education
    const educationItems = educationSection.querySelectorAll(".education-item");
    educationList.innerHTML = ""; // Clear current list
    educationItems.forEach((item) => {
        const degree = (item.querySelector(".degree") as HTMLInputElement).value.trim();
        const institution = (item.querySelector(".institution") as HTMLInputElement).value.trim();
        const year = (item.querySelector(".year") as HTMLInputElement).value.trim();

        const educationEntry = document.createElement("li");
        educationEntry.innerHTML = `<strong>${degree}</strong> - ${institution} (${year})`;
        educationList.appendChild(educationEntry);
    });

    // Update skills
    const skillInputs = skillsSection.querySelectorAll(".skill");
    skillsList.innerHTML = ""; // Clear current list
    skillInputs.forEach((input) => {
        const skill = (input as HTMLInputElement).value.trim();
        if (skill) {
            const skillEntry = document.createElement("li");
            skillEntry.textContent = skill;
            skillsList.appendChild(skillEntry);
        }
    });

    // Get and update work experience
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value.trim();
    const company = (document.getElementById("company") as HTMLInputElement).value.trim();
    const workYear = (document.getElementById("work-year") as HTMLInputElement).value.trim();

    workList.innerHTML = `<li><strong>${jobTitle}</strong> - ${company} (${workYear})</li>`;

    // Hide the form and show the resume
    form.style.display = "none";
    resumeDisplay.style.display = "block";

    // Show success toast
    showToast("Resume generated successfully!");
});
