startButton.addEventListener("click", checkIfValid); // Start button event listener
pauseButton.addEventListener("click", pauseTimer); // Pause button event listener
resetButton.addEventListener("click", resetTimer); // Reset button event listener

/**
 * Checks if the input values for minutes and seconds are valid, and takes the appropriate actions
 */
function checkIfValid() {
    console.log(minutesInput.value);
    console.log(secondsInput.value);
    // Stores if the minute or second the user inputed are not numbers in boolean values 
    let minuteIsValid = isNaN(parseInt(minutesInput.value));
    let secondsIsValid = isNaN(parseInt(secondsInput.value));

    if (minuteIsValid == true && secondsIsValid == true) { // Checks if both of them are NaN
        return; // If both are true it won't start the timer
    }
    if (minuteIsValid == true) { // Checks if only minutes input is NaN
        minutesInput.value = 0;  // If so, makes it's value 0
    }
    if (secondsIsValid == true) { // Checks if only seconds input is Nan
        secondsInput.value = 0    // If so, makes it's value 0
    }
    
    if(parseInt(secondsInput.value) >= 60) { // Changes seconds value to 59 whenever it exceeds 60
        secondsInput.value = 59;
    }

    startTimer(); // Call the start timer after 
}

/**
 * Starts the timer and updates the user interface properly
 */
function startTimer() {
    // Hide the start button and show the pause button
    startButton.style.display = "none";
    pauseButton.style.display = "flex";

    // Disable input field while the timer is running
    secondsInput.readOnly = true;
    minutesInput.readOnly = true;

    // Calculates the total seconds based on the user input
    let totalSeconds = parseInt(minutesInput.value) * SecondsInMinutes + parseInt(secondsInput.value);

     // Initial display update to make it consistent (not display "1 :0 " instead of "01:00")
    updateTimerDisplay(totalSeconds); 

    // Sets a one-second interval that runs the inside function 
    timerInterval = setInterval(function () {
        totalSeconds--; // Decrease one seconds of the total seconds
        if (totalSeconds < 0) { // Checks if the total seconds is smaller than 0, if so, stops the interval and ends the timer
            clearInterval(timerInterval);
            timerEnded();
        } else { // If total seconds is bigger than 0, it updates the timer with current time
            updateTimerDisplay(totalSeconds); 
        }
    }, 1000);
}

/**
 * Updates the interface with the current time
 */
function updateTimerDisplay(totalSeconds) {
    // Calculates how much minutes are left by dividing the total seconds by 60 and flooring it out to make it an integer
    const minutes = Math.floor(totalSeconds / SecondsInMinutes); 
    // Calculates how much seconds are left by dividing the total seconds by 60 and getting it's rest
    const seconds = totalSeconds % SecondsInMinutes; 


    // Ensures that if the minute or seconds input values have lenghts smaller than 2, a leading 0 is inserted into them
    minutesInput.value = String(minutes).padStart(2, '0'); 
    secondsInput.value = String(seconds).padStart(2, '0');
}

/**
 * Ends timer
 * Function used when timer reaches 0
 */
function timerEnded() {

    alarmAudio.play(); // Runs the alarm audio

    // Hide the pause button and show the start button
    startButton.style.display = "flex"; 
    pauseButton.style.display = "none";  

    // Enables the inputs fields
    minutesInput.readOnly = false;
    secondsInput.readOnly = false;

    // Resets the input values
    minutesInput.value = "";
    secondsInput.value = "";
}

/**
 * Pauses the timer
 * Function used when pause button is pressed
 */
function pauseTimer() {

    clearInterval(timerInterval); // Stops the timer

    // Hides the pause button and show the start button
    startButton.style.display = "flex"; 
    pauseButton.style.display = "none";
}

/**
 * Resets the timer
 * Function used when reset button is pressed
 */
function resetTimer() {

    clearInterval(timerInterval); // Stops the timer

    // Hides the pause button and show the start button
    startButton.style.display = "flex";
    pauseButton.style.display = "none"

    // Enables the inputs fields
    minutesInput.readOnly = false;
    secondsInput.readOnly = false;

    // Resets the input values
    minutesInput.value = "";
    secondsInput.value = ""
}

stopwatchButton.style.backgroundColor = "rgba(66, 211, 255, 0.13)";
alarmButton.style.backgroundColor = "rgb(79, 209, 217)";


