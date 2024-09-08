// Get the button and skills list elements
var toggleSkillsButton = document.getElementById("toggle-skills-btn");
var skillsList = document.getElementById("skills-list");
// Add a click event listener to the button
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if ((skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === "none") {
        skillsList.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillsList.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
