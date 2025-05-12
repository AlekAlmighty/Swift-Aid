function show() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
}

// Dark mode
var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.textContent = "Light Mode"; // Change text to "Light Mode"
    } else {
        icon.textContent = "Dark Mode"; // Change text to "Dark Mode"
    }
};
// End of dark mode