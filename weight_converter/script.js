const input = document.querySelector('#input');
const output = document.querySelector('#output');
const refresh = document.querySelector('#refresh');

input.addEventListener('input', ()=> {
    let value = input.value;
    output.innerHTML = value*2.20462;
});

refresh.addEventListener('click' , ()=>{
    input.value= '';
    output.innerHTML= '';
});
