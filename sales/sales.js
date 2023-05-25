import { addSales } from "../js/Firestore.js";

async function submitForm() {
    const form = document.getElementById('salesForm');
    const date = form.date.value;
    const nameOfCustomer = form.nameOfCustomer.value;
    const typeOfRawMaterial = form.typeOfRawMaterial.value;
    const quantity = form.quantity.value;
    const rate = form.rate.value;
    const totalAmount = form.totalAmount.value;
    const gst = form.gst.value;
    const totalGrossAmount = form.totalGrossAmount.value;

    if (date == "") {
        console.log('The variable is undefined or null');
        alert("Date not selected!")
        return
    }
    else if (nameOfCustomer == "") {
        console.log('The variable is undefined or null');
        alert("Name of Customer not defined!")
        return
    }
    else if (typeOfRawMaterial == "") {
        console.log('The variable is undefined or null');
        alert("Type of Raw Material not defined!")
        return
    }
    else if (quantity == "") {
        console.log('The variable is undefined or null');
        alert("Quantity not defined!")
        return
    }
    else if (rate == "") {
        console.log('The variable is undefined or null');
        alert("Rate not defined!")
        return
    }
    else if (totalAmount == "") {
        console.log('The variable is undefined or null');
        alert("Total Amount not defined!")
        return
    }
    else if (gst == "") {
        console.log('The variable is undefined or null');
        alert("GST not defined!")
        return
    }
    else if (totalGrossAmount == "") {
        console.log('The variable is undefined or null');
        alert("Total Gross Amount not defined!")
        return
    }

    document.getElementById('loader').style.display = "block";

    var Salesobj = {
        date: date,
        nameOfCustomer: nameOfCustomer,
        typeOfRawMaterial: typeOfRawMaterial,
        quantity: quantity,
        rate: rate,
        totalAmount: totalAmount,
        gst: gst,
        totalGrossAmount: totalGrossAmount,
        uploadDate: Date.now()
    };

    await addSales(Salesobj);
    location.reload()
}

document.getElementById('submit').addEventListener('click', submitForm);