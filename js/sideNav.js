const sidenav = document.getElementById('sidenav');
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('navbar-toggler-icon') || e.target.classList.contains('navbar-toggler')) {
        return;
    }
    if (e.target.closest('#sidenav') !== null) {
        return;
    }
    sidenav.style.width = '0';
});
function openNav() {
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0px"
        return
    }
    sidenav.style.width = "250px"
}

function closeNav() {
    sidenav.style.width = "0";
}
if (window.location['href'].includes("main")) {
    const html = `<a href="./purchase/purchase.html">Purchases</a>
    <a href="./purchase/purchaserecord.html">Purchase Records</a>
    <a href="./sales/sales.html">Sales</a>
    <a href="./sales/salesrecord.html">Sales Records</a>
    <a href="./payment/payment.html">Payment</a>
    <a href="./payment/paymentrecord.html">Payment Records</a>
    <a href="./profile.html">Profile</a>
    <a href="./READMEW.md">About</a>
    <a href="./version.json">Version</a>`
    sidenav.innerHTML += html
}
else if (window.location['href'].includes("record")) {
    const html = `<a href="../purchase/purchase.html">Purchases</a>
    <a href="../purchase/purchaserecord.html">Purchase Records</a>
    <a href="../sales/sales.html">Sales</a>
    <a href="../sales/salesrecord.html">Sales Records</a>
    <a href="../payment/payment.html">Payment</a>
    <a href="../payment/paymentrecord.html">Payment Records</a>
    <a href="../profile.html">Profile</a>
    <button class="dropdown-btn">Filters 
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
        <a class="dropdown-item" onclick="filterDropDownSearch()">Search</a>
        <a class="dropdown-item" onclick="filterByDateDropDown()">Filter By Date</a>
        <a class="dropdown-item" onclick="filterByDateRangeDropDown()">Filter By Date Range</a>
        <a class="dropdown-item" onclick="filterByYearDropDown()">Filter By Year</a>
        <a class="dropdown-item" id="sidenavdropdown-filter-clear" onclick="clearExistingFilters()">Clear Filter</a>
    </div>`
    sidenav.innerHTML += html
}
else {
    const html = `<a href="../purchase/purchase.html">Purchases</a>
    <a href="../purchase/purchaserecord.html">Purchase Records</a>
    <a href="../sales/sales.html">Sales</a>
    <a href="../sales/salesrecord.html">Sales Records</a>
    <a href="../payment/payment.html">Payment</a>
    <a href="../payment/paymentrecord.html">Payment Records</a>
    <a href="../profile.html">Profile</a>
    <a href="../READMEW.md">About</a>`
    sidenav.innerHTML += html
}

//Filter DropDown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}