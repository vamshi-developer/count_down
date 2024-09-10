let intervalId = null;
let seconds = 0;

function startCountdown(minutes) {
    clearInterval(intervalId);
    seconds = minutes * 60;

    if (seconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    intervalId = setInterval(() => {
        const minutesLeft = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;

        const formattedTime = `${minutesLeft < 10 ? '0' : ''}${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        document.getElementById('timer').textContent = formattedTime;

        // Change timer color every second
        timerColor = getRandomColor();
        document.getElementById('timer').style.color = timerColor;

        seconds--;

        if (seconds < 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }
    }, 1000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}