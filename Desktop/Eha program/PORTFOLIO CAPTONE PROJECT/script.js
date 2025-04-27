// Dark Mode Toggle Functionality
const toggleModeButton = document.querySelector('.toggle-mode');
const body = document.body;

// Check for dark mode in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

toggleModeButton.addEventListener('click', () => {
    // Toggle dark mode on and off
    body.classList.toggle('dark-mode');
    // Save the current mode to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

