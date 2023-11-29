'use strict'

// const bmi = (weight, height) => {
//   console.log(weight / height ** 2);
// }
// const height = prompt("Enter Your height: ");
// const weight = prompt('Enter your weight');
// bmi(weight, height);

const oddNumbers = (num) => {
  for (let i = 0; i <= num;i++){
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
const num=prompt('Enter bound where you wanna find odd numbers upto:";
oddNumbers(num);
