import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import {counterId} from "../const";

const logStyle = 'font-size:18px; font-weight: bold;padding:3px 5px;color:magenta';

function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
        return Math.floor(sorted[base]);
    }
}

function prepareData(result) {
    return result.data.map(item => {
        item.date = item.timestamp.split('T')[0];

        return item;
    });
}

// показать значение метрики за несколько дней
function showMetricByPeriod(data, period, page, metric) {
    const dates = eachDayOfInterval({
        start: new Date(period.dateFrom),
        end: new Date(period.dateTo)
    });

    let table = {};

    dates.forEach(date => {
        let formatDate = format(date, 'yyyy-MM-dd');
        table[formatDate] = addMetricByDate(data, page, metric, formatDate);
    });

    console.log(`%cAll metrics from ${period.dateFrom} to ${period.dateTo} for ${metric} metric`, logStyle);
    console.table(table);
}

// показать сессию пользователя
function showSession(data, requestId) {
    let requestData = {};

    data
        .filter(item => item.requestId === requestId)
        .forEach(item => {
            requestData[item.name] = item.value
        });

    let table = {};

    table[requestId] = requestData;

    console.log(`%cMetrics from requestId ${requestId}`, logStyle);
    console.table(table)
}

// сравнить метрику в разных срезах
function compareMetric(data, page, metric, settings) {
    const {settingName, settingValues} = settings;

    let table = {};

    settingValues.forEach((item) => {
        table[item] = addMetricBySetting(data, page, metric, settingName, item);
    });

    console.log(`%cCompare ${settingName} setting for ${metric} metric`, logStyle);
    console.table(table);
}

// возвращает одну метрику по значению указанного среза
function addMetricBySetting(data, page, metric, settingName, settingValue) {
    let sampleData = data
        .filter(item => item.page === page && item.name === metric && item.additional[settingName] === settingValue)
        .map(item => item.value);

    let result = {};

    result.hits = sampleData.length;
    result.p25 = quantile(sampleData, 0.25);
    result.p50 = quantile(sampleData, 0.5);
    result.p75 = quantile(sampleData, 0.75);
    result.p95 = quantile(sampleData, 0.95);

    return result;
}


// возвращает одну метрику за день
function addMetricByDate(data, page, name, date) {
    let sampleData = data
        .filter(item => item.page === page && item.name === name && item.date === date)
        .map(item => item.value);

    let result = {};

    result.hits = sampleData.length;
    result.p25 = quantile(sampleData, 0.25);
    result.p50 = quantile(sampleData, 0.5);
    result.p75 = quantile(sampleData, 0.75);
    result.p95 = quantile(sampleData, 0.95);

    return result;
}

// рассчитывает все метрики за день
function calcMetricsByDate(data, page, date) {
    let table = {};
    table.connect = addMetricByDate(data, page, 'connect', date);
    table.ttfb = addMetricByDate(data, page, 'ttfb', date);
    table.ttfcp = addMetricByDate(data, page, 'ttfcp', date);
    table.ttfmp = addMetricByDate(data, page, 'ttfmp', date);

    console.log(`%cAll metrics for ${date}:`, logStyle);
    console.table(table);
}

fetch(`https://shri.yandex/hw/stat/data?counterId=${counterId}`)
    .then(res => res.json())
    .then(result => {
        let data = prepareData(result);

        showSession(data, '914323395455');

        calcMetricsByDate(data, 'game', '2021-10-29');

        const period = {
            dateFrom: '2021-10-31',
            dateTo: '2021-11-01',
        };
        showMetricByPeriod(data, period, 'game', 'ttfmp');

        const browderSettings = {settingName: 'browser', settingValues: ['Yandex Browser', 'Safari']};
        compareMetric(data, 'game', 'ttfmp', browderSettings);

        const platformSettings = {settingName: 'platform', settingValues: ['Win32', 'MacIntel']};
        compareMetric(data, 'game', 'ttfmp', platformSettings);
    });
