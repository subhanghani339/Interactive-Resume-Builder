import { jsPDF } from 'jspdf';

// Function to generate and download the PDF
function generatePdf() {
    const doc = new jsPDF();

    // Personal Info
    const name = (document.getElementById("name-display") as HTMLElement)?.textContent || '';
    const email = (document.getElementById("email-display") as HTMLElement)?.textContent || '';
    const phone = (document.getElementById("phone-display") as HTMLElement)?.textContent || '';

    doc.setFontSize(18);
    doc.text(name, 10, 10);
    doc.setFontSize(12);
    doc.text(email, 10, 20);
    doc.text(phone, 10, 30);

    // Education
    doc.setFontSize(14);
    doc.text("Education", 10, 40);
    doc.setFontSize(12);
    let y = 50;
    const educationList = document.getElementById("education-list") as HTMLElement;
    educationList.querySelectorAll("li").forEach((item) => {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });

    // Skills
    doc.setFontSize(14);
    doc.text("Skills", 10, y);
    doc.setFontSize(12);
    y += 10;
    const skillsList = document.getElementById("skills-list") as HTMLElement;
    skillsList.querySelectorAll("li").forEach((item) => {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });

    // Work Experience
    doc.setFontSize(14);
    doc.text("Work Experience", 10, y);
    doc.setFontSize(12);
    y += 10;
    const workList = document.getElementById("work-list") as HTMLElement;
    workList.querySelectorAll("li").forEach((item) => {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });

    // Save the PDF
    doc.save("resume.pdf");
}

// Attach the function to the "Download PDF" button
document.getElementById("download-pdf")?.addEventListener("click", generatePdf);
