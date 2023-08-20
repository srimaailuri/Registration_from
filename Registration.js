let nameE1 = document.getElementById('name');
let emailE1 = document.getElementById('email');
let pwdE1 = document.getElementById('Password');
let confm_passwordE1 = document.getElementById('confm_password');
let name_error_msg = document.getElementById('nameErrMsg');
let email_error_msg = document.getElementById('emailErrMsg');
let pwd_error_msg = document.getElementById('pwdErrMsg');
let confm_pwd_error_msg = document.getElementById('confmpwdErrMsg');
let submitE1 = document.getElementById('submit');

nameE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        name_error_msg.textContent = "Required";
    } else {
        name_error_msg.textContent = "";
    }
})

emailE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        email_error_msg.textContent = "Required";
    } else {
        email_error_msg.textContent = "";
    }
})
pwdE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        pwd_error_msg.textContent = "Required";
    } else {
        pwd_error_msg.textContent = "";
    }
})
confm_passwordE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confm_pwd_error_msg.textContent = "Required";
    } else {
        confm_pwd_error_msg.textContent = "";
    }
})
submitE1.onclick = function() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailE1.value.match(pattern)) {
        email_error_msg.textContent = "";
    } else {
        email_error_msg.textContent = "please enter a valid email";
    }

    if (pwdE1.value.length >= 8) {
        pwd_error_msg.textContent = "";
    } else {
        pwd_error_msg.textContent = "please enter atleast 8 length password";
    }

    if (confm_passwordE1.value === pwdE1.value) {
        confm_pwd_error_msg.textContent = "";
    } else {
        confm_pwd_error_msg.textContent = "password and confirm password are not same";
    }

    if (emailE1.value.match(pattern) && nameE1.value !== "" && pwdE1.value.length >= 8 && pwdE1.value === confm_passwordE1.value) {
        submitE1.textContent = "successfully Registered";
    }
}