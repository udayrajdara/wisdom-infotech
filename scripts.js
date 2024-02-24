function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
   startTime = currentTime ;
}

//calculate the value to be used in calculating the number to be displayed
const progress = Math.min((currentTime - startTime)/ duration, 1);

//calculate what to be displayed using the value gotten above
obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//checking to make sure the counter does not exceed the last value (lastVal)
if (progress < 1) {
   window.requestAnimationFrame(step);
} else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
   }
};
//start animating
   window.requestAnimationFrame(step);
}
let text1 = document.getElementById('01010');
let text2 = document.getElementById('01020');
let text3 = document.getElementById('01030');
let text4 = document.getElementById('01040');

const loaded = () => {
   animate(text1, 0, 150000, 7000);
   animate(text2, 0, 15000, 7000);
   animate(text3, 0, 500, 7000);
   animate(text4, 0, 8, 7000);

}



const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyPQgRvTfIq8zM9VakoU7cRJNGcGSTudsHtTZH76TyMm5ioE3pCexdbtl6Xy7ls0bcG/exec';
const form2 = document.forms['submit-to-google-sheet-form'];
var msgs = document.getElementById('msgs');


form2.addEventListener('submit', e => {
   e.preventDefault()
 
       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       var emailInpt2 = document.forms["submit-to-google-sheet-form"]["email"].value;
       var nameInpt2 = document.forms["submit-to-google-sheet-form"]["name"].value;
       var phoneInpt2 = document.forms["submit-to-google-sheet-form"]["phone"].value;
       var selectInpt2 = document.forms["submit-to-google-sheet-form"]["course"].value;
       var nameText2 = document.getElementById('name-form-text-form');
       var emailText2 = document.getElementById('form-email-text-form');
       var phoneText2 = document.getElementById('phone-form-text-form');
       var selectText2 = document.getElementById('select-text-form');
       var nameinput2 = document.getElementById('name-inpt-form');
       var emailinput2 = document.getElementById('email-inpt-form');
       var phoneinput2 = document.getElementById('phone-inpt-form');
 
 
 
    if(nameInpt2 === null || nameInpt2 == ''){
       nameText2.innerHTML = "Please enter your name";
       nameinput2.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
       emailText2.innerHTML = "";
       emailinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       phoneText2.innerHTML = "";
       phoneinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       return false
 
    }else if(emailInpt2 === null || emailInpt2 == ''){
       emailText2.innerHTML = "Email should'nt be empty";
       emailinput2.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
       nameText2.innerHTML = "";
       nameinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       phoneText2.innerHTML = "";
       phoneinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       return false
 
    }else if(!emailRegex.test(emailInpt2)) {
       emailText2.innerHTML = "Enter a valid email address";
       emailinput2.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
       nameText2.innerHTML = "";
       nameinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       phoneText2.innerHTML = "";
       phoneinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       return false
 
    } else if(phoneInpt2 === null || phoneInpt2 == ''){
       phoneText2.innerHTML = "Please enter your phone number";
       phoneinput2.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
       nameText2.innerHTML = "";
       nameinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       emailInpt2.innerHTML = "";
       emailinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       return false
 
    }else if(phoneInpt2.length < 10 || phoneInpt2.length > 10 || isNaN(phoneInpt2)) {
       phoneText2.innerHTML = "Please enter 10 digit phone number";
       phoneinput2.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
       nameText2.innerHTML = "";
       nameinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       emailInpt2.innerHTML = "";
       emailinput2.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
       return false
       
    }else if(selectInpt2 == '' || selectInpt2 === null) {
       selectText2.innerHTML = "Please select an option";
       return false
 
    } else{
 
       fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
     .then(response => {
       msgs.innerHTML = "Thank you for your response";
 
       setTimeout(function(){
          msgs.innerHTML = "";
          nameText2.innerHTML = "";
          emailText2.innerHTML = "";
          phoneText2.innerHTML = "";
          selectText2.innerHTML = "";
          emailinput2.className ="rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100"
          form.reset();
       }, 1000);
 
    })
    .catch(error => console.error('Error!', error.message))
 
    }
    return true
 
     
 })