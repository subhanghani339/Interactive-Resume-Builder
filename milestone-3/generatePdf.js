"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
// Function to generate and download the PDF
function generatePdf() {
    var _a, _b, _c;
    var doc = new jspdf_1.jsPDF();
    // Personal Info
    var name = ((_a = document.getElementById("name-display")) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var email = ((_b = document.getElementById("email-display")) === null || _b === void 0 ? void 0 : _b.textContent) || '';
    var phone = ((_c = document.getElementById("phone-display")) === null || _c === void 0 ? void 0 : _c.textContent) || '';
    doc.setFontSize(18);
    doc.text(name, 10, 10);
    doc.setFontSize(12);
    doc.text(email, 10, 20);
    doc.text(phone, 10, 30);
    // Education
    doc.setFontSize(14);
    doc.text("Education", 10, 40);
    doc.setFontSize(12);
    var y = 50;
    var educationList = document.getElementById("education-list");
    educationList.querySelectorAll("li").forEach(function (item) {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });
    // Skills
    doc.setFontSize(14);
    doc.text("Skills", 10, y);
    doc.setFontSize(12);
    y += 10;
    var skillsList = document.getElementById("skills-list");
    skillsList.querySelectorAll("li").forEach(function (item) {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });
    // Work Experience
    doc.setFontSize(14);
    doc.text("Work Experience", 10, y);
    doc.setFontSize(12);
    y += 10;
    var workList = document.getElementById("work-list");
    workList.querySelectorAll("li").forEach(function (item) {
        doc.text(item.textContent || '', 10, y);
        y += 10;
    });
    // Save the PDF
    doc.save("resume.pdf");
}
// Attach the function to the "Download PDF" button
(_a = document.getElementById("download-pdf")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generatePdf);
