document.getElementById("reminderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    let reminderTitle = document.getElementById("reminderTitle").value;
    let reminderDescription = document.getElementById("reminderDescription").value;
    let reminderDate = new Date(document.getElementById("reminderDate").value);

    // Validate if all fields are filled
    if (!reminderTitle || !reminderDescription || !reminderDate) {
        alert("Please fill all fields.");
        return;
    }

    // Save reminder data to local storage
    let reminderData = {
        title: reminderTitle,
        description: reminderDescription,
        date: reminderDate.toString()
    };

    localStorage.setItem("reminder", JSON.stringify(reminderData));

    // Show a confirmation message to the user
    alert("Reminder set successfully!");

    // Start checking for the reminder
    checkReminder(reminderDate);
});

// Function to check if the reminder date has arrived
function checkReminder(reminderDate) {
    let now = new Date();
    let timeDifference = reminderDate - now;

    if (timeDifference <= 0) {
        showReminder();
    } else {
        // Check if the reminder should be shown in the future
        setTimeout(() => {
            showReminder();
        }, timeDifference);
    }
}

// Function to show the reminder
function showReminder() {
    let reminderData = JSON.parse(localStorage.getItem("reminder"));
    
    if (reminderData) {
        let reminderMessage = document.getElementById("reminderMessage");
        reminderMessage.classList.remove("hidden");

        let reminderText = document.getElementById("reminderText");
        reminderText.innerHTML = `<strong>${reminderData.title}</strong><br>${reminderData.description}`;
    }
}
