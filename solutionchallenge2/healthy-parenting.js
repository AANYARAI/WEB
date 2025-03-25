// Array of motivational messages
const motivationalMessages = [
    "A mother's love begins before birth, and her strength is unmeasurable. - Unknown",
    "Your strength as a mother begins now, embrace every step of the journey. - Unknown",
    "Pregnancy is the beginning of a lifelong adventure, cherish the experience. - Unknown",
    "Every mother is a superhero, and her love is the most powerful force. - Unknown",
    "You are nurturing the future with every step, every decision, and every moment. - Unknown"
];

// Function to display a new motivational message
function generateMotivationalMessage() {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    document.getElementById("motivational-message").textContent = motivationalMessages[randomIndex];
}
