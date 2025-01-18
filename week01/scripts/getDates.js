
const currentYear = new Date().getFullYear();

document.getElementById('copyright-year').textContent = currentYear

const lastModified = document.lastModified;

// Output the last modified date in the footer's second paragraph
document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
