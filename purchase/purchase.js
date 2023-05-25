import { addPurchase } from "../js/Firestore.js";

async function submitForm() {
    const form = document.getElementById('purchaseForm');
    const date = form.date.value;
    const nameOfVendor = form.nameOfVendor.value;
    const typeOfRawMaterial = form.typeOfRawMaterial.value;
    const quantity = form.quantity.value;
    const rate = form.rate.value;
    const totalAmount = form.totalAmount.value;

    if (date == "") {
        console.log('The variable is undefined or null');
        alert("Date not selected!")
        return
    }
    else if (nameOfVendor == "") {
        console.log('The variable is undefined or null');
        alert("Name of Vendor not defined!")
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

    document.getElementById('loader').style.display = "block";

    var Purchaseobj = {
        date: date,
        nameOfVendor: nameOfVendor,
        typeOfRawMaterial: typeOfRawMaterial,
        quantity: quantity,
        rate: rate,
        totalAmount: totalAmount,
        uploadDate: Date.now()
    };

    await addPurchase(Purchaseobj);
    location.reload()
}

document.getElementById('submit').addEventListener('click', submitForm);