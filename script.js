// variables
const eyeIcons = document.querySelectorAll('.eye-icon');

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
