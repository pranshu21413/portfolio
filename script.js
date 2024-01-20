// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Select the dark mode toggle button
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Add a click event listener to the button
    darkModeToggle.addEventListener("click", function() {
        // Toggle the dark mode class on the body
        document.body.classList.toggle("dark-mode");
    });
});