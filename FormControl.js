export default class FormControl {
  constructor(num1) {
    this.num1 = num1;
  }
  submitHandler() {
    alert(`Form submitted sucessfully, the number is: ${this.num1}`);

    return false;
  }
  checkIsNotNumber() {
    return isNaN(this.num1);
  }
}
