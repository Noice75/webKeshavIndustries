import { auth } from './initialize.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

function signout() {
    signOut(auth).then(() => {
        localStorage.clear()
        sessionStorage.clear()
        window.location = './index.html';
    }).catch((error) => {
        // An error happened.
    });
}
document.getElementById('signOut').addEventListener('click', signout);
var userdata = JSON.parse(localStorage.getItem('userdata'));
document.getElementById('name').innerHTML = 'Name: ' + userdata.name;
document.getElementById('email').innerHTML = 'Email: ' + userdata.email;
document.getElementById('lastlogin').innerHTML = 'LastLogin: ' + userdata.lastlogin;
document.getElementById('admin').innerHTML = 'IsAdmin?: ' + userdata.admin;
document.getElementById('role').innerHTML = 'Role: ' + userdata.role;