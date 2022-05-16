Highcharts.chart('stacked_column', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: [
            'LIMA',
            'CALLAO',
            'TRUJILLO',
            'AREQUIPA',
            'PIURA',
            'CHICLAYO',
            'SANTA',
            'ICA',
            'CUSCO',
            'CHINCHA'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'M',
        data: [
            15082,
652,
221,
139,
95,
95,
72,
51,
64,
26
        ]
    }, {
        name: 'L',
        data: [
            8351,
438,
100,
80,
91,
47,
34,
58,
37,
1
        ]
    }, {
        name: 'S',
        data: [
            6096,
250,
66,
41,
21,
26,
53,
19,
16,
71
        ]
    }]
});