Highcharts.chart('stacked_bar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
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
        },
    /*
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }*/
    },
    series: [{
        name: 'M',
        data: [
            51.08,
48.66,
57.11,
53.46,
45.89,
56.55,
45.28,
39.84,
54.70,
26.53
        ]
    }, {
        name: 'L',
        data: [
            28.28,
32.69,
25.84,
30.77,
43.96,
27.98,
21.38,
45.31,
31.62,
1.02
        ]
    }, {
        name: 'S',
        data: [
            20.64,
18.66,
17.05,
15.77,
10.14,
15.48,
33.33,
14.84,
13.68,
72.45
        ]
    }]
});