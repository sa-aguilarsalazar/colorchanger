const modeToggle = document.getElementById('modeToggle');
const modeTitle = document.getElementById('modeTitle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Fade effect for title change
  modeTitle.style.opacity = 0;
  setTimeout(() => {
    // Change title text and button icon based on the current mode
    if (document.body.classList.contains('light-mode')) {
      modeTitle.textContent = 'Gato Blanco'; // Light mode title
      modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
      modeTitle.textContent = 'Gato Negro'; // Dark mode title
      modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
    modeTitle.style.opacity = 1;
  }, 300); // Wait for fade-out effect to finish
});
