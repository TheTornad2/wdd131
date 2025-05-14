// getdates.js - JavaScript for dynamically updating dates
// Ayrton Bryant Corniel García - WDD 131

// Set the current year for copyright
document.addEventListener('DOMContentLoaded', function () {
  // Get the current year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Set the current year in the copyright notice
  document.getElementById('currentyear').textContent = currentYear;

  // Set the last modified date
  document.getElementById('lastModified').textContent =
    'Last Modification: ' + document.lastModified;
});
