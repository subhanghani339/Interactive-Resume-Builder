// Get the button and skills list elements
const toggleSkillsButton = document.getElementById("toggle-skills-btn");
const skillsList = document.getElementById("skills-list");

// Add a click event listener to the button
toggleSkillsButton?.addEventListener("click", () => {
    if (skillsList?.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    } else {
        skillsList!.style.display = "none";
        toggleSkillsButton!.textContent = "Show Skills";
    }
});
