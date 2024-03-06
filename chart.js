document.addEventListener('DOMContentLoaded', function () {
  // Initialize the chart
  var chart = Highcharts.chart('chart-container', {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'Time Series Chart'
    },
    xAxis: {
      type: 'datetime'
    },
    series: [{
      name: 'Data Series',
      data: [] // Initially empty, will be populated from the file
    }]
  });

  // Example data in the same format with date strings
  var rawData = [
    ['1/2/2024', 0.8885],
    ['1/3/2024', 0.8851],
    ['1/4/2024', 0.8842],
    // ... more data
  ];

  // Convert date strings to timestamps
  var formattedData = rawData.map(function (point) {
    return [
      new Date(point[0]).getTime(),
      point[1]
    ];
  });

  // Update the series data in the chart
  chart.series[0].update({ data: formattedData });
});
