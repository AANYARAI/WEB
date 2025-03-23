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
document.querySelector('.login-btn').addEventListener('click', openLogin);// SOS Button Functionality
// document.getElementById("callSOS").addEventListener("click", function() {
//     var phoneNumber = document.getElementById("phoneNumber").value;
//     if (phoneNumber) {
//         // Check if the device is mobile
//         var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//         if (isMobile) {
//             // If mobile, dial the phone number
//             window.location.href = "tel:" + phoneNumber;
//         } else {
//             // If not mobile, redirect to another page
//             window.location.href = "anotherPage.html";  // Replace with actual page
//         }
//     } else {
//         alert("Please enter a phone number.");
//     }
// });

document.getElementById("sosButton").addEventListener("click", function() {
    
    const emergencyNumber = "+108"; 
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `tel:${emergencyNumber}`;
    } else {
      
        alert(`Emergency number ${emergencyNumber} is ready to dial. Please manually call it if your device does not support calling.`);
    
    }
});

