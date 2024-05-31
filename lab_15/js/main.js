function UpdateTime()
{
    var now = new Date();
    var newYear = new Date("January 1, 2025 00:00:00");
    var difference = new Date(newYear - now);

    document.getElementById("day").textContent = Math.floor(difference/ (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = difference.getHours();
    document.getElementById("minutes").textContent = difference.getMinutes();
    document.getElementById("seconds").textContent = difference.getSeconds();

    console.log();
}

// setInterval(UpdateTime, 1000);
UpdateTime();