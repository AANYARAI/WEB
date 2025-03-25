// Array of motivational fitness quotes for pregnant women
const motivationalQuotes = [
    "A healthy body leads to a healthy pregnancy. - Unknown",
    "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. - Unknown",
    "Every step you take is a step closer to a healthier pregnancy and a healthier you. - Unknown",
    "Pregnancy is not a time to slow down, but to work with your body’s changes. - Unknown",
    "Believe in your strength, both physically and emotionally. - Unknown"
];

// Function to display a new motivational quote
function generateMotivationalQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById("motivational-quote").textContent = motivationalQuotes[randomIndex];
}
