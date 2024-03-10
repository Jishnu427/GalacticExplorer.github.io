// Create the level indicator bar
const levelIndicator = document.createElement('div');
levelIndicator.classList.add('level-indicator');
levelIndicator.style.width = '300px';
levelIndicator.style.height = '30px';
levelIndicator.style.border = '1px solid black';
levelIndicator.style.position = 'relative';

// Create the bar inside the level indicator
const bar = document.createElement('div');
bar.classList.add('bar');
bar.style.height = '100%';
bar.style.backgroundColor = '#8c926a'; // Initial level color
bar.style.position = 'absolute';
bar.style.top = '0';
bar.style.left = '0';
bar.style.transition = 'width 1s linear';
bar.style.width = '0';

// Append the bar to the level indicator
levelIndicator.appendChild(bar);

document.body.appendChild(levelIndicator);

let currentLevel = 1;

function updateLevel() {
  currentLevel++;
  // Set the color based on the current level
  switch (currentLevel) {
    case 1:
      bar.style.backgroundColor = '#8c926a';
      break;
    case 2:
      bar.style.backgroundColor = '#181818';
      break;
    case 3:
      bar.style.backgroundColor = '#c6cba5';
      break;
    // Add more cases for additional levels if needed
    default:
      break;
  }
}

function startTimer() {
  setInterval(updateLevel, 45000);
}

// Start the timer
startTimer();
