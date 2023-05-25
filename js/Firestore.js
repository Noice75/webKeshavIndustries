import { getFirestore, doc, getDocs, collection, setDoc, query, where, orderBy, limit, startAfter } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

const firestoredb = getFirestore();

var lastPaymentSnapshot = null;
var lastPurchaseSnapshot = null;
var lastSalesSnapshot = null;

async function getPayment(lim = 100) {
  var docId = [];
  var docData = [];
  const paymentref = collection(firestoredb, "payments");
  const q = query(paymentref, orderBy("date", "desc"), limit(lim));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    docId.push(doc.id);
    docData.push(doc.data());
  });
  lastPaymentSnapshot = querySnapshot.docs[querySnapshot.docs.length - 1];
  return docData;
}

async function getNextPayment(lim = 100) {
  var docId = [];
  var docData = [];
  const paymentref = collection(firestoredb, "payments");
  const next = query(paymentref, orderBy("date", "desc"), startAfter(lastPaymentSnapshot), limit(lim));
  const nextquerySnapshot = await getDocs(next);
  nextquerySnapshot.forEach((doc) => {
    docId.push(doc.id);
    docData.push(doc.data());
  });
  if (docData.length <= 0) {
    alert("No more data to load!");
    return;
  }
  lastPaymentSnapshot = nextquerySnapshot.docs[nextquerySnapshot.docs.length - 1];
  return docData;
};

async function getPurchase(lim = 100) {
  var docId = [];
  var docData = [];
  const purchaseref = collection(firestoredb, "purchases");
  const q = query(purchaseref, orderBy("date", "desc"), limit(lim));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docId.push(doc.id);
    docData.push(doc.data());
  });
  lastPurchaseSnapshot = querySnapshot.docs[querySnapshot.docs.length - 1];
  return docData
}

async function getNextPurchase(lim = 100) {
  var docId = [];
  var docData = [];
  const paymentref = collection(firestoredb, "purchases");
  const next = query(paymentref, orderBy("date", "desc"), startAfter(lastPurchaseSnapshot), limit(lim));
  const nextquerySnapshot = await getDocs(next);
  nextquerySnapshot.forEach((doc) => {
    docId.push(doc.id);
    docData.push(doc.data());
  });
  if (docData.length <= 0) {
    alert("No more data to load!");
    return;
  }
  lastPurchaseSnapshot = nextquerySnapshot.docs[nextquerySnapshot.docs.length - 1];
  return docData;
};

async function getSales(lim = 100) {
  var docId = [];
  var docData = [];
  const salesref = collection(firestoredb, "sales");
  const q = query(salesref, orderBy("date", "desc"), limit(lim));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docId.push(doc.id);
    docData.push(doc.data());
  });
  lastSalesSnapshot = querySnapshot.docs[querySnapshot.docs.length - 1];
  return docData
}

async function getNextSales(lim = 100) {
  var docId = [];
  var docData = [];
  const paymentref = collection(firestoredb, "sales");
  const next = query(paymentref, orderBy("date", "desc"), startAfter(lastSalesSnapshot), limit(lim));
  const nextquerySnapshot = await getDocs(next);
  nextquerySnapshot.forEach((doc) => {
    docId.push(doc.id);
    docData.push(doc.data());
  });
  if (docData.length <= 0) {
    alert("No more data to load!");
    return;
  }
  lastSalesSnapshot = nextquerySnapshot.docs[nextquerySnapshot.docs.length - 1];
  return docData;
};

async function addPayment(Paymentobj) {
  try {
    const paymentref = collection(firestoredb, "payments");
    await setDoc(doc(paymentref), Paymentobj);
  }
  catch (err) {
    alert(err)
  }
}

async function addPurchase(Purchaseobj) {
  try {
    const purchaseref = collection(firestoredb, "purchases");
    await setDoc(doc(purchaseref), Purchaseobj);
  }
  catch (err) {
    alert(err)
  }
}

async function addSales(Salesobj) {
  try {
    const salesref = collection(firestoredb, "sales");
    await setDoc(doc(salesref), Salesobj);
  }
  catch (err) {
    alert(err)
  }
}
export { addPayment, addPurchase, addSales, getPayment, getPurchase, getSales, getNextPayment, getNextPurchase, getNextSales }