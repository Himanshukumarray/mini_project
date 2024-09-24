// const qrinput = document.getElementById('qr-input');
// const qrimg = document.getElementById('qr-img');
// const qrbutton = document.getElementById('qr-button');

// console.log(qrinput,qrimg,qrbutton)

// qrbutton.addEventListener('click',() =>{

//     const inputvalue = qrinput.value;
//     console.log(inputvalue)

//     if(!inputvalue){
//         alert('Please enter a valid URL');
//         return ;
//     }else{
//         qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
//         arimg.alt = `Qr code for ${inputvalue}`;
//     }
// });

const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');
const resetButton = document.getElementById('reset-btn');

console.log(qrinput, qrimg, qrbutton);

qrbutton.addEventListener('click', () => {

    const inputvalue = qrinput.value;
    console.log(inputvalue);

    if (!inputvalue) {
        alert('Please enter a valid URL');
        return;
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `Qr code for ${inputvalue}`;

        // Add a 'clicked' class to the button to visually show the button is clicked
        qrbutton.classList.add('clicked');

        // Remove the 'clicked' class after 200 milliseconds
        setTimeout(() => {
            qrbutton.classList.remove('clicked');
        }, 1000);
    }

});

resetButton.addEventListener('click', () => {
    // Clear the input field
    qrinput.value = '';
    qrimg.src= null;
    qrimg.alt = '';
    // alert('Reset complete!');
});
