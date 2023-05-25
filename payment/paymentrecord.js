import { getPayment, getNextPayment } from '../js/Firestore.js';
import { filterByDate, filterByDateRange, filterByYear, filterByTypeOfRawMaterial } from '../js/filter.js';
const loader = document.getElementById('loader');
const docBody = document.getElementById('tbody');
const loadingDecoyTable = document.getElementById('decoyTable');
let index = 0; //Index of data loaded
var currentLoadedData = null;
var currentIndexFromServer = null;
var table = null;
var modifiedData = false;

async function decoyTable(hide = true) {
    if (hide) {
        loadingDecoyTable.style.display = 'none';
        document.getElementById('table-loader').style.display = 'none';
        document.getElementById('realTable').style.display = 'block';
        // loader.style.display = 'none';
    }
    else {
        loadingDecoyTable.style.display = 'block';
        document.getElementById('table-loader').style.display = 'block';
        document.getElementById('realTable').style.display = 'none';
        // loader.style.display = 'block';
    }
}

async function createTable() {
    table = $('#table').DataTable(
        {
            "bAutoWidth": false,
        }
    );
    document.getElementById('table_filter').style.display = 'none';
    // document.getElementById('table_length').style.display = 'none';
    document.getElementById('table_paginate').style.display = 'none';
}

async function loadData() {
    await decoyTable(false);
    docBody.innerHTML = '';
    var docData;
    try {
        docData = await getPayment();
    }
    catch (err) {
        alert(err)
        return
    }
    index = 0;
    while (index < docData.length) {
        let x = docData[index]
        docBody.innerHTML += `<tr><th scope="row">${index + 1}</th><td>${x['date']}</td><td>${x['nameofreceiver']}</td><td>${x['purpose']}</td><td>${x['amount']}</td><td>${x['mode_of_payment']}</td><td>${x['bywhom']}</td></tr>`
        index++;
    }
    currentLoadedData = docBody.innerHTML;
    currentIndexFromServer = index;
    await createTable()
    await decoyTable();
};
await loadData();
async function loadMore() {
    await decoyTable(false);
    var nextdocData;
    try {
        nextdocData = await getNextPayment();
    }
    catch (err) {
        alert(err)
    }
    if (nextdocData == undefined) {
        await decoyTable();
        return
    }
    docBody.innerHTML = currentLoadedData;
    index = currentIndexFromServer;
    var pageIndex = table.page.info()['page']
    table.destroy();
    let z = 0;
    while (z < nextdocData.length) {
        let x = nextdocData[z]
        docBody.innerHTML += `<tr><th scope="row">${index + 1}</th><td>${x['date']}</td><td>${x['nameofreceiver']}</td><td>${x['purpose']}</td><td>${x['amount']}</td><td>${x['mode_of_payment']}</td><td>${x['bywhom']}</td></tr>`
        index++;
        z++;
    }
    currentLoadedData = docBody.innerHTML;
    currentIndexFromServer = index;
    createTable();
    table.page(pageIndex).draw(false);
    await decoyTable();
}

async function applyDateFilter() {
    await decoyTable(false);
    const docData = await filterByDate('payments', document.getElementById('filter-date').value);
    if (docData == undefined) {
        await decoyTable();
        return
    }
    table.destroy();
    docBody.innerHTML = '';
    index = 0;
    while (index < docData.length) {
        let x = docData[index]
        docBody.innerHTML += `<tr><th scope="row">${index + 1}</th><td>${x['date']}</td><td>${x['nameofreceiver']}</td><td>${x['purpose']}</td><td>${x['amount']}</td><td>${x['mode_of_payment']}</td><td>${x['bywhom']}</td></tr>`
        index++;
    }
    createTable();
    await decoyTable();
    modifiedData = true;
};

async function applyDateRangeFilter() {
    await decoyTable(false);
    const docData = await filterByDateRange('payments', document.getElementById('filter-startDate').value, document.getElementById('filter-endDate').value);
    if (docData == undefined) {
        await decoyTable();
        return
    }
    table.destroy();
    docBody.innerHTML = '';
    index = 0;
    while (index < docData.length) {
        let x = docData[index]
        docBody.innerHTML += `<tr><th scope="row">${index + 1}</th><td>${x['date']}</td><td>${x['nameofreceiver']}</td><td>${x['purpose']}</td><td>${x['amount']}</td><td>${x['mode_of_payment']}</td><td>${x['bywhom']}</td></tr>`
        index++;
    }
    createTable();
    await decoyTable();
    modifiedData = true;
};

async function applyYearFilter() {
    await decoyTable(false);
    const docData = await filterByYear('payments', document.getElementById("yearDateSelector").value);
    if (docData == undefined) {
        await decoyTable();
        return
    }
    table.destroy();
    docBody.innerHTML = '';
    index = 0;
    while (index < docData.length) {
        let x = docData[index]
        docBody.innerHTML += `<tr><th scope="row">${index + 1}</th><td>${x['date']}</td><td>${x['nameofreceiver']}</td><td>${x['purpose']}</td><td>${x['amount']}</td><td>${x['mode_of_payment']}</td><td>${x['bywhom']}</td></tr>`
        index++;
    }
    createTable();
    await decoyTable();
    modifiedData = true;
};

async function clearFilter() {
    sidenav.style.width = '0';
    table.destroy();
    docBody.innerHTML = currentLoadedData;
    index = currentIndexFromServer;
    document.getElementById('next').disabled = false;
    document.getElementById('previous').disabled = false;
    createTable();
    modifiedData = false;
};

async function nextPage() {
    if (table.page.info()['page'] == table.page.info()['pages'] - 1) {
        if (modifiedData) {
            return;
        }
        document.getElementById('next').disabled = true;
        await loadMore();
    }
    table.page('next').draw(false);
    document.getElementById('next').disabled = false;
};

async function previousPage() {
    table.page('previous').draw(false);
};

async function search() {
    let searchValue = document.getElementById('searchBox').value;
    table.search(searchValue).draw();
    document.getElementById('searchBox').value = "";
    modifiedData = true;
};

if (document.readyState === "complete" || document.readyState === "interactive") {
    document.getElementById('filter-date').addEventListener('change', applyDateFilter);
    document.getElementById('searchDateRange').addEventListener('click', applyDateRangeFilter);
    document.getElementById('yearDateSelector').addEventListener('change', applyYearFilter);
    document.getElementById('dropdown-filter-clear').addEventListener('click', clearFilter);
    document.getElementById('sidenavdropdown-filter-clear').addEventListener('click', clearFilter);
    document.getElementById('previous').addEventListener('click', previousPage);
    document.getElementById('next').addEventListener('click', nextPage);
    document.getElementById('submit').addEventListener('click', search);
}