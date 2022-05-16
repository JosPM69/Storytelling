let markers = L.layerGroup()
let mbAttr = '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
let mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
let map = {}
let layerControl = {}
let allData = {}
let allBank = {}
const zoom = 8
const center = [-12.002221182006943, -77.00519605326208]

const visualizacionMapa = {
  init() {
    this.loadData()
    this.renderMap()

    setTimeout(() => {
      visualizacionMapa.createListProductos()
      this.loadProvincias()
    }, 2500)
  },
  initBank() {
    this.loadBank()
    setTimeout(() => {
      visualizacionMapa.createListJobs()
      visualizacionMapa.createRangeAge()
    }, 1500)
  },
  renderMap() {
    let streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr})

    map = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [streets, markers]
    })
  },
  /* Leer datos de un google sheet
  loadDataGoogleDocs() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRly4USiFyMGeEYL1wypZub6bqQGNrdvrfpMW8mf-Mi0R4g5uctN29a4J6Ue34EcZsgs9kdf5zzeZxh/pub?gid=1879248939&single=true&output=csv', true)
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
          allData = visualizacionMapa.parseData(xmlhttp.responseText)
        }
      }
    }
    xmlhttp.send(null)
  },*/
  loadData() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'data/ventas2.json', true)
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
          allData = JSON.parse(xmlhttp.responseText)
        }
      }
    }
    xmlhttp.send(null)
  },
  loadBank() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'data/bank.json', true)
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
          allBank = JSON.parse(xmlhttp.responseText)
        }
      }
    }
    xmlhttp.send(null)
  },
  parseData(csv) {
    //recipe from http://techslides.com/convert-csv-to-json-in-javascript
    var lines=csv.split("\n")
    var result = []
    var headers=lines[0].split(",")
    for(var i=1;i<lines.length;i++){
      var obj = {}
      var currentline=lines[i].split(",")
      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j]
      }
      result.push(obj)
    }

    return result
  },
  loadProvincias() {
    var jsonTest = new L.GeoJSON.AJAX(["data/provincias.geojson"],{onEachFeature:this.showProvinciaInfo, style: visualizacionMapa.styleProvincia}).addTo(map)
  },
  getColor(d) {
    return d > 10000 ? '#800026' :
           d > 1000  ? '#BD0026' :
           d > 500  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      'transparent';
  },
  styleProvincia(feature) {

    const provinciaCount = _.filter(allData, item => {
      if(item.PROVINCENAME == feature.properties.NOMBPROV) {
        return item
      }
    })

    return {
        fillColor: visualizacionMapa.getColor(provinciaCount.length),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  },
  createListProductos() {

    let list  = document.querySelector('.product-list')

    let listContent = ``

    _.map(_.groupBy(allData, 'PROVINCENAME'), (producto, provincia) => {
      const productoItem = {
        "provincia": provincia,
        "cantidad": producto.length
      }

      listContent += `<li><a class="dropdown-item" href="#" onclick="visualizacionMapa.cargarGrafico('${productoItem.provincia}')">${productoItem.provincia} (${productoItem.cantidad})</a></li>`
    })

    list.innerHTML = listContent

  },
  showProvinciaInfo(provincia,layer) {
    const $this = this
    layer.on({
      click: () => {

        visualizacionMapa.cargarBarras(provincia.properties.NOMBPROV)
        visualizacionMapa.cargarPie(provincia.properties.NOMBPROV)
        visualizacionMapa.cargarHistogram(provincia.properties.NOMBPROV)

      }
    })
  },
  
  cargarGrafico(provincia) {
    visualizacionMapa.cargarBarras(provincia)
    visualizacionMapa.cargarPie(provincia)
    visualizacionMapa.cargarHistogram(provincia)

    const provinciaData = _.find(allData, ['PROVINCENAME', provincia])


    map.setView([provinciaData.lat, provinciaData.lon], 9)


  },
  cargarBarras(nombreProvincia) {

    const dataProvincia = _.filter(allData, ['PROVINCENAME', nombreProvincia])

    const cantidadProductos = _.map(_.groupBy(dataProvincia, 'COLOR'), provincia => {
      return provincia.length
    })

    const totalProductos = _.map(_.groupBy(dataProvincia, 'COLOR'), provincia => {
      return _.sumBy(provincia, i => {
        return parseFloat(i.TOTALPAID)
      })
    })

    Highcharts.chart('totalProductos', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Reporte de ventas'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
        categories: _.uniq(_.map(dataProvincia, 'COLOR')),
        crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Cantidad / Total S/.'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
      series: [
        {
          name: 'Cantidad',
          data: cantidadProductos
        },
        {
          name: 'Total S/.',
          data: totalProductos
      }]
    })

  },
  cargarPie(nombreProvincia) {

    const dataProvincia = _.filter(allData, ['PROVINCENAME', nombreProvincia])
    console.log(allData)
    const cantidadProductos = _.map(_.groupBy(dataProvincia, 'COLOR'), (items, producto) => {
      return {
        name: producto,
        y: _.sumBy(items, i => {
          return parseFloat(i.TOTALPAID)
        }),
        sliced: true,
        selected: true
      }
    })

    console.log(cantidadProductos)

    Highcharts.chart('totalProductosPie', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Total de ventas por producto'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
        name: 'Productos vendidos',
        colorByPoint: true,
        data: cantidadProductos
      }]
  });

  },
  cargarHistogram(nombreProvincia) {

    const dataProvincia = _.filter(allData, ['PROVINCENAME', nombreProvincia])

    const meses = _.uniq(_.map(dataProvincia, 'MES DE LA ORDEN'))
    
    const productosMes = _.map(_.groupBy(dataProvincia, 'MES DE LA ORDEN'), (items) => {
      return items.length

    })


    Highcharts.chart('histogramProductos', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Ventas de productos'
      },
      subtitle: {
        text: 'cantidad de productos vendidos por mes'
      },
      xAxis: {
        categories: (meses).reverse(),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} productos vendidos</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false
        }
      },
      series: [{
        name: 'Data',
        data: productosMes
    
      }]
    });
    
  }
}

