// Array of quotes for random selection
const quotes = [
    "The moment you doubt whether you can fly, you cease forever to be able to do it. - J.M. Barrie",
    "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Function to show a new random quote
function showNewQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Search functionality for filtering resources
document.getElementById('searchInput').addEventListener('input', function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let resourceItems = document.querySelectorAll('.resource-item');

    resourceItems.forEach(function(item) {
        let title = item.querySelector('h3').textContent.toLowerCase();
        let description = item.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


