Highcharts.chart('pie', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Top 5 de mascarillas más vendidas (u)'
    },
    subtitle: {
        text: 'Valor total de unidades vendidas por modelo de mascarilla'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Unidades vendidas (u): <b>{point.y}</b><br/>' +
            'Porcentaje del total de ventas (%): <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '50%',
        zMin: 0,
        name: 'Modelos',
        data: [{
            name: 'Cool Alianza Lima Blanquiazul',
            y: 7871,
            z: 23.84
        }, {
            name: 'Cool Alianza Lima Azul',
            y: 5973,
            z: 18.09
        }, {
            name: 'Multi',
            y: 5809,
            z: 17.60
        }, {
            name: 'Cool Black',
            y: 3198,
            z: 9.69
        }, {
            name: 'Cool Blue',
            y: 2365,
            z: 7.16
        
        }]
    }]
});

Highcharts.chart('pie_tallas', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Distribución de ventas por tallas'
    },
    subtitle: {
        text: 'Valor total y porcentual de las unidades vendidas de acuerdo a las tallas disponibles'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Unidades vendidas (u): <b>{point.y}</b><br/>' +
            'Porcentaje del total de ventas (%): <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '50%',
        zMin: 0,
        name: 'Modelos',
        data: [{
            name: 'M',
            y: 16815,
            z: 50.93
        }, {
            name: 'L',
            y: 9422,
            z: 28.54
        }, {
            name: 'S',
            y: 6778,
            z: 20.53
        }]
    }]
});