// variables
const eyeIcons = document.querySelectorAll('.eye-icon');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const login  = document.querySelector('.login');
const loginBtn = login.querySelector('button');
const loginEmail = login.querySelector('.em');
const loginPassword = login.querySelector('.pwd');
const loginErrorMsg = login.querySelector('footer');
const signup = document.querySelector('.signup');
const checkPasswords = signup.querySelectorAll('.pwd');
const checkEmail = signup.querySelector('.em');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const singupInputs = signup.querySelectorAll('input');
const signupBtn = signup.querySelector('button');
const signupErrorMsg = signup.querySelector('footer');

let email = password = '';

// eye icons
eyeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // select all .pwd within the form
        let pInput = icon.parentElement.parentElement.querySelectorAll(".pwd");

        //reveal passwords
        pInput.forEach(pwd => {
            if(pwd.type === 'password'){
                pwd.type = 'text';
                icon.classList.replace('bx-hide', "bx-show");
            }
            else{
                pwd.type = 'password';
                icon.classList.replace('bx-show', 'bx-hide');
            }
        });
    });
});

// switch between login and signup
links.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.toggle('switch');
    });
});

// submit buttons
signupBtn.addEventListener('click', () => {
    if(emailPattern.test(checkEmail.value)){
        email = checkEmail.value;
        const passwords = [...checkPasswords];
        if(passwords.every(pwd => pwd.value === passwords[0].value && pwd.value.length > 0 && passwords[0].value.length > 6)){
            password = passwords[0].value;
            checkPasswords.forEach(pwd => pwd.value = '');
            signupErrorMsg.innerText = '';
            checkEmail.value = '';
            loginEmail.value = '';
            loginPassword.value = '';
            loginErrorMsg.innerText = '';
            body.classList.toggle('switch');
        }
        else{
            if(!passwords.every(pwd => pwd.value.length > 0)){
                signupErrorMsg.innerText = '*** Password fields not complete ***';
            }
            else if(passwords[0].value.length < 7){
                signupErrorMsg.innerText = '*** Passwords must be at least 7 characters ***'
            }
            else{
                signupErrorMsg.innerText = '*** Passwords do not match ***';
            }
        }
    }
    else if(checkEmail.value.length > 0 && [...checkPasswords].every(pwd => pwd.value.length > 0)){
        signupErrorMsg.innerText = '*** Not a valid email ***'
    }
});

loginBtn.addEventListener('click', () => {
    if(email.length > 0 && password.length > 0){
        if(loginEmail.value !== email){
            loginErrorMsg.innerText = '*** Email not found ***';
        }
        else if(loginPassword.value !== password){
            loginErrorMsg.innerText = '*** Incorrect password ***';
        }
        else{
            loginEmail.value = '';
            loginPassword.value = '';
            loginErrorMsg.innerText = '';
            body.classList.toggle('end');
            const endMsg = document.createElement('p');
            endMsg.innerText = 'Login Successful!';
            endMsg.classList.add('msg');
            body.style.display = 'flex';
            body.style.justifyContent = 'center';
            body.style.alignItems = 'center';
            body.style.color = 'white';
            body.style.fontSize = '64px';
            body.appendChild(endMsg);
        }
    }
    else if(loginEmail.value.length > 0 && loginPassword.value.length > 0){
        loginErrorMsg.innerText = '*** Account does not exist ***';
    }
});