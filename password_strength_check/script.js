const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');

inputfield.addEventListener('input',function(){
    console.log(inputfield.value);

    let password = inputfield.value;
    if(password.length<8){
        outputfield.innerText = 'Password is too short';
        outputfield.style.color = 'red';
    }
    else{
        // outputfield.innerText = 'Password is long enough';
        // outputfield.style.color = 'green';
        // check password is strong or not if strong the all symbol are present in it [a-z] [A-Z][0-9] special character

        if(password.search(/[a-z]/)==-1){
            outputfield.innerText = 'Password is missing lower case';
            outputfield.style.color = 'red';
        }
        else if(password.search(/[A-Z]/)==-1){
            outputfield.innerText = 'Password is missing Upper case';
            outputfield.style.color = 'red';
        }
        else if(password.search(/[0-9]/)==-1){
            outputfield.innerText = 'Password is missing Number';
            outputfield.style.color = 'red';
        }

        else if(password.search(/[\(\)\!\@\#\$\%\^\&\*\(\)\_\+\=\}\{\.\,\ ]/)==-1){
            outputfield.innerText = 'Password is Special Character';
            outputfield.style.color = 'red';
        }
        else{
            outputfield.innerText = 'Password is strong';
            outputfield.style.color = 'green';
        }
    }
});