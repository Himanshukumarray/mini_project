const lengthp  = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const passinp = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowwercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+:;|.,';
let password = '';

generate.addEventListener('click' , () => {

    let str = '';
    let bool = false;
    if(upper.checked){
        str += uppercasestr;
        bool = true;
    }

    if(lower.checked){
        str += lowwercasestr;
        bool = true;
    }

    if(number.checked){
        str += numberstr;
        bool = true;
    }

    if(symbol.checked){
        str += symbolstr;
        bool = true;
    }
    if(!bool){
        alert('select a checkbox');
    }
    else{
        for(let i=0;i<lengthp.value; i++){
            let index = Math.floor(Math.random()* str.length);
            password += str[index];
        }
        passinp.value = password;
        password = '';
    }

    generate.classList.add('clicked');
   
    setTimeout(() => {
        generate.classList.remove('clicked');
    }, 600);
});

copy.addEventListener('click' , () =>{

    if(passinp.value === ''){
        alert('please Generate a Password');
    }
    else{
        const newele = document.createElement('textarea');
        newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        // alert('Password Copied');
        newele.remove(); 
        passinp.value = null;

        copy.classList.add('clicked');
        setTimeout(() => {
            copy.classList.remove('clicked');
        }, 500);
    }
});