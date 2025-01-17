// Select the DOM elements representing the hour, minute, and second hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update the clock hands and their respective numbers
function updateClock() {
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours(); // Retrieve the current hour
    const minutes = now.getMinutes(); // Retrieve the current minute
    const seconds = now.getSeconds(); // Retrieve the current second

    // Calculate the angles for the hands
    const hourDegree = (hours / 12) * 360; // Hour rotation (12-hour format)
    const minuteDegree = (minutes / 60) * 360; // Minute rotation
    const secondDegree = (seconds / 60) * 360; // Second rotation

    // Select the containers for the numbers on the clock hands
    const hourNumber = hourHand.querySelector('.hour-number');
    const minuteNumber = minuteHand.querySelector('.minute-number');
    const secondNumber = secondHand.querySelector('.second-number');

    // Clear the existing numbers on the hands
    hourNumber.innerHTML = ''; // Remove old hour numbers
    minuteNumber.innerHTML = ''; // Remove old minute numbers
    secondNumber.innerHTML = ''; // Remove old second numbers

    // Add numbers to the second hand
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div'); // Create a new number element
        div.textContent = seconds.toString(); // Set the content to the current second
        div.style.transform = `translateY(-${i * 20}px) rotate(${-secondDegree}deg)`; // Position vertically and keep upright
        secondNumber.appendChild(div); // Append the number to the second hand container
    }

    // Add numbers to the minute hand
    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div'); // Create a new number element
        div.textContent = minutes.toString(); // Set the content to the current minute
        div.style.transform = `translateY(-${i * 20}px) rotate(${-minuteDegree}deg)`; // Position vertically and keep upright
        minuteNumber.appendChild(div); // Append the number to the minute hand container
    }

    // Add numbers to the hour hand
    for (let i = 1; i <= 3; i++) {
        const div = document.createElement('div'); // Create a new number element
        div.textContent = hours.toString(); // Set the content to the current hour
        div.style.transform = `translateY(-${i * 20}px) rotate(${-hourDegree}deg)`; // Position vertically and keep upright
        hourNumber.appendChild(div); // Append the number to the hour hand container
    }

    // Rotate the hands to the correct positions
    secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDegree}deg)`; // Rotate the second hand
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDegree}deg)`; // Rotate the minute hand
    hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDegree}deg)`; // Rotate the hour hand
}

// Set up a timer to update the clock every second
setInterval(updateClock, 1000);

// Call the update function immediately to initialize the clock
updateClock();
