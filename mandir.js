document.addEventListener('DOMContentLoaded', function () {
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');
    const moveLeftButton = document.getElementById('move-left');
    const moveRightButton = document.getElementById('move-right');
  
    moveLeftButton.addEventListener('click', function () {
      moveBlock(-10);
    });
  
    moveRightButton.addEventListener('click', function () {
      moveBlock(10);
    });
  
    function moveBlock(distance) {
      const currentLeft = parseFloat(getComputedStyle(block1).left);
      const newLeft = currentLeft + distance;
  
      if (newLeft >= 0 && newLeft + block1.offsetWidth <= document.getElementById('game-container').offsetWidth) {
        block1.style.left = `${newLeft}px`;
  
        // Check for collision
        if (checkCollision()) {
          block2.style.backgroundColor = 'green';
          alert('Game won!');
        }
      }
    }
  
    function checkCollision() {
      const rect1 = block1.getBoundingClientRect();
      const rect2 = block2.getBoundingClientRect();
  
      return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      );
    }
  });
  