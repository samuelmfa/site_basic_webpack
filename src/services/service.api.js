import axios from 'axios';
import * as appEnum from '../config/app.enum';

const getRegions = (perPage) => {
    return axios({
        method: appEnum.methods.GET,
        url: `${appEnum.URL_API}${appEnum.GET_REGIONS}?per_page=${perPage}`,
    });
}

const getRegionsProvinces = (region) => {
    return axios({
        method: appEnum.methods.GET,
        url: `${appEnum.URL_API}${appEnum.GET_PROVINCES}/${region}`,
    });
}

const getReport = ({date, region_name, region_province, city_name, per_page}) => {
    return axios({
        method: appEnum.methods.GET,
        url: `${appEnum.URL_API}${appEnum.GET_REPORTS}?date=${date}&iso=${region_name}&region_province=${region_province}&city_name=${city_name}&per_page=${per_page}`,
    });
}

const getReportTotal = ({date, region_name}) => {
    return axios({
        method: appEnum.methods.GET,
        url: `${appEnum.URL_API}${appEnum.GET_REPORTS_TOTAL}?${region}&${region_name}`,
    });
}

export {
    getRegions,
    getRegionsProvinces,
    getReport,
    getReportTotal,
}



