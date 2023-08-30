// variables
const eyeIcons = document.querySelectorAll('.eye-icon');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const login  = document.querySelector('.login');
const loginBtn = login.querySelector('button');
const signup = document.querySelector('.signup');
const checkPasswords = signup.querySelectorAll('.pwd');
const checkEmail = signup.querySelector('.em');
const singupInputs = signup.querySelectorAll('input');
const signupBtn = signup.querySelector('button');

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
    // const checkInputs = [...singupInputs];
    // checkInputs.forEach(input => console.log(`input: ${input.innerText}`))
    // if(checkInputs.every(input => input.innerText.length > 0))
    // console.log('not empty')
    const passwords = [...checkPasswords];
    if(passwords.every(pwd => pwd.value === passwords[0].value))
    console.log('check');
});