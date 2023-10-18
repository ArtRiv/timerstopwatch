const minutesTimer = document.querySelector("#minutesTimer");
const secondstimer = document.querySelector("#secondsTimer");
const alarmAudio = document.querySelector("#alarmAudio");
let intervalId;

minutesSeconds.addEventListener("click", changeToInput);
minutesSeconds.click();

function changeToInput() {
    minutesSeconds.style.display = "none";
    minutesSecondsInput.style.display = "flex";
    minutesSeconds.removeEventListener("click", changeToInput);
}
function changeToOutput() {
    minutesSeconds.style.display = "flex";
    minutesSecondsInput.style.display = "none";
}

startButton.addEventListener("click", startTimer);

function startTimer() {
    changeToOutput();
    if (checkIfValid()) {
        startButton.style.display = "none";
        pauseButton.style.display = "flex";
        decreaseTime();
        intervalId = setInterval(decreaseTime, 1000); 
    }
    else {
        startButton.addEventListener("click", startTimer);
        minutesSeconds.addEventListener("click", changeToInput);
    }
};

pauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
    clearInterval(intervalId);
    startButton.style.display = "flex";
    pauseButton.style.display = "none";
    startButton.addEventListener("click", startTimer);
};

function decreaseTime() {
    checkIfValid();
    let minutes = parseInt(inputTimeMinutes.value);
    let seconds = parseInt(inputTimeSeconds.value);

    if (seconds > 0) {
        seconds--;
        inputTimeSeconds.value = seconds;
        console.log(seconds);
        secondstimer.innerHTML = seconds;
        minutesTimer.innerHTML = minutes;
        checkIfValid();
    }
    else if (seconds == 0) {
        if (minutes > 0) {
            secondsInputLeftZero.style.display = "none";
            seconds = 59;
            console.log(seconds);
            minutes--;

            inputTimeMinutes.value = minutes;
            inputTimeSeconds.value = seconds;

            minutesTimer.innerHTML = minutes;
            secondstimer.innerHTML = seconds;
            console.log(minutes);
            checkIfValid();
        } 
        else if (minutes == 0) {
            clearInterval(intervalId);
            console.log("acabou");
            pauseButton.style.display = "none";
            startButton.style.display = "flex";
            minutesInputLeftZero.style.display = "none";
            secondsInputLeftZero.style.display = "none";
            startButton.addEventListener("click", startTimer);
            minutesSeconds.addEventListener("click", changeToInput);
            inputTimeMinutes.value = "";
            inputTimeSeconds.value = "";
            minutesTimer.innerHTML = "00";
            secondstimer.innerHTML = "00";
            alarmAudio.play();
        }
    }
}
