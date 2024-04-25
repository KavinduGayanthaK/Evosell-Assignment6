const dataChartOptionsExample = {
    type: 'bar',
    data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
            label: 'Sales',
            data: [100, 300, 780, 240, 320, 500, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgb(47,255,0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgb(47,255,0)'
            ],
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: '#4285F4',
                },
            },
            y: {
                ticks: {
                    stepSize: 100,
                    color: '#f44242',
                },
            },
        },
    },
};

// Get the context of the canvas element
const ctx = document.getElementById('chart-options-example').getContext('2d');

// Initialize Chart.js chart
new Chart(ctx, dataChartOptionsExample);

