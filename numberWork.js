export default class NumberWork {
  constructor(x) {
    this.num1 = x;
  }

  displayNumber() {
    console.log(`This is num1: ${this.num1}`);
  }

  dN() {
    let numStatus = this.num1 % 2 === 0 ? "Even" : "Odd";
    console.log(`This number is ${numStatus}`);
  }
  posOrNeg() {
    let numStatus = this.num1 >= 0 ? "Positive" : "Negative";
    console.log(`This number is ${numStatus}`);
  }
}
