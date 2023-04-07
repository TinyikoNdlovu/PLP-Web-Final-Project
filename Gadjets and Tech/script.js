container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showhidepw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

// js code to show and hide password and change icon

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () =>{
        pwFields.forEach(pwField =>{
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(Icon =>{
                    Icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            }else {
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    })
    
});

//js code to appear signup and login form

signUp.addEventListener("click", function () {
    container.classList.add("active");
});

login.addEventListener("click", function () {
    container.classList.remove("active");
});

// form validation
function loginvalidation(){
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;
    if (email == "" || !regEmail.test(email)) {
        alert("please enter yor Email properly.");
        email.focus();
        return false;
    }if (password == "") {
        alert("please enter your password");
        password.focus();
        return false;
    }else {
        alert("Login successful.");
    }
}

function signUpValidation(){
    let name = document.forms.signUpForm.name.value;
    let email = document.forms.signUpForm.email.value;
    let password = document.forms.signUpForm.password.value;
    let confirmpsw = document.forms.signUpForm.confirmpsw.value;

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;
    let regName = /\d+/g;

    if (name == "" || regName.test(name)) {
        alert("please enter your Name properly.");
        name.focus();
        return false;
    }
    if (email ==  "" || regEmail.test(email)) {
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }
    if (password == "" || regName.test(password)) {
        alert("please enter password properly.");
        password.focus();
        return false;
    }
    if (confirmpsw == "" || regName.test(confirmpsw)) {
        alert("please Confirm your password.");
        confirmpsw.focus();
        return false;
    }
}

