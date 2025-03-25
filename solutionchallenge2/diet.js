document.getElementById("diet-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const trimester = document.getElementById("trimester").value;
    const preferences = document.getElementById("preferences").value.toLowerCase();
    const dietPlan = document.getElementById("diet-plan");

    let plan = "";

    if (trimester === "first") {
        plan = `
            <ul>
                <li>Folic acid-rich foods: spinach, lentils, oranges</li>
                <li>Iron sources: red meat, beans, tofu</li>
                <li>Hydration: plenty of water and fresh juices</li>
            </ul>
        `;
    } else if (trimester === "second") {
        plan = `
            <ul>
                <li>Calcium: milk, yogurt, almonds</li>
                <li>Protein: eggs, chicken, legumes</li>
                <li>Healthy fats: avocado, olive oil, nuts</li>
            </ul>
        `;
    } else if (trimester === "third") {
        plan = `
            <ul>
                <li>Omega-3: salmon, chia seeds, walnuts</li>
                <li>Fiber: oats, whole grains, vegetables</li>
                <li>Vitamin C: citrus fruits, tomatoes, bell peppers</li>
            </ul>
        `;
    }

    if (preferences.includes("vegetarian")) {
        plan += "<p><strong>Note:</strong> Added vegetarian alternatives for protein and iron sources.</p>";
    }

    dietPlan.innerHTML = plan;
});