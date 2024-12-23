const menuButton = document.getElementById('menu');
    const closeButton = document.getElementById('close');
    const sidebar = document.getElementById('sidebar');

    // Show sidebar when hamburger menu is clicked
    menuButton.addEventListener('click', () => {
        sidebar.classList.remove('hidden');  // Show sidebar
        sidebar.style.transform = 'translateX(0)';  // Slide it in
    });

    // Close sidebar when close button is clicked
    closeButton.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(-100%)';  // Slide it out
        setTimeout(() => {
            sidebar.classList.add('hidden');  // Hide sidebar after animation
        }, 300);  // Matches the duration of the transition
    });