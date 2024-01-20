document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    var typedText = document.querySelector('.typing-animation');
    var textToType = ["Web Developer", "Machine Learning Enthusiast", "Tech Enthusiast"];
    var index = 0;
    var charIndex = 0;

    function type() {
        if (charIndex < textToType[index].length) {
            typedText.textContent += textToType[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textToType[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % textToType.length;
            setTimeout(type, 500);
        }
    }

    type(); // Start the typing animation

    // Dark Mode Toggle
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});