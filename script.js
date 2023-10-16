const minutesSeconds = document.querySelector("#minutesSeconds");
const minutesSecondsInput = document.querySelector("#minutesSecondsInput");

const inputTimeSeconds = document.querySelector("#inputTimeSeconds");
const inputTimeMinutes = document.querySelector("#inputTimeMinutes");
const minutesInputLeftZero = document.querySelector("#minutesInputLeftZero");
const secondsInputLeftZero = document.querySelector("#secondsInputLeftZero");
const spanInput = document.querySelector("#spanInput");

const secondsTimer = document.querySelector("#secondsTimer");
const minutesTimer = document.querySelector("#minutesTimer");

const startButton = document.querySelector("#startButton");

inputTimeMinutes.addEventListener("input", function() {
    inputTimeMinutes.value = inputTimeMinutes.value.replace(/[^0-9]/g, '');
});

inputTimeSeconds.addEventListener("input", function() {
    inputTimeSeconds.value = inputTimeSeconds.value.replace(/[^0-9]/g, '');
});

let running = false;

if (running == false) {
    minutesSeconds.addEventListener("click", handleClickMinutesSeconds);
    startButton.addEventListener("click", handleClickStartButton);
} 

function handleClickMinutesSeconds() {
    minutesSeconds.style.display = "none";
    minutesSecondsInput.style.display = "flex";
    running = true;
    console.log(running);

    minutesSeconds.removeEventListener("click", handleClickMinutesSeconds);
}

function handleClickStartButton() {
    let seconds = parseInt(inputTimeSeconds.value);
    let minutes = parseInt(inputTimeMinutes.value);

    if (seconds > 59) {
        seconds = 59;
        console.log(seconds);
    };

    if (minutes < 10) {
        minutesInputLeftZero.style.display = "flex";
    };
    
    if (inputTimeMinutes.value.trim() === "" || isNaN(parseInt(inputTimeMinutes.value))) {
        minutes = 0;
        minutesInputLeftZero.style.display = "flex";
    }
    
    function mainTimerSecondsFunction() { 

        if (seconds < 10 && seconds > 0){
            secondsInputLeftZero.style.display = "flex";

            seconds--;
            console.log(seconds);

            minutesSeconds.style.display = "flex";
            minutesSecondsInput.style.display = "none";

            secondsTimer.innerHTML = seconds;
            minutesTimer.innerHTML = minutes;
        }
        else if (seconds == 10) {
            seconds--;
            console.log(seconds);
            
            minutesSeconds.style.display = "flex";
            minutesSecondsInput.style.display = "none";
            
            secondsTimer.innerHTML = seconds;
            minutesTimer.innerHTML = minutes;

            secondsInputLeftZero.style.display = "flex";
        }
        else if (seconds > 10) {
            seconds--;
            console.log(seconds);
            
            minutesSeconds.style.display = "flex";
            minutesSecondsInput.style.display = "none";

            secondsTimer.innerHTML = seconds;
            minutesTimer.innerHTML = minutes;
        }
        else {
            mainTimerMinutesFunction();
        }
    };

    function mainTimerMinutesFunction() {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
            console.log(minutes);

            minutesTimer.innerHTML = minutes;
            secondsTimer.innerHTML = seconds;
            secondsInputLeftZero.style.display = "none";
        }
    }

    const intervalId = setInterval(mainTimerSecondsFunction, 1000);
    startButton.removeEventListener("click", handleClickStartButton);
}
