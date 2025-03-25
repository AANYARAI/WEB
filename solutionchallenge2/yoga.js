// Array of motivational yoga quotes for pregnant women
const motivationalQuotes = [
    "Your body is strong and capable, and yoga will help you harness that strength throughout your pregnancy. - Unknown",
    "Pregnancy is a beautiful time to connect with your body, and yoga is the perfect way to do that. - Unknown",
    "Yoga brings peace and strength to both mother and baby. Keep going! - Unknown",
    "Breathing deeply connects you to your baby and brings calm to your pregnancy journey. - Unknown",
    "Embrace your pregnancy with gentle strength and loving kindness through yoga. - Unknown"
];

// Function to display a new motivational quote
function generateMotivationalQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    document.getElementById("motivational-quote").textContent = motivationalQuotes[randomIndex];
}
