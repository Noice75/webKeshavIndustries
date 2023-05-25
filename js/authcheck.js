import { auth } from './initialize.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

onAuthStateChanged(auth, user => {
    if (user == null) {
        window.stop()
        console.log('No user')
        if (window.location['href'].includes("index") || window.location['href'].includes("main") || new URL(window.location['href']).pathname.split("/").pop() === '') {
            window.location = './login.html';
        }
        else {
            window.location = '../login.html';
        }
    }
});