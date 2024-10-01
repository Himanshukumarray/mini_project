const celsius = document.querySelector("#celsius");
const farenheit = document.querySelector("#farenheit");
const kelvin = document.querySelector("#kelvin");
const reset = document.querySelector("#reset");

//calcius to fahrenheit => 0°C × (9/5) + 32 = 32°F
//calcius to kelvin =>  0°C + 273.15 = 273.15K
celsius.addEventListener("input",function() {
    let c = parseFloat(celsius.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    farenheit.value = f;
    kelvin.value = k;
});

//fahrenheit to celsius => (°F - 32) × 5/9 = 0°C 
//fahrenheit to kelvin => (F − 32) × 5 ⁄ 9 + 273.15 =  273.15K

farenheit.addEventListener("input" , function(){
    let f = parseFloat(farenheit.value);
    let c =( f - 32 )* 5/9;
    let k = (f-32) * 5/9 + 273.15;
    celsius.value = c;
    kelvin.value = k;
});

//kelvin to celsius  => 0K - 273.15 = 273.1°C 
//kelvin to fahrenheit => (K − 273.15) × 9/5 + 32 = -459.7°F

kelvin.addEventListener("input" , function(){
    let k = parseFloat(kelvin.value);
    let c = k-273.15;
    let f = (k-273.15) * 9/5 + 32;
    celsius.value = c;
    farenheit.value = f;
});

reset.addEventListener('click' , ()=> {
    kelvin.value = '';
    farenheit.value='';
    celsius.value = '';
});