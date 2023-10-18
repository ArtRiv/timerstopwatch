resetButton.addEventListener("click", function(){
    console.log("reset");
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
});