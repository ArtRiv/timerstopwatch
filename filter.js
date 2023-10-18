inputTimeMinutes.addEventListener("input", function() {
    inputTimeMinutes.value = inputTimeMinutes.value.replace(/[^0-9]/g, '');
    if (inputTimeMinutes.value.length === 2) {
        inputTimeSeconds.focus();
    }
});

inputTimeSeconds.addEventListener("input", function() {
    inputTimeSeconds.value = inputTimeSeconds.value.replace(/[^0-9]/g, '');
});

function checkIfValid() {
    let minutes = parseInt(inputTimeMinutes.value);
    let seconds = parseInt(inputTimeSeconds.value);

    if (isNaN(minutes) && isNaN(seconds)) {
        console.log("invalid input");
        minutesSeconds.click();
        return false;
    }
    else if (isNaN(minutes)) {
        inputTimeMinutes.value = 0;
        minutesInputLeftZero.style.display = "flex";
        console.log("locura1");
        return true;
    }
    else if (isNaN(seconds)) {
        inputTimeSeconds.value = 0;
        secondsInputLeftZero.style.display = "flex";
        console.log("locura2");
        return true;
    }
    else {

        if (seconds > 59) {
            seconds = 60;
            inputTimeSeconds.value = seconds;
            secondsInputLeftZero.style.display = "none";
        }
        else if (seconds < 10) {
            inputTimeSeconds.value = seconds;
            secondsInputLeftZero.style.display = "flex";
        }
        else if (seconds == 0){
            seconds = 0
            inputTimeSeconds.value = seconds;
            secondsInputLeftZero.style.display = "flex";
        }
    
        if (minutes > 10) {
            minutesInputLeftZero.style.display = "none";
            inputTimeMinutes.value = minutes;
        }
        else if (minutes < 10) {
            minutesInputLeftZero.style.display = "flex";
            inputTimeMinutes.value = minutes;            
        }
        else if (minutes == 0) {
            inputTimeMinutes.value = 0;
            minutesInputLeftZero.style.display = "flex";
        }

        return true;
    }
};
