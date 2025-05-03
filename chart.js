// Main Water Quality Chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('waterQualityChart').getContext('2d');
    
    const waterQualityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Yamuna River',
                    data: [6.8, 6.5, 6.3, 6.1, 6.0, 6.2, 6.1, 5.9, 5.8, 5.7, 5.9, 6.2],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Ganga River',
                    data: [7.2, 7.1, 7.0, 7.1, 7.0, 6.9, 6.8, 6.9, 7.0, 7.1, 7.2, 7.1],
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Chilika Lake',
                    data: [7.5, 7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.5, 7.6, 7.5, 7.5],
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'pH Levels Over Time',
                    font: {
                        size: 18
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    max: 8,
                    title: {
                        display: true,
                        text: 'pH Level'
                    }
                }
            }
        }
    });
    
    // Prediction Charts
    const predCtx1 = document.getElementById('predictionChart1').getContext('2d');
    const predChart1 = new Chart(predCtx1, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Predicted pH Level',
                data: [6.1, 6.0, 5.9, 5.8, 5.7, 5.6, 5.5],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    max: 7
                }
            }
        }
    });
    
    const predCtx2 = document.getElementById('predictionChart2').getContext('2d');
    const predChart2 = new Chart(predCtx2, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Predicted pH Level',
                data: [7.0, 6.9, 6.8, 6.7, 6.6, 6.5, 6.4],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 6,
                    max: 7.5
                }
            }
        }
    });
    
    // Update chart based on parameter selection
    document.getElementById('parameterSelect').addEventListener('change', function() {
        const parameter = this.value;
        let title, data1, data2, data3, yMin, yMax, yLabel;
        
        switch(parameter) {
            case 'ph':
                title = 'pH Levels Over Time';
                data1 = [6.8, 6.5, 6.3, 6.1, 6.0, 6.2, 6.1, 5.9, 5.8, 5.7, 5.9, 6.2];
                data2 = [7.2, 7.1, 7.0, 7.1, 7.0, 6.9, 6.8, 6.9, 7.0, 7.1, 7.2, 7.1];
                data3 = [7.5, 7.4, 7.5, 7.6, 7.5, 7.4, 7.5, 7.6, 7.5, 7.6, 7.5, 7.5];
                yMin = 5;
                yMax = 8;
                yLabel = 'pH Level';
                break;
            case 'do':
                title = 'Dissolved Oxygen Over Time';
                data1 = [4.2, 4.1, 4.0, 3.9, 4.0, 4.1, 4.0, 3.8, 3.7, 3.6, 3.8, 4.0];
                data2 = [5.8, 5.7, 5.6, 5.7, 5.6, 5.5, 5.4, 5.5, 5.6, 5.7, 5.8, 5.7];
                data3 = [6.7, 6.6, 6.7, 6.8, 6.7, 6.6, 6.7, 6.8, 6.7, 6.8, 6.7, 6.7];
                yMin = 3;
                yMax = 7;
                yLabel = 'DO (mg/L)';
                break;
            case 'turbidity':
                title = 'Turbidity Over Time';
                data1 = [45, 48, 50, 52, 55, 53, 54, 56, 58, 60, 58, 55];
                data2 = [25, 26, 27, 26, 25, 27, 28, 27, 26, 25, 24, 25];
                data3 = [10, 11, 10, 9, 10, 11, 10, 9, 10, 11, 10, 10];
                yMin = 0;
                yMax = 70;
                yLabel = 'Turbidity (NTU)';
                break;
            case 'nitrate':
                title = 'Nitrate Levels Over Time';
                data1 = [12, 13, 14, 15, 16, 15, 16, 17, 18, 19, 18, 17];
                data2 = [8, 7, 8, 9, 8, 7, 8, 9, 8, 7, 6, 7];
                data3 = [3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 3];
                yMin = 0;
                yMax = 20;
                yLabel = 'Nitrate (mg/L)';
                break;
            case 'heavyMetals':
                title = 'Heavy Metal Concentration Over Time';
                data1 = [0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6, 1.5];
                data2 = [0.5, 0.6, 0.5, 0.4, 0.5, 0.6, 0.5, 0.4, 0.5, 0.6, 0.5, 0.5];
                data3 = [0.2, 0.3, 0.2, 0.1, 0.2, 0.3, 0.2, 0.1, 0.2, 0.3, 0.2, 0.2];
                yMin = 0;
                yMax = 2;
                yLabel = 'Concentration (mg/L)';
                break;
        }
        
        waterQualityChart.data.datasets[0].data = data1;
        waterQualityChart.data.datasets[1].data = data2;
        waterQualityChart.data.datasets[2].data = data3;
        waterQualityChart.options.scales.y.min = yMin;
        waterQualityChart.options.scales.y.max = yMax;
        waterQualityChart.options.scales.y.title.text = yLabel;
        waterQualityChart.options.plugins.title.text = title;
        waterQualityChart.update();
    });
});