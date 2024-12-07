// Initialize variables
let pushUpCount = 0; // Counter for push-ups
let secondsElapsed = 0; // Timer in seconds

// Get DOM elements
const pushUpCountDisplay = document.getElementById('pushupCount');
const timerDisplay = document.getElementById('timer');

// Function to format time with leading zeros
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Function to update the timer
function updateTimer() {
    secondsElapsed++;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor((secondsElapsed % 3600) / 60);
    const seconds = secondsElapsed % 60;

    // Update timer display
    timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Function to update push-up count
function updatePushUpCount() {
    pushUpCount++;

    // Update the push-up count on the screen
    pushUpCountDisplay.textContent = pushUpCount;

    // Alert every 100 push-ups
    if (pushUpCount % 100 === 0) {
        alert(`You've reached ${pushUpCount} push-ups! Keep going!`);
    }

    // Stop at 1 trillion push-ups
    if (pushUpCount >= 1_000_000_000_000) {
        clearInterval(pushUpInterval);
        clearInterval(timerInterval);
        alert('Congratulations! You’ve reached 1 trillion push-ups!');
    }
}

// Start intervals
const timerInterval = setInterval(updateTimer, 1000); // Update timer every second
const pushUpInterval = setInterval(updatePushUpCount, 1); // Increment push-ups rapidly
