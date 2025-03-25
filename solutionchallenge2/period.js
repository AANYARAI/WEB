document.getElementById("period-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const startDate = new Date(document.getElementById("startDate").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value);
    const prediction = document.getElementById("prediction");
    const upcomingDates = document.getElementById("upcoming-dates");

    if (isNaN(startDate.getTime())) {
        prediction.textContent = "Please enter a valid date.";
        return;
    }

    // Predict next 3 cycles
    let upcoming = [];
    let nextPeriod = new Date(startDate);

    for (let i = 0; i < 3; i++) {
        nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
        upcoming.push(new Date(nextPeriod));
    }

    // Display the next period date
    prediction.textContent = `Your next period is expected on: ${upcoming[0].toDateString()}`;

    // Display upcoming cycles
    upcomingDates.innerHTML = "";
    upcoming.forEach(date => {
        const li = document.createElement("li");
        li.textContent = date.toDateString();
        upcomingDates.appendChild(li);
    });
});