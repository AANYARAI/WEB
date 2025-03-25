document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("userInput");

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function showTypingIndicator() {
        const typingElement = document.createElement("div");
        typingElement.classList.add("chat-message", "bot-message");
        typingElement.id = "typingIndicator";
        typingElement.textContent = "Typing...";
        chatbox.appendChild(typingElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingElement = document.getElementById("typingIndicator");
        if (typingElement) {
            chatbox.removeChild(typingElement);
        }
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "Hello! How can I assist you today? 😊",
            "hi": "Hi there! What would you like to ask?",
            "how are you": "I'm just a bot, but I'm here to help you! 💖",
            "pregnancy tips": "Eat a balanced diet, stay hydrated, exercise lightly, and get regular check-ups. 🩺",
            "diet during pregnancy": "Include protein, iron, calcium, and fiber in your meals. Avoid processed and junk food. 🍎🥦",
            "exercise for pregnancy": "Light exercises like walking, prenatal yoga, and stretching are good. Always consult your doctor first. 🏋️‍♀️",
            "postpartum care": "Rest well, eat nutritious food, stay hydrated, and don't hesitate to seek support from family and professionals. 👶",
            "morning sickness remedies": "Try eating small, frequent meals, stay hydrated, and avoid strong smells. Ginger tea can help too. 🍵",
            "foods to avoid during pregnancy": "Avoid raw seafood, unpasteurized dairy, excess caffeine, and processed foods. 🚫🍔",
            "is it safe to drink coffee during pregnancy": "Limit caffeine intake to about 200mg per day (1 small cup of coffee). Excess caffeine is not recommended. ☕",
            "can i take painkillers while pregnant": "Always consult your doctor before taking any medication during pregnancy. Some painkillers may not be safe. ⚠️",
            "gestational diabetes": "It's a temporary condition affecting blood sugar during pregnancy. Regular check-ups and a healthy diet help manage it. 🍎",
            "how much weight should i gain during pregnancy": "Weight gain depends on your BMI. On average, 11-16 kg is normal for a healthy pregnancy. 📊",
            "how to relieve back pain during pregnancy": "Maintain good posture, sleep with a pillow between your knees, and do light stretching exercises. 🏋️‍♀️",
            "signs of labor": "Signs include contractions, water breaking, back pain, and pressure in the pelvis. Contact your doctor if you experience them. 👶",
            "how to sleep comfortably during pregnancy": "Sleep on your side (preferably left), use a pregnancy pillow, and avoid lying on your back for long periods. 🛌",
            "is normal delivery possible after a c-section": "Yes, it's called VBAC (Vaginal Birth After Cesarean). Consult your doctor for a safe plan. 🏥",
            "postpartum depression": "It's common and treatable. Seek support from loved ones and consult a professional if needed. You're not alone! 💙",
            "breastfeeding tips": "Stay hydrated, maintain a balanced diet, ensure a good latch, and feed on demand. 🤱",
            "when can i start exercising after delivery": "Usually after 6 weeks, but consult your doctor for a safe timeline. Start with light activities. 🏋️‍♀️",
            "how long does postpartum bleeding last": "It varies but typically lasts 4-6 weeks. If it’s excessive, consult your doctor. ⚠️",
            "best foods for lactation": "Oats, almonds, spinach, flaxseeds, and plenty of water can help boost milk supply. 🥛",
            "can i get pregnant while breastfeeding": "Yes, though less likely, it's still possible. Consider birth control options if needed. 👶",
            "thank you": "You're welcome! Stay healthy and take care! 💕",
            "bye": "Goodbye! Wishing you a happy and healthy journey. 😊"
        };

        input = input.toLowerCase();
        return responses[input] || "I'm still learning! Try asking something about maternal health. 😊";
    }

    window.sendMessage = function () {
        const userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage(userText, "user");
        userInput.value = "";

        // Show typing indicator
        setTimeout(() => {
            showTypingIndicator();
        }, 500);

        // Remove typing indicator and show bot response
        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = getBotResponse(userText);
            appendMessage(botResponse, "bot");
        }, 2000);
    };
});