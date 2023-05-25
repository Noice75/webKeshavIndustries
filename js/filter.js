import { getFirestore, doc, getDocs, collection, setDoc, query, where, orderBy, limit, startAfter } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

const firestoredb = getFirestore();

async function filterByDate(col, date) // Collection - (payment) Date format - yyyy-mm-dd (2023-01-01)
{
    var docId = [];
    var docData = [];
    const collectionref = collection(firestoredb, col);
    const q = query(collectionref, where("date", '==', date));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        docId.push(doc.id);
        docData.push(doc.data());
    });
    if (docData.length <= 0) {
        alert("No data to load!");
        return;
    }
    return docData;
};
// await filterByDate('purchases','2023-01-30');

async function filterByDateRange(col, startDate, EndDate) // Collection - (payment) format - dd-mm-yyyy
{
    var docId = [];
    var docData = [];
    const collectionref = collection(firestoredb, col);
    const q = query(collectionref, where("date", '>=', `${startDate}`), where("date", '<=', `${EndDate}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        docId.push(doc.id);
        docData.push(doc.data());
    });
    if (docData.length <= 0) {
        alert("No data to load!");
        return;
    }
    return docData;
};
// await filterByMonth('purchases','01','2023');

async function filterByYear(col, year) // Collection - (payment) year format-(2023)
{
    var docId = [];
    var docData = [];
    const collectionref = collection(firestoredb, col);
    const q = query(collectionref, where("date", '>=', `${year}-01-01`), where("date", '<', `${year}-12-32`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        docId.push(doc.id);
        docData.push(doc.data());
    });
    if (docData.length <= 0) {
        alert("No data to load!");
        return;
    }
    return docData;
};
// await filterByYear('purchases','2023');

async function filterByTypeOfRawMaterial(col, typeOfRawMaterial) {
    var docId = [];
    var docData = [];
    const collectionref = collection(firestoredb, col);
    const q = query(collectionref, where("typeOfRawMaterial", '==', `${typeOfRawMaterial}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        docId.push(doc.id);
        docData.push(doc.data());
    });
    if (docData.length <= 0) {
        alert("No data to load!");
        return;
    }
    return docData;
};
// await filterByTypeOfRawMaterial('purchases','Makai');

export { filterByDate, filterByDateRange, filterByYear, filterByTypeOfRawMaterial }