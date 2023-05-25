import { auth, database } from './initialize.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { onValue, ref } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js';

function login() {
    document.getElementById('loader').style.display = "block";

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            const userdataref = ref(database, 'users/' + localStorage.getItem('uid'));
            onValue(userdataref, (snapshot) => {
                const data = snapshot.val();
                localStorage.setItem('userdata', JSON.stringify(data));
                window.location = './index.html';

            });
        })
        .catch((error) => {
            document.getElementById('loader').style.display = "none";
            const errorMessage = error.message;
            alert(errorMessage);
        });
}
document.getElementById('login').addEventListener('click', login);