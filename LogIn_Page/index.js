const radioButtons = document.querySelectorAll('.radio-buttons');
const emailId = document.querySelector('#email');
const password = document.querySelector('#password');
const logInButton = document.querySelector('#login-btn');
const forgottenPassword = document.querySelector('#a-tag');
const signUpButton = document.querySelector('#signup-btn');

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
//Email ID:

const email = () => {
  let emailRes = document.getElementById('email').value;
  console.log(emailRes);
}

for (let emailId == emailId) {
  emailId.addEventListener("onkeypress", email) 
}
console.log(emailIds);

//__________________________________________________________________________________
//Password:

const getPassword = () => {
  let firstName = document.getElementById('fName').value;
  console.log(firstName);
}

const passwordFunc = () => {
  signupButton.addEventListener("click", getPassword);
}
console.log(passwordFunc());

//__________________________________________________________________________________
