Highcharts.chart('column_range', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    accessibility: {
        description: 'Image description: A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
    },

    title: {
        text: 'Rango de precio de cada modelo'
    },

    subtitle: {
        text: 'Mínimo y máximo facturado por cada modelo de mascarilla'
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
        'Cool Condor']
    },

    yAxis: {
        title: {
            text: 'Rango de precios ( S/. )'
        }
    },

    tooltip: {
        valuePrefix: 'S/'
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: 'S/{y}'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Precio mínimo y máximo',
        data: [
            [6.9,	756.7],
            [6.9,	672.5],
            [26.8,	1229.5],
            [10,	1420],
            [17.5,	1420],
            [18.83,	672.5],
            [17.5,	570],
            [17.5,	880],
            [17.5,	600],
            [15,	640],
            [18.3369,	840],
            [20,	532],
            [20,	570]
            ]
    }]

});