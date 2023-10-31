import * as CovidApi from './services/service.api';
import * as helpersFacade from './facade/helpers.facade';
import * as requestModels from './models/models';
import Chart from 'chart.js/auto';

/*const region = CovidApi.getRegions('100');
const province = CovidApi.getRegionsProvinces('BRA');
const report = CovidApi.getReport();*/
const reportTotal = CovidApi.getReportTotal({date:'2022-05-10', region_name:'BRA'});

/*region
    .then((response) => { console.log('DATA_API Regions -->', response.data) })
    .catch((error) => { console.log('ERRO -->', error) });*/

/*province
    .then((response) => { console.log('DATA_API Provinces -->', response.data) })
    .catch((error) => { console.log('ERRO -->', error) });*/
reportTotal
    .then((response) => { console.log('DATA_API Provinces -->', response.data) })
    .catch((error) => { console.log('ERRO -->', error) });
    
const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

new Chart(
    document.getElementById('grafico-linhas'),
    {
        type: 'line',
        data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                }
            ]
        }
    });





