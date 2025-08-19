import NumberWork from "./numberWork.js";
import FormControl from "./FormControl.js";

let num1 = document.getElementById("num1");
let span = document.getElementById("nan");

window.start = (event) => {
  event.preventDefault();
  let num = num1.value.trim();
  let formControl = new FormControl(num);

  if (formControl.checkIsNotNumber()) {
    span.style.display = "block";
    span.classList.add("text-white");
    span.classList.add("bg-danger");
    span.classList.add("my-2");
    span.classList.add("p-1");
  } else {
    span.style.display = "none";
    formControl.submitHandler();
  }
};

// console.log(form);

// form.addEventListener("submit", formControl.submitHandler());

/*
num1.displayNumber();
num1.dN();
num1.posOrNeg();
*/
