const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const emailId = document.querySelector('#emailId');
const password = document.querySelector('#password');
const radioButtons = document.querySelectorAll('.radio-buttons');
const signupButton = document.querySelector('#signup-btn');

//__________________________________________________________________________________
//First Name

const getFName = () => {
    let firstName = document.getElementById('fName').value;
    console.log(firstName);
}

const fNameFunc = () => {
    signupButton.addEventListener("click", getFName);
}
console.log(fNameFunc());

//__________________________________________________________________________________
//Last Name

const getLName = () => {
    let lastName = document.getElementById('fName').value;
    console.log(lastName);
}

const lNameFunc = () => {
    signupButton.addEventListener("click", getLName);
}
console.log(lNameFunc());

//__________________________________________________________________________________
//Email Address

const getEmail = () => {
    let firstName = document.getElementById('fName').value;
    console.log(firstName);
}

const emailFunc = () => {
    signupButton.addEventListener("click", getEmail);
}
console.log(emailFunc());

//__________________________________________________________________________________
//Password

const getPassword = () => {
    let firstName = document.getElementById('fName').value;
    console.log(firstName);
}

const passwordFunc = () => {
    signupButton.addEventListener("click", getPassword);
}
console.log(passwordFunc());

//__________________________________________________________________________________
// Radio Buttons

// Radio Button 1
const radioHandler1 = () => {
    let res1 = document.getElementById('radio-btn1').value;
    console.log(res1);
}
  
for (let radioButton1 of radioButtons) {
    radioButton1.addEventListener("click", radioHandler1);
}
console.log(radioButtons);
  
//Radio Button 2
  
const radioHandler2 = () => {
  let res2 = document.getElementById('radio-btn2').value;
  console.log(res2);
}
  
for (let radioButton2 of radioButtons) {
  radioButton2.addEventListener("click", radioHandler2);
}
console.log(radioButtons);
  
//Radio Button 3
  
const radioHandler3 = () => {
  let res3 = document.getElementById('radio-btn3').value;
  console.log(res3);
}
  
for (let radioButton3 of radioButtons) {
  radioButton3.addEventListener("click", radioHandler3);
}
console.log(radioButtons);

//__________________________________________________________________________________