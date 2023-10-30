inputTimeMinutes.addEventListener("input", function() {
    inputTimeMinutes.value = inputTimeMinutes.value.replace(/[^0-9]/g, '');
    if (inputTimeMinutes.value.length === 2) {
        inputTimeSeconds.focus();
    }
});

inputTimeSeconds.addEventListener("input", function() {
    inputTimeSeconds.value = inputTimeSeconds.value.replace(/[^0-9]/g, '');
});