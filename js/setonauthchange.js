import { auth, database } from './initialize.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { onValue, ref } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js';

onAuthStateChanged(auth, user => {
    if (user != null) {
        document.getElementById('loader').style.display = "block";
        localStorage.setItem('uid', auth.currentUser.uid);
        const userdataref = ref(database, 'users/' + localStorage.getItem('uid'));
        onValue(userdataref, (snapshot) => {
            const data = snapshot.val();
            localStorage.setItem('userdata', JSON.stringify(data));
            window.location = './main.html';
        });
    } else {
        console.log('No user');
    }
});