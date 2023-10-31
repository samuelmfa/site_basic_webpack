class ReportRequest {
    date;
    regionName;
    regionProvince;
    cityName;
    perPage;
};

class ReportTotalRequest {
    date;
    regionName;
}

class ContentData {

    data = [];
    label = '';

    constructor(data, label) {
        this.data = data;
        this.label = label;
    }
}

class ContentOptions {
    legend = {
        display: true,
        position: '',

    };
    title = {
        display: true,
        text: '',
    }

    constructor(legend, title) {
        this.legend = legend;
        this.title = title;
    }
}

class DataChart {
    type = '';
    data = {
        labels: [],
        datasets: {},
    };
    options = {
        responsive: true,
        plugins: {},
    };
}

const getHandleDataChart = ({ type, data }) => {
    let info = new DataChart();
    return info = { type, data };
}

export {
    ReportRequest,
    ReportTotalRequest,
    ContentData,
    ContentOptions,
    DataChart,
    getHandleDataChart,
}