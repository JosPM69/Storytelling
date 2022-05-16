Highcharts.chart('column_min', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Comparativa entre las columnas Precio Unit y Totalpaid'
    },
    subtitle: {
        text: 'Comparativa de los precios mínimos'
    },
    xAxis: {
        categories: [
            'Cool Alianza Lima Blanquiazul',
            'Cool Alianza Lima Azul',
            'Multi',
            'Cool Black',
            'Cool Blue',
            'Cool Alianza Lima Blanca',
            'Cool Escudo',
            'Cool Lightblue',
            'Cool TieDye',
            'Cool Forest',
            'Cool Bear',
            'Cool Camo',
            'Cool Condor'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Precio mínimo (S/.)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b> S/{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'PRECIO UNIT',
        data: [
            26.900,
            26.9,
            75,
            25,
            25,
            26.9,
            25,
            25,
            25,
            25,
            25,
            25,
            25
        ]

    }, {
        name: 'TOTALPAID',
        data: [
            6.9,
            6.9,
            26.8,
            10,
            17.5,
            18.83,
            17.5,
            17.5,
            17.5,
            15,
            18.3369,
            20,
            20
        ]

    }]
});

Highcharts.chart('column_max', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Comparativa entre las columnas Precio Unit y Totalpaid'
    },
    subtitle: {
        text: 'Comparativa de los precios máximos'
    },
    xAxis: {
        categories: [
            'Cool Alianza Lima Blanquiazul',
            'Cool Alianza Lima Azul',
            'Multi',
            'Cool Black',
            'Cool Blue',
            'Cool Alianza Lima Blanca',
            'Cool Escudo',
            'Cool Lightblue',
            'Cool TieDye',
            'Cool Forest',
            'Cool Bear',
            'Cool Camo',
            'Cool Condor'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Precio máximo (S/.)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b> S/{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'PRECIO UNIT',
        data: [
            26.900,
            26.9,
            75,
            25,
            25,
            26.9,
            25,
            25,
            25,
            25,
            25,
            25,
            25
        ]

    }, {
        name: 'TOTALPAID',
        data: [
            756.7,
            672.5,
            1229.5,
            1420,
            1420,
            672.5,
            570,
            880,
            600,
            640,
            840,
            532,
            570
        ]

    }]
});