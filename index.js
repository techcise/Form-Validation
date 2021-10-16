
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let error = document.querySelector('#errorText');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if(email.value === ''){
        error.innerText = `Can,t leave feilds empty`;
    }
    else if(password.value.length < 5){
        error.innerText = `Password turns out to be short`;
    }
    else {
        error.innerText = '';
    }
    
    if(error.innerText.length > 0){
        e.preventDefault();
    }
});