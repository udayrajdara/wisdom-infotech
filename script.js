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


let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
let text4 = document.getElementById('0104');

const load = () => {
   animate(text1, 0, 150000, 7000);
   animate(text2, 0, 15000, 7000);
   animate(text3, 0, 500, 7000);
   animate(text4, 0, 8, 7000);

}




const scriptURL = 'https://script.google.com/macros/s/AKfycbxwwHxK-_15eqdyk6kz5MJs6LzaDCaTqVfWdVnWJmmFROsOwMOmgLdzpjOUqYsp26y7-A/exec';
const form = document.forms['submit-to-google-sheet'];
var msg = document.getElementById('msg');


form.addEventListener('submit', e => {
  e.preventDefault()

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var emailInpt = document.forms["submit-to-google-sheet"]["email"].value;
      var nameInpt = document.forms["submit-to-google-sheet"]["name"].value;
      var phoneInpt = document.forms["submit-to-google-sheet"]["phone"].value;
      var selectInpt = document.forms["submit-to-google-sheet"]["course"].value;
      var nameText = document.getElementById('name-form-text');
      var emailText = document.getElementById('form-email-text');
      var phoneText = document.getElementById('phone-form-text');
      var selectText = document.getElementById('select-text');
      var nameinput = document.getElementById('name-inpt');
      var emailinput = document.getElementById('email-inpt');
      var phoneinput = document.getElementById('phone-inpt');



   if(nameInpt === null || nameInpt == ''){
      nameText.innerHTML = "Please enter your name";
      nameinput.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
      emailText.innerHTML = "";
      emailinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      phoneText.innerHTML = "";
      phoneinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      return false

   }else if(emailInpt == '' || emailInpt === null){
      emailText.innerHTML = "Email should'nt be empty";
      emailinput.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
      nameText.innerHTML = "";
      nameinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      phoneText.innerHTML = "";
      phoneinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      return false

   }else if(phoneInpt === null || phoneInpt == ''){
      phoneText.innerHTML = "Please enter your phone number";
      phoneinput.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
      nameText.innerHTML = "";
      nameinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      emailInpt.innerHTML = "";
      emailinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      return false

   }else if(phoneInpt.length < 10 || phoneInpt.length > 10 || isNaN(phoneInpt)) {
      phoneText.innerHTML = "Please enter 10 digit phone number";
      phoneinput.className = "rounded-1 border-2 border-danger ps-2 p-1 form-inpt w-100";
      nameText.innerHTML = "";
      nameinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      emailInpt.innerHTML = "";
      emailinput.className = "rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100";
      return false
      
   }else if(selectInpt == '' || selectInpt === null) {
      selectText.innerHTML = "Please select an option";
      return false

   } else{

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank you for your response";

      setTimeout(function(){
         msg.innerHTML = "";
         nameText.innerHTML = "";
         emailText.innerHTML = "";
         phoneText.innerHTML = "";
         selectText.innerHTML = "";
         emailinput.className ="rounded-1 border-2 border-opacity-25 border-dark ps-2 p-1 form-inpt w-100"
         form.reset();
      }, 1000);

   })
   .catch(error => console.error('Error!', error.message))

   }
   return true

    
})


