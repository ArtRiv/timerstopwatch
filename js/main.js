const minutesInput = document.querySelector("#inputTimeMinutes"); // Stores the user input for minutes
const secondsInput = document.querySelector("#inputTimeSeconds"); // Stores the user input for seconds
const startButton = document.querySelector("#startButton"); // Stores the start button to event handling
const pauseButton = document.querySelector("#pauseButton"); // Stores the pause button to event handling
const resetButton = document.querySelector("#resetButton"); // Stores the reset button to event handling
const alarmAudio = document.querySelector("#alarmAudio"); // Stores audio element for the timer alarm
const SecondsInMinutes = 60; // Used to convert minutes to seconds
let timerInterval; // Used to manage the timer update interval

const alarmButton = document.querySelector("#alarmButton");
const stopwatchButton = document.querySelector("#stopwatchButton");
let scriptNames;

document.addEventListener("DOMContentLoaded", function() {
    scriptNames = alarmButton.getAttribute("data-scripts").split(' ');
    loadScript(scriptNames);
});

alarmButton.addEventListener("click", function() {
    scriptNames = this.getAttribute("data-scripts").split(' '); 
    loadScript(scriptNames);
});

stopwatchButton.addEventListener("click", function() {

    stopAlarmTimer();

    scriptNames = this.getAttribute("data-scripts").split(' '); 
    loadScript(scriptNames);
});

function loadScript(scriptNames) {
    const scriptContainer = document.querySelector("#functionalityContainer");

    while (scriptContainer.firstChild) {
        scriptContainer.removeChild(scriptContainer.firstChild);
    }

    scriptNames.forEach(function(scriptName) {
        const script = document.createElement("script");
        script.src = scriptName;
        scriptContainer.appendChild(script);
    });
}

function stopAlarmTimer() {
    clearInterval(timerInterval);

    minutesInput.readOnly = true;
    secondsInput.readOnly = true;

    minutesInput.value = "";
    secondsInput.value = "";

    startButton.style.display = "flex";
    pauseButton.style.display = "none"

    startButton.removeEventListener("click", checkIfValid);
    pauseButton.removeEventListener("click", pauseTimer); 
    resetButton.removeEventListener("click", resetTimer); 
}