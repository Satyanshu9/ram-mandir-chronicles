document.addEventListener('DOMContentLoaded', function () {
    const welcomeContainer = document.querySelector('.welcome-container');
    const startButton = document.getElementById('startButton');
  
    startButton.addEventListener('click', function () {
      // Add your desired action when the "आरम्भ" button is clicked
    });
  
    // Add opening animation
    welcomeContainer.style.animation = 'fadeIn 2s ease';
  });
  <!-- Update index.html to include the struggle page -->
<!-- Add the following code where the "आरम्भ" button is clicked -->

startButton.addEventListener('click', function () {
  window.location.href = 'struggle.html';
});
