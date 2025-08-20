export default class FormControl {
  constructor(num, email) {
    this.num = num;
    this.email = email;
    // this.getName();
  }
  submitHandler() {
    alert(`Form submitted sucessfully, the number is: ${this.num}`);

    return false;
  }
  validateNumber() {
    return !isNaN(this.num);
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    return emailRegex.test(this.email);
  }

  /*
  getName() {
    let data = "Mwelase";
    localStorage.setItem("lastname", data);
  }
  */
}
