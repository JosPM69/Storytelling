Highcharts.chart('column_line_pie', {
    title: {
        text: 'Top 5 de marcarillas mas vendidas'
    },
    xAxis: {
        categories: ['Mayo', 'Junio', 'Julio', 'Agosto']
    },
    labels: {
        items: [{
            html: 'Total ventas',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Multi',
        data: [0, 0, 212748.55, 116715.20]
    }, {
        type: 'column',
        name: 'Cool Alianza Lima Blanquiazul',
        data: [0, 209625.01, 22527.94, 5230.77]
    }, {
        type: 'column',
        name: 'Cool Alianza Lima Azul',
        data: [0, 156899.62, 16560.24, 5312.88]
    }, {
        type: 'column',
        name: 'Cool Black',
        data: [ 13610.30 , 37775.94, 20392.43, 8449.99]
    }, {
        type: 'column',
        name: 'Cool Alianza Lima Blanca',
        data: [0, 52338.55, 6379.64, 1758.15]
    }, {
        type: 'spline',
        name: 'Average',
        data: [  13610.30, 114159.78, 55721.76, 27493.40],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total ventas por tipo',
        data: [{
            name: 'Multi',
            y:  329463.75,
            color: Highcharts.getOptions().colors[0] // Multi's color
        }, {
            name: 'Cool Alianza Lima Blanquiazul',
            y:  237383.71,
            color: Highcharts.getOptions().colors[1] // Cool Alianza Lima Blanquiazul's color
        }, {
            name: 'Cool Alianza Lima Azul',
            y:  178772.74,
            color: Highcharts.getOptions().colors[2] // Cool Alianza Lima Azul's color
        }, {
            name: 'Cool Black',
            y:   80228.65,
            color: Highcharts.getOptions().colors[3] // Cool Black's color
        }, {
            name: 'Cool Alianza Lima Blanca',
            y:   60476.34,
            color: Highcharts.getOptions().colors[4] // Cool Alianza Lima Blanca's color
        }],
        center: [100, 80],
        size: 120,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});