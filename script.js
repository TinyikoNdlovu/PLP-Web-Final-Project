// Input validation
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
        alert("Login successfully.");
    }
}

function signUpValidation(){
    var firstName = document.getElementById('firstName').value; 
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpsw = document.getElementById('confirmpsw').value

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;
    let regName = /\d+/g;

    if (firstName == "" || regName.test(firstName)) {
        alert("please enter your Name properly.");
        firstName.focus();
        return false;
    }
    if (lastName == "" || regName.test(lastName)) {
        alert("please enter your Name properly.");
        lastName.focus();
        return false;
    }
    if (phone ==  "" || regName.test(phone)) {
        alert("please enter your Email properly.");
        phone.focus();
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
    if (password != confirmpsw && regName.test(password) != regName.test(confirmpsw)) {
        alert("Passwords don't match");
        password.focus();
        return false;
    }
}

function resetvalidation(){
    let email = document.getElementById('email').value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;

    if (email == "" || !regEmail.test(email)) {
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }else {
        alert("Password reset successfully.");
    }
}

function searchvalidation(){
    let searchBar = document.getElementById('searchBar').value;
    let regName = /\d+/g;

    if (searchBar == "" || !regName.test(searchBar)) {
        alert("please enter product name properly.");
        searchBar.focus();
        return false;
    }else {
        alert("See products available for your search");
    }
}

// const product = document.querySelectorAll(".card");
// const categories = [...new Set(product.map((item) => {return item}))]


// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//     const searchData = e.target.value.toLowerCase();
//     const filterData = categories.filter((item) => {
//         return(
//             item.title.toLocaleLowerCase().includes(searchData)
//         )
//     })
// })

function suscribevalidation(){
    let email = document.getElementById('email').value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;

    if (email == "" || !regEmail.test(email)) {
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }else {
        alert("Successfully subscribed.");
    }
}

function contactvalidation(){
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

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
    if (phone ==  "" || regName.test(phone)) {
        alert("please enter your Email properly.");
        phone.focus();
        return false;
    }
    if (message == "" || regName.test(message)) {
        alert("please enter message properly.");
        message.focus();
        return false;
    }
}

