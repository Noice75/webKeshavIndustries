import { auth, database } from '../initialize.js';
import { ref, set} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

function register () {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var full_name = document.getElementById('name').value
    var role = document.getElementById('role').value
    var admin = document.getElementById('admin').checked

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Empty Email or Password!!')
        return
    }

    if (validate_field(full_name) == false) {
    alert('Empty Name!!')
    return
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(function() {
      var user = auth.currentUser;

      set(ref(database, 'users/' + user.uid), {
        name : full_name,
        email : email,
        admin : admin,
        role : role,
        lastlogin : new Date().toString()
      });
      alert('User Created!!')
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    });
}
document.getElementById('register').addEventListener('click', register);

function validate_email(email) {
    var expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}
  
function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}