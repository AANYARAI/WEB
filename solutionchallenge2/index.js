function openLogin() {
    document.getElementById("login-popup").style.display = "flex";
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".signup-form").style.display = "none";
}

// Function to close the login popup
function closeLogin() {
    document.getElementById("login-popup").style.display = "none";
}

// Function to open the signup form
function openSignup() {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
}

// Function to close the signup form
function closeSignup() {
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
}

// Event listener for login button
document.querySelector('.login-btn').addEventListener('click', openLogin);

document.getElementById("sosButton").addEventListener("click", function() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    const emergencyNumber = "+108"; 
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `tel:${emergencyNumber}`;
    } else {
      
        alert(`Emergency number ${emergencyNumber} is ready to dial. Please manually call it if your device does not support calling.`);
    
    }
});


