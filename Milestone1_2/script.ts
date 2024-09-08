
const toggleSkillsButton = document.getElementById("toggle-skills-btn");
const skillsList = document.getElementById("skills-list");


toggleSkillsButton?.addEventListener("click", () => {
    if (skillsList?.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    } else {
        skillsList!.style.display = "none";
        toggleSkillsButton!.textContent = "Show Skills";
    }
});
