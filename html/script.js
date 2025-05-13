// const massMark=78;
// const heightMark=1.69;
// const massJohn=92;
// const heightJohn=1.95;

// const BMIMark= massMark/heightMark**2;
// const BMIJohn=massJohn/(heightJohn*heightJohn);
// // const compare= BMImark>BMIjohn;
// // console.log(BMImark,BMIjohn,compare);
// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!")
//   } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
//   }


// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`string
//     with
//     multiple
//     lines 
//     here`

// )


//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23),23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

let n = `1`+1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
