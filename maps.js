document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    const map = L.map('mapContainer').setView([20.5937, 78.9629], 5);
    
    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Water quality data (simulated)
    const waterBodies = [
        {
            name: "Yamuna River (Delhi)",
            coords: [28.6139, 77.2090],
            quality: "critical",
            parameters: {
                ph: 6.2,
                do: 4.1,
                turbidity: 55,
                nitrate: 18,
                heavyMetals: 1.6
            }
        },
        {
            name: "Ganga River (Varanasi)",
            coords: [25.3176, 83.0058],
            quality: "moderate",
            parameters: {
                ph: 7.1,
                do: 5.8,
                turbidity: 26,
                nitrate: 8,
                heavyMetals: 0.5
            }
        },
        {
            name: "Chilika Lake (Odisha)",
            coords: [19.6950, 85.3540],
            quality: "good",
            parameters: {
                ph: 7.5,
                do: 6.7,
                turbidity: 10,
                nitrate: 3,
                heavyMetals: 0.2
            }
        },
        {
            name: "Ulsoor Lake (Bangalore)",
            coords: [12.9784, 77.6408],
            quality: "moderate",
            parameters: {
                ph: 6.8,
                do: 5.2,
                turbidity: 35,
                nitrate: 12,
                heavyMetals: 0.7
            }
        }
    ];
    
    // Define icons
    const goodIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    const moderateIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    const criticalIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    // Add markers for each water body
    waterBodies.forEach(body => {
        let icon;
        if (body.quality === "good") icon = goodIcon;
        else if (body.quality === "moderate") icon = moderateIcon;
        else icon = criticalIcon;
        
        const marker = L.marker(body.coords, { icon: icon }).addTo(map);
        
        // Create popup content
        let popupContent = `<strong>${body.name}</strong><br>`;
        popupContent += `Status: <span class="${body.quality}">${body.quality.charAt(0).toUpperCase() + body.quality.slice(1)}</span><br><br>`;
        popupContent += '<strong>Parameters:</strong><br>';
        popupContent += `pH: ${body.parameters.ph}<br>`;
        popupContent += `DO: ${body.parameters.do} mg/L<br>`;
        popupContent += `Turbidity: ${body.parameters.turbidity} NTU<br>`;
        popupContent += `Nitrate: ${body.parameters.nitrate} mg/L<br>`;
        popupContent += `Heavy Metals: ${body.parameters.heavyMetals} mg/L`;
        
        marker.bindPopup(popupContent);
    });
    
    // Add layer control (if needed)
    const baseLayers = {
        "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'T