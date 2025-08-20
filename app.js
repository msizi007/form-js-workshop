import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";

let getName = document.getElementById("get-name");
let fillForm = document.getElementById("fill-form");

// hide everything
getName.style.display = "none";
fillForm.style.display = "none";

if (!localStorage.getItem("username")) {
  alert("User not found!");
  getName.style.display = "block";
} else {
  alert("User found: " + localStorage.getItem("username"));
  fillForm.style.display = "block";
}

let usernameSpan = document.getElementById("username");
let txtUsername = document.getElementById("txtUsername");
let btnSave = document.getElementById("btnSave");

let txtNum = document.getElementById("num1");
let myForm = document.getElementById("form-section");
let yesForm = document.getElementById("yes-form");
let noForm = document.getElementById("no-form");
let byeSpan = document.getElementById("bye");
let txtEmail = document.getElementById("email");
let alertEmail = document.getElementById("alert-email");
let alertNumber = document.getElementById("alert-number");
let alertSuccess = document.getElementById("alert-success");

btnSave.addEventListener("click", () => {
  let username = txtUsername.value.trim();
  localStorage.setItem("username", username);
  fillForm.style.display = "block";
  usernameSpan.textContent = localStorage.getItem("username");
  getName.style.display = "none";
});

// welcome form
let welcomeForm = document.getElementById("welcome-form");


yesForm.addEventListener("click", () => {
  fillForm.style.display = "none";
  byeSpan.style.display = "none";
  myForm.style.display = "block";
});

noForm.addEventListener("click", () => {
  fillForm.style.display = "none";
  byeSpan.style.display = "block";
  myForm.style.display = "none";
});

window.start = (event) => {
  alertNumber.style.visibility = "hidden";
  alertEmail.style.visibility = "hidden";
  alertSuccess.style.visibility = "hidden";
  alertNumber.style.padding = "0px";
  alertEmail.style.padding = "0px";
  alertSuccess.style.padding = "0px";
  event.preventDefault();

  let num = txtNum.value.trim();
  let email = txtEmail.value.trim();

  let formControl = new FormControl(num, email);

  let checkIsNan = formControl.validateNumber();
  let validEmail = formControl.validateEmail();

  console.log(checkIsNan, validEmail);

  // if invalid number
  if (!formControl.validateNumber()) {
    alertNumber.style.visibility = "visible";
    alertNumber.style.padding = "1rem";
    alertNumber.textContent = "number is not valid";
  }

  // if invalid email
  if (!validEmail) {
    alertEmail.style.visibility = "visible";
    alertEmail.style.padding = "1rem";
    alertEmail.textContent = "email is not valid";
  }

  // if everything is working fine
  if (checkIsNan && validEmail) {
    formControl.submitHandler();
    alertSuccess.style.visibility = "visible";
    alertSuccess.textContent = "Sucessfully submitted";
    return false;
  }

  return false;
};

// console.log(form);

// form.addEventListener("submit", formControl.submitHandler());

/*
num1.displayNumber();
num1.dN();
num1.posOrNeg();
*/
