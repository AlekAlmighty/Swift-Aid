document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([14.8333, 120.2833], 12); // Olongapo coords

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example marker
    L.marker([14.8333, 120.2833]).addTo(map)
        .bindPopup("Olongapo City")
        .openPopup();
});
