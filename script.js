// variables
const eyeIcons = document.querySelectorAll('.eye-icon');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const login  = document.querySelector('.login');
const loginBtn = login.querySelector('button');
const signup = document.querySelector('.signup');
const checkPasswords = signup.querySelectorAll('.pwd');
const checkEmail = signup.querySelector('.em');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const singupInputs = signup.querySelectorAll('input');
const signupBtn = signup.querySelector('button');
const signupErrorMsg = signup.querySelector('footer');

let email, password;

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
        if(passwords.every(pwd => pwd.value === passwords[0].value && pwd.value.length > 0 && passwords[0].value.length > 7)){
            password = passwords[0].value;
            checkPasswords.forEach(pwd => pwd.value = '');
            signupErrorMsg.innerText = '';
            checkEmail.value = '';
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
    else{
        signupErrorMsg.innerText = '*** Not a valid email ***'
    }
});