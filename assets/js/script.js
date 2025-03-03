console.log("Script is running!");


document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});

