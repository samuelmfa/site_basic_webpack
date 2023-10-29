import * as CovidApi from './services/service.api';


const reportRequest = {
    date:'',
    region_name:'',
    region_province:'',
    city_name:'',
    per_page:''
};

const reportTotalRequest = {
    date:'',
    region_name:'',    
}




const region = CovidApi.getRegions('100');
const province = CovidApi.getRegionsProvinces('BRA');
const report = CovidApi.getRegionsProvinces('BRA');
const reportTotal = CovidApi.getRegionsProvinces('BRA');

region
    .then((response) => { console.log('DATA_API Regions -->', response.data) })
    .catch((error) => { console.log('ERRO -->', error) });

province
    .then((response) => { console.log('DATA_API Provinces -->', response.data) })
    .catch((error) => { console.log('ERRO -->', error) });



