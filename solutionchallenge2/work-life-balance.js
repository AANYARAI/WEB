// Array of motivational quotes
const quotes = [
    "You are stronger than you think and more capable than you realize. - Unknown",
    "A mother is not a person to lean on, but a person to make leaning unnecessary. - Dorothy Canfield Fisher",
    "The most beautiful thing a woman can wear is confidence. - Blake Lively",
    "Pregnancy is a journey of transformation, growth, and new beginnings. - Unknown",
    "Your body is creating a miracle, never forget that. - Unknown"
];

// Function to display a new quote from the array
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}
