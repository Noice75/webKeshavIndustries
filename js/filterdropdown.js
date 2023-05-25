function clearExistingFilters() {
    document.getElementById("Search").style.display = "none"
    document.getElementById("filter-date-div").style.display = "none"
    document.getElementById("filter-dateRange-div").style.display = "none"
    document.getElementById("filter-year").style.display = "none"
    sidenav.style.width = '0';
}

function filterDropDownSearch() {
    clearExistingFilters()
    document.getElementById("Search").style.display = "block"
    document.getElementById("searchBox").focus();
}

function filterByDateDropDown() {
    clearExistingFilters()
    document.getElementById("filter-date-div").style.display = "block"
}

function filterByDateRangeDropDown() {
    clearExistingFilters()
    document.getElementById("filter-dateRange-div").style.display = "block"
}

function filterByYearDropDown() {
    clearExistingFilters()
    document.getElementById("filter-year").style.display = "block"
}