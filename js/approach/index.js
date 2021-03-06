// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution
//input: number
//output: undefined
//algo
//1. iterate from 2 to num
//2. check if  N prime
//2.1 iterate from 2 to N
//2.2 if N % index === 0 then not prime
//3. if prime - print it

// function getPrimes(num) {
//   for (let index = 0; number <= num; index += 1) {
//     let isPrime = true;

//     for (let index = 2; index < number; index += 1) {
//       if (number % index === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

//---refactoring---

function isPrime(number) {
  let isPrime = true;
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}
//--- testData

getPrimes(15);
// getPrimes(7);
// getPrimes(-7);
