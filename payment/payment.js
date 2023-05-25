import { addPayment } from "../js/Firestore.js";

async function submitForm() {
    const form = document.getElementById('paymentForm');
    const date = form.date.value;
    const nameofreceiver = form.name_of_receiver.value;
    const purpose = form.purpose.value;
    const amount = form.amount.value;
    const mode_of_payment = form.mode_of_payment.value;
    const bywhom = form.by_whom.value;

    if (date == "") {
        console.log('The variable is undefined or null');
        alert("Date not selected!")
        return
    }
    else if (nameofreceiver == "") {
        console.log('The variable is undefined or null');
        alert("Name of Receiver not defined!")
        return
    }
    else if (purpose == "") {
        console.log('The variable is undefined or null');
        alert("Purpose not defined!")
        return
    }
    else if (amount == "") {
        console.log('The variable is undefined or null');
        alert("Amount not defined!")
        return
    }
    else if (mode_of_payment == "") {
        console.log('The variable is undefined or null');
        alert("Mode of payment not defined!")
        return
    }
    else if (bywhom == "") {
        console.log('The variable is undefined or null');
        alert("By whom not defined!")
        return
    }

    document.getElementById('loader').style.display = "block";

    var Paymentobj = {
        date: date,
        nameofreceiver: nameofreceiver,
        purpose: purpose,
        amount: amount,
        mode_of_payment: mode_of_payment,
        bywhom: bywhom,
        uploadDate: Date.now()
    };

    await addPayment(Paymentobj);
    location.reload()
}

document.getElementById('submit').addEventListener('click', submitForm);